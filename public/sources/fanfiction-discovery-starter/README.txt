Fanfiction Discovery Starter
============================

Repository URL
--------------
https://app.webnovel.win/sources/fanfiction-discovery-starter

One-click add URL
-----------------
https://app.webnovel.win/?repos=https%3A%2F%2Fapp.webnovel.win%2Fsources%2Ffanfiction-discovery-starter

Purpose
-------
This WebNR-maintained source is a small discovery directory for readers looking
for fan fiction and transformative serial fiction. It points to first-party
search or browse surfaces while leaving work metadata, fandom ownership,
accounts, ratings, comments, downloads, and story text at the origin.

Included discovery routes
-------------------------
- FanFiction.Net — first-party story and crossover search across its fandom archive
- Fimfiction — first-party story browse and search for My Little Pony fanfiction
- Scribble Hub — first-party Fanfiction genre directory for serialized works hosted on Scribble Hub
- Archive of Our Own (AO3) — first-party work search across fanworks and transformative works
- SquidgeWorld Archive — first-party work search across its independent multifandom archive
- fanfiction.lol — first-party fandom directory for a small independent archive in active development
- Sunset — first-party home for a fan-run F/F, F/NB, and NB/NB transformative-work archive

Content and rights boundary
---------------------------
The committed index contains only first-party destination URLs plus short
WebNR-authored descriptions and discovery labels. It does not copy story titles,
summaries, covers, author profiles, fandom metadata, ratings, comments, bookmarks,
release history, downloadable files, account data, or story text from any origin.

FanFiction.Net's current public Terms of Service restrict redistribution and
automated access beyond ordinary browser-like use, and its current robots policy
also carries explicit crawler controls. This starter therefore performs no
FanFiction.Net crawling, search polling, offline reading, scraping, or mirroring;
it only lets a reader choose to open the normal first-party search page.

Fimfiction exposes both a public story browser and an official developer API. Its
API terms require responsible resource use, rate-limit compliance, appropriate
caching, no excessive polling, and no replication of the site's core
functionality. The existence of that API is not treated as blanket permission to
mirror its catalog. This starter deliberately stays link-only and uses no API
credentials, OAuth state, background polling, download endpoints, or copied story
metadata. A richer adapter would require its own capability-limited design,
current API/rights review, request bounds, deletion semantics, and versioned
fixtures.

Scribble Hub exposes a public Series Finder and a first-party Fanfiction genre.
Its Terms of Service describe user-posted works as User Content and grant
Scribble Hub service-specific hosting/display rights; WebNR does not infer a
redistribution license from that relationship. The current integration therefore
links the public Fanfiction directory without copying or polling user
submissions.

AO3's current Terms of Service and Terms FAQ distinguish prohibited commercial
scraping and policy-violating automation from generally permitted noncommercial
bot or scraping purposes, while reserving the Archive's right to apply
robots.txt and other technical limits. The official OTW-Archive code repository
also states that the software currently has no API. AO3 separately documents
Atom feeds for most canonical tags and expressly describes those feeds as usable
in personal feed readers or for syndication on other sites. This evidence is
enough to admit AO3 as a first-party discovery route and to record Atom as a
future machine-interface candidate. WebNR's current repository runtime consumes
`search_index.yml`, not arbitrary Atom feeds, so this cycle does not pretend that
the reader can yet synchronize those feeds. A later Atom adapter must prove
browser/runtime transport, feed identity, pagination or truncation behavior,
update semantics, rate limits, response bounds, attribution, and fixtures before
promotion.

SquidgeWorld Archive exposes a public OTW-Archive-style Work Search. Squidge.org
states that users own their data and Squidge hosts it, and its current terms
expressly prohibit scraping or aggregation for AI or machine-learning datasets.
The admitted WebNR capability makes no origin requests beyond a reader following
the normal search link and performs no content aggregation, so it stays within a
narrow discovery boundary.

fanfiction.lol exposes a public fandom directory and current first-party content
policy. The site prominently identifies itself as an active-development service
where features may break and data may be accidentally deleted. The WebNR entry
therefore makes that stability limitation visible and keeps the capability to a
normal first-party discovery link. No site content is copied into WebNR.

Sunset identifies itself as a fan-created, fan-run, nonprofit, noncommercial
archive dedicated to F/F, F/NB, and NB/NB transformative works. Its public home,
collections surface, and current Terms FAQ rendered through ordinary public web
access during this audit. The currently published Terms FAQ carries the same
OTW-Archive-style distinction between policy-violating scraping and generally
permitted non-policy-violating automation while retaining site-level technical
control. WebNR admits only Sunset's public home as a specialized archive-discovery
route in this cycle, so no source-side tag vocabulary, work metadata, collection
membership, account state, or content is replicated.

Current WebNR behavior
----------------------
Selecting an item opens the corresponding first-party discovery page. WebNR does
not call origin APIs, crawl catalog HTML, poll rankings or updates, proxy
responses, mirror metadata, cache origin assets, automate accounts, submit forms,
perform downloads, or attempt to bypass age, login, payment, captcha, robots,
rate-limit, anti-bot, or other access controls.

Because the admitted capability is static link-only, the WebNR reader path adds
no origin-site CORS, cookie, login, pagination, request-cadence, response-size,
encoding, timeout, WebView, or Bridge dependency. Any limits or account rules a
reader encounters after following a normal link remain those of the origin.

Audit boundary
--------------
The seven included HTTPS discovery routes were checked through normal public web
access on 2026-08-26 or retained from the immediately preceding verified cycle.
The new source-specific review covered origin identity, public access, current
terms or content-policy evidence, redistribution boundary, machine-interface
claims, account/access controls, runtime transport, and the exact capability
shipped.

AO3's first-party Search and Browse FAQ documents work search across tags, title,
author, words, hits, kudos, published date, and language, and its current Tags
FAQ documents canonical tags and tag-wrangling behavior. Current first-party
news from June 2026 confirms that tag wranglers continue to revise canonical
"No Fandom" tag relationships. The source entry therefore points to search
rather than encoding a frozen interpretation of AO3's tag taxonomy.

SquidgeWorld's public Work Search rendered without requiring an account for the
audited reader path and exposed completion, crossover, word-count, language,
fandom, rating, warning, character, relationship, additional-tag, hit, kudos,
comment, and bookmark filters.

fanfiction.lol's public fandom directory rendered without an account and exposed
its current archive categories. Its active-development warning is treated as a
source-health limitation rather than suppressed.

Sunset's public home rendered without an account and described the archive's
specialized scope. A current first-party Collections surface also rendered and
showed active 2026 collections and prompt projects, while account-only creation
and subscription functions remain origin-owned. This bounded review is complete
for the single public-home discovery capability admitted here.

The committed `search_index.yml` is the versioned fixture for this discovery
capability. A richer adapter for any origin requires a separate audit of an
explicitly permitted machine interface, current terms and robots behavior,
stable work/edition identity, pagination, request cadence, rate limits, timeouts
and backoff, provenance, attribution, update/deletion semantics, regional and
age/access boundaries, maximum response size, and representative versioned
fixtures.

Candidate review
----------------
Five additional adjacent archive families were screened for this cycle beyond
the prior starter set: SquidgeWorld Archive, fanfiction.lol, Sunset, Ad Astra,
and the Comic Fanfiction Authors Archive (CFAA). SquidgeWorld, fanfiction.lol,
and Sunset received complete bounded source-specific review for the exact
link-only capability considered here and are admitted above.

Ad Astra's legacy archive remains publicly readable and explicitly says the old
site is a preserved read-only snapshot, while its current primary archive is
protected by an Anubis anti-bot challenge in the operating environment. The
current primary reader surface therefore remains deferred from a WebNR source
definition until a normal, reproducible reader route can be verified without
bypassing that control.

CFAA remains discoverable as an active comics-focused archive through current
fandom archival references, while its first-party site also presents an Anubis
anti-bot challenge in the operating environment and current first-party terms
could not be completed in this cycle. It remains deferred rather than being
treated as safe for ingestion by assumption.

Rotating health review
----------------------
The existing FanFiction.Net search, Fimfiction Stories/search documentation, and
Scribble Hub Series Finder/Fanfiction discovery surfaces were rechecked on
2026-08-26 and remained publicly discoverable in the audited reader path. Their
capability remains limited to ordinary first-party discovery links; no broader
machine-access or redistribution permission is inferred from availability.

Machine-interface upgrade path
------------------------------
AO3 is no longer deferred for lack of policy evidence. Current first-party
evidence supports ordinary discovery and documents an official Atom feed surface
for canonical tags, while the OTW-Archive repository confirms there is no
general API. The remaining blocker for a richer AO3 integration is WebNR's
runtime capability and transport/fixture validation, not an invented claim that
AO3 has an API or that all scraping is forbidden.

Fimfiction remains the strongest existing official-API upgrade candidate. Its
next richer integration should be a capability-limited API adapter with explicit
rate-limit, cache, identity, deletion, pagination, timeout, and fixture behavior,
rather than a catalog mirror.

Last verified
-------------
2026-08-26
