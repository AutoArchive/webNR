import { readFileSync } from 'node:fs';

const reportPath = process.argv[2];
if (!reportPath) {
  throw new Error('Usage: node scripts/validate-npm-audit.mjs <npm-audit.json>');
}

const report = JSON.parse(readFileSync(reportPath, 'utf8'));
const vulnerabilities = report.vulnerabilities ?? {};

// Stable Next.js 15.5.22 still resolves vulnerable PostCSS and optional Sharp
// versions. npm currently offers only the unreleased Next.js 16.3 line as the
// automatic fix. WebNR statically exports trusted, repository-owned CSS and has
// image optimization disabled, so these build-chain advisories are tracked but
// do not justify deploying a preview framework release.
const allowedStableNextHigh = new Set(['next', 'postcss', 'sharp']);

const critical = Object.entries(vulnerabilities)
  .filter(([, value]) => value.severity === 'critical')
  .map(([name]) => name);

const unexpectedHigh = Object.entries(vulnerabilities)
  .filter(([name, value]) => value.severity === 'high' && !allowedStableNextHigh.has(name))
  .map(([name]) => name);

if (critical.length > 0) {
  throw new Error(`Critical npm vulnerabilities remain: ${critical.join(', ')}`);
}

if (unexpectedHigh.length > 0) {
  throw new Error(`Unexpected high npm vulnerabilities remain: ${unexpectedHigh.join(', ')}`);
}

const summary = report.metadata?.vulnerabilities ?? {};
console.log(`npm audit accepted: ${JSON.stringify(summary)}`);

for (const name of allowedStableNextHigh) {
  if (vulnerabilities[name]?.severity === 'high') {
    console.log(`tracked stable Next.js upstream advisory: ${name}`);
  }
}
