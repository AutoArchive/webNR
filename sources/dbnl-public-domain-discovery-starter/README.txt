DBNL Public Domain Discovery Starter
====================================

Repository URL
--------------
https://app.webnovel.win/sources/dbnl-public-domain-discovery-starter

One-click add URL
-----------------
https://app.webnovel.win/?repos=https%3A%2F%2Fapp.webnovel.win%2Fsources%2Fdbnl-public-domain-discovery-starter

Purpose
-------
This starter gives readers a bounded route into DBNL's explicitly public-domain
collection. DBNL's first-party collection page states that the titles listed
there are public domain / copyright free, may be used for any purpose, and are
also offered in XML and .txt formats.

WebNR deliberately keeps this first admission discovery-only. The index contains
the official collection plus three representative works whose own DBNL pages are
marked `Auteursrechtvrij` and expose a `tekstbestand` download:

- Brieven aan Sophie (1806) — Rhijnvis Feith
- Camera Obscura (1871) — Nicolaas Beets
- Historie van mejuffrouw Sara Burgerhart (1782) — Aagje Deken and Betje Wolff

Rights and scope boundary
-------------------------
The distribution basis is DBNL's explicit `Collectie publiek domein` statement
and the item-level `Auteursrechtvrij` labels on the three selected works. This
starter does not generalize those statements to DBNL titles outside that
collection, later editions with different rights, images, editorial material,
or unrelated DBNL datasets.

WebNR stores only first-party DBNL page URLs plus WebNR-authored labels and
summaries. It does not copy the texts, metadata CSV, XML archive, bulk TXT ZIP,
PDFs, ebooks, cover images, or site editorial material.

Why this is not direct-TXT yet
------------------------------
DBNL exposes first-party `tekstbestand` endpoints for these works, which makes the
collection a strong richer-interface candidate. WebNR's current direct-URL import
runs in the reader's browser, however, so a usable direct-TXT source also requires
repeatable evidence that the endpoint permits the cross-origin browser request
and that response-size, identity, update/deletion, and failure behavior remain
within the source contract.

This operating cycle verified the public-domain status and current first-party
TXT availability but did not obtain a repeatable browser-CORS result. Rather than
turn server-side reachability into a false browser-compatibility claim, the
starter therefore links the official DBNL pages only. A later reviewed change may
upgrade selected entries after an actual browser transport fixture passes.

Runtime boundary
----------------
Adding this source fetches only WebNR's small static YAML index. Opening an entry
navigates the reader to the first-party DBNL collection or work page. There is no
background polling, catalog crawl, bulk ZIP download, server-side proxy, account
or credential use, cookie automation, JavaScript execution, CAPTCHA handling, or
access-control bypass.

Identity, update, deletion, and failure behavior
-----------------------------------------------
- Stable identity: DBNL collection plus the explicit DBNL work page identifier.
- Content transport: none in this capability level; discovery links only.
- Pagination: none; four explicit entries are maintained by WebNR.
- Request cadence: no polling or synchronization.
- Updates: a later cycle may revise the bounded list or upgrade a selected work
  only after a new source-specific audit and normal PR/CI/public verification.
- Deletions: an upstream omission never silently removes an entry; removal or
  replacement is a reviewed WebNR change.
- Failure: an unavailable or redirected origin is reported through source-health
  review rather than silently replaced by a mirror.

Last verified
-------------
2026-09-04
