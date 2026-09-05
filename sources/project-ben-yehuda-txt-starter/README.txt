Project Ben-Yehuda Public Domain TXT Starter
============================================

Repository URL
--------------
https://app.webnovel.win/sources/project-ben-yehuda-txt-starter

One-click add URL
-----------------
https://app.webnovel.win/?repos=https%3A%2F%2Fapp.webnovel.win%2Fsources%2Fproject-ben-yehuda-txt-starter

Purpose
-------
This is a real raw-TXT source, not a static discovery-only directory. It exposes a
small, bounded starter set from Project Ben-Yehuda's official public-domain dump
so readers can import UTF-8 Hebrew text directly into WebNR while the full upstream
catalog remains at its origin.

Upstream and rights evidence
----------------------------
The upstream repository is maintained by the Project Ben-Yehuda GitHub
organization at:

https://github.com/projectbenyehuda/public_domain_dump

The upstream README states that the dump contains more than twenty thousand
public-domain Hebrew works in plaintext UTF-8 (with and without nikkud) and HTML,
with pseudocatalogue.csv providing title, author, genre, and file-path metadata.
The repository LICENSE states that the data files are in the public domain and may
be used without permission; credit to "Project Ben-Yehuda volunteers" is optional
and appreciated.

This starter was audited against upstream commit:

5e4277fead7b565f32cc4b352abd3565023a77d8

The four download URLs below are pinned to that exact commit. The corresponding
Project Ben-Yehuda reader pages are retained as human-readable provenance links.
The source does not infer a broader license from free website access: its direct
TXT capability is based on the explicit public-domain dump and LICENSE.

Included direct TXT entries
---------------------------
- חצי-נחמה — אחד העם — upstream work 10
- מעל מכסה האניה — אלחנן ליב לוינסקי — upstream work 28
- הַתַּכְרִיך — אברהם שלום פרידברג — upstream work 33
- שני ימים ולילה אחד בבית מלון אורחים — יהודה ליב גורדון — upstream work 40

Runtime boundary
----------------
Adding this WebNR source fetches only the small WebNR-maintained YAML index.
Choosing a downloadable entry uses the exact HTTPS raw-file URL recorded in that
index. WebNR does not bulk-download the Project Ben-Yehuda dump, poll its website,
mirror its full catalog, crawl reader pages, create accounts, or use cookies.

Project Ben-Yehuda also documents a public API. That API is not used here because
it requires an API key and has a documented request-rate boundary. Keeping the
starter on the explicitly released public-domain dump avoids credentials and gives
this first direct-TXT integration a stable, reviewable upstream identity.

Identity, updates, and failure behavior
---------------------------------------
- Stable identity: Project Ben-Yehuda work ID plus the upstream dump path.
- Snapshot identity: every download URL is pinned to the audited upstream commit.
- Encoding: upstream declares the txt/ tree as plaintext UTF-8.
- Pagination: none in the WebNR starter; the committed YAML contains four entries.
- Request cadence: no background polling; an origin text is requested only when a
  reader explicitly imports that entry.
- Response bound: the WebNR repository index remains subject to WebNR's existing
  5 MiB index limit; imported TXT is handled by the existing reader import path.
- Updates/deletions: a later operating cycle may review a newer upstream dump and
  update this source through the normal PR/CI/production-verification lane. An
  upstream change never silently deletes a WebNR entry.
- Failure: an unavailable upstream raw file is reported as an import failure; the
  reader must not substitute a cached or guessed origin.

Candidate audit context
-----------------------
The 2026-08-31 source cycle also screened Project Gutenberg Australia, Project
Gutenberg Canada, GITenberg, and the Internet Sacred Text Archive. Those
collections were not folded into this source: the Australian and Canadian sites
carry jurisdiction-specific public-domain warnings; GITenberg substantially
overlaps WebNR's existing Project Gutenberg discovery surface; and Sacred Texts
mixes public-domain, attributed non-commercial, and copyrighted site material.
This starter therefore keeps one coherent rights/runtime model instead of treating
"free to read" collections as interchangeable.

Last verified
-------------
2026-08-31
