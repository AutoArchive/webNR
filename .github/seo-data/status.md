# WebNR operating status

## Current state

- Last completed product, source, and reader-content change: pull request #51, squash merge `dbb83c0005787d13db9ed13caa15012e89f21953`
- Last successful attributable application deployment: `070c150575e7b69414226c60e2cb1a70c5310d7a`
- Last successful attributable documentation deployment: `070c150575e7b69414226c60e2cb1a70c5310d7a`
- Working reader URL: `https://app.webnovel.win/`
- Working documentation URL: `https://autoarchive.github.io/webNR/`
- Current skill submodule: `d1194eeb23a6dd5cf04956f5efcfe8e3f0105003`
- Current analytics export state: the configured Google Drive folder is accessible, but the latest direct folder-content check on 2026-08-08 exposed no matching GA4 or Search Console files; missing exports are treated as unavailable rather than zero
- Current long-term operating direction: reader discovery, recommendations, community and ecosystem analysis, daily source growth, broad clean-room Legado compatibility, and supporting product maintenance

## Current signals

- Runtime analytics is mandatory on both production sites.
- Both sites use the single GA4 destination `G-DGH8HNQKE4`.
- WebNR owner policy is full-URL reporting. Reader page views use `window.location.href` and pathname plus query string, including imported URLs carried in `?add=...`.
- Google signals and ad-personalization signals remain disabled.
- Imported book text and reading progress remain in browser storage. No additional custom analytics event containing local content or progress is authorized.
- Connected Cloudflare accounts do not expose the `webnovel.win` zone. This does not block GitHub Pages production verification, GA4, Search Console, product delivery, content production, or source work.
- Application and documentation CI cover dependency audit, lint, typecheck, production application build, strict documentation build, single-GA4 output assertions, integrated-source output, and recorded public production evidence.
- The first reader-discovery article, `2026 年 Legado 书源在哪里找？一份面向读者的查找与验源指南`, remains in the exact documentation production build with canonical `https://autoarchive.github.io/webNR/blog/2026/08/06/legado-source-guide/`.
- `WebNR Originals` remains the first passing integrated source. The exact application production build contains its source terms, YAML catalog, and original CC0 TXT fixture 《灯下索引》.
- `Aozora Bunko Starter` is the second passing integrated source. The exact application production build contains its attributed four-work discovery catalog, links to official Aozora book cards, and no direct download URL.
- Same-origin repository identity now derives from the source directory when present, and stored repository name/count/freshness metadata refreshes during sync and `?repos=` re-import. Multiple WebNR-maintained sources no longer collapse to the generic hostname identity.
- Repository ingestion preserves missing freshness as unknown, bounds YAML streaming to 5 MiB, validates untrusted item fields, restricts links to HTTP(S), supports explicit page/download URLs, and hides unavailable import actions.
- Local TXT and supported text-URL import are available. EPUB remains unsupported until a real parser, safe rendering policy, and versioned fixtures exist.
- Reader-content publishing targets one substantial production asset per rolling 48-hour window. The 2026-08-08 asset on legal free novels and TXT collections is in delivery during the current cycle.
- Daily source operations target at least five discovered candidates, three full audits, and one passing integration attempt.
- Current adapter/source queue includes Project Gutenberg, Wikisource, NDL Search/Digital Collections, Open Library, Library of Congress, Gallica, Project Runeberg, HathiTrust, DPLA, Google Books Full View, Project Madurai, Project Ben-Yehuda, and collection-specific Internet Archive research. Candidates remain subject to their exact API, attribution, rights, rate, access, and per-item conditions.
- Standard Ebooks is moving from a deferred feed candidate to a link-based discovery source that does not depend on full-feed access.
- Community Legado definitions remain isolated compatibility-corpus candidates until target-site authorization and health are audited.
- Legado compatibility claims remain tied to tested capability levels and fixture-suite versions.
- The pinned shared skill now includes explicit private GA4 property binding and adjacent source-manifest validation for weekly exports, preventing same-name property display labels from silently selecting the wrong property.
- Branch cleanup is best-effort and nonblocking.

## Active focus

1. Complete PR/CI/deployment/public verification for the 2026-08-08 legal-free-novels reader directory and Standard Ebooks Starter source, then close it out truthfully.
2. Continue daily source discovery: at least five candidates, three full audits, one passing integration attempt, plus rotating health checks of WebNR Originals, Aozora Bunko Starter, and newly integrated sources.
3. Advance the next safe adapter design from Project Gutenberg, Wikisource, Project Madurai, Project Ben-Yehuda, HathiTrust, DPLA, Google Books, NDL, Open Library, Library of Congress, Gallica, or Project Runeberg based on explicit license/API/rate/rights evidence.
4. Re-establish correctly routed GA4 and Search Console export evidence in the configured Drive folder without blocking product, content, or source work.
5. Continue concentrated technical-repair and daily regression monitoring; confirmed low-risk defects are fixed in the same cycle.
6. Continue backup/restore, browser-storage migration, E2E, accessibility, offline, release, EPUB, and Legado capability work as product support for the reader program.

Detailed historical evidence remains in `.github/seo-data/daily/`. This file contains current verified operating facts and priorities. The two `Last successful attributable ... deployment` lines are stable machine-readable interfaces used by `scripts/verify-production-builds.mjs` and must retain their exact labels.
