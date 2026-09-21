# WebNR operating status

This file records only the current durable operating state and active focus. Historical delivery detail is retained in `.github/seo-data/daily/*.md`, pull requests, workflow runs, and Git history; do not append an ever-growing delivery ledger here.

## Current state

- Last merged product/source change: pull request #185, squash merge `71dc7bab829835806e04eb07b670078f385bfd21`.
- Latest merged reader-content change: pull request #182, squash merge `4c26b0c1da74c7201d45c7dbe2f32aba68847635`.
- Last successful attributable application deployment: `71dc7bab829835806e04eb07b670078f385bfd21`
- Current application verification target: `71dc7bab829835806e04eb07b670078f385bfd21`
- Last successful attributable documentation deployment: `4c26b0c1da74c7201d45c7dbe2f32aba68847635`
- Current documentation mirror verification target: `4c26b0c1da74c7201d45c7dbe2f32aba68847635`
- Last successful canonical Cloudflare documentation deployment: `71dc7bab829835806e04eb07b670078f385bfd21`
- Current canonical documentation verification target: `71dc7bab829835806e04eb07b670078f385bfd21`
- Latest application deployment artifact branch commit: `89d8a786be2f329edfd9880df2ddd0bfeb2e7e33`; its `build.json` names source commit `71dc7bab829835806e04eb07b670078f385bfd21`.
- Latest documentation mirror artifact branch commit: `e72b3d80d495071faeb83780f459cbbe1c8b608a`.
- Canonical public documentation/editorial URL: `https://www.webnovel.win/`.
- Working reader URL: `https://app.webnovel.win/`.
- Working documentation build mirror URL: `https://autoarchive.github.io/webNR/`.
- Current skill submodule: `f42128a3f05c73cf10c786a2711c488bb3a14839`, matching the `AutoArchive/seo-skill` default branch during the 2026-09-21 recheck.
- Maintained source families: **35**.
- `Web Novel Discussion Radar Starter`: **12** WebNR-authored link-only routes. It synchronizes local YAML only; no community post body, username, reply, vote, story text, account state, API request, login, crawler, or background origin synchronization is introduced.
- Latest substantial reader asset: **“德语免费经典电子书去哪找？Projekt Gutenberg、DDB、BSB 怎么选”**, published from #182 at `https://www.webnovel.win/blog/2026/09/20/german-free-classic-ebooks-projekt-gutenberg-ddb-bsb/`.
- Application production evidence: deployment workflow `35628996459` succeeded for exact #185 source commit `71dc7bab829835806e04eb07b670078f385bfd21`, including the exact-public-build verifier. Cloudflare Pages `webnr` independently succeeded for artifact commit `89d8a786be2f329edfd9880df2ddd0bfeb2e7e33`. The artifact includes the new Memoria Chilena source and retains the approved GA4/full-URL implementation.
- Documentation mirror identity remains intentionally older because #185 changed only source data and did not trigger the GitHub Pages docs-mirror workflow: `gh-pages` artifact `e72b3d80d495071faeb83780f459cbbe1c8b608a` names source commit `4c26b0c1da74c7201d45c7dbe2f32aba68847635`.
- Canonical documentation identity advanced independently through Cloudflare's Git integration: `webnr-docs` successfully deployed exact main commit `71dc7bab829835806e04eb07b670078f385bfd21`. Do not collapse this split identity into a fictitious single docs artifact.
- Post-merge source Quality run `35628996237` completed successfully for exact #185 source commit; Production evidence, Documentation quality, Web quality, and Chromium user journeys all succeeded.
- Current analytics implementation: sole GA4 destination `G-DGH8HNQKE4`; `page_location` uses `window.location.href`, `page_path` uses `window.location.pathname + window.location.search`; Google signals and ad-personalization signals remain disabled.
- Current analytics export state: the configured connected Google Drive folder `webNR SEO Weekly CSV` contained no non-trashed GA4 or Search Console exports on 2026-09-21. Provider aggregates are unavailable rather than zero.
- Current Cloudflare traffic-analytics state: request/visit metrics remain unavailable rather than zero because the connected multi-account provider path still requires interactive account/scope selection in the non-interactive connector. This evidence limitation does not replace or weaken exact public build/deployment verification.
- Human-only blockers: none currently prevent normal repository operation. Provider-metric gaps are evidence limitations, not blockers.

## Current signals

- WebNR remains a local-first browser TXT reader. Imported book content and reading progress stay in the current browser profile; reader and documentation surfaces intentionally send page views under the analytics contract above.
- The reader-first landing and curated Blog information architecture introduced by #147–#148 remains authoritative. Public reader pages should answer reader tasks rather than expose daily audit ledgers, PR/CI/deployment bookkeeping, provider-data gaps, or speculative roadmaps.
- The September 21 source cycle screened five fresh candidate identities: Memoria Chilena, Biblioteca Digital de la Comunidad de Madrid, DigitalNZ, Trove, and Bibliothèque numérique romande. Memoria Chilena passed as the 35th maintained family at a three-route first-party link-only boundary; Madrid and DigitalNZ received full audits and were deferred for record/object-rights and runtime semantics; Trove and Bibliothèque numérique romande were screened and deferred rather than admitted from incomplete or restrictive reuse evidence.
- Rotating source health checks on 2026-09-21 passed Project Madurai, English Wikisource, and Aozora Bunko at their already admitted capability boundaries. Aozora's separate reception/GitHub-server maintenance notice does not currently break its admitted discovery/publication surface.
- The September 20 German-classics guide remains the newest substantial reader asset and satisfied the rolling 48-hour reader-content cadence on September 21; no cadence-only filler was published.
- A bounded off-site scan found an independent `eliteai.tools` WebNR listing with stale/mischaracterized copy. Because it is externally controlled and no authorized outreach action exists, it is evidence only and does not justify a repository change, popularity/referral claim, or automated contact.
- `Memoria Chilena Literature Discovery Starter` is bounded to three reviewed first-party routes: the official literature topic surface, project/about rights guidance, and copyright/citation/reproduction FAQ. WebNR does not perform runtime Memoria Chilena search, RDF/metadata harvesting, image/scan/PDF/audio/video fetch, full-text extraction, background synchronization, credential forwarding, or proxying. `Patrimonio cultural común` and `Obra protegida` records coexist, so item-level rights remain authoritative and free access is not treated as a collection-wide redistribution licence.
- `Projekt Gutenberg-DE German Classics Discovery Starter` remains bounded to three reviewed first-party link-only routes. WebNR does not perform runtime search, chapter scraping, full-text extraction, EPUB download, metadata harvesting, proxying, credential forwarding, or background synchronization; public-domain status of an underlying work is not treated as permission to republish the site's particular edition.
- `e-rara Swiss Rare Books`, `BEIC Italian Digital Library`, `BVPB Spanish Heritage`, `BNDigital Brazil`, `Bækur.is Icelandic Books`, `ADL Danish Literature`, `Biblioteca Virtual Miguel de Cervantes`, and `Bokselskap Norwegian Literature` remain bounded to their reviewed first-party link-only destinations unless a later source-specific audit supports richer capability.
- `Open Medieval French Direct TXT Starter` remains bounded to its three audited commit-pinned raw TXT files and preserves upstream CC BY-NC-SA 4.0 provenance, noncommercial, and share-alike language.
- `Alice & Books Public Domain Discovery Starter` remains discovery-only under its audited site-access terms. Public-domain status of a work does not itself authorize automated/systematic site access.
- The eight-route `Fanfiction Discovery Starter` and 12-route Discussion Radar remain at their proven capabilities. Richer interfaces require explicit source-specific rights/access, transport, identity, paging/cadence, update/deletion, attribution, resource/failure, and versioned-fixture evidence.
- Missing finalized GA4/GSC exports and safely scoped Cloudflare request metrics continue to prevent provider-native traffic/search trend scoring. Missing evidence remains unavailable rather than zero and must not be replaced with synthetic traffic, ranking, CTR, conversion, or referral claims.

## Active focus

1. Preserve exact independently verified production identities through the unchanged public-evidence gate. Do not advance a recorded target from a repository commit or preview alone; require attributable provider/public evidence.
2. Preserve the reader-first landing and curated Blog information architecture. New public content must fit a concrete reader task and must not reintroduce daily audit ledgers, PR/CI/deployment notes, provider bookkeeping, archive/category navigation sprawl, or speculative roadmap claims into reader pages.
3. Preserve all **35** maintained source families and rotate health checks at the capability level actually admitted. Remove, downgrade, replace, or expand only from reproducible source-specific evidence. Keep Discussion Radar link-only and add a route only when its reader task is distinct and its access boundary is explicitly reviewed.
4. Keep Memoria Chilena, Projekt Gutenberg-DE, e-rara, BEIC, BVPB, BNDigital, Bækur.is, ADL, Cervantes Virtual, and Bokselskap bounded to their reviewed link-only destinations unless a later explicit automated-use/rights/transport/record-file-identity/update-deletion/paging/resource-failure/provenance/fixture audit supports richer capability. Keep Open Medieval French bounded to its three audited commit-pinned files and preserve its CC BY-NC-SA 4.0 boundary.
5. Keep Alice & Books discovery-only under its current site-access terms and DBNL discovery-only until a real browser CORS fixture proves direct-TXT transport.
6. Build the smallest deterministic TEI-to-reading-text runtime/fixture before advancing ADL structured data, NeoLatDraCor, DutchDraCor, First1KGreek, VWWP, ELTeC, or CoNSSA/TextGrid beyond research/discovery status.
7. Preserve Legado suite `2026-08-30.1` as the L1 baseline. Move the next compatibility increment toward the smallest bounded clean-room L2 declarative runtime before claiming execution compatibility.
8. Advance raw-TXT usability through previewed multi-file/folder import, remote byte-level encoding handling, generated-source linting, and explicit resource/failure fixtures rather than silently broadening ingestion claims.
9. Preserve the eight-route Fanfiction Discovery Starter and move richer interfaces forward only with explicit capability evidence; do not fabricate credentials or convert access-restricted surfaces into hidden runtime dependencies.
10. Continue checking real finalized GA4, Search Console, and Cloudflare evidence when available. Missing provider evidence remains unavailable rather than zero and must not be replaced with synthetic traffic, ranking, CTR, conversion, or referral claims.
