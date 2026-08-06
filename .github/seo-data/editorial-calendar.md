# WebNR reader content and source calendar

This calendar starts on 2026-08-06 in `America/Los_Angeles`. Product incidents
and confirmed technical defects preempt the planned article for that operating
cycle, but the rolling 48-hour content requirement remains. A delayed item moves
to the next available slot instead of being silently dropped.

## 30-day publication schedule

| Publish date | Primary reader question | Planned public asset | Source-integration emphasis |
| --- | --- | --- | --- |
| 2026-08-06 | Where can readers find working Legado sources, and how can they judge them? | A current guide to Legado source discovery, testing, import, failure signals, and replacement | Audit public Legado directories and create the first compatibility-corpus fixtures |
| 2026-08-08 | Where can readers legally find free novels and TXT collections? | A maintained directory of public-domain, author-authorized, OPDS, feed, and downloadable-text collections | Project Gutenberg OPDS/RSS and at least two public-domain alternatives |
| 2026-08-10 | Which English serial-fiction platform fits a reader's needs? | Royal Road, Scribble Hub, Wattpad, and adjacent platforms compared by genre, discovery, comments, completion signals, and reading flow | Audit public feeds, APIs, indexes, or link-based adapters for compared platforms |
| 2026-08-12 | Where do web-novel readers discuss and recommend stories? | A map of public Reddit communities, Discord directories, Novel Updates discussions, platform forums, and other reader channels | Build community-link sources or feeds where public syndication is available |
| 2026-08-14 | Which reading app should a reader use? | Reader-oriented comparison of WebNR, Legado, browser readers, OPDS clients, and common mobile/desktop choices | Audit import/export compatibility and public catalog support for each app family |
| 2026-08-16 | Where can readers discover English web fiction beyond one platform? | English web-fiction ecosystem guide covering serial sites, review indexes, newsletters, communities, and public catalogs | Add one or more English discovery feeds or WebNR-owned normalized indexes |
| 2026-08-18 | How does the Chinese online-fiction discovery ecosystem work? | Reader map of original platforms, recommendation channels, discussion spaces, rankings, authorized reading routes, and local-reader workflows | Audit public or authorized Chinese feeds, indexes, and TXT collections |
| 2026-08-20 | How do readers find Japanese web novels and translations? | Reader map of Japanese serialization platforms, recommendation communities, translation indexes, and public-domain alternatives | Audit Japanese public feeds, Aozora-style collections, and compatible catalog adapters |
| 2026-08-22 | How do readers navigate Korean web novels and translated editions? | Reader map of Korean platforms, discovery routes, community discussion, regional access, and translation indexes | Audit public Korean catalog or discussion feeds and document Bridge/login boundaries |
| 2026-08-24 | Where can readers find progression fantasy and LitRPG recommendations? | A recommendation-method guide combining platform tags, reader communities, review lists, and completion status | Add genre-focused feeds, search adapters, or curated WebNR source collections |
| 2026-08-26 | Where can readers find fan fiction and transformative serial fiction? | AO3 and adjacent ecosystem guide focused on search, tags, bookmarks, collections, communities, and local reading | Audit public APIs/feeds and create link-based or export-based adapters where permitted |
| 2026-08-28 | What are readers discussing this month? | First Web Novel Discussion Radar using public posts, recurring questions, rising titles or genres, and differences between communities | Add public discussion feeds and define a reproducible monthly sampling method |
| 2026-08-30 | Which Legado source features work in WebNR today? | Versioned compatibility report with tested fields, fixtures, working examples, and clear capability levels | Integrate the strongest audited Legado candidates into the isolated compatibility corpus |
| 2026-09-01 | How can readers use raw TXT collections that lack a catalog? | Guide to importing folders, filename-derived titles, encodings, provenance, and building a WebNR-owned source | Add one authorized or public-domain TXT collection through a generated WebNR catalog |
| 2026-09-03 | Which sources stayed healthy during the first month? | First source directory and health report with last-tested dates, formats, languages, failures, and replacements | Retest all integrated sources, remove or downgrade failures, and publish the next candidate queue |

## Daily source schedule

Every day, including non-publication days:

1. search for at least five new source or collection candidates;
2. fully audit at least three candidates;
3. target one passing integration;
4. retest a rotating subset of existing sources;
5. create a WebNR-owned adapter or normalized source when the origin is useful but
   does not expose WebNR-native metadata;
6. keep an explicit rejected/deferred queue with safe reasons, without publishing
   private credentials, blocked endpoints, or circumvention instructions.

Candidate discovery rotates through:

- OPDS 1.2 and 2.0 catalogs;
- RSS and Atom feeds from novel sites, authors, newsletters, and public libraries;
- public-domain and authorized TXT or ebook collections;
- public APIs, sitemaps, indexes, and downloadable catalog files;
- public Legado source definitions for compatibility testing;
- open-source CMS and self-hosted fiction catalogs;
- reader-community lists and public recommendation feeds;
- regional sources in Chinese, English, Japanese, Korean, and other evidenced
  reader languages.

## Recurring rhythm after the first 30 days

Use a rolling eight-day cycle:

- **Day 1 — Source discovery:** where-to-read guide, source directory, or source
  health report.
- **Day 3 — Comparison or recommendation:** app, platform, genre, reading route,
  or curated source comparison.
- **Day 5 — Community and discussion:** social-platform analysis, community map,
  public recommendation pattern, or monthly/weekly radar.
- **Day 7 — Ecosystem and compatibility:** regional ecosystem, Legado capability,
  migration guide, or cross-platform reading workflow.

At least one item per week should use `$research-blog` when the question requires
cross-language, historical, social, or ecosystem-wide evidence. Other items may
use direct first-hand testing and primary-source comparison.

## Page acceptance checklist

A scheduled asset is complete only when:

- it answers the named reader question near the top;
- its title and stable URL describe that question plainly;
- recommendations explain selection method and evidence;
- public discussion is sampled and contextualized rather than presented as total
  community opinion;
- source, platform, app, and channel facts have current verification dates;
- related pages and relevant WebNR import routes are linked naturally;
- canonical, sitemap, static rendered HTML, and intended navigation are correct;
- both configured GA4 destinations and the exact build identity remain present;
- the real pull request, CI, squash merge, production deployment, and public page
  verification have completed.
