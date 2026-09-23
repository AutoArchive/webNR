BIDICAM Castilla-La Mancha Digital Library Discovery Starter
============================================================

Repository URL
--------------
https://app.webnovel.win/sources/bidicam-castilla-la-mancha-digital-library-discovery-starter

One-click add URL
-----------------
https://app.webnovel.win/?repos=https%3A%2F%2Fapp.webnovel.win%2Fsources%2Fbidicam-castilla-la-mancha-digital-library-discovery-starter

Purpose
-------
This WebNR-maintained source is a small first-party link-only discovery directory
for the Biblioteca Digital de Castilla-La Mancha (BIDICAM). It helps readers
reach BIDICAM's official collection overview, catalog search, and historical
periodicals without WebNR crawling, mirroring, proxying, or redistributing the
upstream digital objects.

Origin identity and reader value
--------------------------------
BIDICAM is operated within Patrimonio Digital de Castilla-La Mancha. Its official
presentation says its mission is to preserve and provide open access to digitized
bibliographic heritage in Castilla-La Mancha that is not subject to copyright.
The same first-party description says readers can search by title or author,
explore highlighted collections, and download full documents in several formats.
BIDICAM also participates in open-repository interoperability using standards such
as OAI, METS, Dublin Core, XMLMARC, PREMIS, and EDM.

The three entries in this starter are deliberately limited to:

- BIDICAM's official presentation and collection overview;
- Patrimonio Digital de Castilla-La Mancha's first-party assisted catalog search,
  where readers can filter to the BIDICAM collection;
- BIDICAM's first-party historical-periodicals discovery page.

Rights and reuse boundary
-------------------------
The first-party BIDICAM presentation reviewed on 2026-09-23 explicitly describes
the BIDICAM bibliographic collection as heritage not subject to copyright and
states that complete documents can be downloaded freely. Patrimonio Digital de
Castilla-La Mancha also hosts other microsites and material with different
ownership and rights histories, so this evidence is not treated as a blanket
licence for every object on the broader host or as permission for an unrestricted
harvesting pipeline.

This starter therefore stores only three reviewed first-party URLs plus
WebNR-authored labels and descriptions. It does not harvest OAI records, crawl
catalog results, download PDFs or images, extract OCR, cache digital objects,
mirror metadata, proxy requests, or redistribute upstream files.

Current WebNR behavior
----------------------
Adding this source downloads only WebNR's small static YAML index. Selecting an
entry opens the corresponding first-party Patrimonio Digital/BIDICAM page in the
browser. WebNR performs no runtime catalog synchronization, no background crawl,
no OAI harvesting, no file download, no credential forwarding, and no proxy for
this starter.

Audit boundary and future upgrade
---------------------------------
The BIDICAM presentation, catalog-search behavior, historical-periodicals route,
and first-party search help were reviewed on 2026-09-23. A richer adapter may be
possible, but it requires a separate source-specific audit of record and file
identity, per-item rights and attribution, stable acquisition URLs, transport and
CORS behavior, robots and rate limits, pagination, update/deletion semantics,
encoding and OCR behavior, response/resource limits, failure handling, and
versioned fixtures. No such runtime capability is claimed by this starter.

Last verified
-------------
2026-09-23
