# Human-only blockers

No human-only blocker is active as of 2026-08-09.

The Cloudflare production-routing incident is resolved:

- `www.webnovel.win` is the sole canonical documentation/editorial/search hostname on the independent `webnr-docs` Pages project and exposes an exact attributable build;
- `app.webnovel.win` remains the reader runtime on the separate `webnr` Pages project and exposes the exact reviewed application artifact;
- GitHub Pages remains a noncanonical documentation build mirror;
- automatic preview deployments are disabled on both Cloudflare projects, while production branch deployments remain enabled;
- the documentation project excludes pure `.github/seo-data/*` changes from build triggers so a status-only closeout cannot invalidate its own production record.

The configured Google Drive folder still contains no matching GA4 or Search Console exports. That data-source gap is unavailable, not zero, and is not a human blocker.

The optional `webnovel.win` apex alias has no DNS record. It is not the canonical hostname and is not treated as a production outage.

Merged automation branch cleanup is best-effort repository hygiene. A connector without a branch-deletion operation, or a harmless failure to delete an already-merged head branch, is not a blocker and must not be recorded here.

The automation is authorized to perform all normal collection, repository, branch, pull-request, CI-wait, self-review, squash-merge, deployment-wait, verification, and closeout steps. Add an item only when an external system truly requires a human-only action or the required account permission does not exist. Include the exact blocked action, evidence, impact, and minimal human action needed. Remove resolved items in the next pull request.
