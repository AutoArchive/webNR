# SEO status

## Current state

- Last completed run: 2026-08-05 branch-cleanup policy adoption, recorded by closeout pull request #17
- Active operating cycle: product rescue, attributable deployment, and stable dependency maintenance are merged; unsupported EPUB claims are being removed before documentation repair and final closeout
- Last data window: provider exports unavailable; repository, CI, deployment, dependency, audit, format-path, and public-artifact evidence collected on 2026-08-05
- Last site-change pull request: #21
- Last squash merge: `f86d7967f44ae57d83c558a63e322f52dd18373a`
- Last closeout pull request: #17
- Last successful attributable production artifact: `app-pages/build.json` identifies `f86d7967f44ae57d83c558a63e322f52dd18373a`
- Last public verification: the generated production artifact contains the repaired onboarding, import navigation, privacy-aligned HTML, metadata, robots, sitemap, manifest, Service Worker, and stable dependency build
- Skill submodule commit: `6dde51078f87d5f6cf1c22045df13a3f786a5f02`

## Current signals

- Google Analytics 4: Google Drive is connected; no matching export is available. The product no longer contains the unconditional Google Analytics loader.
- Google Search Console: Google Drive is connected; no matching export is available.
- Cloudflare: connected accounts do not expose the `webnovel.win` zone; collection remains unavailable without blocking technical work.
- Repository: administrator and pull-request write access verified; quality gates cover dependency audit, direct ESLint, TypeScript, production build, and public SEO-data validation.
- Product delivery: pull requests #19, #20, and #21 passed expected checks and final self-review and were squash-merged.
- Dependency support: production now uses stable Next.js 15.5.22, browser-native text decoding, an npm-generated lockfile, ESM tooling, and a permanent audit boundary.
- Format support: local TXT import and supported text URLs are implemented. EPUB is not implemented; accepting an EPUB ZIP as text was confirmed defective, so the active repair removes EPUB from the picker, storage boundary, metadata, structured data, onboarding, and PWA manifest.
- Autonomous schedule: enabled daily in `America/Los_Angeles`; at least one meaningful public production update and same-cycle repair of confirmed defects are required.
- Branch cleanup: best-effort and non-blocking.

## Active focus

- Complete CI, final review, squash merge, exact deployment, and public verification for the truthful TXT-only compatibility repair.
- Repair the legacy documentation workflow, remove documentation analytics and obsolete repository references, and publish accurate user/contributor guidance.
- Treat real EPUB parsing as a versioned future product feature with fixtures and tests, not a file-extension claim.
- Complete a metadata-only closeout pull request after all delivery facts are known.
- Next product milestones: backup/restore, migrations, E2E/accessibility/offline tests, releases, and versioned TXT/EPUB/Legado compatibility fixtures.

This file contains verified current facts and clearly marked pending work. Detailed history belongs in `daily/`.
