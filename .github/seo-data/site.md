# Site metadata

## Identity

- Canonical public site URL: `https://www.webnovel.win/`
- Site name: `WebNR`
- Reader application URL: `https://app.webnovel.win/`
- Timezone: `America/Los_Angeles`

`https://www.webnovel.win/` is the single canonical public origin for WebNR
reader-facing content, documentation, blog articles, search indexing, canonical
links, sitemap and RSS output, and public documentation links. The GitHub Pages
origin `https://autoarchive.github.io/webNR/` is an implementation origin only;
it must not be treated as an alternate production identity or emitted as a
canonical public URL.

`https://app.webnovel.win/` is the reader application runtime. It may own
application routes, application source artifacts, and application-specific
metadata, but it is not an alternate origin for the public documentation and
editorial site.

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
- Infrastructure analytics: unavailable until the connected Cloudflare account exposes `webnovel.win`
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

- Cloudflare enabled: no
- Zone hostname: `webnovel.win`
- Preferred dataset: `httpRequestsAdaptiveGroups`
- Availability note: the connected Cloudflare accounts do not currently expose this zone.

## Deployment

### Canonical public site

- Provider: `github-actions` plus GitHub Pages
- Production workflow: `Publish WebNR documentation`
- Production source: `gh-pages` branch
- Custom domain: `www.webnovel.win`
- Verification URL: `https://www.webnovel.win/`
- Required custom-domain artifact: root `CNAME` containing exactly `www.webnovel.win`
- Acceptance rule: generated canonicals, sitemap, RSS, navigation/home links, and public documentation links use `https://www.webnovel.win/`; `https://autoarchive.github.io/webNR/` is not accepted as a public production identity

### Reader application

- Provider: `github-actions`
- Production workflow: `Deploy Next.js site to Pages`
- Production source: `app-pages` branch
- Verification URL: `https://app.webnovel.win/`

Store only durable public metadata here. Public browser measurement IDs may be
stored in runtime source. Never add private property IDs, Drive IDs, Cloudflare
IDs, account identifiers, personal emails, credentials, raw analytics rows,
cookies, authorization values, or private provider URLs.
