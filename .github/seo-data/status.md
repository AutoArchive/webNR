# SEO status

## Current state

- Last completed run: 2026-08-05 branch-cleanup policy adoption, recorded by closeout pull request #17
- Active operating cycle: product rescue, working documentation delivery, permanent production evidence, mandatory analytics restoration, and final metadata closeout
- Last data window: Google Drive contains no matching GA4 or Search Console export; repository, CI, Pages, public build, and analytics implementation evidence collected on 2026-08-05
- Last merged repository pull request: #41
- Last squash merge on `main`: `cef991a8f4a7cc85dae2bbf88bbbebb36b736048`
- Last closeout pull request: #17
- Last successful attributable application deployment: `d1b4d1ede10037bcc1353c3edbd9d4e7c245d882`
- Last successful attributable documentation deployment: `d1b4d1ede10037bcc1353c3edbd9d4e7c245d882`
- Working documentation URL: `https://autoarchive.github.io/webNR/`
- Skill submodule commit on `main`: `6dde51078f87d5f6cf1c22045df13a3f786a5f02`
- Proposed skill submodule commit for analytics restoration: `5c3174fa6ca5b01ff2f56b1cfb248877187ce2f5`

## Current signals

- Runtime analytics policy: mandatory on every managed site. WebNR owner policy is `full-url`.
- Google Analytics 4: the active repair restores measurement `G-DGH8HNQKE4` to the reader and documentation site. The reader sends the complete browser URL, including query parameters and imported URLs in `?add=...`. Google signals and ad-personalization signals remain disabled.
- GA4 evidence: Google Drive is connected; the configured export folder contains no matching export. Missing exports are not treated as zero traffic.
- Google Search Console: required; the configured Google Drive folder contains no matching export.
- Infrastructure analytics: connected Cloudflare accounts do not expose the `webnovel.win` zone. This does not block GA4, Search Console preparation, GitHub Pages analytics, product work, or repository delivery.
- Repository: administrator and pull-request write access verified; required checks cover dependency audit, ESLint, TypeScript, application build, strict documentation build, mandatory analytics output, SEO-data validation, and exact public production evidence.
- Permanent production evidence: pull request #41 added a read-only verifier for both recorded public builds and the bilingual troubleshooting page.
- Documentation delivery: `https://autoarchive.github.io/webNR/` is the canonical working documentation URL.
- Data behavior: imported book content and reading progress remain in browser storage. GA4 page views include complete page URLs and query parameters; no custom events containing local file contents or reading progress are added.
- Application: local TXT and supported text-URL import are available; EPUB remains rejected until a real parser and versioned fixtures exist.
- Autonomous operation: at least one meaningful public update, mandatory analytics verification, and same-cycle repair of confirmed defects are required each local day.
- Branch cleanup: best-effort and nonblocking.

## Active focus

- Deliver the clean analytics-restoration branch from current `main` without overwriting the permanent production-evidence gate.
- Require green Web quality, Documentation quality, SEO data contract, and Production evidence on the final head.
- Squash-merge only after a clean complete diff review.
- Verify the exact analytics-restoration squash commit and GA4 implementation on `https://app.webnovel.win/` and `https://autoarchive.github.io/webNR/`.
- Create and merge the metadata-only closeout with PR, CI, deployment, public-verification, analytics URL policy, and submodule evidence.
- Next product milestones: backup/restore, IndexedDB migrations, E2E/accessibility/offline tests, stable releases, real EPUB parsing, and versioned clean-room Legado compatibility fixtures.

This file contains verified current facts and clearly marked pending work. Detailed history belongs in `daily/`.
