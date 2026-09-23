Progression & LitRPG Publisher Discovery Starter
================================================

Repository URL
--------------
https://app.webnovel.win/sources/progression-litrpg-publisher-discovery-starter

One-click add URL
-----------------
https://app.webnovel.win/?repos=https%3A%2F%2Fapp.webnovel.win%2Fsources%2Fprogression-litrpg-publisher-discovery-starter

Purpose
-------
This WebNR-maintained source is a small link-only discovery directory for readers
looking for progression fantasy, LitRPG, GameLit, cultivation, and adjacent
publisher catalogs. It points to first-party publisher discovery surfaces while
leaving book metadata, pricing, availability, purchases, account state, ratings,
and work-specific rights at the origin.

Included discovery routes
-------------------------
- Aethon Books — first-party catalog with a dedicated GameLit/LitRPG section and progression-fantasy releases
- Mountaindale Press — first-party publisher catalog centered on LitRPG and related progression fiction
- Portal Books — first-party catalog for LitRPG, progression fantasy, cultivation, and portal adventure
- Wraithmarked Creative — first-party series collections that include Arcane Ascension, Mother of Learning, and Warformed
- Shadow Alley Press — first-party library with LitRPG, cultivation, isekai, and progression-adjacent series
- Timeless Wind Publishing — first-party publisher site explicitly covering progression fantasy, LitRPG, time loops, cultivation, and system-apocalypse fiction

Content and rights boundary
---------------------------
The index contains only first-party destination URLs plus short WebNR-authored
descriptions and discovery labels. It does not copy book descriptions, covers,
prices, ratings, reviews, release schedules, author biographies, retailer data,
or book text from any publisher.

The current Aethon catalog identifies GameLit/LitRPG as a first-party genre and
also exposes progression-fantasy titles under its fantasy catalog. Mountaindale's
current public catalog identifies itself as "The Peak Of LitRPG" and marks its
site content as copyright 2026 Mountaindale Press, all rights reserved. Portal's
current catalog describes its scope as LitRPG, progression fantasy, and portal
adventure, while its public privacy notice does not provide a general content-
reuse license. No reviewed origin exposes an explicit machine-interface license
that would justify copying or continuously polling its catalog. The admitted
capability is therefore link-only.

The 2026-08-24 audit added three first-party discovery routes. Wraithmarked's
public collections page exposes named fantasy series and normal reader-facing
collection links. Shadow Alley Press exposes a public Library and identifies its
focus as adult science fiction, fantasy, and action-adventure; its current catalog
and release pages include LitRPG, cultivation, isekai, and progression-related
series. Timeless Wind Publishing identifies itself as an independent fantasy and
science-fiction publisher and explicitly lists progression fantasy, power fantasy,
LitRPG, time loops, cultivation, and system apocalypse among the genres it seeks
to publish. All three pages were reachable through a normal browser without an
account on 2026-08-24. Their public pages provide no machine-readable reuse grant
that WebNR relies on, so the admitted behavior stays link-only and copies no
origin catalog data.

Two additional candidates were screened during the same cycle and left outside
the source. Royal Guard Publishing presents LitRPG and fantasy publishing but its
first-party site currently emphasizes author submissions and links readers onward
to retailer searches rather than exposing a stable reader catalog. The Legion
Publishers publicly accepts LitRPG, GameLit, Progression Fantasy, Dungeon Core,
Cultivation, Magical Academy, Harem, and Cyberpunk submissions, but the audited
surface is likewise submission-oriented. Both remain candidates for a later
reader-surface audit instead of being admitted on publisher identity alone.

Current WebNR behavior
----------------------
Selecting an item opens the corresponding public publisher catalog or first-party
discovery page. WebNR does not call origin APIs, crawl catalog HTML, poll search or
release pages, proxy responses, mirror metadata, cache publisher assets, automate
accounts, or perform purchases. This starter adds no origin-site cookie, CORS,
pagination, request-cadence, response-size, or rate-limit dependency to the WebNR
reader path.

Audit boundary
--------------
The six included HTTPS discovery routes were rechecked on 2026-08-24 and were
publicly reachable without an account. Because the source makes no runtime
requests to those origins beyond a reader choosing to follow a normal link,
robots rules, automated-request cadence, pagination, CORS, response-size limits,
timeouts, and authenticated sessions are outside the admitted runtime boundary.
The committed search index is the versioned fixture for this static link-only
capability.

A richer adapter would require a separate source-specific audit of an explicitly
permitted machine interface, current terms and robots behavior, stable work and
edition identity, pagination, request cadence, timeouts and backoff, provenance,
attribution, update and deletion semantics, regional availability, and
representative versioned fixtures. Until then, publisher content remains at the
origin.

Last verified
-------------
2026-08-24
