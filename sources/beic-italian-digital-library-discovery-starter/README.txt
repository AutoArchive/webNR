BEIC Italian Digital Library Discovery Starter
==============================================

Repository URL
--------------
https://app.webnovel.win/sources/beic-italian-digital-library-discovery-starter

One-click add URL
-----------------
https://app.webnovel.win/?repos=https%3A%2F%2Fapp.webnovel.win%2Fsources%2Fbeic-italian-digital-library-discovery-starter

Purpose
-------
This WebNR-maintained source is a small link-only discovery directory for the
Biblioteca digitale BEIC, operated by Fondazione Biblioteca Europea di
Informazione e Cultura in Milan. It helps readers reach the official digital
library, its discovery catalog, and its current reuse terms without mirroring
catalog records, images, scans, PDFs, metadata, OAI-PMH responses, or other BEIC
collection data.

Origin identity and reader value
--------------------------------
BEIC describes its digital library as a free-access, multidisciplinary collection
covering major works of European humanistic and scientific culture from antiquity
to the contemporary period. During the 2026-09-18 review, the first-party digital
library home reported more than 41,000 digital resources and linked directly to
its Primo VE discovery catalog.

The three entries in this starter are deliberately navigation records:

- the official Biblioteca digitale BEIC home and collection entry point;
- the first-party discovery catalog used to search the digital library;
- the current first-party terms of use and reuse guidance.

Rights and reuse boundary
-------------------------
BEIC's current terms say that images published in the digital-library catalog are
freely accessible, downloadable, and reusable. They also distinguish the rights
basis: works whose copyright has expired and their reproductions remain in the
public domain; works for which Fondazione BEIC holds copyright are distributed
under CC BY-SA; catalog and related data are made available under CC0; and
BEIC-produced materials such as virtual exhibitions are generally CC BY-SA 4.0
unless otherwise specified.

WebNR records that unusually clear first-party policy but still keeps this first
admission link-only. It stores only three reviewed first-party URLs plus
WebNR-authored labels and descriptions. It does not convert a permissive rights
statement into an unreviewed crawler, bulk mirror, catalog clone, or automatic
file-import capability.

Current WebNR behavior
----------------------
Adding this source downloads only WebNR's small static YAML index. Selecting an
entry opens the corresponding BEIC page in the browser. WebNR performs no runtime
BEIC search, Primo VE request, OAI-PMH harvest, catalog polling, image or document
download, metadata extraction, background synchronization, credential forwarding,
or proxying for this starter.

This source is discovery-only. It does not claim that BEIC scans, images, PDFs,
or other digital objects can be imported directly into WebNR's TXT reader.

Audit boundary and future upgrade
---------------------------------
The BEIC digital-library overview, live digital-library home, public discovery
catalog, infrastructure description, and current terms of use were reviewed on
2026-09-18. The admitted navigation pages were reachable without an account for
ordinary discovery and rights-context reading; the catalog itself is a
JavaScript-based Primo VE application.

A future content or metadata adapter would require a separate source-specific
audit of exact resource endpoints, OAI-PMH or discovery interfaces, request and
robots policy, browser transport/CORS, stable file and record identity,
update/deletion semantics, pagination and cadence, size/time/failure limits,
supported formats, provenance and attribution, and versioned fixtures. No such
runtime capability is claimed by this starter.

Last verified
-------------
2026-09-18
