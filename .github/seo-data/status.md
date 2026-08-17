# WebNR operating status

## Current state

- Last merged product/source change: pull request #95, squash merge `a322c529ce8f4783dc2d56de6bd27a44419a81c3`
- Latest merged reader-content change: pull request #92, squash merge `bc691fa5b53d8eb5614f33e30a1b4d7397f70e77`
- Last successful attributable application deployment: `a322c529ce8f4783dc2d56de6bd27a44419a81c3`
- Current application verification target: `a322c529ce8f4783dc2d56de6bd27a44419a81c3`
- Last successful attributable documentation deployment: `bc691fa5b53d8eb5614f33e30a1b4d7397f70e77`
- Current documentation mirror verification target: `bc691fa5b53d8eb5614f33e30a1b4d7397f70e77`
- Last successful canonical Cloudflare documentation deployment: `a322c529ce8f4783dc2d56de6bd27a44419a81c3`
- Current canonical documentation verification target: `a322c529ce8f4783dc2d56de6bd27a44419a81c3`
- Latest application deployment artifact branch commit: `a322c529ce8f4783dc2d56de6bd27a44419a81c3`
- Canonical public documentation and editorial URL: `https://www.webnovel.win/`
- Working reader URL: `https://app.webnovel.win/`
- Working documentation build mirror URL: `https://autoarchive.github.io/webNR/`
- Reader public-site state: healthy and attributable. Pull request #95 squash `a322c529ce8f4783dc2d56de6bd27a44419a81c3` passed main-push Quality run `32049275958` and was built and published by application deployment run `32049275962`; the workflow validated the artifact, published `app-pages`, and its exact public production-build check completed successfully. The published artifact records build time `2026-08-17T17:12:35.788Z` and contains `sources/chinese-web-fiction-platforms-starter/README.txt` plus `search_index.yml`.
- Documentation-mirror state: healthy and attributable. Pull request #92 squash `bc691fa5b53d8eb5614f33e30a1b4d7397f70e77` was built by documentation publication run `31961535146`, published to `gh-pages` as commit `9ccd787`, and the public mirror exposed the exact source build at `2026-08-16T17:27:17Z`. Pull request #95 is source-only and does not trigger the documentation-mirror workflow, so this mirror identity remains intentionally unchanged.
- Canonical documentation state: this 2026-08-17 closeout advances the exact verification target to pull request #95 squash `a322c529ce8f4783dc2d56de6bd27a44419a81c3`. The closeout pull request may merge only after its complete Production evidence job directly observes that exact canonical build together with the recorded reader and mirror identities, canonical content checks, sitemap, and RSS. No verifier assertion may be weakened if propagation is still in progress.
- Current skill submodule: `f42128a3f05c73cf10c786a2711c488bb3a14839`, matching the current `AutoArchive/seo-skill` default branch during the 2026-08-17 cycle.
- Current analytics export state: the configured Google Drive folder is accessible, but the 2026-08-17 direct non-trashed child listing exposed no matching GA4 or Search Console exports; missing provider data is unavailable rather than zero.
- Current Cloudflare traffic-analytics state: neither currently exposed Cloudflare account returned an exact active `webnovel.win` zone during the 2026-08-17 cycle; request analytics are unavailable rather than zero.
- Current long-term operating direction: reader discovery, recommendations, community and ecosystem analysis, daily source growth, broad clean-room Legado compatibility, and supporting product maintenance.

## Current signals

- WebNR remains a local-first browser reader and may be described as an independent browser-based alternative for some Legado users and web-first reading workflows. It is unaffiliated with Legado and is not an official Legado web client.
- Arbitrary Legado source JSON is not yet a drop-in WebNR runtime. Compatibility claims remain tied to tested capability levels and versioned fixtures.
- `https://www.webnovel.win/` is the sole canonical public identity for documentation, reader-facing articles, search indexing, canonical tags, sitemap, and RSS. A delivery problem must never cause another hostname to be promoted as canonical.
- `https://app.webnovel.win/` is the reader application runtime; `https://autoarchive.github.io/webNR/` is an attributable documentation build mirror only and emits `www.webnovel.win` canonical/discovery metadata.
- Pull request #95 added `Chinese Web-Fiction Platforms Starter`, a WebNR-maintained link-only source for the official Qidian / 起点中文网, JJWXC / 晋江文学城, and Zongheng / 纵横中文网 discovery routes. WebNR stores only official landing URLs plus WebNR-authored descriptions and labels; it performs no runtime origin crawling, catalog polling, chapter retrieval, account automation, payment/VIP access, or content reuse for this starter.
- Pull request #95 final head `a655defeb531d75aeafb70b9b81bb77e730e4a03` passed complete pre-merge Quality run `32049073598` before squash merge `a322c529ce8f4783dc2d56de6bd27a44419a81c3`. Main-push Quality run `32049275958` also completed all four expected jobs successfully. Application deployment run `32049275962` published the exact `a322c529...` artifact and completed its exact production-build verification.
- Pull request #92 remains the latest substantial reader asset. Its 2026-08-16 English web-fiction ecosystem guide uses 30 primary/platform/community references plus 26 academic/research references to connect platform-native discovery, cross-platform indexes, forum story libraries, reader communities, newsletters, author sites, and public catalogs into a reader workflow.
- The currently accepted maintained source set is: WebNR Originals, Aozora Bunko Starter, Standard Ebooks Starter, Project Madurai Starter, English Serial Platforms Starter, Project Gutenberg Starter, Global Grey Starter, Online Books Page Starter, Wolne Lektury Starter, Wikisource Starter, English Web-Fiction Discovery Starter, and Chinese Web-Fiction Platforms Starter. Rights/access behavior remains source-specific; several maintained catalogs are intentionally link-only.
- The deferred source queue includes Project Runeberg, StoryWeaver, Lit2Go, Perseus Digital Library, Baen Free Library, LitFic, Betakyte, Hungry's Hedgerow, Ream, Laterpress, and newly observed 2026-08-17 leads Fanqie / 番茄小说 and Changpei / 长佩文学. Richer integration requires source-specific rights/access, robots, attribution, stable identity, paging/feed behavior, cadence, size/timeout, and update/deletion fixtures.
- Rotating 2026-08-17 source-health checks for Aozora Bunko, Project Madurai, and Wolne Lektury found no reason to remove or downgrade their current maintained-source boundaries.
- Runtime analytics remain one GA4 destination, `G-DGH8HNQKE4`. Application output requires `window.location.href` for `page_location` and `window.location.pathname + window.location.search` for `page_path`, while Google signals and ad-personalization signals remain disabled.
- The configured GA4/Search Console Drive folder still exposes no matching export files, and the connected Cloudflare accounts expose no exact active `webnovel.win` zone. Those are observation gaps, not zero-valued metrics or a reason to change production analytics.
- A verified external project page still links to the canonical WebNR site while carrying an obsolete statement that WebNR has no analytics. That stale external description conflicts with current production GA4 output and remains external evidence rather than site truth.
- Local TXT reading remains a core supported path. EPUB support and richer remote-source adapters remain future work that must ship with explicit parser, fixture, size, timeout, security, provenance, and rights/access contracts rather than compatibility-by-claim.
- The 2026-08-16 closeout exposed a machine-readable status contract: `scripts/verify-production-builds.mjs` depends on the exact deployment-key labels in this file. Those labels must remain unchanged unless the verifier and its tests are updated in the same reviewed change.
- Pure `.github/seo-data/**` closeout changes are operating metadata and do not require a new rendered-site deployment; they still require the normal non-draft PR, complete expected CI, fresh final review, and exact-head squash merge.

## Active focus

1. Deliver the scheduled 2026-08-18 Chinese web-fiction ecosystem guide as the next substantial reader asset, using fresh reader/community/platform evidence and the bounded first-party source work from pull request #95 rather than thin filler.
2. Continue daily source growth from the audited and deferred queues, with Fanqie and Changpei as fresh Chinese candidates whose source-specific rights/access, robots, attribution, identity, paging/interface semantics, cadence, and update behavior still need reproducible audits.
3. Preserve exact independent build identities for the reader, canonical documentation site, and documentation mirror; keep the expanded propagation windows and all four Quality jobs as permanent release gates.
4. Preserve the exact machine-readable deployment-key labels consumed by `scripts/verify-production-builds.mjs`; prose may evolve around them, but renaming those status keys requires a coordinated verifier change and test.
5. Keep collecting GA4, Search Console, and Cloudflare evidence when provider data is actually available; never convert missing exports or unavailable zones into zero-valued metrics.
6. Advance clean-room Legado compatibility and EPUB/remote-ingestion support only behind tested capability levels, versioned fixtures, bounded resource behavior, and explicit rights/access handling.
