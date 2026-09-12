CLiGS Textbox Spanish-American TXT Starter
==========================================

Repository URL
--------------
https://app.webnovel.win/sources/cligs-textbox-spanish-american-txt-starter

One-click add URL
-----------------
https://app.webnovel.win/?repos=https%3A%2F%2Fapp.webnovel.win%2Fsources%2Fcligs-textbox-spanish-american-txt-starter

Purpose
-------
This starter exposes three bounded direct-TXT examples from the CLiGS Textbox
"Collection of 19th Century Spanish-American Novels (1880-1916)". The upstream
collection contains 24 novels and short novels by eight Spanish-American authors.
WebNR keeps only a small reviewed catalog and points readers to exact
commit-pinned plain-text files; it does not mirror, crawl, clone, or periodically
synchronize the wider CLiGS corpus.

Upstream identity, rights, and attribution
-----------------------------------------
The exact upstream source identity audited for this starter is:

cligs/textbox commit 1b91e940475c8a7e866457a3953fed5edb0a29f1

The collection README states that the authors' copyright in these texts has
expired and that the collection is published under Creative Commons Attribution
4.0 International. It also asks users to provide a reference and suggests citing
"Collection of 19th Century Spanish-American Novels (1880-1916)", edited by
Ulrike Henny-Krahmer, Würzburg: CLiGS, 2017. WebNR preserves that provenance and
does not broaden the collection's license into a claim about unrelated CLiGS
collections or upstream source sites.

The three selected entries are taken from the collection's `txt_id` directory,
which the upstream README describes as simple plain text containing only the main
text of the novels:

- nh0003.txt — Laucha, Roberto Payró — 72,519 bytes
- nh0004.txt — Inca, Roberto Payró — 136,407 bytes
- nh0011.txt — Rumbo, Eugenio Cambaceres — 200,133 bytes

All three files are below 1 MiB. Their titles and stable IDs come from the
commit-pinned collection metadata. Every `download_url` embeds the audited commit
instead of following mutable `master`.

Runtime boundary
----------------
Adding this source fetches only WebNR's small YAML index. A reader explicitly
choosing one entry causes the existing browser-side URL-import path to request
that one HTTPS raw file from `raw.githubusercontent.com`. WebNR performs no
background polling, bulk repository clone, catalog crawl, server-side proxy,
credential or cookie use, account automation, JavaScript execution, or archive
extraction.

This uses the same already-maintained direct-TXT transport pattern as the
GITenberg starter. An origin or CORS failure remains a visible import failure;
WebNR must not silently switch to another copy or an unreviewed mirror.

Identity, update, deletion, and failure behavior
-----------------------------------------------
- Stable identity: CLiGS collection plus the `nh...` text ID.
- Snapshot identity: cligs/textbox commit
  `1b91e940475c8a7e866457a3953fed5edb0a29f1` embedded in each download URL.
- Pagination: none; this starter contains three explicit entries.
- Request cadence: no polling; one upstream TXT request only after an explicit
  reader import action.
- Response size: all three audited files are below 1 MiB and the WebNR index stays
  within the application's existing source-index bound.
- Updates: a later operating cycle may audit a newer upstream revision and update
  the pinned URL through the normal PR, CI, and public-verification lane.
- Deletions: an upstream omission or refactor never silently removes a WebNR
  entry; a deletion or replacement requires an explicit reviewed change.
- Attribution: future changes must preserve the CLiGS collection identity,
  CC BY 4.0 boundary, and collection/editor attribution.
- Failure: unavailable, moved, oversized, or CORS-blocked upstream content is
  surfaced as an import failure rather than replaced with guessed content.

Why this is a small pilot
-------------------------
CLiGS Textbox contains multiple language collections and multiple data formats.
Their rights, markup, metadata, and runtime characteristics are not assumed to be
identical. This starter deliberately proves only three Spanish-American plain-text
items from one audited collection. Expanding it requires source-specific review
rather than treating the entire repository as one blanket ingestion grant.

Last verified
-------------
2026-09-03
