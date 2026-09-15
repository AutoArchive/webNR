The Online Books Page Starter
=============================

Repository URL
--------------
https://app.webnovel.win/sources/online-books-page-starter

One-click add URL
-----------------
https://app.webnovel.win/?repos=https%3A%2F%2Fapp.webnovel.win%2Fsources%2Fonline-books-page-starter

Purpose
-------
This WebNR-maintained source is a small discovery catalog for selected stable,
curated book records from The Online Books Page at the University of Pennsylvania.
It gives readers a durable catalog hop to free online editions while leaving the
actual books, downloads, hosting, and edition-specific rights at their origin sites.

Source and reuse boundary
-------------------------
The Online Books Page is edited by John Mark Ockerbloom and hosted by the
University of Pennsylvania Libraries. Its curated collection catalog metadata is
dedicated to the public domain under CC0. The site's other post-2010 editorial
material is separately copyrighted, and books linked from the catalog remain
subject to the rights and terms of their own hosting sites.

Source: https://onlinebooks.library.upenn.edu/
About and machine access: https://onlinebooks.library.upenn.edu/aboutolbp.html
Licenses: https://onlinebooks.library.upenn.edu/licenses.html
Stable links: https://onlinebooks.library.upenn.edu/stable.html

This starter stores WebNR-authored descriptions plus selected CC0 bibliographic
facts and stable curated-record URLs. It does not copy book text, cover art, the
Online Books Page editorial prose, or content from downstream hosts.

Current WebNR behavior
----------------------
The entries are discovery links only. Selecting an item opens its stable Online
Books Page record, where the reader can inspect the catalog description and follow
the current origin link. WebNR does not proxy, cache, crawl, or bulk-download the
linked editions.

The Online Books Page also exposes its curated metadata through OAI-PMH and raw
catalog data, but its documentation notes that harvesting may be limited or
discontinued if it creates too much server load. A future machine adapter therefore
needs a versioned fixture, bounded pagination/request policy, explicit refresh
cadence, response-size guards, and failure/backoff tests before runtime fetching is
introduced.

Included discovery pages
------------------------
- The Yellow Wallpaper — Charlotte Perkins Gilman
- Herland — Charlotte Perkins Gilman
- The Enchanted April — Elizabeth von Arnim
- The Awakening — Kate Chopin

Last verified
-------------
2026-08-13
