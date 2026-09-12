Wolne Lektury Starter
=====================

Repository URL
--------------
https://app.webnovel.win/sources/wolne-lektury-starter

One-click add URL
-----------------
https://app.webnovel.win/?repos=https%3A%2F%2Fapp.webnovel.win%2Fsources%2Fwolne-lektury-starter

Purpose
-------
This WebNR-maintained source is a small Polish-language discovery catalog for
selected classic novels published by Wolne Lektury. It gives readers stable
catalog landing pages while leaving reading, downloads, edition notes, and
license details at the original library.

Source and reuse boundary
-------------------------
Wolne Lektury is operated by Fundacja Wolne Lektury and exposes both public book
pages and a documented API. Its reuse guidance states that books and project-added
materials are made available under free-license or public-domain terms, with the
applicable attribution/share-alike or Free Art License conditions described by
the project. Individual editions can carry their own rights and editorial notes,
so this starter deliberately does not copy book text, audiobook files, cover art,
or source descriptions.

Source: https://wolnelektury.pl/
API: https://wolnelektury.pl/api/
Rights: https://wolnelektury.pl/info/prawa/
Reuse guidance: https://wolnelektury.pl/info/zasady-wykorzystania/

Current WebNR behavior
----------------------
The entries are discovery links only. Selecting an item opens its Wolne Lektury
catalog page. WebNR stores only title/author facts, WebNR-authored descriptions,
and the verified landing-page URL. It does not proxy, cache, crawl, bulk-download,
or redistribute the source files.

A future richer adapter may use the documented API, but only after versioned
fixtures define pagination, request cadence, response-size limits, per-item rights
fields, encoding, timeout/backoff behavior, and preservation of source attribution.
The current starter performs no runtime API polling and therefore has no CORS or
rate-limit dependency in the reader path.

Included discovery pages
------------------------
- Lalka — Bolesław Prus
- Quo vadis — Henryk Sienkiewicz
- Chłopi — Władysław Stanisław Reymont
- Nad Niemnem — Eliza Orzeszkowa

Last verified
-------------
2026-08-14
