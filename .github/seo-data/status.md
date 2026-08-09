# WebNR operating status

## Current state

- Last merged product and reader-content change: pull request #62, squash merge `7140fd24277ab357ed8029db8aa8f6c1ecdfe6bd`
- Last successful attributable application deployment: `a6e9256369b0b2c29f3c80e428708e0b2da4894c`
- Last successful attributable documentation deployment: `7140fd24277ab357ed8029db8aa8f6c1ecdfe6bd`
- Latest application deployment artifact branch commit: `7140fd24277ab357ed8029db8aa8f6c1ecdfe6bd`
- Canonical public documentation and editorial URL: `https://www.webnovel.win/`
- Canonical public-site state: externally routed through Cloudflare but stale and currently unattributable; the latest verified routing evidence still exposes the older `WebNR - Web Novel Reader` site shell rather than the current reviewed documentation build
- Reader public-site state: `https://app.webnovel.win/build.json` still exposes `a6e9256369b0b2c29f3c80e428708e0b2da4894c`; pull request #62's newer application artifact has not reached or been verified on the public reader hostname
- Working reader URL: `https://app.webnovel.win/`
- Working documentation build mirror URL: `https://autoarchive.github.io/webNR/`
- Current skill submodule: `d1194eeb23a6dd5cf04956f5efcfe8e3f0105003`
- Current analytics export state: the configured Google Drive folder is accessible, but the latest direct folder-content check exposed no matching GA4 or Search Console files; missing exports are treated as unavailable rather than zero
- Current long-term operating direction: reader discovery, recommendations, community and ecosystem analysis, daily source growth, broad clean-room Legado compatibility, and supporting product maintenance

## Current signals

- WebNR's primary positioning remains a local-first browser reader. Pull request #62 added one secondary statement for Legado users: WebNR can serve as an independent browser-based alternative for web-first reading workflows. It explicitly remains unaffiliated with Legado and does not claim to be an official Legado web client.
- Arbitrary Legado source JSON is not yet a drop-in WebNR runtime. Compatibility claims remain tied to tested capability levels and versioned fixtures.
- `https://www.webnovel.win/` is the sole canonical public identity for documentation, reader-facing articles, search indexing, canonical tags, sitemap, and RSS. A temporary delivery failure must never cause automation to promote another hostname as the canonical documentation address.
- `https://app.webnovel.win/` is the reader application runtime, not an alternate documentation origin.
- `https://autoarchive.github.io/webNR/` is an attributable documentation build mirror only. It emits `www.webnovel.win` canonical/discovery metadata and must not claim the custom domain.
- The `app-pages` artifact branch contains exact squash commit `7140fd24277ab357ed8029db8aa8f6c1ecdfe6bd`, but the Cloudflare-served `app.webnovel.win` public runtime still returns `a6e9256369b0b2c29f3c80e428708e0b2da4894c`. The artifact branch is therefore not treated as successful public deployment evidence.
- The public GitHub Pages documentation build mirror exposes exact squash commit `7140fd24277ab357ed8029db8aa8f6c1ecdfe6bd` and labels itself `github-pages-build-mirror`.
- The documentation mirror contains the generated article `WebNR：给 Legado 用户的一个独立网页端替代选择` at mirror path `/blog/2026/08/09/webnr-legado-web-alternative/`, with intended canonical `https://www.webnovel.win/blog/2026/08/09/webnr-legado-web-alternative/`.
- Pull request #62 final Quality run `31303061815` passed Web quality, Documentation quality, Production evidence against the pre-merge production baseline, and Chromium user journeys.
- Chromium job `93218999672` ran eight tests across desktop Chromium and Pixel 7 emulation; all eight passed. The suite covers first use, manifest and Service Worker registration, local TXT import, rendered reading content, IndexedDB persistence, keyboard reopen, CORS-allowed URL import and recoverable invalid-input errors.
- The Chromium gate found and repaired a real PWA bug: an `afterInteractive` registration script could attach its `window.load` listener after the load event had already fired. Registration now runs immediately when the document is already complete.
- The same cycle repaired mouse-only library activation. Novel rows now expose button semantics, keyboard focus, Enter/Space activation and visible focus treatment.
- Closeout Quality run `31303434565` independently verified the exact documentation mirror at `7140fd24277ab357ed8029db8aa8f6c1ecdfe6bd`, but correctly failed Production evidence because the public application hostname remained at `a6e9256369b0b2c29f3c80e428708e0b2da4894c` for 42 cache-busted requests. This is now recorded as an external routing/deployment blocker rather than overwritten as a successful application deployment.
- Production-evidence logic follows the current topology: `app.webnovel.win` is the public reader target; GitHub Pages is the attributable documentation build mirror and must emit `www.webnovel.win` canonical output.
- The 2026-08-08 routing diagnostic proved that `www.webnovel.win` and the documentation mirror are different delivery paths: the mirror exposed an exact reviewed build while `www/build.json` returned 404 and the `www` root served an older site shell.
- `https://webnr.pages.dev/` is a reader-application mirror/project and must not be used as the documentation origin for `www`.
- Pull request #57 established the durable canonical contract; pull request #58 added the repository-owned documentation build entrypoint; pull request #61 repaired shallow-checkout history for that build; pull request #59 merged the rendered canonical-origin source repair as `a6e9256369b0b2c29f3c80e428708e0b2da4894c`.
- Repository-side documentation canonical generation is complete. The remaining `www` serving-path change is the external Cloudflare blocker recorded in `block.md`.
- Runtime analytics is mandatory on the canonical public site and reader application.
- Both public surfaces use the single GA4 destination `G-DGH8HNQKE4`.
- WebNR owner policy is full-URL reporting. Reader page views use `window.location.href` and pathname plus query string, including imported URLs carried in `?add=...`.
- Google signals and ad-personalization signals remain disabled.
- Imported book text and reading progress remain in browser storage. No additional custom analytics event containing local content or progress is authorized.
- The currently authenticated connections do not expose write control for the Cloudflare routing/projects serving `webnovel.win`. This blocks both the canonical documentation route repair and the stale application production route repair.
- Application and documentation CI cover dependency audit, lint, typecheck, production application build, strict attributable documentation build, single-GA4 output assertions, integrated-source output, generated canonical/discovery output, recorded public build evidence, and real Chromium desktop/mobile journeys.
- The reader guides from 2026-08-06 and 2026-08-08 remain in the exact documentation build mirror with `www.webnovel.win` canonical output.
- `WebNR Originals`, `Aozora Bunko Starter`, and `Standard Ebooks Starter` remain the three passing integrated sources from prior source-growth cycles.
- Repository ingestion preserves missing freshness as unknown, bounds YAML streaming to 5 MiB, validates untrusted item fields, restricts links to HTTP(S), supports explicit page/download URLs, and hides unavailable import actions.
- Local TXT and supported text-URL import are available on the last verified public reader build. EPUB remains unsupported until a real parser, safe rendering policy, and versioned fixtures exist.
- Reader-content publishing targets one substantial production asset per rolling 48-hour window. Repository and mirror publication can continue while the canonical-domain routing blocker is accurately disclosed; canonical production completion still requires `www` to serve the reviewed build.
- Daily source operations target at least five discovered candidates, three full audits, and one passing integration attempt when no higher-priority production incident is active.
- Community Legado definitions remain isolated compatibility-corpus candidates until target-site authorization and health are audited.
- Branch cleanup is best-effort and nonblocking.

## Active focus

1. Repair the Cloudflare-served `app.webnovel.win` route so it exposes the current `app-pages` artifact and verify pull request #62's browser-facing changes on the public reader hostname.
2. Keep `https://www.webnovel.win/` as the sole canonical documentation/editorial identity while its external Cloudflare routing blocker remains open; require `/build.json` and current reader content on `www` before declaring canonical production restored.
3. Keep `https://autoarchive.github.io/webNR/` as an exact attributable build mirror only and prevent it from regaining public canonical status.
4. Keep the new Chromium desktop/mobile journeys as a permanent gate and expand them alongside backup/restore, storage migration, offline behavior and accessibility improvements.
5. Continue the reader-facing editorial schedule; the Legado web-alternative explanation is complete in source and the build mirror, while the next scheduled reader topic is the English serial-fiction platform comparison.
6. Continue daily source discovery, adapter work, correctly routed GA4/Search Console evidence, and concentrated technical monitoring.
7. Continue real EPUB and fixture-backed clean-room Legado capability work as product support for the reader program.

Detailed historical evidence remains in `.github/seo-data/daily/`. This file contains current verified operating facts and priorities. The two `Last successful attributable ... deployment` lines are stable machine-readable interfaces used by `scripts/verify-production-builds.mjs` and must retain their exact labels.
