# Human-only blockers

## Merged-branch deletion

- Blocked action: delete merged temporary branches after squash merge.
- Evidence: pull request #14 merged successfully, but `seo/bootstrap-autonomous-operations` remains because the current GitHub connector exposes branch creation and ref updates but no delete-ref operation.
- Impact: repository, CI, merge, deployment, technical SEO, and UX work can continue; stale merged branches will accumulate until repository-side automatic deletion or a delete-ref capability is available.
- Minimal external resolution: enable automatic deletion of merged head branches in repository settings, or expose a GitHub delete-reference action to the automation.

The connected Cloudflare accounts do not currently expose the `webnovel.win` zone, and Google Drive does not currently contain matching GA4 or Search Console exports. These data-source gaps are tracked in `status.md`; automation must continue using public-site, repository, CI, and deployment evidence rather than stopping or fabricating analytics.

The automation is authorized to perform all other normal collection, repository, branch, pull-request, CI-wait, self-review, squash-merge, deployment-wait, verification, and closeout steps. Add another item only when an external system truly requires a human-only action or the required account permission does not exist. Include the exact blocked action, evidence, impact, and minimal human action needed. Remove resolved items in the next pull request.
