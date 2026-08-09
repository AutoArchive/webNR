# Human-only blockers

## `www.webnovel.win` Cloudflare production routing

**Blocked action:** make `https://www.webnovel.win/` serve the current reviewed WebNR documentation/editorial build while keeping it the single canonical public documentation hostname.

**Verified evidence and current repository state:**

- cache-busted routing diagnostics resolved `www.webnovel.win` to Cloudflare edge addresses and received HTTP 200 for the root page, but the root served the older `WebNR - Web Novel Reader` site shell while `https://www.webnovel.win/build.json` returned HTTP 404;
- `https://app.webnovel.win/` is the reader runtime and has an exact attributable deployment path through `app-pages`;
- `https://autoarchive.github.io/webNR/` is the noncanonical documentation build mirror and has an exact attributable deployment path through `gh-pages`;
- pull request #57 established `www.webnovel.win` as the sole documentation/editorial/search canonical and kept `app.webnovel.win` as reader runtime;
- pull request #58 added `scripts/build-docs-production.sh`, which writes exact build identity and performs the strict MkDocs build;
- pull request #61 repaired that build entrypoint for shallow Cloudflare checkouts;
- pull request #59 merged the repository-side canonical/rendered-output repair as `a6e9256369b0b2c29f3c80e428708e0b2da4894c`;
- pull request #62 merged the Legado web-alternative article, permanent Chromium browser journeys, PWA registration repair, keyboard-accessibility repair and current deployment-evidence logic as `7140fd24277ab357ed8029db8aa8f6c1ecdfe6bd`;
- after #62, both `app-pages/build.json` and `gh-pages/build.json` identify exact commit `7140fd24277ab357ed8029db8aa8f6c1ecdfe6bd`;
- the documentation build mirror contains `/blog/2026/08/09/webnr-legado-web-alternative/` and emits `www.webnovel.win` canonical/discovery metadata;
- the current tool environment exposes GitHub repository control and public routing evidence but no authenticated write control for the Cloudflare account/zone/project serving `webnovel.win`; no installable Cloudflare control plugin was available in the current plugin catalog.

**Why automation cannot finish this step:** the remaining mutation is outside the repository and requires control of the Cloudflare configuration currently serving `www.webnovel.win`. Repository code, MkDocs build output, exact build identity, canonical metadata and the noncanonical mirror are ready. Repointing GitHub Pages or the reader Pages project would violate the canonical topology rather than repair it.

**Minimal external action required:** using the Cloudflare account that controls `webnovel.win`, create or select a documentation Pages deployment sourced from `AutoArchive/webNR` with production branch `main`; set the build command to `python -m pip install --requirement .github/requirements-docs.txt && bash scripts/build-docs-production.sh`, output directory to `site`, and `PYTHON_VERSION=3.12`; then attach `www.webnovel.win` to that documentation deployment. If `www.webnovel.win` is currently attached to a stale Pages project, Worker route, or other origin, replace that attachment. Do **not** attach `www.webnovel.win` to `webnr.pages.dev`, because that project is the reader application. Preserve `app.webnovel.win` for the reader application.

**Acceptance after the external action:** the canonical `https://www.webnovel.win/build.json` must expose the current rendered documentation commit (currently `7140fd24277ab357ed8029db8aa8f6c1ecdfe6bd` until another rendered-site change supersedes it). The public site must directly serve the 2026-08-06 Legado source guide, the 2026-08-08 legal free-reading guide, and the 2026-08-09 WebNR Legado web-alternative article; canonical tags, sitemap and RSS must stay on `www.webnovel.win`; GA4 `G-DGH8HNQKE4` must remain present; and `app.webnovel.win` must continue to expose the reader application rather than the documentation build.

The configured Google Drive folder currently contains no matching GA4 or Search Console exports. That data-source gap is not a human blocker and must continue to be reported as unavailable rather than zero.

Merged automation branch cleanup is best-effort repository hygiene. A connector without a branch-deletion operation, or a harmless failure to delete an already-merged head branch, is not a blocker and must not be recorded here.

The automation is authorized to perform all normal collection, repository, branch, pull-request, CI-wait, self-review, squash-merge, deployment-wait, verification, and closeout steps. Add an item only when an external system truly requires a human-only action or the required account permission does not exist. Include the exact blocked action, evidence, impact, and minimal human action needed. Remove resolved items in the next pull request.
