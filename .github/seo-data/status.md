# WebNR operating status

## Current state

- Last completed product and analytics change: pull request #46, squash merge `4585ae5fc288894738c20524b534e22b547b108e`
- Current application production build: `eaef3b70b3de3ef2527f5ff827f22b4ffef23537`
- Current documentation production build: `4585ae5fc288894738c20524b534e22b547b108e`
- Working reader URL: `https://app.webnovel.win/`
- Working documentation URL: `https://autoarchive.github.io/webNR/`
- Current skill submodule in the reader-content planning branch: `f6e9479e7d979620985ae6125cefc5e614978ea3`
- Latest verified data window: Google Drive records GA4 and Search Console exports for `2026-07-27` through `2026-08-02`
- Current long-term operating direction: reader discovery, recommendations, community and ecosystem analysis, daily source growth, broad clean-room Legado compatibility, and supporting product maintenance

The application build commit differs from the last product squash commit because a temporary branch-creation probe was accidentally written to and then removed from `main`. The final repository tree contains no probe file. The resulting application deployment is the current exact production identity and contains the same intended product behavior plus the removal commit.

## Current signals

- Runtime analytics is mandatory on both production sites.
- Both sites expose GA4 destinations `G-DGH8HNQKE4` and `G-NL0WV2XMJN`.
- WebNR owner policy is full-URL reporting. Reader page views use `window.location.href` and pathname plus query string, including imported URLs carried in `?add=...`.
- Google signals and ad-personalization signals remain disabled.
- Imported book text and reading progress remain in browser storage. No additional custom analytics event containing local content or progress is authorized.
- Google Drive contains the configured GA4 organic landing-page export and six Search Console exports for queries, pages, countries, devices, search appearance, and dates for the latest recorded window.
- Connected Cloudflare accounts do not expose the `webnovel.win` zone. This does not block GitHub Pages production verification, GA4, Search Console, product delivery, content production, or source work.
- Application and documentation CI cover dependency audit, lint, typecheck, production application build, strict documentation build, dual-GA4 output assertions, and recorded public production evidence.
- Local TXT and supported text-URL import are available. EPUB remains unsupported until a real parser, safe rendering policy, and versioned fixtures exist.
- Reader-content publishing now targets one substantial production asset per rolling 48-hour window.
- Daily source operations target at least five discovered candidates, three full audits, and one passing integration attempt.
- Source candidates may be adapted through WebNR-owned definitions, OPDS/RSS adapters, normalized catalogs, Legado wrappers, or authorized/public-domain TXT collections.
- Legado compatibility claims remain tied to tested capability levels and fixture-suite versions.
- Branch cleanup is best-effort and nonblocking.

## Active focus

1. Merge and adopt the reader-facing operating plan and 30-day editorial calendar.
2. Complete the concentrated repair pass for remaining confirmed technical debt.
3. Publish the first reader guide: finding and verifying working Legado sources.
4. Discover at least five source candidates, fully audit at least three, and target the first passing daily integration.
5. Build the initial isolated Legado compatibility corpus and source-health model.
6. Continue backup/restore, browser-storage migration, E2E, accessibility, offline, release, EPUB, and Legado capability work as product support for the reader program.

Detailed historical evidence remains in `.github/seo-data/daily/`. This file contains current verified operating facts and priorities.
