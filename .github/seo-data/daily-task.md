# Daily SEO task

## Objective

Run one fully autonomous, evidence-backed SEO and user-experience operating cycle for WebNR. No normal step requires human approval.

## Schedule

- Frequency: daily
- Timezone: use `site.md`
- Data window: use the lookback and finalization lag in `site.md`
- Maximum site changes: one coherent change per main pull request

## Required sequence

1. Read the pinned `$collect-seo-data` skill, `$change-seo-site` when a site change is justified, all `.github/seo-data/*.md` files, and newest reports.
2. Fetch the remote default branch and create a fresh branch from it.
3. Check whether the `seo-skills` submodule has an allowed update and include an available update in the same main pull request.
4. Collect finalized Google Drive and available Cloudflare evidence without committing raw data or private identifiers. When a provider is unavailable, record that fact and continue with public-site, repository, CI, and deployment evidence.
5. Write or append `.github/seo-data/daily/YYYY-MM-DD.md`; refresh `status.md`, maintain future work in `plan.md`, and keep `block.md` limited to genuine human-only or permission blockers.
6. When evidence supports an improvement, implement at most one coherent SEO, accessibility, performance, reliability, privacy, or onboarding change and define its production acceptance check before editing.
7. Validate locally, push the branch, and create a real non-draft pull request.
8. Wait for all required and expected CI, self-review the complete final diff, fix and repeat if needed, then squash-merge. Attempt to delete the merged head branch only when safe deletion is supported; branch cleanup is best-effort and non-blocking.
9. For a site change, wait for the exact squash commit to deploy successfully and verify the changed behavior on the public site.
10. Open a metadata-only closeout pull request with final evidence; wait for CI, self-review, and squash-merge it.
11. Continue autonomously while safe progress is possible. Record a `block.md` item only when an external system enforces a human-only action or required permission is absent. A missing branch-deletion operation or an undeleted merged automation branch is not a blocker.

## Daily completion

A day is complete only after its main pull request and closeout pull request are squash-merged. A site-change day also requires a successful production deployment for the exact squash commit and public verification. Merged branch cleanup is optional repository hygiene and does not affect completion. A failed or missing CI check, failed deployment, local-only commit, issue, draft PR, workflow URL, or HTTP 200 alone is not completion.
