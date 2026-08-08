# Site metadata

## Identity

- Canonical public site URL: `https://www.webnovel.win/`
- Site name: `WebNR`
- Reader application URL: `https://app.webnovel.win/`
- Documentation build mirror URL: `https://autoarchive.github.io/webNR/`
- Timezone: `America/Los_Angeles`

`https://www.webnovel.win/` is the single canonical public origin for WebNR
reader-facing content, documentation, blog articles, search indexing, canonical
links, sitemap and RSS output, and public documentation links. No other hostname
is an alternate public identity for those surfaces.

`https://app.webnovel.win/` is the reader application runtime. It may own
application routes, application source artifacts, application downloads, and
application-specific metadata, but it is not an alternate origin for the public
documentation and editorial site.

`https://autoarchive.github.io/webNR/` is a generated documentation build mirror
used for attributable builds and recovery. It must emit canonicals and discovery
metadata pointing to `https://www.webnovel.win/`, must not claim the custom
domain, and must never be promoted as the public canonical site.

## Repository

- Default branch: `main`
- Automation branch prefix: `seo/`
- Skill submodule path: `.github/seo-skills`

## Analytics

- Runtime analytics required: yes, on both the canonical public site and reader application
- Primary runtime provider: `google-analytics-4`
- Runtime implementation location: `app/layout.tsx`, `config/constants.ts`, and `mkdocs.yml`
- Canonical public-site verification URL: `https://www.webnovel.win/`
- Reader-application verification URL: `https://app.webnovel.win/`
- URL reporting: `full-url`
- Search analytics required: `google-search-console`
- Search evidence route: Google Drive exports described below
- Infrastructure analytics: unavailable until an authenticated Cloudflare connection exposes the `webnovel.win` zone
- Analytics payload policy: send the complete browser page URL, including query parameters such as imported URLs in `?add=...`; disable Google signals and ad-personalization signals; do not add custom events containing local file contents or reading progress

The site owner explicitly requires GA4 and complete page-URL reporting. Agents
must not remove analytics or strip query parameters without a later explicit
owner instruction recorded in the relevant pull request and daily report.

## Google data

- Google Drive enabled: yes
- Google Drive folder name: `webNR SEO Weekly CSV`
- GA4 export filename pattern: `*_ga4_organic_landing_pages.csv`
- Search Console export filename pattern: `*_gsc_*.csv`
- Lookback days: 28
- Finalization lag days: 3

## Cloudflare data

- Cloudflare analytics enabled: no
- Zone hostname: `webnovel.win`
- Preferred dataset: `httpRequestsAdaptiveGroups`
- Availability note: the currently authenticated analytics connections do not expose this zone.

## Deployment

### Canonical public documentation and editorial site

- Canonical hostname: `www.webnovel.win`
- Public edge observed on 2026-08-08: Cloudflare
- Required source: the reviewed WebNR documentation build generated from the current default-branch commit
- Verification URL: `https://www.webnovel.win/`
- Required build identity URL: `https://www.webnovel.win/build.json`
- Current routing control: unavailable from the connected tooling in this operating environment
- Acceptance rule: the canonical hostname must expose the exact reviewed documentation build, current reader-facing articles, `G-DGH8HNQKE4`, and canonical/sitemap/RSS URLs under `https://www.webnovel.win/`
- Prohibited substitution: do not make the GitHub Pages mirror or `app.webnovel.win` the canonical documentation address merely because the canonical hostname is temporarily stale or externally blocked

### Documentation build mirror

- Provider: `github-actions` plus GitHub Pages
- Workflow: `Publish WebNR documentation build mirror`
- Source: `gh-pages` branch
- Mirror URL: `https://autoarchive.github.io/webNR/`
- Custom domain: none
- Purpose: attributable generated-build mirror and recovery evidence only
- Acceptance rule: exact build identity and rendered content may be verified here, but all generated canonical, sitemap, RSS, and public documentation identity must point to `https://www.webnovel.win/`

### Reader application

- Provider: `github-actions`
- Production workflow: `Deploy Next.js site to Pages`
- Production source: `app-pages` branch
- Verification URL: `https://app.webnovel.win/`
- Public Cloudflare Pages mirror observed on 2026-08-08: `https://webnr.pages.dev/`
- Boundary: the application and its source/download artifacts remain separate from the canonical documentation/editorial site

Store only durable public metadata here. Public browser measurement IDs may be
stored in runtime source. Never add private property IDs, Drive IDs, Cloudflare
account IDs, personal emails, credentials, raw analytics rows, cookies,
authorization values, or private provider URLs.
