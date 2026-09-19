Open Medieval French Direct TXT Starter
=======================================

Repository URL
--------------
https://app.webnovel.win/sources/open-medieval-french-txt-starter

One-click add URL
-----------------
https://app.webnovel.win/?repos=https%3A%2F%2Fapp.webnovel.win%2Fsources%2Fopen-medieval-french-txt-starter

Purpose
-------
This starter exposes three bounded plain-text examples from the Open Medieval
French `OpenMedFr/texts` repository. The upstream project describes the corpus as
plain-text medieval French derived from critical editions believed to be out of
copyright or known to use Creative Commons licenses, and publishes the repository
under CC BY-NC-SA 4.0. WebNR keeps only a small reviewed catalog and points
readers to exact commit-pinned upstream files. It does not mirror, clone, crawl,
or periodically synchronize the wider corpus.

Upstream identity, rights, and attribution
-----------------------------------------
The exact upstream identity audited for this starter is:

OpenMedFr/texts commit 0d3112783556775fa30ab4bdac84a4c383cc0217

The repository README states that its files are plain-text versions of medieval
French texts derived from critical editions believed to be out of copyright or
known to be under Creative Commons licenses. It also states that the repository
is published under Creative Commons Attribution-NonCommercial-ShareAlike 4.0
International, documents a takedown procedure, and suggests citing each text as
an Open Medieval French file. WebNR preserves that source identity and does not
turn the upstream project's good-faith rights statement into a broader claim
about the critical editions, manuscripts, or unrelated repositories.

The three selected entries all come from the exact audited commit and are well
below 1 MiB:

- Cliges.txt — Cligès, Chrétien de Troyes — 203,200 bytes
- Yvain.txt — Yvain: Le Chevalier au Lion, Chrétien de Troyes — 211,242 bytes
- PercevalKu.txt — Perceval: Le Conte du Graal, Chrétien de Troyes — 277,626 bytes

Titles and authors come from the metadata headers inside those exact upstream
files. Every `download_url` embeds the audited commit rather than following the
mutable `master` branch.

Runtime boundary
----------------
Adding this source fetches only WebNR's small YAML index. A reader explicitly
choosing one entry causes the existing browser-side URL-import path to request
that one HTTPS raw file from `raw.githubusercontent.com`. This is the same bounded
transport pattern already used by maintained GITenberg and CLiGS direct-TXT
starters. WebNR performs no background polling, bulk clone, catalog crawl,
server-side proxy, credential or cookie use, account automation, JavaScript
execution, or archive extraction.

WebNR does not host copies of the three text files. An origin or CORS failure
remains a visible import failure; the reader is never silently redirected to an
unreviewed mirror. The upstream CC BY-NC-SA 4.0 attribution/non-commercial/
share-alike boundary remains visible in this source record rather than being
relabelled as unrestricted public-domain redistribution.

Identity, update, deletion, and failure behavior
-----------------------------------------------
- Stable identity: OpenMedFr repository plus the upstream text filename/TextURI.
- Snapshot identity: `OpenMedFr/texts` commit
  `0d3112783556775fa30ab4bdac84a4c383cc0217` embedded in each raw URL.
- Pagination: none; this starter contains three explicit entries.
- Request cadence: no polling; one upstream TXT request only after an explicit
  reader import action.
- Response size: the three audited files are each below 300 KiB.
- Encoding: the audited files are readable UTF-8 text through the existing GitHub
  raw-file transport.
- Updates: a later operating cycle may audit a newer upstream revision and update
  the pinned URLs only through the normal PR, CI, and production-verification
  lane.
- Deletions: an upstream deletion or rename never silently removes a WebNR entry;
  replacement or removal requires an explicit reviewed change.
- Attribution: future changes must preserve Open Medieval French provenance and
  the upstream CC BY-NC-SA 4.0 repository boundary.
- Failure: unavailable, moved, oversized, malformed, or CORS-blocked upstream
  content is surfaced as an import failure instead of replaced with guessed text.

Why this is a small pilot
-------------------------
The Open Medieval French repository contains texts from multiple critical
editions and the upstream rights statement deliberately uses good-faith language.
This starter therefore proves only three exact files with clear in-file identity
and does not infer blanket rights for every underlying edition. Expansion should
keep file-level provenance, attribution, transport, and rights evidence reviewable.

Last verified
-------------
2026-09-06
