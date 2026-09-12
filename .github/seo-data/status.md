# WebNR operating status

This file records only the current durable operating state and active focus. Historical delivery detail is retained in `.github/seo-data/daily/*.md`, pull requests, workflow runs, and Git history; do not append an ever-growing delivery ledger here.

## Current state

- Last merged product/source change: pull request #165, squash merge `e53fea1db1b871eba8deb913a073baeb61f09e53`
- Latest merged reader-content change: pull request #165, squash merge `e53fea1db1b871eba8deb913a073baeb61f09e53`
- Last successful attributable application deployment: `e53fea1db1b871eba8deb913a073baeb61f09e53`
- Current application verification target: `e53fea1db1b871eba8deb913a073baeb61f09e53`
- Last successful attributable documentation deployment: `e53fea1db1b871eba8deb913a073baeb61f09e53`
- Current documentation mirror verification target: `e53fea1db1b871eba8deb913a073baeb61f09e53`
- Last successful canonical Cloudflare documentation deployment: `e53fea1db1b871eba8deb913a073baeb61f09e53`
- Current canonical documentation verification target: `e53fea1db1b871eba8deb913a073baeb61f09e53`
- Latest application deployment artifact branch commit: `a9b41e60eec9b6ac0b8f0416700036930b12f63e`
- Latest documentation mirror artifact branch commit: `feffb4eea4d03b82f7bf1efff2e3b4c0b3f59f67`
- Canonical public documentation and editorial URL: `https://www.webnovel.win/`
- Working reader URL: `https://app.webnovel.win/`
- Working documentation build mirror URL: `https://autoarchive.github.io/webNR/`
- Current skill submodule: `f42128a3f05c73cf10c786a2711c488bb3a14839`, matching the `AutoArchive/seo-skill` default branch during the 2026-09-12 recheck.
- Maintained source families: 26.
- `Web Novel Discussion Radar Starter`: 12 WebNR-authored link-only routes. The September 12 addition is the stable SpaceBattles Fic Search Thread for recovering a specific fic previously encountered but no longer identifiable or locatable. The source synchronizes local YAML only; no community post body, username, reply, vote, story text, account state, API request, login, crawler, or background origin synchronization is introduced.
- Latest substantial reader asset: **“忘记英文网文书名怎么找回？先整理‘确定记得什么’，再去 Royal Road、SpaceBattles 和 story-identification 找”**, published from #165 at `https://www.webnovel.win/blog/2026/09/12/how-to-find-a-forgotten-web-novel/`.
- Application production identity: `app-pages/build.json` names source commit `e53fea1db1b871eba8deb913a073baeb61f09e53`; the artifact contains all 12 Discussion Radar rows including `spacebattles-fic-search-202609`.
- Documentation mirror identity: `gh-pages/build.json` names source commit `e53fea1db1b871eba8deb913a073baeb61f09e53`; generated output contains the September 12 article at the canonical `www.webnovel.win` URL and retains the approved GA4/full-URL implementation.
- Canonical documentation identity: the Cloudflare Pages `webnr-docs` check attached to `e53fea1db1b871eba8deb913a073baeb61f09e53` completed successfully on 2026-09-12. The unchanged Production evidence gate must still verify the canonical public hostname against this exact target on every closeout.
- Current analytics implementation: sole GA4 destination `G-DGH8HNQKE4`; `page_location` uses `window.location.href`, `page_path` uses `window.location.pathname + window.location.search`; Google signals and ad-personalization signals remain disabled.
- Current analytics export state: the configured connected Google Drive folder `webNR SEO Weekly CSV` contained no non-trashed GA4 or Search Console exports on 2026-09-12. Provider aggregates are unavailable rather than zero.
- Current Cloudflare traffic-analytics state: the connected credential spans multiple accounts and the exact account scope for `webnovel.win` cannot be selected safely in the non-interactive connector without guessing an account ID. Request metrics remain unavailable rather than zero; this does not affect exact public build/deployment verification.
- Human-only blockers: none currently prevent normal repository operation. Provider-metric gaps are evidence limitations, not blockers.

## Current signals

- WebNR remains a local-first browser TXT reader. Imported book content and reading progress stay in the current browser profile; reader and documentation surfaces intentionally send page views under the analytics contract above.
- The reader-first landing and curated Blog information architecture introduced by #147–#148 remains authoritative. Public reader pages should answer reader tasks rather than expose daily operating logs, PR/CI/deployment bookkeeping, provider-data gaps, or speculative roadmaps.
- The September 12 source cycle screened five new story-identification routes. SpaceBattles Fic Search passed and was admitted link-only; SFF Stack Exchange `story-identification` was fully audited and retained as an editorial fallback rather than a WebNR catalog row because it spans many media; LibraryThing `Name that Book` was fully audited and kept manual-only because current site terms restrict automated/headless/AI-agent access. Goodreads `What’s the Name of That Book???` and r/whatsthatbook were screened but not admitted.
- Rotating source health checks on 2026-09-12 passed Project Gutenberg, DBNL, and Wolne Lektury at their existing admitted capabilities. DBNL remains discovery-only until a real browser CORS fixture proves direct-TXT transport.
- During the completed 2026-09-05 through 2026-09-11 operating block, 36 new candidates were screened and at least 22 received full audits. Eight source admissions or freshness updates shipped across the week while the maintained family set reached 26; three substantial reader assets shipped on September 5, 7, and 9. Provider-native acquisition/search trends cannot be scored because finalized GA4/GSC exports and safely scoped Cloudflare traffic metrics are unavailable.
- `Open Medieval French Direct TXT Starter` remains bounded to three commit-pinned raw TXT files from audited upstream commit `0d3112783556775fa30ab4bdac84a4c383cc0217` and preserves upstream CC BY-NC-SA 4.0 provenance/noncommercial/share-alike language.
- `Bokselskap Norwegian Literature Discovery Starter` remains bounded to three reviewed first-party link-only routes; no OPDS/EPUB execution, catalog mirroring, or book-text redistribution is claimed.
- `Alice & Books Public Domain Discovery Starter` remains discovery-only under its audited site-access terms. Public-domain status of a work does not itself authorize automated/systematic site access.
- The eight-route `Fanfiction Discovery Starter` remains at its proven capability. Richer interfaces require source-specific rights/access, transport, identity, paging/cadence, update/deletion, attribution, resource/failure, and versioned-fixture evidence.

## Active focus

1. Preserve the exact independently verified production identities through the unchanged public-evidence gate. Do not advance a recorded target from a repository commit or preview alone; require attributable provider/public evidence.
2. Preserve the reader-first landing and curated Blog information architecture. New public content must fit a concrete reader task and must not reintroduce daily audit ledgers, PR/CI/deployment notes, provider bookkeeping, archive/category navigation sprawl, or speculative roadmap claims into reader pages.
3. Preserve all 26 maintained source families and rotate health checks at the capability level actually admitted. Remove, downgrade, replace, or expand only from reproducible source-specific evidence. Keep Discussion Radar link-only and add a route only when its reader task is distinct and its access boundary is explicitly reviewed.
4. Keep Bokselskap bounded to its three reviewed link-only destinations unless a later endpoint/rights/transport/update/deletion/fixture audit supports a richer capability. Keep Open Medieval French bounded to its three audited commit-pinned files and preserve its CC BY-NC-SA 4.0 provenance/noncommercial/share-alike boundary.
5. Keep Alice & Books discovery-only under its current site-access terms and DBNL discovery-only until a real browser CORS fixture proves direct-TXT transport.
6. Build the smallest deterministic TEI-to-reading-text runtime/fixture before advancing NeoLatDraCor, DutchDraCor, First1KGreek, VWWP, ELTeC, or CoNSSA/TextGrid beyond research status.
7. Preserve Legado suite `2026-08-30.1` as the L1 baseline. Move the next compatibility increment toward the smallest bounded clean-room L2 declarative runtime before claiming execution compatibility.
8. Advance raw-TXT usability through previewed multi-file/folder import, remote byte-level encoding handling, generated-source linting, and explicit resource/failure fixtures rather than silently broadening ingestion claims.
9. Preserve the eight-route Fanfiction Discovery Starter and move richer interfaces forward only with explicit capability evidence; do not fabricate credentials or convert access-restricted surfaces into hidden runtime dependencies.
10. Continue checking real finalized GA4, Search Console, and Cloudflare evidence when available. Missing provider evidence remains unavailable rather than zero and must not be replaced with synthetic traffic, ranking, CTR, or conversion claims.
