# SEO status

## Current state

- Last completed run: 2026-08-05 branch-cleanup policy adoption, recorded by closeout pull request #17
- Active operating cycle: product rescue and verifiable deployment workflow merged; stable dependency maintenance is in final CI; legacy docs-workflow audit and final closeout remain
- Last data window: provider exports unavailable; repository, CI, deployment, dependency, audit, and public-artifact evidence collected on 2026-08-05
- Last site-change pull request: #20
- Last squash merge: `cba8cff1975d293947143f7efefc2b2db37d849a`
- Last closeout pull request: #17
- Last successful attributable production artifact: `app-pages/build.json` identifies `cba8cff1975d293947143f7efefc2b2db37d849a`
- Last public verification: the generated production artifact contains the new onboarding, import navigation, privacy-aligned HTML, metadata, robots, sitemap, manifest, and Service Worker; custom-domain verification is enforced by the deployment workflow
- Skill submodule commit: `6dde51078f87d5f6cf1c22045df13a3f786a5f02`

## Current signals

- Google Analytics 4: Google Drive is connected; no matching export is available. The product no longer contains the unconditional Google Analytics loader.
- Google Search Console: Google Drive is connected; no matching export is available.
- Cloudflare: connected accounts do not expose the `webnovel.win` zone; collection remains unavailable without blocking technical work.
- Repository: administrator and pull-request write access verified; quality gates cover dependency audit, direct ESLint, TypeScript, production build, and public SEO-data validation.
- Product delivery: pull request #19 passed all checks and final self-review and was squash-merged as `d8325d3f906e3aead84a4aec98d15815daf57545`.
- Deployment reliability: pull request #20 passed all checks and final self-review and was squash-merged as `cba8cff1975d293947143f7efefc2b2db37d849a`; production artifacts now expose exact build identity.
- Dependency support: pull request #21 targets stable Next.js and `eslint-config-next` 15.5.22, replaces deprecated `next lint`, removes deprecated `text-encoding`, repairs browser encoding detection, migrates tooling to ESM, and uses an npm-generated lockfile.
- Dependency audit: automatic repair reduced 17 findings with 11 high findings to only the stable Next build-chain `next`, `postcss`, and optional `sharp` advisories. Any critical or any additional high finding now blocks CI. The npm-proposed complete fix is the unreleased Next 16.3 line, so WebNR remains on the latest stable backport.
- Autonomous schedule: enabled daily in `America/Los_Angeles`; at least one meaningful public production update and same-cycle repair of confirmed defects are required.
- Branch cleanup: best-effort and non-blocking.

## Active focus

- Complete final Quality, final full-diff review, squash merge, exact build deployment, and public regression verification for pull request #21.
- Audit and repair the legacy documentation deployment workflow if confirmed active and defective.
- Complete a metadata-only closeout pull request after all delivery facts are known.
- Next product milestones: backup/restore, migrations, E2E/accessibility/offline tests, releases, and versioned TXT/EPUB/Legado compatibility fixtures.

This file contains verified current facts and clearly marked pending work. Detailed history belongs in `daily/`.
