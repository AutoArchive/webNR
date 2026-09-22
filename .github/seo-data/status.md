# WebNR operating status

This file records only the current durable operating state and active focus. Historical delivery detail is retained in `.github/seo-data/daily/*.md`, pull requests, workflow runs, and Git history; do not append an ever-growing delivery ledger here.

## Current state

- Last merged product/source change: pull request #187, squash merge `2ebd54164b696c68433ab843cc16846daae962bb`.
- Latest merged reader-content change: pull request #187, squash merge `2ebd54164b696c68433ab843cc16846daae962bb`.
- Last successful attributable application deployment: `2ebd54164b696c68433ab843cc16846daae962bb`
- Current application verification target: `2ebd54164b696c68433ab843cc16846daae962bb`
- Last successful attributable documentation deployment: `2ebd54164b696c68433ab843cc16846daae962bb`
- Current documentation mirror verification target: `2ebd54164b696c68433ab843cc16846daae962bb`
- Last successful canonical Cloudflare documentation deployment: `2ebd54164b696c68433ab843cc16846daae962bb`
- Current canonical documentation verification target: `2ebd54164b696c68433ab843cc16846daae962bb`
- Latest application deployment artifact branch commit: `81aa0deaa842064325ed29f6222947a819a0ea5c`; its `build.json` names source commit `2ebd54164b696c68433ab843cc16846daae962bb`.
- Latest documentation mirror artifact branch commit: `0045ea3efc098b9e1f21e8c1272b9f103e686bc8`; its `build.json` names source commit `2ebd54164b696c68433ab843cc16846daae962bb`.
- Canonical public documentation/editorial URL: `https://www.webnovel.win/`.
- Working reader URL: `https://app.webnovel.win/`.
- Working documentation build mirror URL: `https://autoarchive.github.io/webNR/`.
- Current skill submodule: `f42128a3f05c73cf10c786a2711c488bb3a14839`, matching the `AutoArchive/seo-skill` default branch during the 2026-09-22 recheck.
- Maintained source families: **36**.
- `Web Novel Discussion Radar Starter`: **12** WebNR-authored link-only routes. It synchronizes local YAML only; no community post body, username, reply, vote, story text, account state, API request, login, crawler, or background origin synchronization is introduced.
- Latest substantial reader asset: **“北欧免费经典电子书去哪找？Lönnrot、Runeberg、Bækur、Bokselskap 怎么选”**, published from #187 at `https://www.webnovel.win/blog/2026/09/22/nordic-free-classic-ebooks-lonnrot-runeberg-baekur-bokselskap/`.
- Application production evidence: deployment workflow `35759762747` succeeded for exact #187 source/content commit `2ebd54164b696c68433ab843cc16846daae962bb`, including the exact-public-build verifier. Cloudflare Pages `webnr` independently succeeded for artifact commit `81aa0deaa842064325ed29f6222947a819a0ea5c`.
- Documentation production evidence: workflow `35759762859` published `gh-pages` artifact `0045ea3efc098b9e1f21e8c1272b9f103e686bc8`, whose `build.json` names `2ebd54164b696c68433ab843cc16846daae962bb`; Cloudflare Pages `webnr-docs` independently succeeded for exact main commit `2ebd54164b696c68433ab843cc16846daae962bb`.
- Post-merge source/content Quality run `35759762814` completed successfully for exact #187 squash commit; Production evidence, Documentation quality, Web quality, and Chromium user journeys all succeeded.
- Current analytics implementation: sole GA4 destination `G-DGH8HNQKE4`; `page_location` uses `window.location.href`, `page_path` uses `window.location.pathname + window.location.search`; Google signals and ad-personalization signals remain disabled.
- Current analytics export state: the configured connected Google Drive folder `webNR SEO Weekly CSV` contained no non-trashed GA4 or Search Console exports on 2026-09-22. Provider aggregates are unavailable rather than zero.
- Current Cloudflare traffic-analytics state: request/visit metrics remain unavailable rather than zero because the connected multi-account provider path still requires interactive account/scope selection in the non-interactive connector. This evidence limitation does not replace or weaken exact public build/deployment verification.
- Human-only blockers: none currently prevent normal repository operation. Provider-metric gaps are evidence limitations, not blockers.

## Current signals

- WebNR remains a local-first browser TXT reader. Imported book content and reading progress stay in the current browser profile; reader and documentation surfaces intentionally send page views under the analytics contract above.
- The reader-first landing and curated Blog information architecture introduced by #147–#148 remains authoritative. Public reader pages should answer reader tasks rather than expose daily audit ledgers, PR/CI/deployment bookkeeping, provider-data gaps, or speculative roadmaps.
- The September 22 source cycle screened five fresh candidate identities: Projekti Lönnrot, EEVA, ePaveldas, Zacharias Topelius Skrifter, and Doria. Lönnrot passed as the 36th maintained family at a three-route first-party link-only boundary; EEVA and ePaveldas received full audits and were deferred for collection/item-rights plus runtime semantics; Topelius and Doria were screened and deferred rather than admitted from incomplete collection-wide reuse evidence.
- Rotating source health checks on 2026-09-22 passed Bækur.is, Bokselskap, and Memoria Chilena at their already admitted capability boundaries. No source-specific access or rights restriction was bypassed.
- The September 22 Nordic free-classics guide is the newest substantial reader asset and satisfies the rolling 48-hour reader-content cadence.
- `Projekti Lönnrot Finnish Classics Discovery Starter` is bounded to exactly three reviewed first-party routes: project home, author index, and completed-book index. WebNR does not crawl Lönnrot at runtime, download or unzip TXT packages, mirror files, proxy requests, forward credentials, or synchronize in the background. A richer direct-TXT adapter requires explicit file identity, encoding, provenance, transport/CORS, update/deletion, resource/failure, and fixture evidence.
- `Memoria Chilena Literature Discovery Starter` remains bounded to three reviewed first-party routes and mixed item-level rights remain authoritative; free online access is not treated as a collection-wide redistribution licence.
- `Projekt Gutenberg-DE German Classics Discovery Starter`, `e-rara Swiss Rare Books`, `BEIC Italian Digital Library`, `BVPB Spanish Heritage`, `BNDigital Brazil`, `Bækur.is Icelandic Books`, `ADL Danish Literature`, `Biblioteca Virtual Miguel de Cervantes`, and `Bokselskap Norwegian Literature` remain bounded to their reviewed first-party link-only destinations unless a later source-specific audit supports richer capability.
- `Open Medieval French Direct TXT Starter` remains bounded to its three audited commit-pinned raw TXT files and preserves upstream CC BY-NC-SA 4.0 provenance, noncommercial, and share-alike language.
- `Alice & Books Public Domain Discovery Starter` remains discovery-only under its audited site-access terms. Public-domain status of a work does not itself authorize automated/systematic site access.
- The eight-route `Fanfiction Discovery Starter` and 12-route Discussion Radar remain at their proven capabilities. Richer interfaces require explicit source-specific rights/access, transport, identity, paging/cadence, update/deletion, attribution, resource/failure, and versioned-fixture evidence.
- Missing finalized GA4/GSC exports and safely scoped Cloudflare request metrics continue to prevent provider-native traffic/search trend scoring. Missing evidence remains unavailable rather than zero and must not be replaced with synthetic traffic, ranking, CTR, conversion, or referral claims.

## Active focus

1. Preserve exact independently verified production identities through the public-evidence gate. Do not advance a recorded target from a repository commit or preview alone; require attributable provider/public evidence.
2. Preserve the reader-first landing and curated Blog information architecture. New public content must fit a concrete reader task and must not reintroduce daily audit ledgers, PR/CI/deployment notes, provider bookkeeping, archive/category navigation sprawl, or speculative roadmap claims into reader pages.
3. Preserve all **36** maintained source families and rotate health checks at the capability level actually admitted. Remove, downgrade, replace, or expand only from reproducible source-specific evidence. Keep Discussion Radar link-only and add a route only when its reader task is distinct and its access boundary is explicitly reviewed.
4. Keep Projekti Lönnrot, Memoria Chilena, Projekt Gutenberg-DE, e-rara, BEIC, BVPB, BNDigital, Bækur.is, ADL, Cervantes Virtual, and Bokselskap bounded to their reviewed link-only destinations unless a later explicit automated-use/rights/transport/record-file-identity/update-deletion/paging/resource-failure/provenance/fixture audit supports richer capability. Keep Open Medieval French bounded to its three audited commit-pinned files and preserve its CC BY-NC-SA 4.0 boundary.
5. Keep Alice & Books discovery-only under its current site-access terms and DBNL discovery-only until a real browser CORS fixture proves direct-TXT transport.
6. Build the smallest deterministic TEI-to-reading-text runtime/fixture before advancing ADL structured data, NeoLatDraCor, DutchDraCor, First1KGreek, VWWP, ELTeC, or CoNSSA/TextGrid beyond research/discovery status.
7. Preserve Legado suite `2026-08-30.1` as the L1 baseline. Move the next compatibility increment toward the smallest bounded clean-room L2 declarative runtime before claiming execution compatibility.
8. Advance raw-TXT usability through previewed multi-file/folder import, remote byte-level encoding handling, generated-source linting, and explicit resource/failure fixtures rather than silently broadening ingestion claims.
9. Preserve the eight-route Fanfiction Discovery Starter and move richer interfaces forward only with explicit capability evidence; do not fabricate credentials or convert access-restricted surfaces into hidden runtime dependencies.
10. Continue checking real finalized GA4, Search Console, and Cloudflare evidence when available. Missing provider evidence remains unavailable rather than zero and must not be replaced with synthetic traffic, ranking, CTR, conversion, or referral claims.
