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
This WebNR-maintained source is a small link-only directory for readers looking
for fan fiction and transformative serial fiction. It points to first-party
search or browse surfaces while leaving work metadata, fandom ownership,
accounts, ratings, comments, downloads, and story text at the origin.

Included discovery routes
-------------------------
- FanFiction.Net — first-party story and crossover search across its fandom archive
- Fimfiction — first-party story browse and search for My Little Pony fanfiction
- Scribble Hub — first-party Fanfiction genre directory for serialized works hosted on Scribble Hub

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
Its Terms of Service, last observed updated 2026-06-29, describe user-posted works
as User Content and grant Scribble Hub service-specific hosting/display rights;
WebNR does not infer a redistribution license from that relationship. The current
integration therefore links the public Fanfiction directory without copying or
polling user submissions.

Current WebNR behavior
----------------------
Selecting an item opens the corresponding first-party discovery page. WebNR does
not call origin APIs, crawl catalog HTML, poll rankings or updates, proxy
responses, mirror metadata, cache origin assets, automate accounts, submit forms,
perform downloads, or attempt to bypass age, login, payment, captcha, robots,
rate-limit, or other access controls.

Because the admitted capability is static link-only, the WebNR reader path adds
no origin-site CORS, cookie, login, pagination, request-cadence, response-size,
encoding, timeout, WebView, or Bridge dependency. Any limits or account rules a
reader encounters after following a normal link remain those of the origin.

Audit boundary
--------------
The three included HTTPS discovery routes were checked through normal public web
access on 2026-08-25. FanFiction.Net's search surface did not require an account
for the audited reader path. Fimfiction's public Stories page rendered a browse
and filter surface without requiring an account, while also indicating that some
site functionality benefits from JavaScript. Scribble Hub's Series Finder and
Fanfiction genre were publicly discoverable without an account in the audited
path.

The committed search index is the versioned fixture for this static link-only
capability. A richer adapter for any origin would require a separate audit of an
explicitly permitted machine interface, current terms and robots behavior,
stable work/edition identity, pagination, request cadence, rate limits, timeouts
and backoff, provenance, attribution, update/deletion semantics, regional and
age/access boundaries, maximum response size, and representative versioned
fixtures.

Candidate boundary
------------------
Archive of Our Own (AO3) remains a high-value candidate for the scheduled
fanfiction ecosystem work, but no source capability was admitted in this cycle
because the operating environment did not provide sufficiently current
first-party machine-access and policy evidence for a complete source audit.
Twisting the Hellmouth was also screened but its first-party reader surface was
not reliably accessible from the operating environment during this cycle. Neither
candidate is treated as failed, licensed, or safe for automated ingestion by
assumption; both remain deferred for a later evidence-complete audit.

Last verified
-------------
2026-08-25
