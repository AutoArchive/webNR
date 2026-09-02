Folger Shakespeare TXT Starter
==============================

Repository URL
--------------
https://app.webnovel.win/sources/folger-shakespeare-txt-starter

One-click add URL
-----------------
https://app.webnovel.win/?repos=https%3A%2F%2Fapp.webnovel.win%2Fsources%2Ffolger-shakespeare-txt-starter

Purpose
-------
This starter promotes one previously deferred Folger Shakespeare Digital Texts
candidate to a bounded direct-TXT capability. It exposes three Folger-provided
English plain-text editions: Macbeth, Hamlet, and Romeo and Juliet. WebNR stores
only a three-record catalog plus provenance and license notes. It does not mirror,
proxy, rewrite, bulk-download, or background-poll Folger text.

Upstream and rights evidence
----------------------------
Folger's current Download Shakespeare page explicitly offers TXT among six free
download formats and says those files are free to use for non-commercial
purposes. Folger's current copyright policy identifies Folger Digital Texts as
Creative Commons Attribution-NonCommercial 3.0 Unported (CC BY-NC 3.0). The
policy requires attribution to Folger Digital Texts and prohibits commercial use.
This source therefore labels the texts as CC BY-NC 3.0; it does not call the
Folger editions unrestricted public-domain files merely because Shakespeare's
underlying works are old.

The three catalog records preserve Folger Shakespeare Library / Folger Digital
Texts as the source and link to the official Folger work pages. The raw TXT files
themselves contain the work title, William Shakespeare, Folger Shakespeare
Library, and editorial attribution. Romeo and Juliet was rechecked through the
current Folger work page on 2026-09-02; its official TXT download resolved to the
same first-party Folger S3 asset recorded in this source. Macbeth and Hamlet were
rechecked through their current Folger work pages and first-party TXT assets in
the same operating audit.

Runtime boundary
----------------
Adding this source fetches only the small WebNR YAML catalog. A reader explicitly
choosing one record uses WebNR's existing browser-side URL-import path to request
that one public HTTPS TXT asset from Folger's first-party asset host. There is no
server-side fetch, cache, content mirror, bulk corpus download, account use,
credential or cookie use, crawler, or scheduled poll.

Browser CORS and ordinary network availability still apply. The source does not
claim to bypass them. If a Folger asset stops being readable from the browser,
WebNR should surface the import failure and later downgrade or repair the record
through a reviewed change; it must not silently switch to an unreviewed mirror.

Identity, update, and failure behavior
--------------------------------------
- Stable identity: the Folger work slug plus official work page.
- Download identity: the explicit first-party Folger asset URL stored per record.
- Pagination: none; the source contains exactly three records.
- Request cadence: no polling; one text request only after an explicit reader
  import action.
- Format: Folger's plain-text download format; the current usage guide describes
  these as ASCII 7-encoded files intended for simple, stable application use.
- Updates: a later cycle may re-audit a changed Folger asset or edition and update
  the catalog through the normal PR, CI, deployment, and public-verification lane.
- Deletions: an upstream disappearance does not silently remove or replace an
  entry.
- Attribution: Folger Shakespeare Library / Folger Digital Texts remains visible
  in source metadata and the official work page remains the provenance link.
- License boundary: CC BY-NC 3.0; WebNR makes no broader redistribution claim.

Why this is narrower than a Folger corpus mirror
------------------------------------------------
Folger offers many works and multiple machine-readable formats, including XML and
TEI Simple, and it also documents an experimental API. This starter deliberately
does not convert that availability into a blanket synchronized corpus. A broader
adapter would need a source-specific catalog identity, update/deletion semantics,
request/resource budgets, versioned fixtures, attribution handling, and tested
runtime behavior. The three-record direct-TXT starter gives readers a real,
auditable import route without assuming those wider capabilities.

Last verified
-------------
2026-09-02
