import { readFileSync } from 'node:fs';
import { resolve4, resolve6, resolveCname } from 'node:dns/promises';

const statusPath = '.github/seo-data/status.md';
const status = readFileSync(statusPath, 'utf8');

const targets = [
  {
    label: 'application',
    url: 'https://app.webnovel.win/build.json',
    pattern: /^- Last successful attributable application deployment: `([0-9a-f]{40})`$/m,
  },
  {
    label: 'documentation',
    url: 'https://www.webnovel.win/build.json',
    pattern: /^- Last successful attributable documentation deployment: `([0-9a-f]{40})`$/m,
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
  const hostname = new URL(target.url).hostname;
  const [cnames, ipv4, ipv6] = await Promise.all([
    resolveOrEmpty(resolveCname, hostname),
    resolveOrEmpty(resolve4, hostname),
    resolveOrEmpty(resolve6, hostname),
  ]);

  console.log(`${target.label} DNS ${hostname}: ${JSON.stringify({ cnames, ipv4, ipv6 })}`);
}

async function verifyTarget(target) {
  const match = status.match(target.pattern);
  if (!match) {
    throw new Error(`Missing recorded ${target.label} deployment in ${statusPath}`);
  }

  const expectedCommit = match[1];
  let lastObserved = 'no response';

  await describeTarget(target);

  for (let attempt = 1; attempt <= 12; attempt += 1) {
    try {
      const response = await fetch(`${target.url}?expected=${expectedCommit}&attempt=${attempt}&time=${Date.now()}`, {
        cache: 'no-store',
        headers: {
          accept: 'application/json',
          'cache-control': 'no-cache',
        },
        signal: AbortSignal.timeout(15_000),
      });

      const selectedHeaders = Object.fromEntries(
        ['server', 'via', 'x-vercel-id', 'cf-ray', 'cache-control', 'etag', 'last-modified']
          .map(name => [name, response.headers.get(name)])
          .filter(([, value]) => value !== null),
      );

      if (!response.ok) {
        lastObserved = JSON.stringify({ status: response.status, headers: selectedHeaders });
      } else {
        const payload = await response.json();
        lastObserved = JSON.stringify({ payload, headers: selectedHeaders });
        if (payload.commit === expectedCommit) {
          console.log(`Verified ${target.label} production commit ${expectedCommit} at ${target.url}`);
          return {
            label: target.label,
            expectedCommit,
            observedCommit: payload.commit,
            headers: selectedHeaders,
          };
        }
      }
    } catch (error) {
      lastObserved = error instanceof Error ? error.message : String(error);
    }

    console.log(`${target.label} attempt ${attempt} did not match ${expectedCommit}: ${lastObserved}`);

    if (attempt < 12) {
      await sleep(10_000);
    }
  }

  throw new Error(
    `${target.label} production did not expose recorded commit ${expectedCommit}; last observed: ${lastObserved}`,
  );
}

const results = await Promise.allSettled(targets.map(verifyTarget));
const failures = results
  .filter(result => result.status === 'rejected')
  .map(result => result.reason instanceof Error ? result.reason.message : String(result.reason));

for (const result of results) {
  if (result.status === 'fulfilled') {
    console.log(`Production evidence: ${JSON.stringify(result.value)}`);
  }
}

if (failures.length > 0) {
  throw new Error(`Production evidence failed:\n${failures.join('\n')}`);
}
