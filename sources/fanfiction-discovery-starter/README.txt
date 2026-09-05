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
- Asianfanfics — first-party latest-story browse across Asian-pop-culture fandoms and multilingual fanfiction

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

The 2026-08-27 API audit advanced this from a generic future idea to an exact
external dependency. Fimfiction's current developer documentation states that all
API interactions use OAuth2, while its Application Management documentation says
new API applications must currently be created by Fimfiction after a developer
contacts the site operator. WebNR has no registered Fimfiction application or
client credentials in this repository. The documented public `GET /stories`
endpoint supports search, filtering, sorting and cursor pagination (20 default,
100 maximum), but it cannot truthfully be promoted as a working WebNR adapter
until an application identity exists and the resulting transport, rate-limit,
cache, pagination, identity, timeout, update/deletion and fixture behavior is
implemented and tested. No credential was invented, embedded, requested through
a user account, or worked around in this cycle.

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

Asianfanfics exposes a normal public Stories browse surface with Latest, Newest,
Trending, Completed, One Shots, Series and other reader views. Its current
first-party Terms of Use explicitly apply to browsing, scraping and crawling,
state that site and user content remains protected, and prohibit copying or
storing significant portions outside the allowed personal-use boundary without
permission from the relevant owner. The public catalog also includes entries that
are Members Only, Subscribers Only, crowdfunded, or age-restricted. WebNR therefore
admits only the normal public browse destination: it performs no catalog polling,
metadata extraction, account automation or access to gated works, and it leaves
all content and access decisions at Asianfanfics.

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
The eight included HTTPS discovery routes were checked through normal public web
access on 2026-08-27 or retained from the immediately preceding verified cycle.
The new source-specific review covered origin identity, public access, current
terms or content-policy evidence, redistribution boundary, machine-interface
claims, account/access controls, runtime transport, and the exact capability
shipped.

Asianfanfics' public `/browse` surface rendered without requiring an account and
showed current story discovery together with clearly marked Members Only,
Subscribers Only and other gated entries. The audit does not treat a visible title
or public catalog field as permission to copy it into WebNR; the committed entry
contains only WebNR-authored description text and the first-party browse URL.

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

Candidate review — 2026-08-27
-----------------------------
Five new source families were screened in this cycle: Asianfanfics, Quotev,
FictionPress, MediaMiner and Honeyfeed.

Asianfanfics received a complete source-specific audit for the exact public-link
capability admitted above and is the passing integration for this cycle.

FictionPress received a complete bounded audit of its current public service and
first-party Terms of Service. Its terms restrict redistribution, require user
submissions to be accessed through normal service functionality for personal use,
and limit automated systems to human-like request rates except the specific
search-engine indexing exception. It remains a useful original-fiction discovery
candidate, but it is deferred from this fanfiction-specific starter and no
metadata crawler or mirror is inferred from public availability.

Honeyfeed received a complete bounded audit of its active English web-novel
service and current first-party Terms of Service. Its terms similarly reserve
normal-service access to user submissions, restrict redistribution, and constrain
automated systems. It remains a candidate for a separate English-serial discovery
route rather than being folded into this fanfiction-specific source, and no
crawler is admitted in this cycle.

Quotev's current public Fanfiction Browse rendered and its first-party Terms route
was reachable, but the operating environment did not yield a reliable text view
of the current first-party terms body or an explicit supported machine interface.
It remains deferred instead of being admitted from a third-party copy of policy
text.

MediaMiner's public fan-fiction archive and current category pages remained
readable, including recently updated fanfiction, but the bounded review did not
obtain sufficiently current first-party terms or machine-access policy evidence.
It remains deferred rather than being classified as safe for polling or
normalization by assumption.

Rotating health review
----------------------
The existing FanFiction.Net search, Fimfiction search/documentation, and Scribble
Hub Series Finder/genre discovery surfaces were rechecked on 2026-08-27 and
remained publicly discoverable in the audited reader path. Their current admitted
capability remains ordinary first-party discovery links; no broader machine-access
or redistribution permission is inferred from availability.

Machine-interface upgrade path
------------------------------
AO3 is no longer deferred for lack of policy evidence. Current first-party
evidence supports ordinary discovery and documents an official Atom feed surface
for canonical tags, while the OTW-Archive repository confirms there is no
general API. The remaining work for a richer AO3 integration is WebNR runtime
transport plus identity/update/response-bound fixtures.

Fimfiction remains the strongest official-API upgrade candidate technically, and
its public `GET /stories` contract is now sufficiently specific to design against.
The immediate external dependency is application registration: current
Fimfiction documentation requires a developer to contact the site operator so
Fimfiction can create the API application. Once an application identity exists,
WebNR should implement a capability-limited adapter with explicit OAuth handling,
rate-limit/backoff, cache, stable story identity, sparse field selection,
cursor pagination, response-size and timeout bounds, deletion behavior,
provenance, and versioned fixtures instead of mirroring the site.

Last verified
-------------
2026-08-27
