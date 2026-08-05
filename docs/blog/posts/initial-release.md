---
date: 2025-01-14
categories:
  - Release
tags:
  - archive
  - release
---

# WebNR initial release archive

This page records the original public release date. It is an archive, not a claim that every early prototype feature remains supported.

<!-- more -->

## Original product direction

WebNR was introduced as a browser-based reader centered on local storage, account-free use, offline access, configurable reading modes, text-to-speech, TXT imports, URL imports, and independently distributed source definitions.

The durable goal remains a local-first reader in which users control their own files and progress.

## Current verified behavior

As of the latest documentation review:

- The reader accepts local TXT files and supported text URLs.
- UTF-8 and common legacy encodings such as GB18030 and Big5 are handled through browser-native decoding.
- Imported content and reading progress are stored in the browser.
- The application and documentation site use Google Analytics 4 measurement `G-DGH8HNQKE4`.
- The reader reports the complete browser page URL, including query parameters and imported URLs in `?add=...`.
- Google signals and ad-personalization signals are disabled, and no custom analytics events containing local file contents or reading progress are added.
- The PWA publishes an attributable build identity and a same-origin offline application shell.
- EPUB is **not** implemented. EPUB files are rejected until a real parser, security review, fixtures, and import tests exist.
- URL and source access remain subject to browser CORS rules, remote availability, authorization, and target-site terms.
- A complete backup and restore workflow remains future product work.

## What changed after the initial release

The early project description contained aspirational language and architecture claims that were not always backed by tests. The maintained project now follows a stricter rule:

> A capability or analytics behavior is documented only when the implementation, validation, deployment, and public behavior can be verified.

Current release state, known limitations, analytics disclosure, and development commands are maintained in the [documentation home](../../README.md) and the [GitHub repository](https://github.com/AutoArchive/webNR).

## Contributing

Useful contributions include backup and restore, IndexedDB migrations, TXT encoding fixtures, accessibility tests, offline/update tests, a real secure EPUB parser, and versioned clean-room Legado compatibility fixtures. See [Contributing](../../manual/contributing.md) and [TXT import troubleshooting](../../troubleshooting/txt-import.md).
