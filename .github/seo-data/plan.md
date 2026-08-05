# SEO plan

## Purpose

Make WebNR a trustworthy, local-first, account-free reader for user-owned, public-domain, and authorized books, with a fast first-use path, dependable offline behavior, durable bilingual help, and progressively tested interoperability with common open reading formats and clean-room Legado-compatible data and rules.

## Success signals

- Search visibility: Search Console clicks, impressions, click-through rate, and query/page coverage once exports become available.
- Acquisition quality: people arriving on public pages can understand WebNR, import supported content, and start reading without developer documentation.
- Product activation: publicly testable completion of local file import, URL import, reading, offline installation, backup/restore, and return-to-progress journeys without collecting book titles, reading content, history, or source URLs.
- Technical quality: successful PR checks, production deployment tied to the exact squash commit, valid metadata, accessible controls, working offline shell, current supported dependencies, tested storage migrations, and no broken public links.
- Compatibility: a versioned public fixture suite reports supported TXT, EPUB, repository, and later Legado-compatible fields and rules without claiming untested full compatibility.
- Trust: privacy documentation and runtime behavior remain consistent; official registries contain only public-domain, self-owned, or explicitly authorized sources.
- Daily progress: at least one meaningful user-visible application or durable help-content improvement is deployed and verified each local calendar day.

## Product-led content system

Public content must originate from real product behavior, compatibility work, user problems, test fixtures, error codes, releases, or measured benchmarks. Priority formats are:

1. verified getting-started and task guides;
2. stable troubleshooting pages tied to reproducible errors;
3. format and Legado-compatibility matrices with versioned fixtures;
4. release notes, migration guides, security and privacy explanations;
5. measured import, storage, rendering, offline, accessibility, and compatibility reports.

Do not publish generic AI-writing articles, keyword-variant pages, fabricated benchmarks, untested compatibility claims, copied third-party documentation, or mass-generated thin content.

## Operating constraints

- Raw analytics stay outside Git.
- Never collect or publish imported filenames, novel titles, reading content, reading history, source URLs, cookies, credentials, or other user-level data.
- Every automated change uses a fresh branch and a real non-draft pull request.
- One pull request contains one coherent outcome, but a daily cycle may and should use multiple focused pull requests to repair independent confirmed defects.
- Required and expected CI must pass before the final automated self-review.
- A clean final review is followed by squash merge; human review is not needed.
- Site changes wait for the exact squash commit's production deployment and public verification.
- Post-merge evidence is recorded through a metadata-only closeout pull request that follows the same CI, self-review, and squash-merge rules.
- A metadata-only update never satisfies the daily user-visible production requirement.
- Normal operation does not require human approval.
- Legado interoperability must be clean-room, capability-limited, versioned, and described as compatibility rather than affiliation; WebNR does not bundle books or unreviewed high-risk sources.

Short-term fixes and one-off remediation details belong in daily records or focused GitHub issues. Durable architecture, compatibility levels, content standards, and operating rules belong here.
