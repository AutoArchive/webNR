# WebNR operating status

## Current state

- Last merged product/source change: pull request #91, squash merge `129b2604b76261c42da6838cd649af4f127335fd`
- Last successful attributable application deployment: `129b2604b76261c42da6838cd649af4f127335fd`
- Current application verification target: `129b2604b76261c42da6838cd649af4f127335fd`
- Last successful attributable documentation deployment: `b64731bf5c19fd3613901de1c441a7dbcd438e8c`
- Current documentation mirror verification target: `b64731bf5c19fd3613901de1c441a7dbcd438e8c`
- Last successful canonical Cloudflare documentation deployment: `8916ee178dd9d416570be0735ad4ffdf049be4cf`
- Current canonical documentation verification target: `129b2604b76261c42da6838cd649af4f127335fd`
- Latest application deployment artifact branch commit: `129b2604b76261c42da6838cd649af4f127335fd`
- Canonical public documentation and editorial URL: `https://www.webnovel.win/`
- Working reader URL: `https://app.webnovel.win/`
- Working documentation build mirror URL: `https://autoarchive.github.io/webNR/`
- Reader public-site state: healthy and attributable. Pull request #91 squash `129b2604b76261c42da6838cd649af4f127335fd` was built and published by application deployment run `31959760701`; the deploy job wrote public build identity at `2026-08-16T16:50:13.306Z`, published the `app-pages` artifact, and its exact production-build verifier completed successfully at `2026-08-16T16:54:19Z`. The workflow completed successfully at `2026-08-16T16:54:23Z`, and the deployed artifact contains `sources/english-web-fiction-discovery-starter/README.txt` plus `search_index.yml`.
- Documentation state: the attributable GitHub Pages mirror remains exact pull request #83 squash `b64731bf5c19fd3613901de1c441a7dbcd438e8c`. Pull request #90's initial Production evidence run independently observed the canonical Cloudflare documentation route at exact pull request #89 squash `8916ee178dd9d416570be0735ad4ffdf049be4cf`, built at `2026-08-15T16:41:15.492769+00:00`. Pull request #91 advanced `main` to `129b2604b76261c42da6838cd649af4f127335fd`; because canonical Cloudflare documentation builds from `main` independently of the path-filtered GitHub Pages mirror, that exact commit is now the canonical verification target while the prior `8916ee178dd9d416570be0735ad4ffdf049be4cf` remains the last successfully recorded canonical deployment until the live probe passes.
- Current skill submodule: `f42128a3f05c73cf10c786a2711c488bb3a14839`, matching the current `AutoArchive/seo-skill` default branch during the 2026-08-16 cycle.
- Current analytics export state: the configured Google Drive folder is accessible, but the 2026-08-16 direct non-trashed child listing exposed no matching GA4 or Search Console exports; missing provider data is unavailable rather than zero.
- Current Cloudflare traffic-analytics state: the authenticated connector did not expose an exact active `webnovel.win` zone in either currently exposed account during the 2026-08-16 cycle, so request analytics are unavailable rather than zero.
- Current long-term operating direction: reader discovery, recommendations, community and ecosystem analysis, daily source growth, broad clean-room Legado compatibility, and supporting product maintenance.

## Current signals

- WebNR's primary positioning remains a local-first browser reader. It can be described as an independent browser-based alternative for some Legado users and web-first reading workflows, but it is unaffiliated with Legado and is not an official Legado web client.
- Arbitrary Legado source JSON is not yet a drop-in WebNR runtime. Compatibility claims remain tied to tested capability levels and versioned fixtures.
- `https://www.webnovel.win/` is the sole canonical public identity for documentation, reader-facing articles, search indexing, canonical tags, sitemap, and RSS. A delivery problem must not cause automation to promote another hostname as canonical.
- `https://app.webnovel.win/` is the reader application runtime; `https://autoarchive.github.io/webNR/` is an attributable documentation build mirror only and emits `www.webnovel.win` canonical/discovery metadata.
- Pull request #91 added `English Web-Fiction Discovery Starter`, a WebNR-maintained link-only discovery source with five verified public destinations: Top Web Fiction, SpaceBattles Discover Stories, Sufficient Velocity Story Library, Reddit Serials Story Directory, and r/HFY. WebNR stores only verified landing-page URLs, WebNR-authored descriptions, and discovery labels; reading, account state, moderation, content warnings, comments, and work-specific rights remain at the origin site.
- Pull request #91 final head `2175c5b9677747550e2909e0c4b7648d794677b8` passed complete Quality run `31959572340` before squash merge `129b2604b76261c42da6838cd649af4f127335fd`. Main-push Quality run `31959760655` completed successfully. Application deployment run `31959760701` then published exact commit `129b2604b76261c42da6838cd649af4f127335fd`; `app-pages/build.json` records that commit and build time `2026-08-16T16:50:13.306Z`, and the published branch contains the new source files.
- Pull request #89 added `Wikisource Starter` as a WebNR-maintained English-literature discovery source with four verified English Wikisource work/edition landing pages. The starter is link-only: WebNR stores bibliographic facts, authored descriptions, and landing-page URLs, and does not proxy, cache, crawl, bulk-download, or redistribute Wikisource text, scans, exported ebooks, images, or annotations.
- Pull request #89 final head `fade1ebc728362586104f3dfcc17d742fc4db3fc` passed complete Quality run `31895748483` before squash merge `8916ee178dd9d416570be0735ad4ffdf049be4cf`. Main-push Quality run `31895883173` also completed all four expected jobs successfully. The exact `app-pages` build records `8916ee178dd9d416570be0735ad4ffdf049be4cf`, built at `2026-08-15T16:35:02.185Z`, and contains the Wikisource source output. The canonical Cloudflare documentation route independently exposed the same exact squash commit, built at `2026-08-15T16:41:15.492769+00:00`.
- Pull request #86's expanded application production-propagation verifier remains necessary. Pull request #91 required almost four minutes between publishing `app-pages` and observing the exact public build; the bounded verifier completed successfully without weakening the exact-build or analytics assertions.
- Pull request #83's 2026-08-14 reading-app comparison remains the latest substantial reader asset until the planned 2026-08-16 English web-fiction ecosystem guide is merged and deployed.
- The currently accepted maintained source set is: WebNR Originals, Aozora Bunko Starter, Standard Ebooks Starter, Project Madurai Starter, English Serial Platforms Starter, Project Gutenberg Starter, Global Grey Starter, Online Books Page Starter, Wolne Lektury Starter, Wikisource Starter, and English Web-Fiction Discovery Starter. Rights/access behavior remains source-specific; several maintained catalogs are intentionally link-only.
- The 2026-08-15 source queue added Project Runeberg, StoryWeaver, Lit2Go, Perseus Digital Library, and Baen Free Library as deferred research leads after rights/access review. Runeberg requires item-level warning/status fixtures; StoryWeaver requires media-type and attribution fixtures; Perseus requires component-level rights fixtures; Lit2Go's current license is bounded to non-commercial educational use without additional permission; Baen free access is not treated as a blanket redistribution license.
- Runtime analytics remain one GA4 destination, `G-DGH8HNQKE4`. Application output requires `window.location.href` for `page_location` and `window.location.pathname + window.location.search` for `page_path`, while Google signals and ad-personalization signals remain disabled.
- Search-engine and third-party caches may retain old descriptions that claim there is no analytics. Those stale descriptions are not treated as production truth and do not justify changing the current site-owned analytics contract or disclosure.
- Local TXT reading remains a core supported path. EPUB support and richer remote-source adapters remain future work that must ship with explicit parser, fixture, size, timeout, security, and rights/access contracts rather than compatibility-by-claim.
- Pure `.github/seo-data/**` closeout changes are operating metadata and do not require a new rendered-site deployment; they still require the normal non-draft PR, complete expected CI, fresh final review, and exact-head squash merge.

## Active focus

1. Publish the planned 2026-08-16 English web-fiction ecosystem guide as the next substantial reader asset instead of backfilling thin 2026-08-15 content.
2. Continue daily source growth from the audited queue, prioritizing candidates whose item-level rights, attribution, paging, request cadence, and stable identity can be expressed as reproducible fixtures.
3. Preserve exact independent build identities for the reader, canonical documentation site, and documentation mirror; keep the expanded application propagation window and all four Quality jobs as permanent release gates.
4. Keep collecting GA4, Search Console, and Cloudflare evidence when provider data is actually available; never convert missing exports or unavailable zones into zero-valued metrics.
5. Advance clean-room Legado compatibility and EPUB/remote-ingestion support only behind tested capability levels, versioned fixtures, bounded resource behavior, and explicit rights/access handling.
