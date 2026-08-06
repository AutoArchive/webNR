# Daily WebNR operating task

## Objective

Run one fully autonomous product, source, reader-content, community, analytics,
and SEO operating cycle for WebNR. The durable priorities and publication
calendar live in `plan.md` and `editorial-calendar.md`.

The operating model is:

1. concentrate and finish currently confirmed technical repairs;
2. continue daily production monitoring and same-cycle bug repair;
3. publish one useful reader-facing content asset in every rolling 48-hour
   window;
4. discover several source candidates every day, fully audit at least three, and
   target one passing integration.

No normal step requires human approval.

## Required skills and context

Read the complete pinned versions of:

- `$operate-seo-site`;
- `$ensure-site-analytics`;
- `$collect-seo-data`;
- `$deliver-github-pr`;
- `$research-blog` when the selected content requires broad, historical,
  cross-language, social, or ecosystem evidence.

Also read repository instructions, all `.github/seo-data/*.md` files, the newest
daily records, open automation work, normal contributor pull requests, issues,
CI, dependencies, deployment state, and current production behavior.

Checking or updating the submodule does not authorize editing
`AutoArchive/seo-skill`. Do not take over another contributor's pull request
without an explicit user instruction.

## Analytics policy

WebNR requires both GA4 destinations on both production sites:

- `G-DGH8HNQKE4`;
- `G-NL0WV2XMJN`.

The owner-selected policy is full-URL reporting. Both destinations must receive
the complete browser URL, including the full query string and imported URLs in
`?add=...`. Keep Google signals and ad-personalization signals disabled unless the
owner explicitly changes that decision. Do not introduce additional custom
events containing local book text, reading progress, credentials, cookies,
authorization values, or browser storage without separate explicit authorization.

Verify analytics in source, generated application and documentation outputs, both
public production sites, the exact deployed commits, and available provider
evidence. Missing, incomplete, policy-inconsistent, or unverified analytics is a
same-cycle technical defect.

## Technical work

### Concentrated repair pass

While confirmed low-risk, reversible, and verifiable technical debt remains,
repair as much as can be reviewed safely in the current operating cycle. Keep one
coherent outcome per pull request, but use multiple focused pull requests rather
than spreading known defects across artificial daily increments.

Audit onboarding, TXT import and encoding, reading flows, browser storage,
backup/restore, IndexedDB and OPFS migrations, PWA updates and offline behavior,
accessibility, performance, dependencies, security, tests, releases, analytics,
crawlability, canonical, robots, sitemap, structured data, internal links, CI,
deployments, and exact public-build attribution.

### Daily guard after repair

After the repair pass, run daily production smoke tests and regression checks for:

- local TXT import and permitted URL import;
- encoding and large-file behavior;
- open/read/progress/export journeys;
- backup, restore, and migrations once implemented;
- PWA installation, update, offline reopening, and cache behavior;
- keyboard, screen-reader, zoom, language, and reduced-motion behavior;
- dependency audit, lint, typecheck, tests, application build, and strict
  documentation build;
- both production deployments, both GA4 destinations, full-URL reporting,
  canonical, robots, sitemap, and important public routes;
- integrated source health and Legado compatibility fixtures.

Repair a reproducible safe bug in the same cycle. A technical defect preempts
routine content or promotion until repaired, safely rolled back, or truthfully
blocked by an external human-only action.

## Reader-content cadence

Check whether a qualifying reader-facing content asset has reached production in
the previous 48 hours. If not, publish or substantially upgrade one in the current
cycle according to `editorial-calendar.md`.

Primary content serves readers who want to find:

- working book sources and TXT collections;
- novel sites and authorized reading routes;
- useful apps and reading channels;
- public reader communities and social-media discussion;
- recommendations by genre, language, completion status, platform, or reading
  habit;
- Chinese, English, Japanese, Korean, translated-fiction, fan-fiction, and
  independent-serial ecosystems;
- practical migration paths between Legado, feeds, catalogs, and WebNR.

Product manuals, troubleshooting, release notes, benchmarks, and source SDK pages
remain supporting content. They may satisfy the 48-hour cadence when they answer a
real current reader or contributor need and contain substantial verified value.

Use `$research-blog` for research-heavy ecosystem and community analysis. Use
current first-hand testing, official standards, official platform documentation,
public feeds, project source, and reproducible fixtures for practical guides and
comparisons. Never publish generic AI articles, copied platform summaries,
keyword variants, fabricated popularity, unsupported rankings, or thin pages.

Every page must have a stable descriptive URL, a direct opening answer, current
verification date, selection or sampling method, natural internal links,
canonical, sitemap entry, static rendered HTML, and exact production verification.

## Daily source discovery and integration

Every cycle must:

1. discover at least five new source or collection candidates;
2. fully audit at least three;
3. target one passing integration;
4. retest a rotating sample of existing sources;
5. repair, downgrade, mark, or remove failed sources;
6. record safe rejection reasons when candidates fail.

A candidate may be OPDS, RSS/Atom, a public API, a public index or sitemap, an
authorized or public-domain TXT collection, an author feed, an open-source CMS,
a public Legado definition, or another useful discovery route.

The origin does not need to be WebNR-compatible and does not need complete
metadata. WebNR may build and maintain its own source definition, adapter,
normalized feed, static TXT catalog, or Legado compatibility wrapper. Derive a
display title from a filename when useful and mark unknown fields as unknown.
Never invent authorship, provenance, license, update state, or popularity.

Before integration, verify distribution basis, terms and robots, HTTPS, CORS,
cookies, login, scripts, WebView or Bridge requirements, requested domains,
permissions, rate limits, pagination, timeout, response limits, encoding, failure
behavior, duplication, reader value, at least one versioned fixture, and a
reproducible health test.

Do not integrate sources that normally depend on bypassing authentication,
payment, DRM, captchas, robots, access controls, or unauthorized redistribution.
The target is one passing source per day, never one unreviewed link per day.

## Legado compatibility

Prefer compatibility with existing Legado sources over requiring maintainers to
rewrite them for WebNR. Progress through versioned fixtures for:

- JSON import and field-preserving inspection;
- common search, book-info, TOC, content, pagination, CSS, XPath, JSONPath,
  regular-expression, header, charset, and replacement rules;
- controlled state, cookies, variables, and permissions;
- restricted JavaScript execution;
- optional Bridge-dependent WebView and cross-origin capabilities.

Publish only the tested compatibility level and fixture-suite version. A public
third-party definition may first enter an isolated compatibility corpus before it
is recommended to readers.

## Delivery sequence

For every coherent product, content, source, corrective, or closeout outcome:

1. use `$deliver-github-pr` to start from the latest remote default branch and
   prepare a fresh `seo/` branch;
2. include a reviewed compatible submodule update in the first suitable pull
   request when available;
3. implement only the intended outcome and define affected routes, unaffected
   routes, public acceptance, and rollback before editing;
4. commit and push the actual code or content and create a real non-draft pull
   request;
5. wait for every required and expected check; missing, queued, skipped, failed,
   cancelled, and timed-out checks block merge;
6. after CI, re-read the complete final diff, commits, generated output, source
   permissions, analytics behavior, content evidence, tests, and deployment
   impact from scratch;
7. fix every finding on the same branch and repeat CI and complete review;
8. squash-merge only with the expected head SHA after a clean final review;
9. identify the production deployments for the exact squash commit and verify
   the affected and representative unaffected public behavior;
10. update the normal daily/status closeout evidence through the same pull-request
    discipline when the repository requires it.

Branch deletion is best-effort hygiene. A branch, preview, workflow URL, artifact,
script tag, provider export, or HTTP 200 alone is not production proof.

## Daily completion

A cycle is complete only when:

- mandatory analytics and full-URL behavior are verified;
- every actionable technical defect discovered in the cycle is repaired and
  publicly verified or has a truthful external blocker;
- at least five source candidates were discovered, at least three fully audited,
  and one passing integration was attempted;
- any due 48-hour reader-content asset was merged, deployed, and publicly
  verified;
- all main and applicable closeout pull requests have green expected CI, clean
  final reviews, and squash merges;
- every rendered change is tied to the exact production commit and passes its
  public acceptance checks.

A metadata-only edit, source candidate list, local patch, issue, draft pull
request, generated branch, or unverified article does not satisfy the public
content or source-integration cadence.
