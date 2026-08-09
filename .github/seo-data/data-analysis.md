# WebNR daily data analysis contract

## Purpose

Every WebNR operating cycle includes a data-analysis pass before selecting routine
content, source, product, or promotion work. Analysis turns current evidence into
one or more explicit decisions; it is not a reporting-only exercise and it does
not replace same-cycle repair of confirmed technical defects.

The repository is public. Raw provider exports, user-level rows, private provider
identifiers, credentials, cookies, IP addresses, client IDs, and full analytics
request logs remain outside Git. The daily record contains only public-safe
aggregates, evidence status, comparisons, decisions, and delivery results.

## Required evidence sources

Read every source that is currently available and label unavailable sources
truthfully:

1. **GA4** — the configured WebNR destination, using finalized exports or
   connected provider evidence when available.
2. **Google Search Console** — query, page, country, device, search appearance,
   date, indexing, and sitemap evidence when available.
3. **Infrastructure traffic** — Cloudflare or another production-provider source
   when the relevant zone or project is exposed through connected tools.
4. **GitHub and delivery** — pull requests, issues, CI, dependency audit,
   deployments, build identities, workflow failures, and release state.
5. **Public production** — application and documentation routes, status codes,
   canonical, robots, sitemap, rendered content, configured GA4, important user
   flows, and source-health checks.
6. **Reader-content evidence** — publication dates, internal links, indexed pages,
   landing-page performance, query coverage, referrals, and content freshness.
7. **Source program evidence** — candidates discovered, candidates fully audited,
   integrations attempted, integrations passed, health-test results, failures,
   languages, formats, capability levels, and replacement work.
8. **Public community evidence** — public posts, discussions, recommendations,
   recurring questions, and platform differences sampled under the method in
   `promotion.md` and the active editorial assignment.

A missing source never becomes zero traffic, zero demand, or zero failures. Record
it as missing, delayed, partial, inaccessible, or outside the current data window.
Continue with the other evidence sources.

## Time windows

Use the timezone and provider lag in `site.md`.

For each daily cycle, separate:

- **Operational window:** the previous 24 hours and all activity since the last
  completed cycle;
- **Short trend:** latest finalized 7 days compared with the preceding 7 days;
- **Decision window:** latest finalized 28 days compared with the preceding
  comparable period when sufficient data exists;
- **Search window:** use the latest Search Console data that has passed the
  configured finalization lag;
- **Source-health window:** current live checks plus the last successful and last
  failed check for every source touched in the cycle;
- **Community window:** the explicit public date range and communities sampled for
  the current analysis.

Never compare partial and finalized windows without marking the difference. Small
samples require narrow language and may support investigation rather than a site
change.

## Daily analysis sequence

### 1. Verify data quality

For each provider or evidence route, record:

- availability and freshness;
- exact date window;
- whether the data is finalized, partial, sampled, delayed, or schema-changed;
- duplicate or missing files;
- unexpected changes in measurement IDs, hostnames, filters, exports, or field
  definitions;
- whether the evidence belongs to the application, documentation site, or both.

Repair broken collection, export, analytics, or attribution paths in the same
cycle when a safe technical path exists.

### 2. Analyze acquisition and search

When available, review:

- GA4 users, sessions, views, engaged sessions, engagement rate, landing pages,
  source/medium, referrals, device class, and country at an aggregate level;
- Search Console clicks, impressions, CTR, average position, query/page pairs,
  new queries, rising and declining queries, new and declining landing pages,
  indexing state, sitemap coverage, and hostname or canonical anomalies;
- reader-intent groups: source finding, platform/app comparison, community and
  discussion, recommendations, regional ecosystems, Legado migration, product
  help, and troubleshooting;
- whether search traffic reaches an adequate answer, a stale page, a missing
  page, the wrong canonical, or a page that fails to offer the next useful route.

Do not publish raw query rows or full user-level URLs in Git. Full URLs may be
analyzed inside the authorized provider under the owner-selected analytics policy;
public records contain only safe aggregates and public URLs needed to explain a
decision.

### 3. Analyze content performance and gaps

Review all content published or materially updated in the previous 30 days:

- indexability, canonical, sitemap presence, internal-link entry points, static
  rendered body, last verified date, and deployment identity;
- impressions, clicks, CTR, landing-page engagement, referrals, and query breadth
  when available;
- whether the page directly answers its named reader question;
- overlap, cannibalization, thin variants, stale facts, dead recommendations, and
  missing follow-up pages;
- reader-content cadence: whether a qualifying asset reached production in the
  rolling 48-hour window;
- editorial-calendar progress and whether observed demand justifies reordering,
  consolidating, expanding, or updating scheduled work.

Choose updates for reader value and evidence strength. Do not create a page merely
because a keyword appeared once or because a cadence slot is due.

### 4. Analyze product and delivery quality

Review:

- open defects and regressions;
- CI pass/fail/skip/cancel state and failure recurrence;
- dependency and security findings;
- application and documentation build health;
- exact application and documentation production commits;
- import, reading, progress, export, PWA, offline, accessibility, and analytics
  smoke-test results;
- synthetic performance or benchmark results when the test method is stable;
- release, migration, rollback, and data-safety evidence.

Any reproducible low-risk technical defect preempts routine content and source
work until repaired, safely rolled back, or truthfully blocked.

### 5. Analyze source growth and health

For the daily source program, report:

- number discovered, fully audited, accepted, rejected, deferred, integrated,
  repaired, downgraded, and removed;
- pass rate by source type, language, format, and capability level;
- recurring rejection and failure reasons;
- time since last successful health check;
- CORS, authentication, rate-limit, encoding, pagination, timeout, metadata,
  license, robots, and Bridge/WebView patterns;
- duplicate coverage and new reader value;
- Legado fixture coverage and unsupported rule families;
- which WebNR-owned adapter, normalized feed, wrapper, or static catalog would
  convert a valuable candidate into a safe usable source.

The daily target is one passing integration, not one unreviewed link. A day with
no passing candidate still records the audited evidence and uses it to improve the
candidate queue, adapter roadmap, compatibility fixtures, or rejection rules.

### 6. Analyze public reader discussion

When the current content or promotion work uses public community evidence:

- define the platforms, communities, date range, search terms, inclusion rules,
  and sample size;
- identify recurring reader questions, recommendation criteria, source problems,
  platform-specific vocabulary, and disagreements between communities;
- distinguish observed posts from editorial synthesis;
- treat deleted, private, closed-group, paywalled, or inaccessible conversation
  as unavailable;
- avoid identifying private individuals or presenting a small sample as universal
  reader opinion.

Use community evidence to improve reader questions, comparisons, source audits,
and editorial ordering. Do not fabricate popularity, consensus, or causality.

## Required daily decisions

End every analysis pass with explicit decisions in the daily record:

1. **Technical decision:** repair, rollback, investigate, or no confirmed defect.
2. **Content decision:** publish, update, consolidate, defer, or keep the current
   editorial-calendar item, with evidence.
3. **Source decision:** integrate, build an adapter, add a fixture, reject, defer,
   repair, downgrade, or remove.
4. **Search decision:** improve an existing page, create a genuinely missing
   answer, strengthen internal links, fix indexability, or take no action because
   evidence is insufficient.
5. **Community decision:** publish or update a community-facing analysis, change
   the sampling method, monitor longer, or take no action.
6. **Measurement decision:** repair analytics/export quality, preserve the current
   setup, or mark evidence unavailable.

A decision may be “no change” when the evidence is weak. Do not manufacture a
site change to make the analysis look productive.

## Daily record requirements

The normal daily report must contain a concise public-safe analysis section with:

- data sources and freshness;
- operational, 7-day, and 28-day windows actually available;
- important movements and anomalies;
- content and search findings;
- product and deployment findings;
- source pipeline and source-health findings;
- public community findings when sampled;
- explicit decisions and the evidence behind them;
- actions delivered through PR, CI, merge, deployment, and verification;
- unresolved uncertainty and the next evidence needed.

Do not commit raw CSV contents, raw analytics rows, full provider responses,
private URLs, Drive IDs, property IDs, account IDs, or user-level event data.

## Weekly and monthly synthesis

On the first completed cycle after each seven-day boundary, add a weekly synthesis
covering reader acquisition, search coverage, content performance, source growth,
source health, product reliability, community signals, and plan changes.

On the first completed cycle after each calendar month, add a monthly synthesis
covering:

- progress against the 90-day plan;
- reader-content assets published and materially updated;
- indexed pages and search-intent coverage;
- source candidate, audit, integration, health, and removal totals;
- Legado compatibility and fixture progress;
- product reliability, incidents, release, and data-safety progress;
- which content and source programs should expand, consolidate, pause, or change;
- the next month's editorial and integration priorities.

Weekly and monthly synthesis uses finalized comparable windows and clearly marks
missing evidence.

## Completion criteria

The data-analysis portion of a daily cycle is complete only when:

- every available configured evidence route was checked;
- missing and partial evidence was labelled truthfully;
- operational, content, search, product, source, and relevant community findings
  were reviewed;
- explicit evidence-backed decisions were recorded;
- actionable technical collection or production defects entered the same-cycle
  repair path;
- the public daily record contains no prohibited raw or private data.
