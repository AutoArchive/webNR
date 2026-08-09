# Human-only blockers

No current human-only production blocker is recorded. The `www.webnovel.win` Cloudflare routing incident was resolved on 2026-08-09 and accepted against exact public build identity, current reader articles, canonical/sitemap/RSS output, the single GA4 destination, and the separate reader application.

The configured Google Drive folder currently contains no matching GA4 or Search Console exports. That data-source gap is not a human blocker and must continue to be reported as unavailable rather than zero.

Merged automation branch cleanup is best-effort repository hygiene. A connector without a branch-deletion operation, or a harmless failure to delete an already-merged head branch, is not a blocker and must not be recorded here.

The automation is authorized to perform all normal collection, repository, branch, pull-request, CI-wait, self-review, squash-merge, deployment-wait, verification, and closeout steps. Add an item only when an external system truly requires a human-only action or the required account permission does not exist. Include the exact blocked action, evidence, impact, and minimal human action needed. Remove resolved items in the next pull request.
