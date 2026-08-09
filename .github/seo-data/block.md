# Human-only blockers

## `webnovel.win` Cloudflare production routing

Two Cloudflare-served production hostnames are stale relative to reviewed repository artifacts.

### Canonical documentation route

**Blocked action:** make `https://www.webnovel.win/` serve the current reviewed WebNR documentation/editorial build while keeping it the single canonical public documentation hostname.

**Verified evidence:**

- cache-busted routing diagnostics resolved `www.webnovel.win` to Cloudflare edge addresses and received HTTP 200 for the root page, but the root served the older `WebNR - Web Novel Reader` site shell while `https://www.webnovel.win/build.json` returned HTTP 404;
- `https://autoarchive.github.io/webNR/` is the noncanonical documentation build mirror and currently exposes exact reviewed commit `7140fd24277ab357ed8029db8aa8f6c1ecdfe6bd`;
- the mirror contains the 2026-08-09 WebNR Legado web-alternative article and emits `www.webnovel.win` canonical/discovery metadata;
- pull requests #57, #58, #61 and #59 completed the repository-side canonical contract, attributable MkDocs build entrypoint, shallow-checkout repair and rendered canonical-output repair.

### Reader application route

**Blocked action:** make `https://app.webnovel.win/` serve the latest reviewed application artifact from pull request #62.

**Verified evidence:**

- pull request #62 merged as `7140fd24277ab357ed8029db8aa8f6c1ecdfe6bd` and the `app-pages` artifact branch contains a `build.json` for that exact commit;
- closeout Production evidence run `31303434565` independently verified the documentation mirror at `7140fd24277ab357ed8029db8aa8f6c1ecdfe6bd`;
- the same run made 42 cache-busted requests to `https://app.webnovel.win/build.json` from GitHub Actions between 08:24 and 08:31 UTC on 2026-08-09;
- every request was served by Cloudflare and returned the older commit `a6e9256369b0b2c29f3c80e428708e0b2da4894c`, built at `2026-08-09T07:57:41.833Z`;
- therefore `app-pages` branch publication is not sufficient proof of production application deployment, and pull request #62's PWA registration repair, keyboard accessibility repair and auxiliary Legado UI statement are not yet verified on the public reader hostname.

### Why automation cannot finish these steps

The remaining mutations are outside the repository and require control of the Cloudflare configuration currently serving `webnovel.win`. Repository code, application/documentation artifacts, exact build identities, canonical metadata, and the noncanonical documentation mirror are ready. The current tool environment exposes GitHub repository control and public routing evidence but no authenticated write control for the Cloudflare account/zone/projects serving `webnovel.win`; no installable Cloudflare control plugin was available in the current plugin catalog.

Repointing GitHub Pages to the custom domain or treating `app-pages` as public production would hide the real routing problem rather than repair it.

### Minimal external action required

Using the Cloudflare account that controls `webnovel.win`:

1. **Documentation:** create or select a documentation Pages deployment sourced from `AutoArchive/webNR`, production branch `main`; set build command to `python -m pip install --requirement .github/requirements-docs.txt && bash scripts/build-docs-production.sh`, output directory `site`, and `PYTHON_VERSION=3.12`; attach `www.webnovel.win` to that documentation deployment. If `www` is currently attached to a stale Pages project, Worker route, or other origin, replace that attachment. Do **not** attach `www.webnovel.win` to the reader project.
2. **Reader:** identify the Cloudflare route/project currently serving `app.webnovel.win` and reconnect it to the application deployment path that receives the current `app-pages`/reader build. Remove or replace the stale origin/cache/project binding that continues to serve `a6e9256369b0b2c29f3c80e428708e0b2da4894c`. Preserve `app.webnovel.win` as the reader runtime.

### Acceptance after the external action

- `https://www.webnovel.win/build.json` exposes the current rendered documentation commit (currently `7140fd24277ab357ed8029db8aa8f6c1ecdfe6bd` until another rendered-site change supersedes it);
- `www` directly serves the 2026-08-06 Legado source guide, 2026-08-08 legal free-reading guide, and 2026-08-09 WebNR Legado web-alternative article;
- canonical tags, sitemap and RSS remain on `www.webnovel.win`;
- `https://app.webnovel.win/build.json` exposes the current reader application artifact (currently `7140fd24277ab357ed8029db8aa8f6c1ecdfe6bd` until superseded);
- the public reader shows the auxiliary Legado statement and passes the Service Worker, local TXT/URL import, persistence, keyboard and error-recovery acceptance paths represented by the permanent Chromium suite;
- GA4 `G-DGH8HNQKE4` remains present with the owner-selected full-URL reader behavior;
- `www.webnovel.win` remains documentation/editorial/search and `app.webnovel.win` remains the reader application.

The configured Google Drive folder currently contains no matching GA4 or Search Console exports. That data-source gap is not a human blocker and must continue to be reported as unavailable rather than zero.

Merged automation branch cleanup is best-effort repository hygiene. A connector without a branch-deletion operation, or a harmless failure to delete an already-merged head branch, is not a blocker and must not be recorded here.

The automation is authorized to perform all normal collection, repository, branch, pull-request, CI-wait, self-review, squash-merge, deployment-wait, verification, and closeout steps. Add an item only when an external system truly requires a human-only action or the required account permission does not exist. Include the exact blocked action, evidence, impact, and minimal human action needed. Remove resolved items in the next pull request.
