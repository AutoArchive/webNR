Projekti Lönnrot Finnish Classics Discovery Starter
===================================================

Repository URL
--------------
https://app.webnovel.win/sources/projekti-lonnrot-finnish-classics-discovery-starter

One-click add URL
-----------------
https://app.webnovel.win/?repos=https%3A%2F%2Fapp.webnovel.win%2Fsources%2Fprojekti-lonnrot-finnish-classics-discovery-starter

Purpose
-------
This WebNR-maintained source is a small first-party link-only discovery directory
for Projekti Lönnrot, a volunteer Finnish digital-library project that digitises
older Finnish- and Swedish-language works for free Internet access. It helps
readers reach the project's official overview, author index, and completed-book
list without WebNR copying, mirroring, proxying, or redistributing the upstream
text archives.

Origin identity and reader value
--------------------------------
Projekti Lönnrot states that it digitises Finnish- and Swedish-language works that
have fallen out of copyright under the EU life-plus-70 rule. The project normally
makes completed books available as plain text, commonly packaged as ZIP files,
and says those works are made available for free Internet distribution. Its
first-party author and completion-order indexes provide stable reader-facing
routes for discovering the collection.

The three entries in this starter are deliberately limited to:

- the official Projekti Lönnrot project and rights-purpose overview;
- the official author-indexed ebook catalogue;
- the official completed-books list ordered by completion/publication.

Rights and reuse boundary
-------------------------
The first-party project page reviewed on 2026-09-22 says the project selects works
released from copyright under the EU 70+ rule and makes them available for free
Internet distribution. That is strong evidence for the project's stated corpus
policy, but WebNR still does not silently turn a project-level statement into an
item-level content-republication pipeline. Individual files may carry source,
proofreading, packaging, or other provenance that should survive any future
conversion.

This starter therefore stores only three reviewed first-party URLs plus
WebNR-authored labels and descriptions. It does not download, unpack, transform,
cache, mirror, or redistribute Lönnrot ZIP/TXT files.

Current WebNR behavior
----------------------
Adding this source downloads only WebNR's small static YAML index. Selecting an
entry opens the corresponding first-party Projekti Lönnrot page in the browser.
WebNR performs no runtime crawl, no author-list synchronization, no ZIP download,
no TXT extraction, no background refresh, no credential forwarding, and no proxy
for this starter.

Audit boundary and future upgrade
---------------------------------
The project overview, author-indexed catalogue, and completed-books catalogue were
reviewed on 2026-09-22. A future direct-TXT adapter is plausible because the
project explicitly describes plain-text availability and a public-domain selection
policy, but it would require a separate source-specific audit of stable item/file
identity, ZIP member selection, encodings, provenance/attribution retention,
update/deletion semantics, transport and CORS behavior, request/resource limits,
failure behavior, and versioned fixtures. No such runtime capability is claimed
by this starter.

Last verified
-------------
2026-09-22
