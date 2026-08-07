# WebNR operating status

## Current state

- Last completed product, source, and reader-content change: pull request #49, squash merge `b5264279e0d728ada0934479ef1d800792b8e5fb`
- Last successful attributable application deployment: `b5264279e0d728ada0934479ef1d800792b8e5fb`
- Last successful attributable documentation deployment: `b5264279e0d728ada0934479ef1d800792b8e5fb`
- Working reader URL: `https://app.webnovel.win/`
- Working documentation URL: `https://autoarchive.github.io/webNR/`
- Current skill submodule: `f6e9479e7d979620985ae6125cefc5e614978ea3`
- Current analytics export state: the configured Google Drive folder is accessible, but the latest direct folder-content checks have not exposed matching GA4 or Search Console files; missing exports are treated as unavailable rather than zero
- Current long-term operating direction: reader discovery, recommendations, community and ecosystem analysis, daily source growth, broad clean-room Legado compatibility, and supporting product maintenance

## Current signals

- Runtime analytics is mandatory on both production sites.
- Both sites expose GA4 destinations `G-DGH8HNQKE4` and `G-NL0WV2XMJN`.
- WebNR owner policy is full-URL reporting. Reader page views use `window.location.href` and pathname plus query string, including imported URLs carried in `?add=...`.
- Google signals and ad-personalization signals remain disabled.
- Imported book text and reading progress remain in browser storage. No additional custom analytics event containing local content or progress is authorized.
- Connected Cloudflare accounts do not expose the `webnovel.win` zone. This does not block GitHub Pages production verification, GA4, Search Console, product delivery, content production, or source work.
- Application and documentation CI cover dependency audit, lint, typecheck, production application build, strict documentation build, dual-GA4 output assertions, first-party source output, and recorded public production evidence.
- The first reader-discovery article, `2026 年 Legado 书源在哪里找？一份面向读者的查找与验源指南`, is present in the exact documentation production build with canonical `https://autoarchive.github.io/webNR/blog/2026/08/06/legado-source-guide/`.
- `WebNR Originals` is the first passing integrated source. The exact application production build contains its source terms, YAML catalog, and original CC0 TXT fixture 《灯下索引》.
- Repository ingestion now preserves missing freshness as unknown, bounds YAML streaming to 5 MiB, validates untrusted item fields, restricts links to HTTP(S), supports explicit page/download URLs, and hides unavailable import actions.
- Local TXT and supported text-URL import are available. EPUB remains unsupported until a real parser, safe rendering policy, and versioned fixtures exist.
- Reader-content publishing targets one substantial production asset per rolling 48-hour window. The next dated editorial slot is 2026-08-08: legal free novels and TXT collections.
- Daily source operations target at least five discovered candidates, three full audits, and one passing integration attempt.
- Project Gutenberg is the next adapter-design candidate under its official catalog, rate, linking, trademark, per-item licensing, and jurisdiction rules. Standard Ebooks remains deferred pending an applicable feed-access route.
- Community Legado definitions remain isolated compatibility-corpus candidates until target-site authorization and health are audited.
- Legado compatibility claims remain tied to tested capability levels and fixture-suite versions.
- Branch cleanup is best-effort and nonblocking.

## Active focus

1. Complete the metadata closeout for pull request #49 without changing rendered production output.
2. Run the 2026-08-07 data-analysis pass and source-health checks against the new exact production build.
3. Discover at least five new source candidates, fully audit at least three, and target another safe source integration; prioritize Project Gutenberg-compatible catalog design and public/authorized regional collections.
4. Prepare the 2026-08-08 reader asset on legal free novels and TXT collections without inventing demand where GA4/GSC exports remain unavailable.
5. Continue the concentrated technical-repair pass and daily regression monitoring; confirmed low-risk defects are fixed in the same cycle.
6. Re-establish current GA4 and Search Console export evidence in the configured Drive folder without blocking product, content, or source work.
7. Continue backup/restore, browser-storage migration, E2E, accessibility, offline, release, EPUB, and Legado capability work as product support for the reader program.

Detailed historical evidence remains in `.github/seo-data/daily/`. This file contains current verified operating facts and priorities. The two `Last successful attributable ... deployment` lines are stable machine-readable interfaces used by `scripts/verify-production-builds.mjs` and must retain their exact labels.
