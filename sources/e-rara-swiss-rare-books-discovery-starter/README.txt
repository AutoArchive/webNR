e-rara Swiss Rare Books Discovery Starter
==========================================

Repository URL
--------------
https://app.webnovel.win/sources/e-rara-swiss-rare-books-discovery-starter

One-click add URL
-----------------
https://app.webnovel.win/?repos=https%3A%2F%2Fapp.webnovel.win%2Fsources%2Fe-rara-swiss-rare-books-discovery-starter

Purpose
-------
This WebNR-maintained source is a small link-only discovery directory for
e-rara.ch, the Swiss portal for digitized printed works held by participating
libraries. It helps readers reach the official portal, its documented machine
interfaces, and its current reuse terms without mirroring records, OCR, PDFs,
images, metadata, OAI-PMH responses, IIIF manifests, or other e-rara content.

Origin identity and reader value
--------------------------------
e-rara.ch provides online access to digitized printed works held by Swiss
libraries. Its scope includes books, maps, and illustrated material from the
beginnings of printing through the twentieth century. The platform documents
persistent identifiers, downloadable PDFs and OCR where available, RIS metadata,
OAI-PMH, IIIF, and RSS interfaces.

The three entries in this starter are deliberately navigation and evidence
records:

- the official e-rara portal and discovery entry point;
- the first-party interfaces and data-extraction documentation;
- the current first-party terms and conditions of use.

Rights and reuse boundary
-------------------------
e-rara's current terms state that licence and reuse conditions are shown for each
document. They distinguish public-domain works marked with the Public Domain Mark
from material whose usage rights are held by participating institutions and made
available under CC BY-SA 4.0. Representative title pages reviewed on 2026-09-19
showed Public Domain Mark records with downloadable PDFs and, for some titles,
OCR text and ALTO XML.

WebNR records those unusually useful first-party interfaces and rights statements
but keeps this first admission link-only. It stores only three reviewed
first-party URLs plus WebNR-authored labels and descriptions. It does not convert
an OAI endpoint, RSS feed, public-domain marker, downloadable PDF, OCR text, or
IIIF manifest into an unreviewed crawler, bulk mirror, or automatic TXT import.
Document-level rights and provenance remain authoritative.

Current WebNR behavior
----------------------
Adding this source downloads only WebNR's small static YAML index. Selecting an
entry opens the corresponding e-rara page in the browser. WebNR performs no
runtime e-rara search, OAI-PMH harvest, RSS polling, IIIF request, PDF or OCR
download, metadata extraction, background synchronization, credential forwarding,
or proxying for this starter.

During the 2026-09-19 audit, indexed first-party documentation and title pages
were available, while direct automated fetching of the portal root could return
HTTP 403. WebNR treats that as an automation/access boundary rather than trying to
circumvent it. This discovery-only source therefore has no runtime dependency on
server-side crawling of e-rara.

Audit boundary and future upgrade
---------------------------------
The portal identity, current terms, interface documentation, RSS documentation,
and representative title/download records were reviewed on 2026-09-19. A future
metadata or direct-text adapter would require a separate source-specific audit of
robots and automated-access policy, exact OAI/RSS/download endpoints, browser
transport and CORS, stable record/file identity, rights propagation, update and
deletion semantics, pagination and cadence, response-size/time/failure limits,
encoding and OCR quality, provenance and attribution, and versioned fixtures.
No such runtime capability is claimed by this starter.

Last verified
-------------
2026-09-19
