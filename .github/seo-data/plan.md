# SEO plan

## Purpose

Make WebNR the clearest privacy-first, account-free browser reader for user-owned, public-domain, and authorized TXT web novels, with a fast first-use path, dependable offline behavior, and durable bilingual help content.

## Success signals

- Search visibility: Search Console clicks, impressions, click-through rate, and query/page coverage once exports become available.
- Acquisition quality: entry-page engagement measured only through privacy-compatible aggregate evidence.
- Product activation: publicly testable completion of import, reading, offline installation, and return-to-progress journeys without collecting book titles, reading content, history, or source URLs.
- Technical quality: successful PR checks, production deployment tied to the exact squash commit, valid metadata, accessible controls, working offline shell, and no broken public links.
- Trust: privacy documentation and runtime behavior remain consistent.

## Operating constraints

- Raw analytics stay outside Git.
- Never collect or publish imported filenames, novel titles, reading content, reading history, source URLs, or other user-level data.
- Every automated change uses a fresh branch and a real non-draft pull request.
- Required and expected CI must pass before the final automated self-review.
- A clean final review is followed by squash merge; human review is not needed.
- Site changes wait for the exact squash commit's production deployment and public verification.
- Post-merge evidence is recorded through a metadata-only closeout pull request that follows the same CI, self-review, and squash-merge rules.
- Normal operation does not require human approval.
- Implement at most one coherent product or SEO outcome in each main pull request.

Short-term fixes, one-off audits, and remediation backlogs belong in GitHub issues or daily records, not in this durable plan.
