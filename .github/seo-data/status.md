# WebNR operating status

## Current state

- Last merged product and reader-content change: pull request #68, squash merge `65fbda14e8062d7b055db5987646598b04ffcddc`
- Last successful attributable application deployment: `65fbda14e8062d7b055db5987646598b04ffcddc`
- Last successful attributable documentation deployment: `7140fd24277ab357ed8029db8aa8f6c1ecdfe6bd`
- Last successful canonical Cloudflare documentation deployment: `7d319f26e2c3398215c1d2cedca6f99820f1de50`
- Latest application deployment artifact branch commit: `65fbda14e8062d7b055db5987646598b04ffcddc`
- Canonical public documentation and editorial URL: `https://www.webnovel.win/`
- Canonical public-site state: healthy and attributable on the independent `webnr-docs` Cloudflare Pages project; the last independently recorded exact canonical build is main commit `7d319f26e2c3398215c1d2cedca6f99820f1de50`
- Reader public-site state: healthy and attributable on the separate `webnr` Cloudflare Pages project; production verification requires `https://app.webnovel.win/build.json` to expose exact pull request #68 squash commit `65fbda14e8062d7b055db5987646598b04ffcddc`
- Working reader URL: `https://app.webnovel.win/`
- Working documentation build mirror URL: `https://autoarchive.github.io/webNR/`
- Current skill submodule: `d1194eeb23a6dd5cf04956f5efcfe8e3f0105003`
- Current analytics export state: the configured Google Drive folder is accessible, but the 2026-08-09 direct folder-content check exposed no matching GA4 or Search Console files; missing exports are treated as unavailable rather than zero
- Current Cloudflare traffic-analytics state: the authenticated zone connector did not expose an exact `webnovel.win` zone during the 2026-08-09 scheduled cycle, so Cloudflare request analytics are unavailable for that cycle rather than zero
- Current long-term operating direction: reader discovery, recommendations, community and ecosystem analysis, daily source growth, broad clean-room Legado compatibility, and supporting product maintenance

## Current signals

- WebNR's primary positioning remains a local-first browser reader. Pull request #62 added one secondary statement for Legado users: WebNR can serve as an independent browser-based alternative for web-first reading workflows. It explicitly remains unaffiliated with Legado and does not claim to be an official Legado web client.
- Arbitrary Legado source JSON is not yet a drop-in WebNR runtime. Compatibility claims remain tied to tested capability levels and versioned fixtures.
- `https://www.webnovel.win/` is the sole canonical public identity for documentation, reader-facing articles, search indexing, canonical tags, sitemap, and RSS. A temporary delivery failure must never cause automation to promote another hostname as the canonical documentation address.
- `https://app.webnovel.win/` is the reader application runtime, not an alternate documentation origin.
- `https://autoarchive.github.io/webNR/` is an attributable documentation build mirror only. It emits `www.webnovel.win` canonical/discovery metadata and must not claim the custom domain.
- The `app-pages` application artifact exposes exact squash commit `65fbda14e8062d7b055db5987646598b04ffcddc`, source `github-actions`, and includes the Project Madurai Starter plus the previously integrated source catalogs. The production-evidence gate independently checks the Cloudflare-served `app.webnovel.win` build marker against the same recorded commit before closeout can merge.
- The public GitHub Pages documentation build mirror exposes exact squash commit `7140fd24277ab357ed8029db8aa8f6c1ecdfe6bd` and labels itself `github-pages-build-mirror`.
- The documentation mirror contains the generated article `WebNR：给 Legado 用户的一个独立网页端替代选择` at mirror path `/blog/2026/08/09/webnr-legado-web-alternative/`, with intended canonical `https://www.webnovel.win/blog/2026/08/09/webnr-legado-web-alternative/`.
- Pull request #62 final Quality run `31303061815` passed Web quality, Documentation quality, Production evidence against the pre-merge production baseline, and Chromium user journeys.
- Chromium job `93218999672` ran eight tests across desktop Chromium and Pixel 7 emulation; all eight passed. The suite covers first use, manifest and Service Worker registration, local TXT import, rendered reading content, IndexedDB persistence, keyboard reopen, CORS-allowed URL import and recoverable invalid-input errors.
- The Chromium gate found and repaired a real PWA bug: an `afterInteractive` registration script could attach its `window.load` listener after the load event had already fired. Registration now runs immediately when the document is already complete.
- The same cycle repaired mouse-only library activation. Novel rows now expose button semantics, keyboard focus, Enter/Space activation and visible focus treatment.
- Closeout Quality run `31303434565` independently verified the exact documentation mirror at `7140fd24277ab357ed8029db8aa8f6c1ecdfe6bd` and correctly exposed the then-stale application route. The Cloudflare production deployment subsequently advanced `app.webnovel.win` to the same exact commit, resolving that incident without rewriting the historical failed run.
- Production-evidence logic follows the current topology: `app.webnovel.win` is the public reader target; GitHub Pages is the attributable documentation build mirror and must emit `www.webnovel.win` canonical output.
- The 2026-08-08 routing diagnostic proved that `www.webnovel.win` and the documentation mirror are different delivery paths: the mirror exposed an exact reviewed build while `www/build.json` returned 404 and the `www` root served an older site shell.
- `https://webnr.pages.dev/` is a reader-application mirror/project and must not be used as the documentation origin for `www`.
- Pull request #57 established the durable canonical contract; pull request #58 added the repository-owned documentation build entrypoint; pull request #61 repaired shallow-checkout history for that build; pull request #59 merged the rendered canonical-origin source repair as `a6e9256369b0b2c29f3c80e428708e0b2da4894c`.
- Repository-side documentation canonical generation and the `www` Cloudflare serving route are complete. The last independently recorded canonical site build is exact main commit `7d319f26e2c3398215c1d2cedca6f99820f1de50`, with the three current reader guides at that deployment point, `www` canonicals, sitemap, RSS, and the single historical GA4 destination.
- Pull request #29 upgraded Next.js to 16.3.0 and the matching native flat ESLint configuration, upgraded the affected Sharp dependency, preserved the prior behavioral lint baseline for separately scoped React refactors, passed all four Quality jobs, and produced an audit result with no known vulnerabilities.
- Pull request #67 repaired stale repository guidance after that migration. Quality run `31323828174` passed Web quality, Documentation quality, Production evidence, and Chromium user journeys before squash merge `23a660fa0e68b74ef73716ac0383dafd01786fab`; the change was developer-guidance-only and required no rendered-site deployment.
- Pull request #68 added `Project Madurai Starter` as a link-only Tamil-literature discovery catalog with four audited origin pages, preserved the existing source catalogs, and extended source-output validation. Quality run `31324032188` passed Web quality, Documentation quality, Production evidence, and Chromium user journeys before squash merge `65fbda14e8062d7b055db5987646598b04ffcddc`.
- Runtime analytics is mandatory on the canonical public site and reader application.
- Both public surfaces use the single GA4 destination `G-DGH8HNQKE4`.
- WebNR owner policy is full-URL reporting. Reader page views use `window.location.href` and pathname plus query string, including imported URLs carried in `?add=...`.
- Google signals and ad-personalization signals remain disabled.
- Imported book text and reading progress remain in browser storage. No additional custom analytics event containing local content or progress is authorized.
- The authenticated Cloudflare environment now exposes and controls both WebNR Pages projects. `webnr-docs` owns only `www.webnovel.win`; `webnr` owns only `app.webnovel.win` and its Pages mirror.
- Automatic preview-branch deployments are disabled on both Pages projects because repository Quality and Chromium jobs provide the review gates and the old previews created an account-wide production queue. Production branch deployments remain enabled.
- The documentation project excludes pure `.github/seo-data/*` changes from build triggers. Any commit containing other changed paths still builds normally, while status-only closeouts no longer create a new documentation commit that immediately invalidates their own recorded production evidence.
- Application and documentation CI cover dependency audit, lint, typecheck, production application build, strict attributable documentation build, single-GA4 output assertions, integrated-source output, generated canonical/discovery output, recorded public build evidence, and real Chromium desktop/mobile journeys.
- The reader guides from 2026-08-06 and 2026-08-08 remain in the exact documentation build mirror with `www.webnovel.win` canonical output.
- `WebNR Originals`, `Aozora Bunko Starter`, `Standard Ebooks Starter`, and `Project Madurai Starter` are the four passing integrated sources after the 2026-08-09 scheduled source-growth cycle.
- `Project Madurai Starter` is deliberately discovery-only: WebNR stores its own descriptions plus title/author metadata and official Project Madurai Unicode-page links. It does not crawl, proxy, cache, bulk-download, or redistribute the linked electronic texts.
- Repository ingestion preserves missing freshness as unknown, bounds YAML streaming to 5 MiB, validates untrusted item fields, restricts links to HTTP(S), supports explicit page/download URLs, and hides unavailable import actions.
- Local TXT and supported text-URL import are available on the current verified public reader build. EPUB remains unsupported until a real parser, safe rendering policy, and versioned fixtures exist.
- Reader-content publishing targets one substantial production asset per rolling 48-hour window. Canonical production completion requires exact public build evidence rather than an artifact branch alone.
- Daily source operations target at least five discovered candidates, three full audits, and one passing integration attempt when no higher-priority production incident is active.
- Community Legado definitions remain isolated compatibility-corpus candidates until target-site authorization and health are audited.
- Branch cleanup is best-effort and nonblocking.

## Active focus

1. Keep `https://www.webnovel.win/` as the sole canonical documentation/editorial identity and `https://app.webnovel.win/` as the reader runtime; require exact public build evidence after future rendered-site changes.
2. Keep `https://autoarchive.github.io/webNR/` as an exact attributable build mirror only and prevent it from regaining public canonical status.
3. Keep the Chromium desktop/mobile journeys as a permanent gate and expand them alongside backup/restore, storage migration, offline behavior and accessibility improvements.
4. Continue the reader-facing editorial schedule; the Legado web-alternative explanation is live, while the next scheduled reader topic is the English serial-fiction platform comparison.
5. Continue daily source discovery, adapter work, correctly routed GA4/Search Console evidence, and concentrated technical monitoring.
6. Continue real EPUB and fixture-backed clean-room Legado capability work as product support for the reader program.

Detailed historical evidence remains in `.github/seo-data/daily/`. This file contains current verified operating facts and priorities. The two `Last successful attributable ... deployment` lines are stable machine-readable interfaces used by `scripts/verify-production-builds.mjs` and must retain their exact labels.
