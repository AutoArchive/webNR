# WebNR operating status

## Current state

- Last merged product/source change: pull request #97, squash merge `800f1da2c5abf255c3c5f1bb63cdc2956dc364e9`
- Latest merged reader-content change: pull request #98, squash merge `1c38192bbd2f1656c9bb924823c05c5e48d7fd92`
- Last successful attributable application deployment: `a322c529ce8f4783dc2d56de6bd27a44419a81c3`
- Current application verification target: `800f1da2c5abf255c3c5f1bb63cdc2956dc364e9`
- Last successful attributable documentation deployment: `bc691fa5b53d8eb5614f33e30a1b4d7397f70e77`
- Current documentation mirror verification target: `1c38192bbd2f1656c9bb924823c05c5e48d7fd92`
- Last successful canonical Cloudflare documentation deployment: `a322c529ce8f4783dc2d56de6bd27a44419a81c3`
- Current canonical documentation verification target: `1c38192bbd2f1656c9bb924823c05c5e48d7fd92`
- Latest application deployment artifact branch commit: `800f1da2c5abf255c3c5f1bb63cdc2956dc364e9`
- Canonical public documentation and editorial URL: `https://www.webnovel.win/`
- Working reader URL: `https://app.webnovel.win/`
- Working documentation build mirror URL: `https://autoarchive.github.io/webNR/`
- Reader public-site state: pull request #97 expanded the Chinese Web-Fiction Platforms Starter and squash-merged as `800f1da2c5abf255c3c5f1bb63cdc2956dc364e9` after final-head Quality run `32163096351` succeeded. This closeout advances the exact application verification target to that squash commit; the closeout PR may merge only after its Production evidence job observes the exact public application build without weakening any verifier assertion.
- Documentation-mirror state: pull request #98 published the 2026-08-18 Chinese online-fiction discovery ecosystem guide and squash-merged as `1c38192bbd2f1656c9bb924823c05c5e48d7fd92` after final-head Quality run `32164006710` succeeded with all four expected jobs. This closeout advances the mirror target to that exact squash commit and waits for direct public-build verification.
- Canonical documentation state: the canonical target is also `1c38192bbd2f1656c9bb924823c05c5e48d7fd92`. The closeout PR may merge only after Production evidence directly observes that exact canonical build together with the repository's canonical content checks, sitemap, and RSS checks. Propagation is a reason to keep waiting, never a reason to loosen the verifier.
- Current skill submodule: `f42128a3f05c73cf10c786a2711c488bb3a14839`, exactly matching the current `AutoArchive/seo-skill` default branch during the 2026-08-18 cycle.
- Current analytics export state: the configured Google Drive folder is accessible, but the 2026-08-18 direct non-trashed child listing exposed no matching GA4 or Search Console exports; missing provider data is unavailable rather than zero.
- Current Cloudflare traffic-analytics state: neither connected Cloudflare account exposed an exact `webnovel.win` zone during the 2026-08-18 cycle; request analytics are unavailable rather than zero.
- Current long-term operating direction: reader discovery, recommendations, community and ecosystem analysis, daily source growth, broad clean-room Legado compatibility, and supporting product maintenance.

## Current signals

- WebNR remains a local-first browser reader and may be described as an independent browser-based alternative for some Legado users and web-first reading workflows. It is unaffiliated with Legado and is not an official Legado web client.
- Arbitrary Legado source JSON is not yet a drop-in WebNR runtime. Compatibility claims remain tied to tested capability levels and versioned fixtures.
- `https://www.webnovel.win/` is the sole canonical public identity for documentation, reader-facing articles, search indexing, canonical tags, sitemap, and RSS. A delivery problem must never cause another hostname to be promoted as canonical.
- `https://app.webnovel.win/` is the reader application runtime; `https://autoarchive.github.io/webNR/` is an attributable documentation build mirror only and emits `www.webnovel.win` canonical/discovery metadata.
- Pull request #97 expanded `Chinese Web-Fiction Platforms Starter` from three to five official first-party discovery routes: Qidian / 起点中文网, JJWXC / 晋江文学城, Zongheng / 纵横中文网, 17K小说网, and 七猫中文网. WebNR stores only official landing URLs plus WebNR-authored descriptions and labels; it performs no runtime origin crawling, ranking/catalog polling, chapter retrieval, account automation, payment/VIP access, or content reuse for this starter.
- Pull request #97 final head `dcc1ac47b54b031ee94f89da1e8cd9c85a19b555` passed complete pre-merge Quality run `32163096351` before squash merge `800f1da2c5abf255c3c5f1bb63cdc2956dc364e9`. The post-content main tree still contains all five expected source records.
- Pull request #98 is the latest substantial reader asset. Its 2026-08-18 Chinese online-fiction discovery ecosystem guide uses 34 primary/platform/industry/community references plus 24 academic/research references to connect large original-fiction platforms, vertical communities, free/paid ranking signals, booklists, forums, official work pages, and local reader state into a reusable six-layer workflow.
- Pull request #98 final head `b57e03b2d6f0c8badf6451c7a29b2ecd7a8584a4` passed complete Quality run `32164006710`; Web quality, Production evidence, Documentation quality, and Chromium user journeys all succeeded before squash merge `1c38192bbd2f1656c9bb924823c05c5e48d7fd92`.
- The currently accepted maintained source set is: WebNR Originals, Aozora Bunko Starter, Standard Ebooks Starter, Project Madurai Starter, English Serial Platforms Starter, Project Gutenberg Starter, Global Grey Starter, Online Books Page Starter, Wolne Lektury Starter, Wikisource Starter, English Web-Fiction Discovery Starter, and Chinese Web-Fiction Platforms Starter. Rights/access behavior remains source-specific; several maintained catalogs are intentionally link-only.
- The deferred source queue includes Project Runeberg, StoryWeaver, Lit2Go, Perseus Digital Library, Baen Free Library, LitFic, Betakyte, Hungry's Hedgerow, Ream, Laterpress, Fanqie / 番茄小说, Changpei / 长佩文学, 潇湘书院, 红袖读书, SF轻小说 / 菠萝包轻小说, and 刺猬猫. Richer integration requires source-specific rights/access, robots, attribution, stable identity, paging/feed behavior, cadence, size/timeout, update/deletion semantics, and versioned fixtures.
- The 2026-08-18 source program discovered six Chinese commercial-platform candidates, completed full audits for 17K, Qimao, and SF, and delivered one passing source integration attempt through pull request #97. 17K and Qimao were admitted only at link-only compatibility; SF and the other newly observed candidates remain deferred.
- Rotating 2026-08-18 source-health checks kept the Chinese platform starter at its current link-only boundary. Fresh public Qidian and JJWXC discovery/ranking surfaces remained reachable, and no evidence justified deleting or shrinking maintained coverage.
- Runtime analytics remain one GA4 destination, `G-DGH8HNQKE4`. Application output requires `window.location.href` for `page_location` and `window.location.pathname + window.location.search` for `page_path`, while Google signals and ad-personalization signals remain disabled.
- The configured GA4/Search Console Drive folder still exposes no matching export files, and the connected Cloudflare accounts expose no exact `webnovel.win` zone. Those are observation gaps, not zero-valued metrics or a reason to change production analytics.
- Fresh search continues to surface an obsolete indexed WebNR description saying there is no analytics, while current production policy and repository validation require GA4. The stale search description remains external/search evidence rather than site truth.
- Fresh search also surfaces LibHunt pages mentioning WebNR and `app.webnovel.win`; because this cycle did not independently inspect a rendered outbound anchor, those observations remain search discoveries rather than verified backlinks.
- Local TXT reading remains a core supported path. EPUB support and richer remote-source adapters remain future work that must ship with explicit parser, fixture, size, timeout, security, provenance, and rights/access contracts rather than compatibility-by-claim.
- `scripts/verify-production-builds.mjs` depends on the exact deployment-key labels in this file. Those labels must remain unchanged unless the verifier and its tests are updated in the same reviewed change.
- Pure `.github/seo-data/**` closeout changes are operating metadata and do not require a new rendered-site deployment; they still require the normal non-draft PR, complete expected CI, fresh final review, and exact-head squash merge.

## Active focus

1. Complete the 2026-08-18 closeout only after exact public application, documentation-mirror, and canonical build evidence reaches `800f1da2c5abf255c3c5f1bb63cdc2956dc364e9`, `1c38192bbd2f1656c9bb924823c05c5e48d7fd92`, and `1c38192bbd2f1656c9bb924823c05c5e48d7fd92` respectively.
2. Prepare the scheduled 2026-08-20 Japanese web-novel and translation discovery asset with Japanese-language first-party/community research and the repository's full research-blog quality floor; do not substitute thin filler before that date.
3. Continue daily source growth from the audited and deferred queues. Commercial-platform ingestion stays link-only unless explicit machine-interface permission plus reproducible robots, paging, cadence, timeout, provenance, update/deletion, and rights fixtures justify a richer capability level.
4. Preserve exact independent build identities for the reader, canonical documentation site, and documentation mirror; keep all four Quality jobs and the production verifier as permanent release gates.
5. Keep collecting GA4, Search Console, and Cloudflare evidence when provider data is actually available; never convert missing exports or unavailable zones into zero-valued metrics.
6. Advance clean-room Legado compatibility and EPUB/remote-ingestion support only behind tested capability levels, versioned fixtures, bounded resource behavior, and explicit rights/access handling.
