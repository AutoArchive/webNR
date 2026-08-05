# SEO status

## Current state

- Last completed run: 2026-08-05 branch-cleanup policy adoption, recorded by closeout pull request #17
- Active operating cycle: product, dependency, format, documentation, CI, and community repairs are merged; the documentation custom domain is being migrated from stale branch publishing to the GitHub Pages deployment API before permanent production evidence and final closeout
- Last data window: provider exports unavailable; repository, CI, deployment, dependency, audit, format, documentation, DNS, response-header, and public-artifact evidence collected on 2026-08-05
- Last site-change pull request: #23
- Last squash merge: `68f2d67f7cd2c2e14636d56a5c49d4d53a887278`
- Last closeout pull request: #17
- Last successful attributable application deployment: `68f2d67f7cd2c2e14636d56a5c49d4d53a887278`
- Last successful attributable documentation artifact: `gh-pages/build.json` identifies `68f2d67f7cd2c2e14636d56a5c49d4d53a887278`, but `https://www.webnovel.win/build.json` still returns 404 and is not yet a successful public deployment
- Last public verification: `https://app.webnovel.win/build.json` exposes `68f2d67f7cd2c2e14636d56a5c49d4d53a887278`; the documentation custom domain remains stale
- Skill submodule commit: `6dde51078f87d5f6cf1c22045df13a3f786a5f02`

## Current signals

- Google Analytics 4: Google Drive is connected; no matching export is available. Neither the reader nor generated documentation loads Google Analytics.
- Google Search Console: Google Drive is connected; no matching export is available.
- Cloudflare: the connected accounts do not expose the `webnovel.win` zone. Public DNS and response evidence show both subdomains are proxied through Cloudflare, but this does not block origin deployment repair through GitHub.
- Repository: administrator and pull-request write access verified; quality gates cover dependency audit, direct ESLint, TypeScript, production app build, strict documentation build, and public SEO-data validation.
- Product delivery: pull requests #19, #20, #21, #22, and #23 passed every expected check and final self-review and were squash-merged.
- Application: the public custom domain serves the current product/documentation merge commit.
- Documentation origin: the generated `gh-pages` branch is current, but pushing it with a workflow `GITHUB_TOKEN` does not trigger the configured branch-based GitHub Pages build, leaving `www` stale.
- Documentation deployment repair: active work switches Pages to workflow mode, uploads the strict MkDocs artifact through `actions/upload-pages-artifact`, deploys it through `actions/deploy-pages`, preserves the existing `www.webnovel.win` custom domain, and verifies its exact commit.
- Autonomous schedule: enabled daily in `America/Los_Angeles`; at least one meaningful public production update and same-cycle repair of confirmed defects are required.
- Branch cleanup: best-effort and non-blocking.

## Active focus

- Complete CI, final review, squash merge, GitHub Pages API deployment, and exact `www.webnovel.win/build.json` verification for the documentation repair.
- Update the permanent production-evidence pull request to the resulting app/docs deployment commit and require both public domains to pass.
- Complete a metadata-only closeout pull request with the complete PR, CI, squash, deployment, and verification record.
- Next product milestones: backup/restore, IndexedDB migrations, E2E/accessibility/offline tests, stable releases, real EPUB parsing, and versioned clean-room Legado compatibility fixtures.

This file contains verified current facts and clearly marked pending work. Detailed history belongs in `daily/`.
