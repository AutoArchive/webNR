# SEO status

## Current state

- Last completed run: 2026-08-05 branch-cleanup policy adoption, recorded by closeout pull request #17
- Active operating cycle: product, dependency, truthful format support, bilingual troubleshooting, application delivery, documentation deployment, permanent production evidence, analytics restoration, and final metadata closeout
- Last data window: Google Drive contains no matching GA4 or Search Console export; repository, CI, deployment, dependency, format, documentation, DNS, response-header, workflow-registration, Pages-configuration, public-artifact, and analytics implementation evidence collected on 2026-08-05
- Last site-change pull request: #35
- Last squash merge: `499762b2ead74a74a13286a7cdca2d8fa6045f2e`
- Last closeout pull request: #17
- Last successful attributable application deployment: `499762b2ead74a74a13286a7cdca2d8fa6045f2e`
- Last successful attributable documentation artifact: strict builds contain the bilingual TXT troubleshooting guide and canonical manual paths, but the public documentation custom domain still requires exact production verification
- Last public verification: pull request #36 observed the application at exact `499762b2ead74a74a13286a7cdca2d8fa6045f2e`; documentation evidence remains under repair
- Skill submodule commit on main: `6dde51078f87d5f6cf1c22045df13a3f786a5f02`
- Pending skill submodule commit: `5c3174fa6ca5b01ff2f56b1cfb248877187ce2f5`

## Current signals

- Runtime analytics policy: mandatory on every managed site. WebNR owner policy is `full-url`.
- Google Analytics 4: measurement `G-DGH8HNQKE4` is being restored to the reader and documentation site. The reader sends the complete browser URL, including query parameters such as imported URLs in `?add=...`. Google signals and ad-personalization signals remain disabled.
- GA4 evidence: Google Drive is connected; the configured export folder exists but contains no matching export. Missing exports are not treated as zero traffic.
- Google Search Console: required; the configured Google Drive folder currently contains no matching export.
- Infrastructure analytics: connected Cloudflare accounts do not expose the `webnovel.win` zone. Public deployment checks continue through DNS, response headers, cache-busted custom-domain requests, Pages API state, and exact build identities.
- Repository: administrator and pull-request write access verified; quality gates cover dependency audit, ESLint, TypeScript, production app build, strict documentation build, public SEO-data validation, and exact production evidence.
- Product delivery: pull requests #19 through #23 passed every expected check and final self-review and were squash-merged.
- Documentation content: pull request #31 merged the bilingual TXT import troubleshooting guide and canonical `manual` paths as `57c904bb637b97eb0b8cc9a99e035d91c39574fb`.
- Pages configuration: authenticated diagnosis found legacy `gh-pages:/` publication and a previously missing public documentation deployment; active repair and permanent evidence remain tracked separately.
- Data behavior: imported book content and reading progress remain in browser storage. GA4 page views include complete page URLs and query parameters; no custom events containing local file contents or reading progress are added.
- Application: local TXT and supported text-URL import are exposed through onboarding and Add navigation; EPUB remains rejected until a real parser and versioned fixtures exist.
- Content and community: bilingual product guidance, security policy, roadmap, contribution policy, release archive, structured issue forms, and reproducible troubleshooting replace obsolete links and unrelated generic AI articles.
- Autonomous operation: at least one meaningful public production update, mandatory analytics verification, and same-cycle repair of confirmed defects are required each local day.
- Branch cleanup: best-effort and nonblocking.

## Active focus

- Merge and deploy the GA4 restoration with full browser URL reporting on the application and GA4 enabled in MkDocs.
- Verify generated app and documentation output include measurement `G-DGH8HNQKE4`.
- Verify the public application exposes the expected loader and full-URL configuration after the exact squash commit deploys.
- Validate, review, and complete the `gh-pages`-compatible documentation publisher and permanent production-evidence gate.
- Create and merge the metadata-only closeout pull request with complete PR, CI, squash, deployment, public-verification, analytics-availability, URL-policy, and submodule evidence.
- Evaluate remaining focused Dependabot pull requests after closeout; do not blindly merge Next.js 16 major-upgrade proposals.
- Next product milestones: backup/restore, IndexedDB migrations, E2E/accessibility/offline tests, stable releases, real EPUB parsing, and versioned clean-room Legado compatibility fixtures.

This file contains verified current facts and clearly marked pending work. Detailed history belongs in `daily/`.
