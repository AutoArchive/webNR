# WebNR operating status

## Current state

- Last merged product/source change: pull request #91, squash merge `129b2604b76261c42da6838cd649af4f127335fd`
- Latest merged reader-content change: pull request #92, squash merge `bc691fa5b53d8eb5614f33e30a1b4d7397f70e77`
- Last successful attributable application deployment: `129b2604b76261c42da6838cd649af4f127335fd`
- Current application verification target: `129b2604b76261c42da6838cd649af4f127335fd`
- Last successful attributable documentation deployment: `bc691fa5b53d8eb5614f33e30a1b4d7397f70e77`
- Current documentation mirror verification target: `bc691fa5b53d8eb5614f33e30a1b4d7397f70e77`
- Last successful canonical Cloudflare documentation deployment: `bc691fa5b53d8eb5614f33e30a1b4d7397f70e77`
- Current canonical documentation verification target: `bc691fa5b53d8eb5614f33e30a1b4d7397f70e77`
- Latest application deployment artifact branch commit: `129b2604b76261c42da6838cd649af4f127335fd`
- Canonical public documentation and editorial URL: `https://www.webnovel.win/`
- Working reader URL: `https://app.webnovel.win/`
- Working documentation build mirror URL: `https://autoarchive.github.io/webNR/`
- Reader public-site state: healthy and attributable. Pull request #91 squash `129b2604b76261c42da6838cd649af4f127335fd` was built and published by application deployment run `31959760701`; the deployed artifact contains `sources/english-web-fiction-discovery-starter/README.txt` and `search_index.yml`, and the exact public verifier completed successfully.
- Documentation-mirror state: healthy and attributable. Pull request #92 squash `bc691fa5b53d8eb5614f33e30a1b4d7397f70e77` was built by documentation publication run `31961535146`, published to `gh-pages` as commit `9ccd787`, and the public mirror exposed the exact source build at `2026-08-16T17:27:17Z`. The generated artifact contains `blog/2026/08/16/english-web-fiction-ecosystem/index.html`, emits `https://www.webnovel.win/blog/2026/08/16/english-web-fiction-ecosystem/` as canonical, and contains the one-click `English Web-Fiction Discovery Starter` CTA.
- Canonical documentation state: pull request #94 Production evidence run `31961881292` directly observed `https://www.webnovel.win/build.json` at exact pull request #92 squash `bc691fa5b53d8eb5614f33e30a1b4d7397f70e77` at `2026-08-16T17:32:15Z`. The same job independently verified the documentation mirror at exact `bc691...`, the reader application at exact `129b2604...`, canonical troubleshooting/content checks, sitemap, and RSS.
- Current skill submodule: `f42128a3f05c73cf10c786a2711c488bb3a14839`, matching the current `AutoArchive/seo-skill` default branch during the 2026-08-16 cycle.
- Current analytics export state: the configured Google Drive folder is accessible, but the 2026-08-16 direct non-trashed child listing exposed no matching GA4 or Search Console exports; missing provider data is unavailable rather than zero.
- Current Cloudflare traffic-analytics state: neither currently exposed Cloudflare account returned an exact active `webnovel.win` zone during the 2026-08-16 cycle; request analytics are unavailable rather than zero.
- Current long-term operating direction: reader discovery, recommendations, community and ecosystem analysis, daily source growth, broad clean-room Legado compatibility, and supporting product maintenance.

## Current signals

- WebNR remains a local-first browser reader and may be described as an independent browser-based alternative for some Legado users and web-first reading workflows. It is unaffiliated with Legado and is not an official Legado web client.
- Arbitrary Legado source JSON is not yet a drop-in WebNR runtime. Compatibility claims remain tied to tested capability levels and versioned fixtures.
- `https://www.webnovel.win/` is the sole canonical public identity for documentation, reader-facing articles, search indexing, canonical tags, sitemap, and RSS. A delivery problem must never cause another hostname to be promoted as canonical.
- `https://app.webnovel.win/` is the reader application runtime; `https://autoarchive.github.io/webNR/` is an attributable documentation build mirror only and emits `www.webnovel.win` canonical/discovery metadata.
- Pull request #92 is the latest substantial reader asset. Its 2026-08-16 English web-fiction ecosystem guide uses 30 primary/platform/community references plus 26 academic/research references to connect platform-native discovery, cross-platform indexes, forum story libraries, reader communities, newsletters, author sites, and public catalogs into a reader workflow. It links to the source introduced by #91.
- Pull request #92 final head `17f96cbcaf30db9d8ef22e00a2ecda3fbb041166` passed complete Quality run `31960924356` before squash merge `bc691fa5b53d8eb5614f33e30a1b4d7397f70e77`. Main-push Quality run `31961535043` also completed all four expected jobs successfully. Documentation publication run `31961535146` published the exact `bc691...` mirror artifact, and pull request #94 Production evidence later verified the canonical Cloudflare documentation site at that same exact commit.
- Pull request #91 added `English Web-Fiction Discovery Starter`, a WebNR-maintained link-only discovery source with Top Web Fiction, SpaceBattles Discover Stories, Sufficient Velocity Story Library, Reddit Serials Story Directory, and r/HFY. WebNR stores only verified landing-page URLs, WebNR-authored descriptions, and discovery labels; reading, account state, moderation, content warnings, comments, and work-specific rights remain at the origin site.
- Pull request #91 final head `2175c5b9677747550e2909e0c4b7648d794677b8` passed complete Quality run `31959572340` before squash merge `129b2604b76261c42da6838cd649af4f127335fd`. Main-push Quality run `31959760655` completed successfully; application deployment run `31959760701` published exact commit `129b2604...` and the new source output.
- The currently accepted maintained source set is: WebNR Originals, Aozora Bunko Starter, Standard Ebooks Starter, Project Madurai Starter, English Serial Platforms Starter, Project Gutenberg Starter, Global Grey Starter, Online Books Page Starter, Wolne Lektury Starter, Wikisource Starter, and English Web-Fiction Discovery Starter. Rights/access behavior remains source-specific; several maintained catalogs are intentionally link-only.
- The deferred source queue includes Project Runeberg, StoryWeaver, Lit2Go, Perseus Digital Library, Baen Free Library, and newly observed 2026-08-16 leads LitFic, Betakyte, Hungry's Hedgerow, Ream, and Laterpress. Richer integration requires source-specific rights/access, attribution, stable identity, paging/feed behavior, cadence, size/timeout, and update/deletion fixtures.
- Rotating 2026-08-16 source-health checks for Project Gutenberg, Standard Ebooks, and English Wikisource found no reason to remove or downgrade their current maintained-source boundaries.
- Runtime analytics remain one GA4 destination, `G-DGH8HNQKE4`. Application output requires `window.location.href` for `page_location` and `window.location.pathname + window.location.search` for `page_path`, while Google signals and ad-personalization signals remain disabled.
- Search-engine and third-party caches may retain old descriptions claiming there is no analytics. Those stale descriptions are not production truth and do not justify changing the site-owned analytics contract or disclosure.
- Local TXT reading remains a core supported path. EPUB support and richer remote-source adapters remain future work that must ship with explicit parser, fixture, size, timeout, security, provenance, and rights/access contracts rather than compatibility-by-claim.
- The 2026-08-16 closeout exposed a machine-readable status contract: `scripts/verify-production-builds.mjs` depends on the exact deployment-key labels in this file. A first #94 Quality attempt failed after those labels were editorially renamed; the labels were restored immediately without weakening verification, and the next Production evidence run passed exact application, mirror, and canonical targets.
- Pure `.github/seo-data/**` closeout changes are operating metadata and do not require a new rendered-site deployment; they still require the normal non-draft PR, complete expected CI, fresh final review, and exact-head squash merge.

## Active focus

1. Prepare the scheduled 2026-08-18 Chinese web-fiction ecosystem guide as the next substantial reader asset, using fresh reader/community/platform evidence rather than thin filler.
2. Continue daily source growth from the audited and secondary queues, prioritizing candidates whose item-level rights, attribution, identity, paging/feed semantics, request cadence, and update behavior can be expressed as reproducible fixtures.
3. Preserve exact independent build identities for the reader, canonical documentation site, and documentation mirror; keep the expanded application propagation window and all four Quality jobs as permanent release gates.
4. Preserve the exact machine-readable deployment-key labels consumed by `scripts/verify-production-builds.mjs`; prose may evolve around them, but renaming those status keys requires a coordinated verifier change and test.
5. Keep collecting GA4, Search Console, and Cloudflare evidence when provider data is actually available; never convert missing exports or unavailable zones into zero-valued metrics.
6. Advance clean-room Legado compatibility and EPUB/remote-ingestion support only behind tested capability levels, versioned fixtures, bounded resource behavior, and explicit rights/access handling.
