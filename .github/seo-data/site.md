# Site metadata

## Identity

- Canonical URL: `https://app.webnovel.win/`
- Site name: `WebNR`
- Timezone: `America/Los_Angeles`

## Repository

- Default branch: `main`
- Automation branch prefix: `seo/`
- Skill submodule path: `.github/seo-skills`

## Analytics

- Runtime analytics required: yes
- Primary runtime provider: `google-analytics-4`
- Runtime implementation location: `app/layout.tsx`, `config/constants.ts`, and `mkdocs.yml`
- Runtime verification URL: `https://app.webnovel.win/`
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

- Provider: `github-actions`
- Production workflow: `Deploy Next.js site to Pages`
- Production environment: `app-pages branch`
- Verification URL: `https://app.webnovel.win/`

Store only durable public metadata here. Public browser measurement IDs may be
stored in runtime source. Never add private property IDs, Drive IDs, Cloudflare
IDs, account identifiers, personal emails, credentials, raw analytics rows,
cookies, authorization values, or private provider URLs.
