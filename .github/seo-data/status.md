# WebNR operating status

This file records only the current durable operating state and active focus. Historical delivery detail is retained in `.github/seo-data/daily/*.md`, pull requests, workflow runs, and Git history; do not append an ever-growing delivery ledger here.

## Current state

- Last merged product/source change: pull request #169, squash merge `88c34f8fbac599ccef1694fdd66be78612a071d4`
- Latest merged reader-content change: pull request #169, squash merge `88c34f8fbac599ccef1694fdd66be78612a071d4`
- Last successful attributable application deployment: `88c34f8fbac599ccef1694fdd66be78612a071d4`
- Current application verification target: `88c34f8fbac599ccef1694fdd66be78612a071d4`
- Last successful attributable documentation deployment: `88c34f8fbac599ccef1694fdd66be78612a071d4`
- Current documentation mirror verification target: `88c34f8fbac599ccef1694fdd66be78612a071d4`
- Last successful canonical Cloudflare documentation deployment: `88c34f8fbac599ccef1694fdd66be78612a071d4`
- Current canonical documentation verification target: `88c34f8fbac599ccef1694fdd66be78612a071d4`
- Latest application deployment artifact branch commit: `d5ee45f3a78d5b2288c8460e1bedcab0b7eb3799`
- Latest documentation mirror artifact branch commit: `dbacf03f7ad8aa2401dca7f0a8f27b6569bed95f`
- Canonical public documentation and editorial URL: `https://www.webnovel.win/`
- Working reader URL: `https://app.webnovel.win/`
- Working documentation build mirror URL: `https://autoarchive.github.io/webNR/`
- Current skill submodule: `f42128a3f05c73cf10c786a2711c488bb3a14839`, matching the `AutoArchive/seo-skill` default branch during the 2026-09-14 recheck.
- Maintained source families: 28.
- `Web Novel Discussion Radar Starter`: 12 WebNR-authored link-only routes. The September 12 addition remains the stable SpaceBattles Fic Search Thread for recovering a specific fic previously encountered but no longer identifiable or locatable. The source synchronizes local YAML only; no community post body, username, reply, vote, story text, account state, API request, login, crawler, or background origin synchronization is introduced.
- Latest substantial reader asset: **“欧洲小语种免费电子书去哪找？丹麦 ADL、捷克 MLP、匈牙利 MEK 怎么选”**, published from #169 at `https://www.webnovel.win/blog/2026/09/14/european-minority-language-free-ebooks-adl-mlp-mek/`.
- Application production identity: `app-pages/build.json` names source commit `88c34f8fbac599ccef1694fdd66be78612a071d4`; artifact commit `d5ee45f3a78d5b2288c8460e1bedcab0b7eb3799` contains the new `adl-danish-literature-discovery-starter` three-route source alongside the existing source portfolio and retains the approved GA4/full-URL implementation. Application workflow `34871768480` completed its exact public production verification successfully.
- Documentation mirror identity: `gh-pages` artifact commit `dbacf03f7ad8aa2401dca7f0a8f27b6569bed95f` names source commit `88c34f8fbac599ccef1694fdd66be78612a071d4`; the generated September 14 article carries canonical URL `https://www.webnovel.win/blog/2026/09/14/european-minority-language-free-ebooks-adl-mlp-mek/` and retains the approved GA4/full-URL implementation.
- Canonical documentation identity: the Cloudflare Pages `webnr-docs` check run `104070425480` attached to exact source commit `88c34f8fbac599ccef1694fdd66be78612a071d4` completed successfully on 2026-09-14. The unchanged Production evidence gate must continue verifying the canonical public hostname against the recorded exact target on every closeout.
- Current analytics implementation: sole GA4 destination `G-DGH8HNQKE4`; `page_location` uses `window.location.href`, `page_path` uses `window.location.pathname + window.location.search`; Google signals and ad-personalization signals remain disabled.
- Current analytics export state: the configured connected Google Drive folder `webNR SEO Weekly CSV` contained no non-trashed GA4 or Search Console exports on 2026-09-14. Provider aggregates are unavailable rather than zero.
- Current Cloudflare traffic-analytics state: the connected credential spans multiple accounts and the exact account scope for `webnovel.win` cannot be selected safely in the non-interactive connector without guessing an account ID. Request metrics remain unavailable rather than zero; this does not affect exact public build/deployment verification.
- Human-only blockers: none currently prevent normal repository operation. Provider-metric gaps are evidence limitations, not blockers.

## Current signals

- WebNR remains a local-first browser TXT reader. Imported book content and reading progress stay in the current browser profile; reader and documentation surfaces intentionally send page views under the analytics contract above.
- The reader-first landing and curated Blog information architecture introduced by #147–#148 remains authoritative. Public reader pages should answer reader tasks rather than expose daily operating logs, PR/CI/deployment bookkeeping, provider-data gaps, or speculative roadmaps.
- The September 14 source cycle screened five new candidates. Arkiv for Dansk Litteratur passed and became the 28th maintained family as a three-route first-party link-only discovery starter. Městská knihovna v Praze and Magyar Elektronikus Könyvtár received full audits and remain external discovery routes rather than generic adapters because free access and collection-wide redistribution rights are not equivalent. Zeno.org and Project Laurens Jansz. Coster were screened and deferred at their current terms/freshness/overlap boundaries.
- Rotating source health checks on 2026-09-14 passed Project Madurai, Wikisource, and DBNL at their existing admitted capabilities. DBNL remains discovery-only until real browser-CORS/direct-text evidence supports a richer claim.
- The latest reader guide compares Danish ADL, Prague MLP, and Hungarian MEK as first-party routes while explicitly separating free access, public-domain status, reuse permission, and WebNR import capability. ADL's explicit 156-work 1851–1945 Public Domain Mark 1.0 dataset is not generalized to every ADL page or edition.
- During the completed 2026-09-05 through 2026-09-11 operating block, 36 new candidates were screened and at least 22 received full audits. Eight source admissions or freshness updates shipped across the week while the maintained family set reached 26; three substantial reader assets shipped on September 5, 7, and 9. Provider-native acquisition/search trends cannot be scored because finalized GA4/GSC exports and safely scoped Cloudflare traffic metrics are unavailable.
- `ADL Danish Literature Discovery Starter` is bounded to three reviewed first-party link-only routes. WebNR does not mirror ADL text, HTML, PDFs, scans, images, catalog/search metadata, ZIP archives, TEI/XML, introductions, or annotations and does not claim direct ingestion of the public-domain dataset. The live ADL reading surface's automated 403 was treated as an access boundary rather than bypassed.
- `Biblioteca Virtual Miguel de Cervantes Spanish Literature Discovery Starter` remains bounded to three reviewed first-party link-only routes. WebNR does not mirror BVMC text, files, media, search/catalog records, or metadata and does not claim that free reading or an underlying public-domain work grants a uniform redistribution license.
- `Open Medieval French Direct TXT Starter` remains bounded to three commit-pinned raw TXT files from audited upstream commit `0d3112783556775fa30ab4bdac84a4c383cc0217` and preserves upstream CC BY-NC-SA 4.0 provenance/noncommercial/share-alike language.
- `Bokselskap Norwegian Literature Discovery Starter` remains bounded to three reviewed first-party link-only routes; no OPDS/EPUB execution, catalog mirroring, or book-text redistribution is claimed.
- `Alice & Books Public Domain Discovery Starter` remains discovery-only under its audited site-access terms. Public-domain status of a work does not itself authorize automated/systematic site access.
- The eight-route `Fanfiction Discovery Starter` remains at its proven capability. Richer interfaces require source-specific rights/access, transport, identity, paging/cadence, update/deletion, attribution, resource/failure, and versioned-fixture evidence.

## Active focus

1. Preserve the exact independently verified production identities through the unchanged public-evidence gate. Do not advance a recorded target from a repository commit or preview alone; require attributable provider/public evidence.
2. Preserve the reader-first landing and curated Blog information architecture. New public content must fit a concrete reader task and must not reintroduce daily audit ledgers, PR/CI/deployment notes, provider bookkeeping, archive/category navigation sprawl, or speculative roadmap claims into reader pages.
3. Preserve all 28 maintained source families and rotate health checks at the capability level actually admitted. Remove, downgrade, replace, or expand only from reproducible source-specific evidence. Keep Discussion Radar link-only and add a route only when its reader task is distinct and its access boundary is explicitly reviewed.
4. Keep ADL bounded to its three reviewed first-party link-only destinations unless a later endpoint/rights/access/transport/file-identity/update/deletion/fixture audit plus the TEI-to-reading-text runtime supports a richer capability. Keep Cervantes Virtual and Bokselskap bounded to their reviewed link-only destinations unless later endpoint/rights/transport/update/deletion/fixture audits support richer capabilities. Keep Open Medieval French bounded to its three audited commit-pinned files and preserve its CC BY-NC-SA 4.0 provenance/noncommercial/share-alike boundary.
5. Keep Alice & Books discovery-only under its current site-access terms and DBNL discovery-only until a real browser CORS fixture proves direct-TXT transport.
6. Build the smallest deterministic TEI-to-reading-text runtime/fixture before advancing ADL structured data, NeoLatDraCor, DutchDraCor, First1KGreek, VWWP, ELTeC, or CoNSSA/TextGrid beyond research/discovery status.
7. Preserve Legado suite `2026-08-30.1` as the L1 baseline. Move the next compatibility increment toward the smallest bounded clean-room L2 declarative runtime before claiming execution compatibility.
8. Advance raw-TXT usability through previewed multi-file/folder import, remote byte-level encoding handling, generated-source linting, and explicit resource/failure fixtures rather than silently broadening ingestion claims.
9. Preserve the eight-route Fanfiction Discovery Starter and move richer interfaces forward only with explicit capability evidence; do not fabricate credentials or convert access-restricted surfaces into hidden runtime dependencies.
10. Continue checking real finalized GA4, Search Console, and Cloudflare evidence when available. Missing provider evidence remains unavailable rather than zero and must not be replaced with synthetic traffic, ranking, CTR, or conversion claims.
