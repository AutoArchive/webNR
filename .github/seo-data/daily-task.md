# Daily WebNR operating task

## Authority

This file is the daily execution entrypoint for WebNR. The repository is the sole
authority for product, content, analytics, source, compatibility, delivery, and
closeout policy. The external scheduler only starts the run.

Begin from the latest remote default branch, synchronize all submodules, and
continue any existing WebNR automation pull request before creating duplicate
work. Do not take over another contributor's pull request without an explicit user
instruction.

## Read before acting

Read completely:

- repository instructions;
- `site.md` for production, analytics, data windows, and deployment facts;
- `plan.md` for long-term product, reader-content, source, and Legado goals;
- `editorial-calendar.md` for the rolling 48-hour reader-publication schedule;
- `data-analysis.md` for mandatory daily, weekly, and monthly analysis;
- `promotion.md` for reader-community evidence and distribution rules;
- `status.md`, `block.md`, and the newest daily records;
- the pinned applicable skills under `.github/seo-skills`, especially
  `$operate-seo-site`, `$ensure-site-analytics`, `$collect-seo-data`,
  `$deliver-github-pr`, and `$research-blog` when required.

Check the shared skill upstream and review its complete diff. A compatible pointer
update may be included in the first suitable WebNR pull request. A submodule check
does not authorize editing `AutoArchive/seo-skill`.

## Daily execution order

### 1. Analyze current evidence

Complete the full pass in `data-analysis.md` before selecting routine work. Check
all available GA4, Search Console, infrastructure, GitHub, CI, deployment, public
production, reader-content, source-health, and relevant public-community evidence.
Label missing, delayed, partial, or incomparable evidence truthfully. Record
explicit technical, content, source, search, community, and measurement decisions.

A reproducible technical collection, production, or measurement defect enters the
same-cycle repair path immediately.

### 2. Repair technical defects

Follow the concentrated-repair and daily-guard priorities in `plan.md`. Repair all
confirmed low-risk, reversible, and verifiable defects that can safely be completed
in the current cycle. Keep one coherent outcome per pull request, but use multiple
focused pull requests rather than artificially spreading known work across days.

Technical incidents and regressions preempt routine content, source, and promotion
work until repaired, safely rolled back, or truthfully blocked by a genuine
human-only external action.

### 3. Discover, audit, and integrate sources

Follow the source program in `plan.md` and `editorial-calendar.md`:

- discover at least five new source or collection candidates;
- fully audit at least three;
- target one passing integration;
- retest a rotating sample of existing sources;
- repair, downgrade, mark, or remove failures;
- record safe rejection or deferral reasons.

WebNR may create its own source definition, OPDS/RSS adapter, normalized feed,
Legado wrapper, or authorized/public-domain TXT catalog. Unknown metadata remains
unknown. Never invent authorship, provenance, license, freshness, or popularity,
and never depend on bypassing login, payment, DRM, captchas, robots, or access
controls.

### 4. Publish reader-facing content when due

Check the rolling 48-hour cadence in `editorial-calendar.md`. When an asset is due,
publish or substantially improve one reader-facing page about source finding,
novel sites, apps, channels, public community discussion, recommendations,
regional ecosystems, or Legado migration. Product manuals and technical pages are
supporting content.

Use `$research-blog` completely for research-heavy historical, cross-language,
social, ecosystem, or contested topics. Practical guides and comparisons require
current first-hand testing, official or primary sources, and reproducible evidence.
Every public asset needs a stable descriptive URL, direct answer, verification
date, method, internal links, canonical, sitemap entry, static indexable output,
and exact production verification.

#### Public presentation guardrails

- `docs/README.md` is the compact public WebNR product landing page. Preserve its
  recognizable product-first composition: short bilingual introduction, primary
  reader/source/blog actions, screenshot gallery, and concise feature overview.
  Do not turn the root page into an operations log, analytics report, source-audit
  ledger, compatibility changelog, or long technical manual.
- Detailed privacy disclosures, analytics behavior, compatibility notes, source
  audits, troubleshooting, and developer material must remain truthful but belong
  in concise expandable sections or dedicated pages rather than dominating the
  landing page.
- `docs/blog/index.md` is a curated reader hub, not a chronological operations
  dashboard. Keep a small number of durable reader routes (starting/compatibility,
  legal/free reading, web-fiction discovery, community/recommendations) and make
  new posts fit one of those routes before publishing them.
- Blog index cards must remain concise title + description summaries. Do not render
  complete long posts, references, source-audit tables, category clouds, archive
  trees, or internal status text into the Blog listing.
- Every reader-facing article starts with a direct answer or decision summary,
  followed by the minimum evidence needed to act. Put methodology and references
  after the useful answer. A source-health article may explain user-visible
  capability states, but daily candidate sweeps, rejected-candidate ledgers, CI
  runs, deployment hashes, analytics availability notes, PR closeout details, and
  future operating queues belong in `.github/seo-data/**`, not in Blog prose.
- Historical posts containing superseded product claims must be rewritten as
  clearly labeled archives or updated to current evidence. Never leave speculative
  roadmap language searchable as if it described shipping WebNR behavior.
- Blog publication must not expand the site's top-level navigation with per-topic
  or per-post category/archive sprawl. Prefer the curated Blog hub, article
  metadata, site search, and contextual internal links for discovery.
- Do not replace or substantially redesign the established landing/blog shell as a
  routine SEO or content change. A deliberate visual or information-architecture
  redesign requires an explicit owner instruction. New content should fit the
  existing shell instead of progressively accumulating navigation or homepage
  sections.

### 5. Verify analytics and production

Use `site.md` and `$ensure-site-analytics`. Both production sites must retain the
single GA4 destination `G-DGH8HNQKE4`. It uses full-URL reporting, including the
complete query string and imported URL in `?add=...`. Keep Google
signals and ad-personalization disabled unless the owner explicitly changes the
policy.

Verify source, generated output, public runtime, exact build identities, and
available provider evidence. A script tag, workflow URL, provider export, preview,
artifact, or HTTP 200 alone is not production proof.

### 6. Deliver and close out

Use `$deliver-github-pr` for every product, content, source, corrective, and
closeout outcome:

1. create a fresh `seo/` branch from the latest remote default branch;
2. commit and push the actual change;
3. open a real non-draft pull request;
4. wait for every required and expected check;
5. after green CI, review the complete final diff, commits, generated output,
   evidence, source permissions, analytics, security, and deployment impact from
   scratch;
6. fix findings on the same branch and repeat CI and full review;
7. squash-merge only with the expected head SHA;
8. verify the exact production deployment and affected plus representative
   unaffected public behavior;
9. update the normal daily and status evidence through the repository's closeout
   process.

Missing, queued, skipped, failed, cancelled, or timed-out checks block merge.
Branch cleanup is best-effort and never a blocker.

## Daily completion

A cycle is complete only when:

- the required data-analysis pass and explicit decisions are recorded;
- mandatory analytics and full-URL behavior are verified;
- every actionable technical defect discovered in the cycle is repaired and
  publicly verified or has a truthful external blocker;
- at least five source candidates were discovered, at least three fully audited,
  and one passing integration was attempted;
- any due reader-content asset is merged, deployed, publicly verified, and has
  correct canonical, sitemap inclusion, and static indexable output;
- all main and applicable closeout pull requests have green expected CI, clean
  final reviews, squash merges, and truthful production evidence.

A metadata-only edit, candidate list, local patch, issue, draft pull request,
generated branch, raw research packet, or unverified article does not satisfy the
public content or source-integration cadence.
