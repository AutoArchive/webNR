# Human-only blockers

## `www.webnovel.win` Cloudflare production routing

**Blocked action:** make `https://www.webnovel.win/` serve the current reviewed WebNR documentation/editorial build while keeping it the single canonical public documentation hostname.

**Verified 2026-08-08 evidence:**

- a cache-busted GitHub Actions routing diagnostic resolved `www.webnovel.win` to Cloudflare edge addresses and received HTTP 200 from Cloudflare for the root page;
- that root still served the older `WebNR - Web Novel Reader` documentation/site shell, while `https://www.webnovel.win/build.json` returned HTTP 404, so the canonical hostname has no attributable current build identity;
- `https://autoarchive.github.io/webNR/build.json` exposed the current documentation build commit `ec8ebc389c613fd9d5386ebf20f93a17f6fd51f3`;
- `https://app.webnovel.win/build.json` and `https://webnr.pages.dev/build.json` exposed the same current application commit `ec8ebc389c613fd9d5386ebf20f93a17f6fd51f3` and the Pages project served the reader application, not the documentation site;
- historical pull request #40 records why the project temporarily moved documentation canonicals to the GitHub Pages project URL: the earlier `www` route was on Cloudflare, GitHub Pages reported no custom domain, and the available GitHub/Cloudflare connections could not change the required external routing;
- pull request #58 merged the repository-owned `scripts/build-docs-production.sh` entrypoint to `main`, so a documentation Pages deployment can now emit an exact `/build.json` from Cloudflare's commit SHA without dashboard-specific build logic;
- pull request #59 is the active rendered-site repair. Repository-side Quality run `31277096343` passed Web quality, Documentation quality, and Production evidence; its generated documentation uses `www.webnovel.win` canonicals, sitemap, RSS, current reader articles, and single GA4 while keeping GitHub Pages noncanonical.

**Why automation cannot finish this step:** the currently connected tools provide repository administration and read-only public routing evidence, but no authenticated Cloudflare zone/Pages/Worker/custom-domain control for the `webnovel.win` zone. The GitHub Pages custom-domain fallback was already tested historically and must not be repeated as a substitute for fixing the actual Cloudflare route.

**Minimal external action required:** using the Cloudflare account that controls `webnovel.win`, create or select a documentation Pages deployment sourced from `AutoArchive/webNR` with production branch `main`; set the build command to `python -m pip install --requirement .github/requirements-docs.txt && bash scripts/build-docs-production.sh`, output directory to `site`, and `PYTHON_VERSION=3.12`; then attach `www.webnovel.win` to that documentation deployment. If `www.webnovel.win` is currently attached to a stale Pages project, Worker route, or other origin, replace that attachment. Do **not** attach `www.webnovel.win` to `webnr.pages.dev`, because that Pages project is the reader application. Preserve `app.webnovel.win` for the reader application.

**Acceptance after the external action:** automation resumes pull request #59, first requires `https://www.webnovel.win/build.json` to expose the exact current `main` documentation commit and current reader content from the documentation project, then re-runs/final-reviews #59 and squash-merges it with the exact head SHA. After merge, it waits for both the Cloudflare documentation deployment and GitHub Pages build mirror, requires `www/build.json` to equal the squash commit, verifies the 2026-08-06 and 2026-08-08 reader articles, `www` canonical/sitemap/RSS output, `G-DGH8HNQKE4`, and the unaffected `app.webnovel.win` reader, then completes permanent production-evidence and closeout changes.

The configured Google Drive folder currently contains no matching GA4 or Search Console exports. That data-source gap is not a human blocker and must continue to be reported as unavailable rather than zero.

Merged automation branch cleanup is best-effort repository hygiene. A connector without a branch-deletion operation, or a harmless failure to delete an already-merged head branch, is not a blocker and must not be recorded here.

The automation is authorized to perform all normal collection, repository, branch, pull-request, CI-wait, self-review, squash-merge, deployment-wait, verification, and closeout steps. Add an item only when an external system truly requires a human-only action or the required account permission does not exist. Include the exact blocked action, evidence, impact, and minimal human action needed. Remove resolved items in the next pull request.
