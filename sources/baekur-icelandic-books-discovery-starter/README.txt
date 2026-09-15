Bækur.is Icelandic Books Discovery Starter
==========================================

Repository URL
--------------
https://app.webnovel.win/sources/baekur-icelandic-books-discovery-starter

One-click add URL
-----------------
https://app.webnovel.win/?repos=https%3A%2F%2Fapp.webnovel.win%2Fsources%2Fbaekur-icelandic-books-discovery-starter

Purpose
-------
This WebNR-maintained source is a small link-only discovery directory for
Bækur.is, the digitized-book service operated by the National and University
Library of Iceland. It helps readers reach the official service, title index,
and search surface without mirroring scans, OCR, catalog records, or book files.

Origin identity and reader value
--------------------------------
Bækur.is states that it was launched in 2010 by the National and University
Library of Iceland to make digital reproductions of Icelandic books available.
Its collection begins with early Icelandic printing and extends beyond 1900. The
service says all Icelandic books in the National Library collection through 1844
have been digitized, while later volumes continue to be added. It also explicitly
notes that many more recent works are present with permission from copyright
holders.

The current public title index and search interface expose a broad multilingual
collection centered on Icelandic published material. That makes Bækur.is useful
as a first-party discovery route, but the mixture of old works and newer
permission-based material means WebNR does not infer one collection-wide reuse
license.

The three entries in this starter are deliberately navigation records:

- the Bækur.is official service home/search entry;
- the first-party alphabetical title index;
- the first-party About page describing operator, scope, and digitization model.

Rights and reuse boundary
-------------------------
Free online access and historical age are not treated as a blanket permission to
redistribute every Bækur.is scan, OCR layer, edition, image, metadata record, or
newer work. The first-party About page expressly says that many more recent works
were added with permission from copyright holders, so rights must be evaluated at
the item or applicable collection level before any richer ingestion is claimed.

WebNR therefore stores only the three reviewed first-party destination URLs plus
WebNR-authored labels and descriptions. It does not copy book text, page images,
OCR, PDFs, metadata, title lists, search results, or rights statements from the
origin.

Current WebNR behavior
----------------------
Adding this source downloads only WebNR's small static YAML index. Selecting an
entry opens the corresponding Bækur.is page. WebNR performs no runtime Bækur.is
search, crawl, API request, book download, OCR request, background
synchronization, credential forwarding, or proxying for this starter.

This source is discovery-only. It does not claim that Bækur.is books can be
imported directly into WebNR's TXT reader, and it does not turn a browser-readable
page into a content license.

Audit boundary and future upgrade
---------------------------------
The Bækur.is About page, title index, search surface, operator identity, stated
digitization scope, and mixed old/permission-based collection boundary were
reviewed on 2026-09-15. The current public pages were reachable without login for
ordinary discovery.

A future Bækur.is content adapter would require a separate source-specific audit
of exact downloadable endpoints, item-level rights and attribution, terms and
robots behavior, browser transport/CORS, file identity, update/deletion
semantics, pagination, timeouts, response-size limits, format handling, and
versioned fixtures. No such capability is claimed by this starter.

Last verified
-------------
2026-09-15
