Web Novel Discussion Radar Starter
==================================

Purpose
-------
This WebNR-owned source is a monthly, reader-facing directory of public discussion routes for web-novel discovery. It is designed to answer “where are readers discussing this kind of recommendation question?” while keeping community posts, comments, account state, story text, ratings, votes, and platform-owned metadata on the originating service.

Capability admitted on 2026-08-28; refreshed 2026-09-07
-------------------------------------------------------
- Native WebNR search_index.yml served from app.webnovel.win.
- Nine WebNR-authored catalog entries covering seven screened community/collection candidates: Royal Road Recommendations, r/ProgressionFantasy recommendation threads, r/litrpg monthly/recommendation threads, r/noveltranslations monthly recommendations, Scribble Hub Forum discoverability discussions, SpaceBattles Story Ideas & Recommendations, and r/rational weekly request/recommendation threads.
- Each entry stores only a first-party public destination URL, WebNR-authored title/description/tags, the observed/publication date used for the radar, and a link-only editorial license marker.
- No remote post body, comment, username, vote count, story text, cover, rating, account state, or private/personal data is copied into the source.
- No API credential, login cookie, crawler, CAPTCHA bypass, robots bypass, paid access, or background synchronization is used.

Screening and source-specific audit
-----------------------------------
1. Royal Road Recommendations / related public forum threads — admitted.
   Origin: Royal Road official forum and first-party Terms of Service. Royal Road permits ordinary reading of user-created content without an account. Its Terms state that creators retain ownership of their uploaded content and grant Royal Road the licenses needed for the service. WebNR therefore treats forum content as source-controlled material and publishes only WebNR-authored route descriptions plus first-party links. No competitive catalog copy, story metadata replication, or user-content mirror is created.
   Access/runtime: HTTPS public reader pages; no credentials required for the admitted route. WebNR runtime fetches only this local YAML index, so Royal Road rate limits, pagination, cookies, JavaScript behavior, and transient forum availability never become synchronization dependencies.
   Update/deletion: monthly radar review re-checks the route and date context. Historical source changes remain recoverable in Git. A moved/deleted discussion is corrected through the normal PR lane rather than silently substituted.

2. Reddit r/ProgressionFantasy, r/litrpg, r/noveltranslations, and r/rational public discussion collections — admitted at bounded link-only editorial capability.
   Origin: public Reddit community pages, Reddit User Agreement effective 2026-07-01, and Reddit Data API Terms last revised 2026-07-20. The current source does not call Reddit APIs and does not register or impersonate an API client. It stores WebNR-authored labels and links to public threads only.
   Access/runtime: no Reddit request occurs when WebNR synchronizes the source. Readers choosing a result navigate to Reddit under Reddit’s own access controls. No pagination, rate-limit, OAuth, cookie, account, moderation, deletion, or API-response semantics are claimed by WebNR.
   Update/deletion: each sampled route is date-stamped. The 2026-09-07 refresh added that day’s r/rational Monday Request and Recommendation Thread after first-party public verification. Future radar cycles can add new public routes through review while preserving earlier provenance in repository history.

3. Scribble Hub Forum discoverability discussion — admitted at bounded link-only editorial capability.
   Origin: Scribble Hub first-party Terms of Service updated 2026-06-29 and its public forum. The Terms describe user content as user-posted material and grant Scribble Hub service-scoped rights to host/display/distribute it. WebNR therefore keeps the discussion itself on Scribble Hub and stores only a WebNR-authored discovery label and first-party URL.
   Access/runtime: public HTTPS route observed during the audit; no account, API, cookie, feed, or credential is required for the WebNR source itself. WebNR sync remains a local-YAML operation.
   Update/deletion: monthly health review verifies that the public route still represents a useful discovery discussion; corrections use normal PR review.

4. SpaceBattles Story Ideas & Recommendations — admitted on 2026-09-07 at bounded link-only editorial capability.
   Origin: the first-party SpaceBattles forum exposes a dedicated Story Ideas & Recommendations board whose public description explicitly covers story recommendations, reviews, requests, workshop ideas, and story discussion. The current SpaceBattles Terms of Service state that user-generated content expresses its author’s views, that users retain copyright over submitted content, and that SpaceBattles receives the service license needed to publish or re-publish that content. WebNR therefore does not copy forum posts, usernames, reviews, thread statistics, or story text; it stores only a WebNR-authored label and the first-party board URL.
   Access/runtime: the board is publicly readable over HTTPS without a WebNR credential. The WebNR source does not request SpaceBattles during synchronization, does not use an account or API, and does not depend on forum pagination, filters, cookies, JavaScript, or rate-limit behavior. A reader choosing the result navigates to SpaceBattles under its own controls.
   Update/deletion: the 2026-09-07 audit verified the public board and current first-party terms. A moved, removed, or access-restricted destination will be corrected or downgraded through normal review rather than followed by a crawler or silently replaced.

Candidates screened on 2026-09-07 but not admitted
---------------------------------------------------
- SpaceBattles Creative Library — useful first-party browsing surface for stories and quests, and current staff documentation describes it as a content-discovery interface. It is not added separately in this refresh because Story Ideas & Recommendations more directly answers the current reader task and avoids duplicating two routes from the same platform before usage value is demonstrated.
- Sufficient Velocity Story Library — first-party public browsing surface for user-written stories. Deferred because the current source refresh is about recommendation/request routes; a later source can admit it only if the catalog role is distinct from existing fiction/discovery sources and its link-only reader value is demonstrated.
- Sufficient Velocity Creative Discussion & Worldbuilding — public first-party creative discussion area. Deferred because its current purpose is broader creation/worldbuilding discussion rather than a dedicated reader recommendation queue.
- Tapas Writing | Novels — publicly readable official forum category, and Tapas Terms of Service explicitly include the Tapas Forum while stating that users retain ownership of submitted content. Deferred because the category mixes writing questions, feedback, self-promotion, and reader requests; it is useful as an editorial research route but presently noisier than the admitted recommendation destinations.
- r/rational Monday Request and Recommendation Thread — passed the existing Reddit platform audit and was admitted as the ninth route because the 2026-09-07 first-party thread has an explicit request/recommendation purpose and remains link-only; no Reddit API or copied user content is involved.

Why this source is a native integration rather than a copied discussion feed
--------------------------------------------------------------------------
The WebNR repository interface currently consumes bounded search_index.yml catalogs. The audited platforms expose user discussions under platform-specific rights and access rules, while Reddit’s programmatic API carries its own registration/terms boundary. This source uses WebNR’s native catalog format to make community discovery searchable without importing community text. A future richer adapter requires a source-specific machine interface, explicit access/redistribution bounds, stable identity, pagination or cursor behavior where applicable, rate-limit/backoff rules, update/deletion semantics, response-size/timeout bounds, and versioned fixtures before promotion.

Provenance and reproducible sampling
------------------------------------
The 2026-08 radar used a fixed 2026-08-01 through 2026-08-28 observation window and a fixed community basket: Royal Road Recommendations/Debate, r/ProgressionFantasy, r/litrpg, r/noveltranslations, and Scribble Hub Forum. Query families included recommendations, finished/completed, audiobook, underrated/small authors, AI-assisted, slice of life, romance, and stat blocks.

The 2026-09-07 refresh re-checked that maintained basket and screened six additional public collection/routes for the next community slot: SpaceBattles Story Ideas & Recommendations, SpaceBattles Creative Library, Sufficient Velocity Story Library, Sufficient Velocity Creative Discussion & Worldbuilding, Tapas Writing | Novels, and the current r/rational Monday Request and Recommendation Thread. SpaceBattles Story Ideas & Recommendations and r/rational passed as bounded additions. The source still stores only a small set of representative reader routes; companion reader articles explain sampling limits and treat public posts as examples of discussion structure rather than population estimates.

Compatibility and health
------------------------
- WebNR native YAML catalog: yes.
- Legado text-source compatibility: not applicable; this is a discussion-discovery directory, not a text corpus.
- HTTPS: yes for all admitted destinations at audit time.
- Credentials: none.
- External synchronization requests: none.
- WebNR index size: intentionally tiny and far below the 5 MiB repository-index limit.
- Last source-specific audit: 2026-09-07.

Reader value
------------
A user can add one WebNR repository URL, search phrases such as completed, audiobook, underrated, fic search, rational, rankings, or translated novels, and jump to a public community route where that recommendation pattern is discussed. The local index supplies stable WebNR-owned discovery labels while the originating community retains the discussion and its governance.
