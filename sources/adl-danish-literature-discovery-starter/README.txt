ADL Danish Literature Discovery Starter
=======================================

Repository URL
--------------
https://app.webnovel.win/sources/adl-danish-literature-discovery-starter

One-click add URL
-----------------
https://app.webnovel.win/?repos=https%3A%2F%2Fapp.webnovel.win%2Fsources%2Fadl-danish-literature-discovery-starter

Purpose
-------
This WebNR-maintained source is a small link-only discovery directory for Arkiv
for Dansk Litteratur (ADL), the Danish literary archive operated by Det Kgl.
Bibliotek and Det Danske Sprog- og Litteraturselskab (DSL). It helps readers
reach the official project description, the Royal Danish Library's ADL
collection landing page, and the separately identified public-domain ADL dataset
without mirroring the archive or claiming that every ADL edition is freely
redistributable.

Origin identity and reader value
--------------------------------
DSL identifies ADL as a joint project with Det Kgl. Bibliotek that provides
access to classic Danish literature. The current project description says the
archive covers 78 authors from Saxo through Gustaf Munch-Petersen and includes
facsimiles and searchable text editions.

The Royal Danish Library's open repository separately publishes an ADL dataset
labelled as outside copyright. That dataset contains 156 works dated 1851-1945
and is marked Public Domain Mark 1.0. This explicit subset is useful to readers
and researchers because it distinguishes a documented public-domain corpus from
the broader ADL reading site, where modern editorial introductions or particular
editions may still carry rights.

The three entries in this starter are deliberately navigation records:

- DSL's official ADL project overview;
- the Royal Danish Library's ADL open-repository collection;
- the exact public-domain ADL dataset item in that repository.

Rights and reuse boundary
-------------------------
The public-domain dataset item is explicitly marked Public Domain Mark 1.0 by
Det Kgl. Bibliotek and DSL. That statement applies to the identified dataset; it
does not turn every page, introduction, facsimile, scan, edition, annotation, or
other material on the broader ADL service into unrestricted content.

ADL's rendered editions can carry publisher/editorial copyright notices even
when an underlying historical work is old. WebNR therefore does not mirror ADL
HTML, PDFs, scans, TEI/XML, ZIP files, catalog metadata, author portraits,
introductions, annotations, or search results. This starter stores only the
three reviewed first-party destination URLs plus WebNR-authored labels and
descriptions.

Current WebNR behavior
----------------------
Adding this source downloads only WebNR's small static YAML index. Selecting an
entry opens the corresponding DSL or Royal Danish Library page. WebNR performs
no runtime ADL/KB search, archive crawl, API request, dataset download, ZIP
extraction, TEI parsing, background synchronization, credential forwarding, or
proxying for this starter.

The public-domain dataset is linked for provenance and discovery only. WebNR does
not claim to ingest its archive format today. A reader can still import a local
TXT file or another already-supported text resource through WebNR's existing
reader flow.

Audit boundary and future upgrade
---------------------------------
The DSL project page, Royal Danish Library ADL collection, explicit public-domain
dataset item, and representative ADL copyright notices were reviewed on
2026-09-14. The live `tekster.kb.dk/adl` reading surface returned a 403 to the
current automated verification client, so this starter does not depend on that
route at runtime and does not infer machine-access permission from ordinary
browser availability.

A future ADL text adapter would require a separate audit of the exact API or
dataset endpoint, robots/access terms, transport, file identity, update/deletion
semantics, rights metadata, attribution, pagination, timeouts, response-size and
archive limits, encoding, TEI structure, unknown-node behavior, and deterministic
versioned fixtures. WebNR's existing structured-text roadmap requires the TEI to
reading-text boundary to be implemented and tested before claiming direct ADL
reading compatibility.

Last verified
-------------
2026-09-14
