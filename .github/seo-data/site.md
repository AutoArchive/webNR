# Site metadata

## Identity

- Canonical URL: `https://app.webnovel.win/`
- Site name: `WebNR`
- Timezone: `America/Los_Angeles`

## Repository

- Default branch: `main`
- Automation branch prefix: `seo/`
- Skill submodule path: `.github/seo-skills`

## Google data

- Google Drive enabled: yes
- Google Drive folder name: `webNR SEO Weekly CSV`
- GA4 export filename pattern: `ga4-*.csv`
- Search Console export filename pattern: `gsc-*.csv`
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

Store only durable public metadata here. Never add property IDs, Drive IDs,
Cloudflare IDs, account identifiers, personal emails, credentials, or private URLs.
