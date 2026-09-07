---
title: Archive — Web novel reader comparison (February 2025 snapshot)
date: 2025-02-27
description: Historical snapshot of an early WebNR competitor analysis. Kept for provenance, but no longer a current product comparison or roadmap.
categories:
  - Archive
---

# Archive — Web novel reader comparison (February 2025 snapshot)

This page is kept as a **historical snapshot**, not as current advice.

The original February 2025 article compared Shosetsu, LNReader, QuickNovel, NovelDokusha, Miru and several commercial reading platforms while WebNR was still at an early stage. It also mixed observed competitor features with speculative ideas for what WebNR *might* build later. By 2026, that made the article actively confusing: some proposed features never became WebNR product commitments, the source model changed substantially, and several statements about WebNR no longer described the shipping application.

Rather than preserve outdated speculation as if it were a current roadmap, this archive now records only what the old post was for.

## What was useful in the 2025 comparison

The article identified a few durable dimensions that still matter when choosing a reader:

- **Platform model:** native Android app, cross-platform app, browser/PWA, or closed content platform.
- **Reading experience:** paged/scroll modes, typography, bookmarks, progress and text-to-speech.
- **Offline behavior:** whether the reader keeps imported material locally and what still works without a network.
- **Source model:** user-owned files, official platform catalogs, community extensions, or independently distributed source definitions.
- **Maintenance cost:** source adapters and scraping rules can break when websites change.
- **Trust boundary:** open-source rules do not automatically grant rights to the underlying content.

Those remain useful questions. The specific 2025 feature table and proposed WebNR roadmap do not.

## What changed in WebNR

Current WebNR is a local-first browser reader. It supports local TXT and permitted text-URL import, local reading state, PWA/offline shell behavior, discovery/search catalogs, and a growing set of explicitly audited source capabilities. Source integrations now distinguish discovery-only links, direct TXT, feeds/APIs and compatibility work instead of treating “supports many sources” as one undifferentiated claim.

For current information use these pages instead:

- [WebNR vs other reading apps: how to choose](2026-08-14-reading-app-comparison.md)
- [WebNR home and current capabilities](../../README.md)
- [Sources](../../source/index.md)
- [Legado compatibility report](2026-08-30-legado-compatibility-report.md)
- [TXT import guide](2026-09-01-raw-txt-collection-import-guide.md)

## Why the old text was condensed

A historical blog post should not silently become product documentation. The previous version contained future-tense statements about cloud sync, automatic source syncing, live translation, large-scale scraping and other ideas that were neither a current WebNR contract nor a reliable description of production behavior. Keeping those paragraphs searchable without a warning was worse than preserving them verbatim.

The Git history still preserves the original February 2025 text for project archaeology. This public page now serves the reader-facing purpose: it explains that the old comparison existed, what questions from it still matter, and where to find current evidence.
