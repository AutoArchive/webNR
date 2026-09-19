Bokselskap Norwegian Literature Discovery Starter
=================================================

Repository URL
--------------
https://app.webnovel.win/sources/bokselskap-norwegian-literature-discovery-starter

One-click add URL
-----------------
https://app.webnovel.win/?repos=https%3A%2F%2Fapp.webnovel.win%2Fsources%2Fbokselskap-norwegian-literature-discovery-starter

Purpose
-------
This WebNR-maintained source is a small link-only discovery directory for
Bokselskap, the Norwegian ebook portal developed by Det norske språk- og
litteraturselskap (NSL) in cooperation with the National Library of Norway. It
helps readers reach the official Norwegian-classics catalog, author directory,
and download/OPDS guidance while leaving reading and every ebook file at the
first-party site.

Origin identity and reader value
--------------------------------
Bokselskap describes itself as a digital library created to preserve Norwegian
literature and currently presents more than 400 books across novels, short
stories, plays, poetry, travel writing, letters, diaries, and other genres. Its
first-party author directory includes writers such as Henrik Ibsen, Camilla
Collett, Arne Garborg, Amalie Skram, Ragnhild Jølsen, Laura Kieler, and Sigrid
Undset. The site provides online reading and downloadable EPUB, MOBI, HTML, and
PDF editions, and documents an OPDS catalog for many EPUB files.

The three entries in this starter are deliberately navigation records rather than
copies of the origin catalog:

- the Bokselskap home/catalog route for browsing Norwegian classics;
- the first-party author directory;
- the first-party download page, which also links to Bokselskap's OPDS guidance.

Rights and reuse boundary
-------------------------
Bokselskap states that it mainly publishes texts whose authors have been dead for
at least 70 years, or texts for which the rights holder has authorized
publication. The same policy warns that a public-domain underlying work can still
carry edition-specific rights when an editorial philologist constitutes the text,
and that introductions and other editorial material can have separate copyright.
It generally permits site material for private, non-commercial use and asks that
other reuse be agreed in writing with Bokselskap/the publisher.

WebNR therefore does not mirror Bokselskap text, EPUB/MOBI/PDF/HTML files, OPDS
entries, covers, introductions, editorial apparatus, biographies, or catalog
metadata. This starter stores only first-party destination URLs plus short
WebNR-authored labels and descriptions. Work- and edition-specific rights remain
at the origin.

Current WebNR behavior
----------------------
Selecting an item opens its official Bokselskap page. WebNR performs no runtime
OPDS, HTML, XML, EPUB, search-result, catalog, or chapter polling for this starter.
It does not proxy downloads, automate accounts, send credentials or cookies,
extract TEI/XML, or follow the site's OPDS acquisition links in the background.
The existing WebNR reader still imports local or supported direct text separately;
this source makes no claim that WebNR can currently parse Bokselskap EPUB files.

Audit boundary and future upgrade
---------------------------------
The public landing pages, download guidance, OPDS documentation, and published
rights/reuse statement were reviewed on 2026-09-08. Because the admitted runtime
is link-only, robots behavior, CORS, request cadence, pagination, response-size
limits, feed parsing, and ebook acquisition are outside this source's current
runtime dependency: WebNR does not make those automated requests.

A future OPDS or ebook adapter would require a separate audit of the exact
machine-readable endpoint, HTTPS behavior, robots/access policy, pagination,
update/deletion semantics, timeouts, response-size ceilings, provenance,
attribution, edition-level rights, and WebNR's EPUB support, backed by versioned
fixtures. It must not infer that an underlying public-domain author makes every
Bokselskap digital edition unrestricted for redistribution.

Last verified
-------------
2026-09-08
