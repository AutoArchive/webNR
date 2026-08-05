# SEO status

## Current state

- Last completed run: 2026-08-05 branch-cleanup policy adoption, recorded by closeout pull request #17
- Active operating cycle: product rescue, dependency maintenance, truthful format support, bilingual troubleshooting, working documentation delivery, analytics restoration, permanent production evidence, and final metadata closeout
- Last data window: Google Drive contains no matching GA4 or Search Console export; repository, CI, deployment, dependency, documentation, Pages, public-artifact, and analytics implementation evidence collected on 2026-08-05
- Last merged site-change pull request: #40
- Last squash merge on `main`: `d1b4d1ede10037bcc1353c3edbd9d4e7c245d882`
- Active analytics repair pull request: #39
- Last closeout pull request: #17
- Working documentation URL: `https://autoarchive.github.io/webNR/`
- Former documentation custom domain: `https://www.webnovel.win/` remains unconfigured and is not the current canonical documentation URL
- Skill submodule commit on `main`: `6dde51078f87d5f6cf1c22045df13a3f786a5f02`
- Proposed skill submodule commit in #39: `5c3174fa6ca5b01ff2f56b1cfb248877187ce2f5`

## Current signals

- Runtime analytics policy: mandatory on every managed site. WebNR owner policy is `full-url`.
- Google Analytics 4: pull request #39 restores measurement `G-DGH8HNQKE4` to the reader and documentation site. The reader sends the complete browser URL, including query parameters and imported URLs in `?add=...`. Google signals and ad-personalization signals remain disabled.
- GA4 evidence: Google Drive is connected; the configured export folder contains no matching export. Missing exports are not treated as zero traffic.
- Google Search Console: required; the configured Google Drive folder currently contains no matching export.
- Infrastructure analytics: connected Cloudflare accounts do not expose the `webnovel.win` zone. This does not block GA4, Search Console preparation, GitHub Pages analytics, product work, or repository delivery.
- Repository: administrator and pull-request write access verified; quality gates cover dependency audit, ESLint, TypeScript, production app build, strict documentation build, mandatory analytics output, public SEO-data validation, and production evidence.
- Product delivery: pull requests #19 through #23 passed expected checks and final self-review and were squash-merged.
- Documentation content: pull request #31 published the bilingual TXT import troubleshooting guide and canonical manual paths.
- Documentation delivery: pull request #40 made `https://autoarchive.github.io/webNR/` the canonical working documentation URL and aligned reader/help links and the Pages publisher.
- Data behavior: imported book content and reading progress remain in browser storage. GA4 page views include complete page URLs and query parameters; no custom events containing local file contents or reading progress are added.
- Application: local TXT and supported text-URL import are exposed through onboarding and Add navigation; EPUB remains rejected until a real parser and versioned fixtures exist.
- Autonomous operation: at least one meaningful public production update, mandatory analytics verification, and same-cycle repair of confirmed defects are required each local day.
- Branch cleanup: best-effort and nonblocking.

## Active focus

- Merge latest `main` into pull request #39 without losing the working GitHub Pages documentation URL or deployment logic.
- Re-run dependency audit, ESLint, TypeScript, application build, full-URL GA4 assertions, strict documentation build, documentation GA4 assertion, and SEO analytics validation on the merged head.
- Squash-merge #39 only after green CI and a clean final review.
- Verify the exact squash commit and GA4 implementation on `https://app.webnovel.win/` and `https://autoarchive.github.io/webNR/`.
- Complete the permanent production-evidence gate and metadata-only closeout with PR, CI, deployment, public-verification, analytics URL policy, and submodule evidence.
- Next product milestones: backup/restore, IndexedDB migrations, E2E/accessibility/offline tests, stable releases, real EPUB parsing, and versioned clean-room Legado compatibility fixtures.

This file contains verified current facts and clearly marked pending work. Detailed history belongs in `daily/`.
