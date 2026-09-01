GITenberg Direct TXT Starter
============================

Repository URL
--------------
https://app.webnovel.win/sources/gitenberg-direct-txt-starter

One-click add URL
-----------------
https://app.webnovel.win/?repos=https%3A%2F%2Fapp.webnovel.win%2Fsources%2Fgitenberg-direct-txt-starter

Purpose
-------
This starter turns one previously deferred GITenberg candidate into a bounded,
real direct-TXT integration. It exposes three public-domain English books whose
plain-text files are stored in the upstream GITenberg repositories. WebNR keeps a
small reviewed catalog and points readers to exact commit-pinned raw files; it
does not mirror the books or crawl the wider GITenberg collection.

Upstream and rights evidence
----------------------------
GITenberg publishes Git repositories made from Project Gutenberg books. The
reviewed README files for the three selected repositories identify the books as
Public Domain and point to the repository LICENSE for details. The selected
works are also by authors whose original works are long out of copyright in the
ordinary life-plus-70 jurisdictions: Jane Austen (1775–1817), Mary Wollstonecraft
Shelley (1797–1851), and Arthur Conan Doyle (1859–1930). The WebNR source links
to upstream files rather than republishing their contents.

The exact upstream source identities audited for this starter are:

- Pride and Prejudice / Project Gutenberg #1342:
  81db45c9c48c592f0b77f01fc59e677ad0a5634e
- Frankenstein / Project Gutenberg #84:
  c98a483bd1f34e7366126b81bcedd1a6faee636e
- The Adventures of Sherlock Holmes / Project Gutenberg #1661:
  7e5dd2703fbf503c004063e96ab7c61262375e5f

The repository trees expose plain-text files smaller than 1 MiB for each selected
work. Pride and Prejudice uses `1342-0.txt`; Frankenstein uses `84-0.txt`; The
Adventures of Sherlock Holmes uses `1661.txt`. Every `download_url` in the WebNR
index embeds the audited commit rather than following the mutable `master`
branch.

Runtime boundary
----------------
Adding this source fetches only the small WebNR YAML index. A reader explicitly
choosing one entry causes the existing browser-side URL-import path to fetch that
one HTTPS raw file from `raw.githubusercontent.com`. WebNR performs no background
polling, no bulk clone, no catalog crawl, no server-side proxy, no credential or
cookie use, and no account automation.

The selected files are suitable for the current browser URL-import path because
they are plain English text and do not require ZIP extraction or a source-specific
parser. The reader remains subject to ordinary browser networking and CORS. An
origin failure is surfaced as an import failure; WebNR must not silently switch to
an unreviewed mirror.

Identity, update, and failure behavior
--------------------------------------
- Stable identity: GITenberg repository plus Project Gutenberg book number.
- Snapshot identity: the commit embedded in each `download_url`.
- Pagination: none; the WebNR starter contains three explicit entries.
- Request cadence: no polling; one upstream text request only after an explicit
  reader import action.
- Response size: all three audited raw files are below 1 MiB; the WebNR source
  index remains under the application's existing 5 MiB index limit.
- Updates: a later cycle may audit a newer upstream revision and update a pinned
  URL through the normal PR/CI/public-verification lane.
- Deletions: an upstream omission never silently deletes a WebNR entry.
- Failure: unavailable or CORS-blocked upstream content remains a visible import
  failure and is not replaced by guessed content.

Why this is separate from the existing Project Gutenberg Starter
----------------------------------------------------------------
The existing Project Gutenberg source is intentionally a discovery surface. This
starter tests a different reader capability: a tiny set of stable Git-backed raw
files that can be imported directly. The narrower catalog avoids pretending that
every Project Gutenberg/GITenberg item has identical rights, encoding, edition,
or runtime behavior. It also provides a reproducible example for the 2026-09-01
raw-TXT collection/import guide.

Last verified
-------------
2026-09-01
