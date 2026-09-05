Web Novel Discussion Radar Starter
==================================

Purpose
-------
This WebNR-owned source is a monthly, reader-facing directory of public discussion routes for web-novel discovery. It is designed to answer “where are readers discussing this kind of recommendation question?” while keeping community posts, comments, account state, story text, ratings, votes, and platform-owned metadata on the originating service.

Capability admitted on 2026-08-28
----------------------------------
- Native WebNR search_index.yml served from app.webnovel.win.
- Seven WebNR-authored catalog entries covering five screened community/collection candidates: Royal Road Recommendations, r/ProgressionFantasy recommendation threads, r/litrpg monthly/recommendation threads, r/noveltranslations monthly recommendations, and Scribble Hub Forum discoverability discussions.
- Each entry stores only a first-party public destination URL, WebNR-authored title/description/tags, the observed/publication date used for the radar, and a link-only editorial license marker.
- No remote post body, comment, username, vote count, story text, cover, rating, account state, or private/personal data is copied into the source.
- No API credential, login cookie, crawler, CAPTCHA bypass, robots bypass, paid access, or background synchronization is used.

Screening and source-specific audit
-----------------------------------
1. Royal Road Recommendations / related public forum threads — admitted.
   Origin: Royal Road official forum and first-party Terms of Service. Royal Road permits ordinary reading of user-created content without an account. Its Terms state that creators retain ownership of their uploaded content and grant Royal Road the licenses needed for the service. WebNR therefore treats forum content as source-controlled material and publishes only WebNR-authored route descriptions plus first-party links. No competitive catalog copy, story metadata replication, or user-content mirror is created.
   Access/runtime: HTTPS public reader pages; no credentials required for the admitted route. WebNR runtime fetches only this local YAML index, so Royal Road rate limits, pagination, cookies, JavaScript behavior, and transient forum availability never become synchronization dependencies.
   Update/deletion: monthly radar review re-checks the route and date context. Historical source changes remain recoverable in Git. A moved/deleted discussion is corrected through the normal PR lane rather than silently substituted.

2. Reddit r/ProgressionFantasy, r/litrpg, and r/noveltranslations public discussion collections — admitted at bounded link-only editorial capability.
   Origin: public Reddit community pages, Reddit User Agreement effective 2026-07-01, and Reddit Data API Terms last revised 2026-07-20. The current source does not call Reddit APIs and does not register or impersonate an API client. It stores WebNR-authored labels and links to public threads only.
   Access/runtime: no Reddit request occurs when WebNR synchronizes the source. Readers choosing a result navigate to Reddit under Reddit’s own access controls. No pagination, rate-limit, OAuth, cookie, account, moderation, deletion, or API-response semantics are claimed by WebNR.
   Update/deletion: each monthly sample is date-stamped. Future radar cycles can add new public routes through review while preserving earlier provenance in repository history.

3. Scribble Hub Forum discoverability discussion — admitted at bounded link-only editorial capability.
   Origin: Scribble Hub first-party Terms of Service updated 2026-06-29 and its public forum. The Terms describe user content as user-posted material and grant Scribble Hub service-scoped rights to host/display/distribute it. WebNR therefore keeps the discussion itself on Scribble Hub and stores only a WebNR-authored discovery label and first-party URL.
   Access/runtime: public HTTPS route observed during the audit; no account, API, cookie, feed, or credential is required for the WebNR source itself. WebNR sync remains a local-YAML operation.
   Update/deletion: monthly health review verifies that the public route still represents a useful discovery discussion; corrections use normal PR review.

Why this source is a native integration rather than a copied discussion feed
--------------------------------------------------------------------------
The WebNR repository interface currently consumes bounded search_index.yml catalogs. The audited platforms expose user discussions under platform-specific rights and access rules, while Reddit’s programmatic API carries its own registration/terms boundary. This source uses WebNR’s native catalog format to make community discovery searchable without importing community text. A future richer adapter requires a source-specific machine interface, explicit access/redistribution bounds, stable identity, pagination or cursor behavior where applicable, rate-limit/backoff rules, update/deletion semantics, response-size/timeout bounds, and versioned fixtures before promotion.

Provenance and reproducible monthly sampling
--------------------------------------------
The 2026-08 radar uses a fixed 2026-08-01 through 2026-08-28 observation window and a fixed community basket: Royal Road Recommendations/Debate, r/ProgressionFantasy, r/litrpg, r/noveltranslations, and Scribble Hub Forum. Query families include recommendations, finished/completed, audiobook, underrated/small authors, AI-assisted, slice of life, romance, and stat blocks. The source stores only a small set of representative reader routes; the companion research article explains sampling limits and treats public posts as examples of discussion structure rather than population estimates.

Compatibility and health
------------------------
- WebNR native YAML catalog: yes.
- Legado text-source compatibility: not applicable; this is a discussion-discovery directory, not a text corpus.
- HTTPS: yes for all admitted destinations at audit time.
- Credentials: none.
- External synchronization requests: none.
- WebNR index size: intentionally tiny and far below the 5 MiB repository-index limit.
- Last source-specific audit: 2026-08-28.

Reader value
------------
A user can add one WebNR repository URL, search phrases such as completed, audiobook, underrated, rankings, or translated novels, and jump to a public community route where that recommendation pattern is actively discussed. The local index supplies stable WebNR-owned discovery labels while the originating community retains the discussion and its governance.
