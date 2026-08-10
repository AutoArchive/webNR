import { readFileSync } from 'node:fs';
import { resolve4, resolve6, resolveCname } from 'node:dns/promises';

const statusPath = '.github/seo-data/status.md';
const status = readFileSync(statusPath, 'utf8');
const maxAttempts = 42;
const retryDelayMs = 10_000;

const targets = [
  {
    label: 'application',
    buildUrl: 'https://app.webnovel.win/build.json',
    pattern: /^- Last successful attributable application deployment: `([0-9a-f]{40})`$/m,
    contentChecks: [
      {
        url: 'https://app.webnovel.win/',
        accept: 'text/html',
        needles: [
          'G-DGH8HNQKE4',
          'window.location.href',
          'window.location.pathname + window.location.search',
        ],
      },
      {
        url: 'https://app.webnovel.win/sources/english-serial-platforms-starter/search_index.yml',
        accept: 'text/plain',
        needles: [
          'title: Royal Road — Complete & Rising Stars',
          'title: Wattpad — Stories',
          'license: Link-only-WebNR-editorial',
        ],
      },
    ],
  },
  {
    label: 'documentation build mirror',
    buildUrl: 'https://autoarchive.github.io/webNR/build.json',
    pattern: /^- Last successful attributable documentation deployment: `([0-9a-f]{40})`$/m,
    contentChecks: [
      {
        url: 'https://autoarchive.github.io/webNR/troubleshooting/txt-import/',
        accept: 'text/html',
        expectedCanonical: 'https://www.webnovel.win/troubleshooting/txt-import/',
        needles: ['TXT import troubleshooting', 'TXT 导入排障'],
      },
    ],
  },
  {
    label: 'canonical documentation site',
    buildUrl: 'https://www.webnovel.win/build.json',
    pattern: /^- Last successful canonical Cloudflare documentation deployment: `([0-9a-f]{40})`$/m,
    contentChecks: [
      {
        url: 'https://www.webnovel.win/troubleshooting/txt-import/',
        accept: 'text/html',
        expectedCanonical: 'https://www.webnovel.win/troubleshooting/txt-import/',
        needles: ['TXT import troubleshooting', 'TXT 导入排障'],
      },
      {
        url: 'https://www.webnovel.win/blog/2026/08/10/english-serial-fiction-platforms/',
        accept: 'text/html',
        expectedCanonical: 'https://www.webnovel.win/blog/2026/08/10/english-serial-fiction-platforms/',
        needles: ['2026 英文连载小说平台怎么选', 'English Serial Platforms Starter'],
      },
      {
        url: 'https://www.webnovel.win/sitemap.xml',
        accept: 'application/xml,text/xml',
        needles: ['https://www.webnovel.win/blog/2026/08/10/english-serial-fiction-platforms/'],
      },
      {
        url: 'https://www.webnovel.win/feed_rss_created.xml',
        accept: 'application/rss+xml,application/xml,text/xml',
        needles: ['https://www.webnovel.win/blog/2026/08/10/english-serial-fiction-platforms/'],
      },
    ],
  },
];

const sleep = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));

async function resolveOrEmpty(resolver, hostname) {
  try {
    return await resolver(hostname);
  } catch {
    return [];
  }
}

async function describeTarget(target) {
  const hostname = new URL(target.buildUrl).hostname;
  const [cnames, ipv4, ipv6] = await Promise.all([
    resolveOrEmpty(resolveCname, hostname),
    resolveOrEmpty(resolve4, hostname),
    resolveOrEmpty(resolve6, hostname),
  ]);
  console.log(`${target.label} DNS ${hostname}: ${JSON.stringify({ cnames, ipv4, ipv6 })}`);
}

function selectedHeaders(response) {
  return Object.fromEntries(
    ['server', 'via', 'x-vercel-id', 'cf-ray', 'cache-control', 'etag', 'last-modified']
      .map(name => [name, response.headers.get(name)])
      .filter(([, value]) => value !== null),
  );
}

async function fetchNoCache(url, attempt, expectedCommit, accept) {
  return fetch(`${url}?expected=${expectedCommit}&attempt=${attempt}&time=${Date.now()}`, {
    cache: 'no-store',
    headers: { accept, 'cache-control': 'no-cache' },
    signal: AbortSignal.timeout(15_000),
  });
}

async function verifyContentChecks(target, attempt, expectedCommit) {
  const results = [];

  for (const check of target.contentChecks ?? []) {
    const response = await fetchNoCache(check.url, attempt, expectedCommit, check.accept ?? 'text/plain');
    const body = response.ok ? await response.text() : '';
    const contentMatches = response.ok
      && (check.needles ?? []).every(needle => body.includes(needle))
      && (!check.expectedCanonical || body.includes(check.expectedCanonical));
    const result = {
      url: check.url,
      status: response.status,
      headers: selectedHeaders(response),
      contentMatches,
      expectedCanonical: check.expectedCanonical ?? null,
    };
    results.push(result);

    if (!contentMatches) {
      throw new Error(`${target.label} content did not match: ${JSON.stringify(result)}`);
    }
  }

  return results;
}

async function verifyTarget(target) {
  const match = status.match(target.pattern);
  if (!match) throw new Error(`Missing recorded ${target.label} deployment in ${statusPath}`);

  const expectedCommit = match[1];
  let lastObserved = 'no response';
  await describeTarget(target);

  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    try {
      const buildResponse = await fetchNoCache(target.buildUrl, attempt, expectedCommit, 'application/json');
      if (!buildResponse.ok) {
        lastObserved = JSON.stringify({ status: buildResponse.status, headers: selectedHeaders(buildResponse) });
      } else {
        const payload = await buildResponse.json();
        const buildEvidence = { payload, headers: selectedHeaders(buildResponse) };
        if (payload.commit === expectedCommit) {
          const contentChecks = await verifyContentChecks(target, attempt, expectedCommit);
          console.log(`Verified ${target.label} commit ${expectedCommit} at ${target.buildUrl}`);
          return {
            label: target.label,
            expectedCommit,
            observedCommit: payload.commit,
            headers: selectedHeaders(buildResponse),
            contentChecks,
          };
        }
        lastObserved = JSON.stringify(buildEvidence);
      }
    } catch (error) {
      lastObserved = error instanceof Error ? error.message : String(error);
    }

    console.log(`${target.label} attempt ${attempt} did not match ${expectedCommit}: ${lastObserved}`);
    if (attempt < maxAttempts) await sleep(retryDelayMs);
  }

  throw new Error(`${target.label} did not expose recorded commit ${expectedCommit}; last observed: ${lastObserved}`);
}

const results = await Promise.allSettled(targets.map(verifyTarget));
const failures = results
  .filter(result => result.status === 'rejected')
  .map(result => result.reason instanceof Error ? result.reason.message : String(result.reason));

for (const result of results) {
  if (result.status === 'fulfilled') console.log(`Production evidence: ${JSON.stringify(result.value)}`);
}
if (failures.length > 0) throw new Error(`Production evidence failed:\n${failures.join('\n')}`);
