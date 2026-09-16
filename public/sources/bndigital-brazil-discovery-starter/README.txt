BNDigital Brazil Discovery Starter
==================================

Repository URL
--------------
https://app.webnovel.win/sources/bndigital-brazil-discovery-starter

One-click add URL
-----------------
https://app.webnovel.win/?repos=https%3A%2F%2Fapp.webnovel.win%2Fsources%2Fbndigital-brazil-discovery-starter

Purpose
-------
This WebNR-maintained source is a small link-only discovery directory for the
Biblioteca Nacional Digital (BNDigital) operated by Brazil's Fundação Biblioteca
Nacional. It helps readers reach the official digital collection, the institution's
public-domain discovery page, and its current reuse guidance without mirroring
scans, OCR, catalog records, PDFs, images, audio, or other collection files.

Origin identity and reader value
--------------------------------
BNDigital is the digital-library service of Brazil's Fundação Biblioteca Nacional.
Its current public site says the digital collection contains more than three million
freely accessible documents and covers books and other bibliographic material as
well as manuscripts, maps, images, periodicals, and sound recordings.

The current FAQ describes the collection as primarily public-domain material from
the fifteenth through the early twentieth century, while also noting that some
works with active copyright are online because rights holders authorized their
publication. The site therefore provides unusually useful first-party provenance
for Brazilian and Portuguese-language historical material, but free online access
is not treated as a collection-wide permission for unrestricted redistribution.

The three entries in this starter are deliberately navigation records:

- the official Acervo Digital discovery/search surface;
- BNDigital's first-party public-domain discovery page;
- BNDigital's first-party guidance for reuse of digital files.

Rights and reuse boundary
-------------------------
BNDigital's current reuse guidance states that most BNDigital material consists of
digital reproductions of public-domain works and that reuse of those public-domain
contents is free when the Fundação Biblioteca Nacional is credited as the source.
The same guidance also distinguishes protected works, for which authorization must
come from the relevant rightsholder, and partner-institution material in the Rede
da Memória Virtual Brasileira, for which prior authorization from the holding
institution may be required.

WebNR therefore stores only three reviewed first-party URLs plus WebNR-authored
labels and descriptions. It does not copy BNDigital text, scans, OCR, PDFs,
images, catalog metadata, search-result rows, usage statements, or partner
collections. It does not infer that every item reachable from BNDigital has the
same reuse status.

Current WebNR behavior
----------------------
Adding this source downloads only WebNR's small static YAML index. Selecting an
entry opens the corresponding BNDigital page in the browser. WebNR performs no
runtime BNDigital search, crawl, API request, document download, OCR request,
background synchronization, credential forwarding, or proxying for this starter.

This source is discovery-only. It does not claim that BNDigital scans or PDFs can
be imported directly into WebNR's TXT reader, and it does not turn browser access
into a content license.

Audit boundary and future upgrade
---------------------------------
BNDigital's public collection surface, FAQ, public-domain page, reuse guidance,
operator identity, and mixed public-domain/authorized-publication boundary were
reviewed on 2026-09-16. The admitted first-party pages were reachable without a
login for ordinary discovery and rights-context reading.

A future BNDigital content adapter would require a separate source-specific audit
of exact item endpoints, item-level rights and attribution, partner-collection
ownership, terms and robots behavior, browser transport/CORS, content identity,
update/deletion semantics, pagination, timeouts, response-size limits, supported
formats, and versioned fixtures. No such capability is claimed by this starter.

Last verified
-------------
2026-09-16
