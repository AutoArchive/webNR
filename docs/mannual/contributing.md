# Contributing to WebNR

WebNR welcomes focused bug fixes, accessibility improvements, documentation, translations, compatibility fixtures, and carefully scoped product features.

## Setup

Requirements: Node.js 20, npm, Git, and Python 3.12 for documentation work.

```bash
git clone --recurse-submodules https://github.com/AutoArchive/webNR.git
cd webNR
npm ci
npm run dev
```

## Repository layout

- `app/` — Next.js application, reader UI, storage, imports, and source discovery.
- `config/` — public application URLs and PWA configuration.
- `public/` — static application assets, manifest, crawl files, and Service Worker.
- `docs/` — MkDocs documentation and public technical content.
- `.github/seo-data/` — public-safe operating state and daily evidence.
- `.github/seo-skills/` — pinned shared SEO operating skill submodule; do not edit it in place.

## Required validation

Application changes:

```bash
npm run lint
npm run typecheck
npm run build
```

Documentation changes:

```bash
python -m pip install --requirement .github/requirements-docs.txt
mkdocs build --strict
```

There is currently no `npm test` script. Do not claim test coverage that does not exist. Changes to storage, imports, offline behavior, or format compatibility should add appropriate automated fixtures and tests as those harnesses are introduced.

## Pull-request contract

1. Start from the latest `main` and create a focused branch.
2. Keep one coherent outcome per pull request.
3. Update user documentation and `.github/seo-data` when public behavior or operating state changes.
4. Push the branch and open a real, non-draft pull request.
5. Wait for every expected CI job: dependency audit, ESLint, TypeScript, production build, strict documentation build, and SEO-data validation.
6. Review the complete final diff and generated output after CI is green. Fix findings on the same branch and rerun the checks.
7. Squash-merge only after green CI and a clean final review.
8. For public changes, verify the exact squash commit through the published build identity and changed behavior.

No second identity or human approval is required for authorized autonomous maintenance, but checks, final review, deployment attribution, and truthful evidence may not be skipped.

## Privacy and content boundaries

- Never commit credentials, private URLs, analytics property/account IDs, raw exports, IP addresses, user book titles, imported filenames, reading content, reading history, cookies, or source credentials.
- WebNR does not bundle books. Official examples must be public-domain, self-owned, or explicitly authorized.
- Do not bypass authentication, payment, DRM, robots, rate limits, or access controls.
- Treat source definitions as connectors, not content licenses.
- Do not advertise format or Legado compatibility without a real implementation and versioned fixture evidence.

## Good contribution areas

- Reliable backup and restore.
- IndexedDB migrations and data-loss prevention.
- TXT encoding fixtures and large-file performance.
- Real EPUB parsing with security controls and tests.
- PWA install/offline/update tests.
- Accessibility and keyboard navigation.
- Versioned clean-room Legado compatibility fixtures and adapters.
- Troubleshooting pages tied to reproducible errors.
