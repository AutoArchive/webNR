Wikisource Starter
==================

Repository URL
--------------
https://app.webnovel.win/sources/wikisource-starter

One-click add URL
-----------------
https://app.webnovel.win/?repos=https%3A%2F%2Fapp.webnovel.win%2Fsources%2Fwikisource-starter

Purpose
-------
This WebNR-maintained source is a small English-language discovery catalog for
selected classic novels on English Wikisource. It gives readers stable work or
edition landing pages while leaving reading, edition selection, downloads,
proofreading state, and work-specific rights information at Wikisource.

Source and reuse boundary
-------------------------
Wikisource is a Wikimedia project for free-content source texts. English
Wikisource's copyright policy requires hosted works to be in the public domain
or available under a compatible free license, while contributor-created text is
licensed under CC BY-SA 4.0 and GFDL unless otherwise noted. Individual source
or edition pages still carry the authoritative rights template and edition
status, so this starter does not treat the whole site as one undifferentiated
public-domain corpus.

Source: https://en.wikisource.org/
Copyright policy: https://en.wikisource.org/wiki/Wikisource:Copyright_policy
Terms of use: https://foundation.wikimedia.org/wiki/Policy:Terms_of_Use

Current WebNR behavior
----------------------
The entries are discovery links only. Selecting an item opens its English
Wikisource work or edition page. WebNR stores only basic bibliographic facts,
WebNR-authored descriptions, and the verified landing-page URL. It does not
proxy, cache, crawl, bulk-download, or redistribute Wikisource text, scans,
EPUB/MOBI/PDF exports, images, or contributor annotations.

A future richer adapter would require versioned fixtures for MediaWiki/API
pagination, stable revision identity, request cadence, size limits, timeout and
backoff behavior, attribution, and work-level license/status fields. The current
starter performs no runtime Wikisource API polling and therefore adds no API,
CORS, or rate-limit dependency to the reader path.

Included discovery pages
------------------------
- Pride and Prejudice (1813) — Jane Austen
- Frankenstein, or the Modern Prometheus (Revised Edition, 1831) — Mary Shelley
- Dracula — Bram Stoker
- The Time Machine (Holt text) — H. G. Wells

Last verified
-------------
2026-08-15
