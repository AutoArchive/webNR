Gallica French Classics Discovery Starter
=========================================

Repository URL
--------------
https://app.webnovel.win/sources/gallica-french-classics-discovery-starter

One-click add URL
-----------------
https://app.webnovel.win/?repos=https%3A%2F%2Fapp.webnovel.win%2Fsources%2Fgallica-french-classics-discovery-starter

Purpose
-------
This WebNR-maintained source is a small first-party link-only discovery directory
for French literary classics in Gallica, the digital library of the Bibliothèque
nationale de France (BnF) and its partners. It helps readers reach Gallica's
curated French-literature selection, author index, and period index without WebNR
crawling, mirroring, proxying, or redistributing upstream records or files.

Origin identity and reader value
--------------------------------
Gallica is the BnF's digital library. Its first-party French-literature selection
states that readers can consult and download major French classics free of charge
and organizes the collection by author, period, and literary movement. The
first-party alphabetical author index provides a practical path to individual
writers and works, while the period index spans literature from the Middle Ages
through the twentieth century.

The BnF also exposes a separate Gallica OPDS catalog for EPUB books. The BnF API
documentation says those EPUB files were produced by the BnF from public-domain
works. That machine-readable route is useful evidence for a future richer adapter,
but it is deliberately outside this starter's runtime capability.

The three entries in this starter are limited to:

- Gallica's official French-literature classics selection;
- Gallica's first-party alphabetical author index for those classics;
- Gallica's first-party period index for those classics.

Rights and reuse boundary
-------------------------
Gallica contains BnF material and partner material across many dates and formats.
BnF reuse guidance distinguishes metadata, digitized public-domain documents,
non-commercial reuse, commercial reuse, and partner-specific conditions. Public
access or a downloadable object is therefore not treated here as a blanket
permission to mirror every record or file under gallica.bnf.fr.

This starter stores only three reviewed first-party URLs plus WebNR-authored
labels and descriptions. It does not query Gallica APIs at runtime, consume the
OPDS catalog, harvest OAI/SRU records, download EPUB/PDF/image/OCR files, mirror
metadata, proxy requests, or synchronize in the background.

Current WebNR behavior
----------------------
Adding this source downloads only WebNR's small static YAML index. Selecting an
entry opens the corresponding first-party Gallica page in the browser. WebNR
performs no Gallica catalog request, OPDS request, file transfer, background
crawl, account operation, or content redistribution for this starter.

Audit boundary and future upgrade
---------------------------------
The three first-party literature routes plus BnF reuse and OPDS documentation
were reviewed on 2026-09-24. A richer Gallica OPDS or record/file adapter may be
possible, but it requires a separate source-specific audit of stable record and
file identity, rights and attribution by object/provider, transport and browser
CORS behavior, robots and rate limits, pagination, update/deletion semantics,
format and encoding behavior, resource limits, failure handling, and versioned
fixtures. No such runtime capability is claimed by this starter.

Last verified
-------------
2026-09-24
