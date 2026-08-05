# SEO status

## Current state

- Last completed run: 2026-08-05 branch-cleanup policy adoption, recorded by closeout pull request #17
- Active operating cycle: product rescue merged; exact deployment attribution, public verification, supported Next.js maintenance upgrade, and final closeout remain in progress
- Last data window: provider exports unavailable; repository, CI, deployment branch, and public-site evidence collected on 2026-08-05
- Last site-change pull request: #19
- Last squash merge: `d8325d3f906e3aead84a4aec98d15815daf57545`
- Last closeout pull request: #17
- Last successful attributable production deployment: none yet
- Last public verification: immediate post-merge inspection still showed the previous build, so product pull request #19 is not yet recorded as deployed
- Skill submodule commit: `6dde51078f87d5f6cf1c22045df13a3f786a5f02`

## Current signals

- Google Analytics 4: Google Drive is connected; no matching export is available. Product source no longer includes the unconditional Google Analytics loader after pull request #19.
- Google Search Console: Google Drive is connected; no matching export is available.
- Cloudflare: connected accounts do not expose the `webnovel.win` zone; collection remains unavailable without blocking technical work.
- Repository: administrator and pull-request write access verified; quality gates cover lint, TypeScript, production build, and public SEO-data validation.
- Product delivery: pull request #19 passed all checks and final self-review and was squash-merged, but the first deployment inspection still served the old application.
- Deployment reliability: active work adds a public build manifest, artifact assertions, source-SHA deployment messages, and exact custom-domain verification.
- Dependency support: Next.js 15.2.4 remains below the current patched 15.5.21 Maintenance LTS target and requires a separate lockfile-backed upgrade.
- Autonomous schedule: enabled daily in `America/Los_Angeles`; at least one meaningful public production update and same-cycle repair of confirmed defects are required.
- Branch cleanup: best-effort and non-blocking.

## Active focus

- Merge the verifiable Pages deployment workflow after green CI and final review.
- Verify the exact production build and all first-use acceptance checks.
- Upgrade Next.js and `eslint-config-next` to 15.5.21 with a regenerated lockfile and full validation.
- Audit and repair the legacy documentation deployment workflow when confirmed.
- Complete a metadata-only closeout pull request after all delivery facts are known.
- Next product milestones: backup/restore, migrations, E2E/accessibility/offline tests, releases, and versioned TXT/EPUB/Legado compatibility fixtures.

This file contains verified current facts and clearly marked pending work. Detailed history belongs in `daily/`.
