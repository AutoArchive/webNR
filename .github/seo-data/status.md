# SEO status

## Current state

- Last completed run: 2026-08-05 branch-cleanup policy adoption, recorded by closeout pull request #17
- Active operating cycle: product, dependency, truthful format support, bilingual troubleshooting, and application deployment are merged; documentation production and final closeout remain
- Last data window: Google Drive contains no matching analytics exports; repository, CI, deployment, dependency, format, documentation, DNS, response-header, workflow, and public-artifact evidence collected on 2026-08-05
- Last site-change pull request: #33
- Last squash merge: `e051c7f5cd6cc41eef84965404cafb493b8f84df`
- Last closeout pull request: #17
- Last successful attributable application deployment: `e051c7f5cd6cc41eef84965404cafb493b8f84df`
- Last successful attributable documentation artifact: strict builds contain the bilingual TXT troubleshooting guide and canonical manual paths, but the public documentation custom domain still returns `404 no-store`
- Last public verification: pull request #34 production-evidence job verified the application at `e051c7f5cd6cc41eef84965404cafb493b8f84df`; forty-two cache-busted documentation requests returned HTTP 404 through Cloudflare
- Skill submodule commit: `6dde51078f87d5f6cf1c22045df13a3f786a5f02`

## Current signals

- Google Analytics 4: Google Drive is connected; the configured export folder exists but contains no matching export. Neither the reader nor generated documentation loads Google Analytics.
- Google Search Console: Google Drive is connected; the configured export folder contains no matching export.
- Cloudflare: connected accounts do not expose the `webnovel.win` zone. Public deployment checks continue through DNS, response headers, cache-busted custom-domain requests, and exact build identities.
- Repository: administrator and pull-request write access verified; quality gates cover dependency audit, ESLint, TypeScript, production app build, strict documentation build, and public SEO-data validation.
- Product delivery: pull requests #19 through #23 passed every expected check and final self-review and were squash-merged.
- Documentation content: pull request #31 merged the bilingual TXT import troubleshooting guide and canonical `manual` paths as `57c904bb637b97eb0b8cc9a99e035d91c39574fb`.
- Documentation deployment diagnosis: pull request #33 registered a separate `workflow_run` deployer, but no deployment reached the public custom domain after its merge. Pull request #34 proved this was not propagation delay by observing forty-two consecutive `404 no-store` responses.
- Documentation deployment repair: active work replaces the indirect trigger with a default-branch `push` workflow restricted to documentation-delivery paths. The exact reviewed squash commit will directly build, deploy, and verify the public documentation.
- Application deployment isolation: documentation-only paths are excluded from the application publisher, avoiding redundant application builds while preserving the last verified app commit.
- Privacy: operations do not collect imported filenames, book titles, content, reading history, source URLs, cookies, credentials, or private analytics identifiers.
- Application: local TXT and supported text-URL import are exposed through onboarding and Add navigation; EPUB remains rejected until a real parser and versioned fixtures exist.
- Content and community: bilingual product guidance, security policy, roadmap, contribution policy, release archive, structured issue forms, and reproducible troubleshooting replace obsolete links and unrelated generic AI articles.
- Autonomous operation: at least one meaningful public production update and same-cycle repair of confirmed defects are required each local day.
- Branch cleanup: best-effort and nonblocking.

## Active focus

- Validate, review, and squash-merge the direct default-branch documentation publisher.
- Verify its exact squash commit and bilingual TXT troubleshooting page on `https://www.webnovel.win/`.
- Replace the blocked evidence pull requests with a current-main gate recording the separately verified application and documentation commits.
- Complete the metadata-only closeout pull request with complete PR, CI, squash, deployment, public-verification, analytics-availability, and submodule evidence.
- Evaluate remaining focused Dependabot pull requests after closeout; do not blindly merge Next.js 16 major-upgrade proposals.
- Next product milestones: backup/restore, IndexedDB migrations, E2E/accessibility/offline tests, stable releases, real EPUB parsing, and versioned clean-room Legado compatibility fixtures.

This file contains verified current facts and clearly marked pending work. Detailed history belongs in `daily/`.
