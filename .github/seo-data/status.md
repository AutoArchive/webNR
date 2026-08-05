# SEO status

## Current state

- Last completed run: 2026-08-05 branch-cleanup policy adoption, recorded by closeout pull request #17
- Active operating cycle: product rescue, attributable deployment, stable dependency maintenance, and truthful TXT-only format correction are merged; documentation/community repair and final closeout remain
- Last data window: provider exports unavailable; repository, CI, deployment, dependency, audit, format, documentation, and public-artifact evidence collected on 2026-08-05
- Last site-change pull request: #22
- Last squash merge: `4b488b6f1ba4f46d5231f21adc5f92ae21de2e39`
- Last closeout pull request: #17
- Last successful attributable production artifact before documentation repair: `app-pages/build.json` identifies `f86d7967f44ae57d83c558a63e322f52dd18373a`; the TXT-only deployment is pending refresh
- Last public verification: the generated application artifact contains the repaired onboarding, import navigation, privacy-aligned HTML, metadata, robots, sitemap, manifest, Service Worker, and stable dependency build
- Skill submodule commit: `6dde51078f87d5f6cf1c22045df13a3f786a5f02`

## Current signals

- Google Analytics 4: Google Drive is connected; no matching export is available. The reader no longer loads Google Analytics, and the active docs repair removes documentation analytics as well.
- Google Search Console: Google Drive is connected; no matching export is available.
- Cloudflare: connected accounts do not expose the `webnovel.win` zone; collection remains unavailable without blocking technical work.
- Repository: administrator and pull-request write access verified; quality gates cover dependency audit, direct ESLint, TypeScript, production build, strict documentation build, and public SEO-data validation.
- Product delivery: pull requests #19, #20, #21, and #22 passed expected checks and final self-review and were squash-merged.
- Dependency support: production uses stable Next.js 15.5.22, browser-native text decoding, an npm-generated lockfile, ESM tooling, and a permanent audit boundary.
- Format support: local TXT import and supported text URLs are implemented. EPUB is not implemented and is now rejected at the picker and storage boundary and removed from application metadata.
- Documentation: active work pins the MkDocs toolchain, replaces the misleading legacy publisher, adds strict PR checks and exact documentation deployment identity, removes analytics/obsolete repository references, and publishes truthful user, security, roadmap, and contribution guidance.
- Community: structured bug and compatibility issue forms enforce privacy, authorization, reproduction, and build-identity requirements.
- Autonomous schedule: enabled daily in `America/Los_Angeles`; at least one meaningful public production update and same-cycle repair of confirmed defects are required.
- Branch cleanup: best-effort and non-blocking.

## Active focus

- Complete strict app/docs/SEO CI, final review, squash merge, exact app/docs deployment, and public verification for the documentation/community repair.
- Verify the TXT-only application deployment through `/build.json` and generated title/manifest/import behavior.
- Complete a metadata-only closeout pull request after all delivery facts are known.
- Next product milestones: backup/restore, migrations, E2E/accessibility/offline tests, releases, real EPUB parsing, and versioned Legado compatibility fixtures.

This file contains verified current facts and clearly marked pending work. Detailed history belongs in `daily/`.
