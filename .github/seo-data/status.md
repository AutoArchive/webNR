# SEO status

## Current state

- Last completed run: 2026-08-05 branch-cleanup policy adoption, recorded by closeout pull request #17
- Active operating cycle: product, dependency, truthful format support, bilingual troubleshooting, and direct application delivery are merged; documentation production, permanent evidence, and final metadata closeout remain
- Last data window: Google Drive contains no matching analytics exports; repository, CI, deployment, dependency, format, documentation, DNS, response-header, workflow, and public-artifact evidence collected on 2026-08-05
- Last site-change pull request: #35
- Last squash merge: `499762b2ead74a74a13286a7cdca2d8fa6045f2e`
- Last closeout pull request: #17
- Last successful attributable application deployment: `499762b2ead74a74a13286a7cdca2d8fa6045f2e`
- Last successful attributable documentation deployment: `499762b2ead74a74a13286a7cdca2d8fa6045f2e`
- Last public verification: pull request #36 observed the application at exact `499762b2ead74a74a13286a7cdca2d8fa6045f2e`; its documentation statement remains unproven and cannot merge while the custom-domain endpoint returns HTTP 404
- Skill submodule commit: `6dde51078f87d5f6cf1c22045df13a3f786a5f02`

## Current signals

- Google Analytics 4: Google Drive is connected; the configured export folder exists but contains no matching export. Neither the reader nor generated documentation loads Google Analytics.
- Google Search Console: Google Drive is connected; the configured export folder contains no matching export.
- Cloudflare: connected accounts do not expose the `webnovel.win` zone. Public deployment checks use DNS, response headers, cache-busted custom-domain requests, and exact build identities.
- Repository: administrator and pull-request write access verified; quality gates cover dependency audit, ESLint, TypeScript, production app build, strict documentation build, exact public production evidence, and public SEO-data validation.
- Product delivery: pull requests #19 through #23 passed every expected check and final self-review and were squash-merged.
- Documentation content: pull request #31 merged the bilingual TXT import troubleshooting guide and canonical `manual` paths as `57c904bb637b97eb0b8cc9a99e035d91c39574fb`.
- Application deployment: pull request #35 changed `.github/workflows/nextjs.yml`, so the application publisher correctly ran once for that merge and publicly exposes `499762b2ead74a74a13286a7cdca2d8fa6045f2e`.
- Documentation deployment: pull request #35 added a direct default-branch publisher, but the public documentation custom domain still returns HTTP 404. A read-only diagnostic job now inspects workflow registration, recent documentation runs, Pages configuration, and the latest Pages build before the next repair.
- Production evidence: only the application deployment is currently verified. The documentation deployment line above is an intended target enforced by the same failing PR and must not reach `main` until the public endpoint matches.
- Privacy: operations do not collect imported filenames, book titles, content, reading history, source URLs, cookies, credentials, or private analytics identifiers.
- Application: local TXT and supported text-URL import are exposed through onboarding and Add navigation; EPUB remains rejected until a real parser and versioned fixtures exist.
- Content and community: bilingual product guidance, security policy, roadmap, contribution policy, release archive, structured issue forms, and reproducible troubleshooting replace obsolete links and unrelated generic AI articles.
- Autonomous operation: at least one meaningful public production update and same-cycle repair of confirmed defects are required each local day.
- Branch cleanup: best-effort and nonblocking.

## Active focus

- Read the Pages and workflow diagnostic from pull request #36 and repair the precise registration, permission, Pages-source, or custom-domain defect.
- Deploy and publicly verify the documentation build and bilingual TXT troubleshooting page.
- Restore the permanent evidence job to its normal bounded retry window and merge it only after both endpoints match.
- Create and merge the metadata-only closeout pull request with complete PR, CI, squash, deployment, public-verification, analytics-availability, and submodule evidence.
- Evaluate remaining focused Dependabot pull requests after closeout; do not blindly merge Next.js 16 major-upgrade proposals.
- Next product milestones: backup/restore, IndexedDB migrations, E2E/accessibility/offline tests, stable releases, real EPUB parsing, and versioned clean-room Legado compatibility fixtures.

This file contains verified facts and clearly marks the unproven documentation target. Detailed history belongs in `daily/`.
