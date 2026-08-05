import { readFileSync } from 'node:fs';

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

async function verifyTarget(target) {
  const match = status.match(target.pattern);
  if (!match) {
    throw new Error(`Missing recorded ${target.label} deployment in ${statusPath}`);
  }

  const expectedCommit = match[1];
  let lastObserved = 'no response';

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

      if (!response.ok) {
        lastObserved = `HTTP ${response.status}`;
      } else {
        const payload = await response.json();
        lastObserved = JSON.stringify(payload);
        if (payload.commit === expectedCommit) {
          console.log(`Verified ${target.label} production commit ${expectedCommit} at ${target.url}`);
          return;
        }
      }
    } catch (error) {
      lastObserved = error instanceof Error ? error.message : String(error);
    }

    if (attempt < 12) {
      await sleep(10_000);
    }
  }

  throw new Error(
    `${target.label} production did not expose recorded commit ${expectedCommit}; last observed: ${lastObserved}`,
  );
}

for (const target of targets) {
  await verifyTarget(target);
}
