# WebNR long-term product, reader-content, and source plan

## Primary outcome

Operate WebNR as three connected products:

1. a dependable local-first reader;
2. a reader-facing discovery and recommendation publication about web novels,
   reading sites, apps, communities, channels, and sources;
3. an open compatibility layer that can ingest Legado definitions, OPDS, feeds,
   public TXT collections, and WebNR-owned source adapters.

Reader discovery is the primary public-content program. Product manuals,
compatibility documentation, and engineering reports support that program rather
than define the site's editorial identity.

## Readers and search intent

The primary readers are people asking practical questions such as:

- where can I read a particular kind of web novel;
- where can I find working Legado sources;
- which novel site or app fits a language, genre, device, or reading habit;
- where do readers discuss and recommend novels;
- what is currently popular in reader communities and why;
- how do Royal Road, Scribble Hub, Wattpad, AO3, Novel Updates, platform forums,
  Discord communities, Reddit communities, newsletters, video channels, and
  other discovery routes differ;
- which free, public-domain, self-published, or authorized collections can be
  added to a reader;
- how can a reader move sources and books between Legado and WebNR.

Every public page should answer one concrete reader question and help the reader
choose a site, app, source, community, channel, or reading route.

## Reader-facing editorial programs

### 1. Source finding and source health

Publish continuously maintained guides to finding, testing, importing, and
replacing sources. Cover Legado source discovery, public TXT collections, OPDS,
RSS/Atom, public-domain libraries, author-published feeds, and WebNR-owned
adapters. Source pages should report the last verification date, supported
languages and formats, access requirements, common failures, and a clear reader
use case.

### 2. Novel sites, apps, and reading channels

Compare sites and apps by the questions readers actually have: language, genre,
serialization model, discovery quality, comments and reviews, offline behavior,
export options, accessibility, account requirements, regional availability, and
content model. Include newsletters, podcasts, YouTube channels, community lists,
forums, and other public discovery channels when they materially help readers.

### 3. Reader communities and public discussion

Analyze public discussion across reader communities and social platforms. Useful
outputs include community maps, recurring recommendation patterns, genre
vocabulary, platform-specific tastes, disagreement between communities, and
monthly discussion reports. Preserve links and context, distinguish visible
public discussion from editorial inference, and avoid presenting a few posts as
community consensus.

### 4. Recommendations and reading routes

Create useful recommendation pages around a clear reader need: progression
fantasy, LitRPG, romance, fan fiction, translated web novels, finished serials,
short-form fiction, public-domain classics, or another evidenced demand. Explain
why each work, platform, or channel fits the request, where it can be read, its
status, language, length or serialization pattern when verifiable, and the source
of the recommendation signal. Do not create generic title dumps.

### 5. Regional and cross-platform ecosystem maps

Maintain reader-oriented maps of Chinese, English, Japanese, Korean, fan-fiction,
independent-serial, and translated-fiction ecosystems. Show how readers move
between original platforms, translation indexes, community recommendations,
apps, feeds, and local readers. Update pages when platforms, access routes, or
community practices materially change.

### Supporting product and compatibility documentation

Continue adding WebNR manuals, troubleshooting, release notes, source-development
documentation, benchmarks, and compatibility reports. These pages should support
reader journeys and source integration. They are an auxiliary program rather
than the default content choice.

## Publication cadence

- Deploy at least one substantial reader-facing content asset in every rolling
  48-hour window.
- Prefer a meaningful update to an established high-value page when it produces
  more reader value than another URL.
- Publish one research-heavy ecosystem or community analysis per week when the
  evidence supports it.
- Publish two practical guides, comparisons, recommendation pages, or source
  discovery pages per week.
- Publish one source-health, discussion-radar, or ecosystem update per week.
- Technical manuals and release documentation are published when product work
  creates a real reader need; they do not replace the reader-facing cadence by
  default.

A content asset does not qualify through a title, front matter, metadata, a short
list, or a cosmetic freshness edit alone.

## Search and indexing requirements

Use stable descriptive URLs and titles that closely match the reader's actual
question. Each page must:

- give the practical answer near the beginning;
- contain original testing, comparison, reporting, community analysis, source
  audit, or editorial synthesis;
- state the tested or observed date and applicable product or platform version
  when relevant;
- distinguish verified facts, public discussion, and editorial recommendation;
- link naturally to related guides, source pages, platform comparisons, and
  WebNR import routes;
- have one canonical URL, appear in the sitemap and intended navigation, and
  render as static indexable HTML;
- avoid copied platform descriptions, keyword variants, mass-generated summaries,
  fabricated popularity, and unsupported rankings;
- be refreshed when source health, access routes, app behavior, or reader value
  changes materially.

Search traffic is evidence, not the sole purpose. The content should remain
useful when read directly or cited by another search or answer system.

## Research skill use

Use the pinned `$research-blog` skill for topics requiring broad ecosystem,
historical, cross-language, social-platform, or contested analysis. This includes
multi-round public-web Deep Research and Sider Scholar, all materially relevant
languages, at least 5,000 Chinese main-text characters, normally at least 40
substantive sources split between academic and primary/community/platform
material, counterevidence, original synthesis, claim-level citations, complete
references, literal-negation scanning, defensive-semantic review, and verified
production delivery.

Do not mechanically apply the research-paper source floor to a hands-on guide,
source health report, app walkthrough, or benchmark. Those pages instead require
current first-hand testing, reproducible fixtures or measurements, and primary
sources such as official documentation, standards, public feeds, and project
source code.

## Daily source discovery and integration

Every daily operating cycle must:

1. discover at least five new candidate sources or collections;
2. perform a full audit of at least three candidates;
3. attempt to integrate at least one passing candidate;
4. record safe rejection reasons for candidates that fail;
5. retest previously integrated sources and repair, downgrade, or remove broken
   entries.

The target is one new usable source per day, not one unreviewed link per day. If
no candidate passes, continue discovery and ship the day's product or content
work without lowering the source bar.

### Source forms WebNR may create

A candidate does not need to be natively WebNR-compatible. WebNR may create and
maintain:

- a native WebNR repository definition;
- an OPDS 1.2 or OPDS 2.0 adapter;
- an RSS or Atom adapter;
- a Legado-to-WebNR compatibility adapter;
- a normalized catalog generated from a public website index, sitemap, API, or
  authorized feed;
- a static source for an authorized or public-domain TXT collection;
- a WebNR-owned source that combines several compatible public feeds while
  retaining provenance and direct acquisition links.

Metadata from the origin is optional. A TXT collection may begin with filenames
and direct files. WebNR may derive a display title from the filename and mark
unknown fields as unknown. Never invent authorship, license, provenance, update
status, or popularity. Cache or host book content only when the applicable
license or authorization permits it; otherwise index metadata and link to the
origin.

### Source audit

For each candidate, verify and record internally or in the source registry as
appropriate:

- origin, maintainer, and public URL;
- license, public-domain status, author authorization, or other distribution
  basis;
- terms, robots behavior, and rate limits;
- supported language, format, and catalog size when verifiable;
- search, browse, detail, table-of-contents, content, feed, or direct-file
  behavior relevant to the source type;
- HTTPS, redirects, CORS, cookies, login, JavaScript, WebView, and Bridge needs;
- requested domains and capability/permission manifest;
- timeout, pagination, maximum response, encoding, and failure behavior;
- at least one versioned fixture and a reproducible health check;
- compatibility level, last tested date, and known limitations;
- duplication with existing sources and reader value added.

Do not integrate sources whose normal operation depends on bypassing login,
payment, DRM, captchas, robots, access controls, or unauthorized redistribution.

## Legado compatibility objective

Pursue broad clean-room compatibility rather than requiring publishers to adopt
WebNR first.

### Compatibility phases

1. **Import and inspect** — parse common Legado JSON, preserve unknown fields,
   show supported and ignored fields, and produce a compatibility report.
2. **Declarative reading flow** — support common search, book information,
   table-of-contents, content, pagination, CSS, XPath, JSONPath, regular-expression,
   headers, charset, and replacement rules through versioned fixtures.
3. **Stateful rules** — add controlled cookies, variables, login-state import,
   rate limits, and source-specific state with explicit permissions.
4. **Restricted scripting** — execute required JavaScript in a capability-limited,
   timed, memory-limited worker or isolated runtime.
5. **Bridge-dependent behavior** — expose optional browser-extension or desktop
   Bridge support for WebView and cross-origin capabilities that a normal web
   page cannot provide.

Each public claim must name the tested compatibility level and fixture-suite
version. Third-party Legado definitions may enter an isolated compatibility
corpus before official recommendation.

## Technical operations

Perform a concentrated repair pass for all currently confirmed technical debt
instead of spreading known repairs across artificial daily increments. After the
repair pass, use daily operation for production monitoring, regression tests,
source health, dependency/security checks, and same-cycle bug fixes.

Product priorities are:

1. backup, restore, and versioned browser-storage migration;
2. end-to-end import, reading, offline, accessibility, and update tests;
3. robust TXT encoding, chapters, large-file handling, search, bookmarks, and
   notes;
4. stable releases and rollback;
5. real EPUB parsing and safe rendering;
6. the Legado compatibility phases above.

## First 90 days

### Days 1–30

- complete the current technical repair pass;
- establish the reader-facing content program and internal-link structure;
- publish the first 15 scheduled content assets;
- discover at least 150 source candidates, fully audit at least 90, and target 30
  passing integrations;
- ship initial OPDS, RSS/Atom, TXT-collection, and Legado import fixtures;
- publish a source directory with health and last-tested information.

### Days 31–60

- expand regional ecosystem and platform comparison coverage;
- publish recurring public-discussion and source-health reports;
- implement common declarative Legado search, detail, TOC, and content rules;
- add source health automation and a compatibility dashboard;
- use Search Console evidence to consolidate or expand pages by reader intent.

### Days 61–90

- deepen recommendation programs by genre and reading route;
- add restricted scripting or Bridge design where fixtures justify it;
- publish measured app, source, and compatibility comparisons;
- establish a repeatable community contribution route for source reports,
  corrections, recommendations, and compatibility fixtures.

## Success signals

- indexed reader-facing pages and growth in relevant Search Console query/page
  coverage;
- readers reaching source, platform, app, community, and recommendation pages
  and then opening WebNR or an appropriate origin;
- passing source integrations, source-health rate, and repair time;
- Legado fixture coverage by capability level;
- successful import-to-reading and backup/restore journeys;
- useful community corrections and source contributions;
- exact PR, CI, deployment, and public verification for every published change.

Short-term incidents belong in daily records or issues. This file owns durable
reader positioning, content cadence, source growth, compatibility goals, and the
90-day operating program.
