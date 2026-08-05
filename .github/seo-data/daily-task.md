# Daily SEO task

## Objective

Run one fully autonomous, evidence-backed SEO, product-quality, and user-experience operating cycle for WebNR. No normal step requires human approval. Every local calendar day must deliver at least one meaningful user-visible improvement to the production application or its public help content.

## Schedule

- Frequency: daily
- Timezone: use `site.md`
- Data window: use the lookback and finalization lag in `site.md`
- Pull-request scope: one coherent outcome per main pull request; use additional focused pull requests in the same cycle when independent defects also require repair

## Required sequence

1. Read the pinned `$collect-seo-data` skill, `$change-seo-site` when a site change is justified, all `.github/seo-data/*.md` files, and newest reports.
2. Fetch the remote default branch and create a fresh branch from it for each coherent outcome.
3. Check whether the `seo-skills` submodule has an allowed update and include an available update in the first compatible main pull request.
4. Collect finalized Google Drive and available Cloudflare evidence without committing raw data or private identifiers. When a provider is unavailable, record that fact and continue with public-site, repository, CI, deployment, issue, and user-journey evidence.
5. Inspect the live application and repository for actionable technical defects affecting onboarding, accessibility, privacy, security, crawlability, performance, reliability, data safety, PWA behavior, compatibility, build health, or deployment. Repair every confirmed low-risk, reversible, and verifiable defect during the same operating cycle. Do not defer a discovered repair merely because another pull request has already shipped that day.
6. Deliver at least one meaningful user-visible production update every day. Prefer fixing product behavior or improving an existing high-value page. When no product defect is justified, publish or substantially improve durable help, compatibility, troubleshooting, benchmark, release, or source-development content backed by actual WebNR behavior. Never create thin pages, keyword variants, generic AI articles, fabricated measurements, or changes made only to satisfy cadence.
7. Write or append `.github/seo-data/daily/YYYY-MM-DD.md`; refresh `status.md`, maintain future work in `plan.md`, and keep `block.md` limited to genuine human-only or permission blockers.
8. For each coherent change, define its production acceptance check before editing, validate locally when possible, push the branch, and create a real non-draft pull request.
9. Wait for all required and expected CI, self-review the complete final diff, commits, generated output, security/privacy boundaries, and check results; fix and repeat when needed, then squash-merge. Attempt to delete the merged head branch only when safe deletion is supported; branch cleanup is best-effort and non-blocking.
10. For every site-visible change, wait for the exact squash commit to deploy successfully and verify the intended behavior on the public site.
11. Open a metadata-only closeout pull request with final evidence for the cycle; wait for CI, self-review, and squash-merge it.
12. Continue autonomously while safe progress is possible. Record a `block.md` item only when an external system enforces a human-only action or required permission is absent. A missing branch-deletion operation, unavailable optional analytics source, or undeleted merged automation branch is not a blocker.

## Daily completion

A day is complete only after all actionable confirmed technical defects discovered during the cycle have been repaired or accurately proven non-actionable, at least one meaningful user-visible update has reached production, every main pull request and the closeout pull request are squash-merged, required and expected CI is green, each exact squash commit has a successful attributable deployment, and the public acceptance checks pass. Merged branch cleanup is optional repository hygiene. A failed or missing CI check, failed or unattributable deployment, local-only commit, issue, draft PR, workflow URL, HTTP 200 alone, metadata-only update, or unverified content does not satisfy the daily requirement.
