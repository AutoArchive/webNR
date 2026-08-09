# WebNR operating status

## Current state

- Last completed product, source, and reader-content change: pull request #54, squash merge `ec8ebc389c613fd9d5386ebf20f93a17f6fd51f3`
- Last completed production-routing change: pull request #59, squash merge `a6e9256369b0b2c29f3c80e428708e0b2da4894c`
- Last successful attributable application deployment: `a6e9256369b0b2c29f3c80e428708e0b2da4894c`
- Last successful attributable documentation deployment: `a6e9256369b0b2c29f3c80e428708e0b2da4894c`
- Canonical public documentation and editorial URL: `https://www.webnovel.win/`
- Canonical public-site state: current and attributable on the independent `webnr-docs` Cloudflare Pages project; `https://www.webnovel.win/build.json` exposes the exact production-routing squash commit
- Working reader URL: `https://app.webnovel.win/`
- Working documentation build mirror URL: `https://autoarchive.github.io/webNR/`
- Current skill submodule: `d1194eeb23a6dd5cf04956f5efcfe8e3f0105003`
- Current analytics export state: the configured Google Drive folder is accessible, but the latest direct folder-content check on 2026-08-08 exposed no matching GA4 or Search Console files; missing exports are treated as unavailable rather than zero
- Current long-term operating direction: reader discovery, recommendations, community and ecosystem analysis, daily source growth, broad clean-room Legado compatibility, and supporting product maintenance

## Current signals

- `https://www.webnovel.win/` is the sole canonical public identity for documentation, reader-facing articles, search indexing, canonical tags, sitemap, and RSS. A temporary delivery failure must never cause automation to promote another hostname as the canonical documentation address.
- `https://app.webnovel.win/` is the reader application runtime, not an alternate documentation origin.
- `https://autoarchive.github.io/webNR/` is an attributable documentation build mirror only. After the canonical-origin repair it must continue to emit `www.webnovel.win` canonical/discovery metadata and must not claim the custom domain.
- The stale legacy Cloudflare project no longer owns `www.webnovel.win`. The canonical hostname now serves the independent `webnr-docs` project from `main`; its exact build marker, current articles, canonicals, sitemap, RSS, and single GA4 destination were verified after pull request #59 merged.
- `https://webnr.pages.dev/` remains the reader application mirror: its build identity matches `app.webnovel.win` at `a6e9256369b0b2c29f3c80e428708e0b2da4894c`. It must not be used as the documentation origin for `www`.
- Pull request #57 merged the durable canonical contract to `main`: `www.webnovel.win` is the sole documentation/editorial/search identity, `app.webnovel.win` is reader runtime, and GitHub Pages is a noncanonical build mirror.
- Pull request #58 merged the repository-owned `scripts/build-docs-production.sh` entrypoint to `main`. It consumes an explicit build SHA or Cloudflare Pages commit SHA, writes exact public `build.json`, performs a strict MkDocs build, and is exercised by Documentation quality.
- Pull request #59 merged the rendered canonical-origin repair. Its seven-file diff generates documentation canonicals/sitemap/RSS/public links under `https://www.webnovel.win/`, points project/support/article links to `www`, and keeps GitHub Pages as a no-CNAME build mirror. Main quality, documentation-mirror deployment, Cloudflare documentation deployment, reader deployment, and exact public acceptance all passed.
- Pull request #56 was closed unmerged after #57 and #58 split its durable prerequisites into `main`; #59 supersedes it from a clean current-main base.
- Runtime analytics is mandatory on the canonical public site and reader application.
- Both public surfaces use the single GA4 destination `G-DGH8HNQKE4`.
- WebNR owner policy is full-URL reporting. Reader page views use `window.location.href` and pathname plus query string, including imported URLs carried in `?add=...`.
- Google signals and ad-personalization signals remain disabled.
- Imported book text and reading progress remain in browser storage. No additional custom analytics event containing local content or progress is authorized.
- The production route is no longer blocked. Cloudflare aggregate traffic remains unavailable to repository automation and must not be inferred from deployment or HTTP evidence.
- Application and documentation CI cover dependency audit, lint, typecheck, production application build, strict attributable documentation build, single-GA4 output assertions, integrated-source output, generated canonical/discovery output, and recorded public build evidence.
- The reader guide `2026 年哪里能合法免费看小说？公版、作者授权与 TXT/电子书资源目录` is live at `https://www.webnovel.win/blog/2026/08/08/legal-free-novels-txt-collections/` with matching canonical, sitemap, RSS, static HTML, and single GA4 output.
- The earlier reader-discovery article `2026 年 Legado 书源在哪里找？一份面向读者的查找与验源指南` is live at `https://www.webnovel.win/blog/2026/08/06/legado-source-guide/` with the matching canonical.
- `WebNR Originals` remains the first passing integrated source. The exact application production build contains its source terms, YAML catalog, and original CC0 TXT fixture 《灯下索引》; its article page uses the canonical `www` guide while preserving the `app` text download URL.
- `Aozora Bunko Starter` remains the second passing integrated source. The exact application production build contains its attributed four-work discovery catalog, links to official Aozora book cards, and no direct download URL.
- `Standard Ebooks Starter` is the third passing integrated source. The exact application production build contains four official Standard Ebooks work-page links, source terms, jurisdiction caveats, and no copied or proxied ebook file.
- Same-origin repository identity derives from the source directory when present, and stored repository name/count/freshness metadata refreshes during sync and `?repos=` re-import. Multiple WebNR-maintained sources no longer collapse to the generic hostname identity.
- Repository ingestion preserves missing freshness as unknown, bounds YAML streaming to 5 MiB, validates untrusted item fields, restricts links to HTTP(S), supports explicit page/download URLs, and hides unavailable import actions.
- Local TXT and supported text-URL import are available. EPUB remains unsupported until a real parser, safe rendering policy, and versioned fixtures exist.
- Reader-content publishing targets one substantial production asset per rolling 48-hour window; the resolved canonical-domain incident no longer preempts the next normal reader-content slot.
- Daily source operations target at least five discovered candidates, three full audits, and one passing integration attempt when no higher-priority production incident is active.
- Current adapter/source queue includes Project Gutenberg, Wikisource, NDL Search/Digital Collections, Open Library, Library of Congress, Gallica, Project Runeberg, HathiTrust, DPLA, Google Books Full View, Project Madurai, Project Ben-Yehuda, and collection-specific Internet Archive research. Candidates remain subject to their exact API, attribution, rights, rate, access, and per-item conditions.
- Standard Ebooks now has a production link-based discovery source that does not depend on full-feed access; direct reading remains deferred until EPUB support and rights fixtures exist.
- Community Legado definitions remain isolated compatibility-corpus candidates until target-site authorization and health are audited.
- Legado compatibility claims remain tied to tested capability levels and fixture-suite versions.
- The pinned shared skill includes explicit private GA4 property binding and adjacent source-manifest validation for weekly exports, preventing same-name property display labels from silently selecting the wrong property.
- Branch cleanup is best-effort and nonblocking.

## Active focus

1. Keep `https://www.webnovel.win/` on the independent documentation project, require exact build identity after rendered-site changes, and prevent the stale legacy project or reader project from reclaiming the hostname.
2. Keep `https://autoarchive.github.io/webNR/` as an exact attributable build mirror only and prevent it from regaining public canonical status.
3. Preserve `https://app.webnovel.win/` and its source/download routes as the separate reader application.
4. Resume the 2026-08-10 reader comparison of English serial-fiction platforms now that the canonical production incident is closed.
5. Continue source discovery, adapter work, correctly routed GA4/Search Console evidence, and concentrated technical monitoring after the production-domain priority clears.
6. Continue backup/restore, browser-storage migration, E2E, accessibility, offline, release, EPUB, and Legado capability work as product support for the reader program.

Detailed historical evidence remains in `.github/seo-data/daily/`. This file contains current verified operating facts and priorities. The two `Last successful attributable ... deployment` lines are stable machine-readable interfaces used by `scripts/verify-production-builds.mjs` and must retain their exact labels.
