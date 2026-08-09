# WebNR UI closeout — 2026-08-09

## Requested change

Remove the visible Google Analytics notice from the WebNR reader application while preserving analytics itself.

## Main delivery

- Pull request: #70 `fix: remove analytics notice from reader UI`
- Final reviewed head: `2330265dad4a0ca7eaeef463e05676fb74f87140`
- Quality run: `31339726456`
- Chromium job: `93311492281`
- Chromium result: 8/8 tests passed across desktop Chromium and Pixel 7 emulation.
- Squash merge: `2df9e0f50cc93d79418a435069f46150d76d46f6`

## Product result

- Removed the blue Google Analytics notice from the Add/import view.
- Removed the `Privacy first` analytics card from empty-library onboarding.
- Kept TXT and URL onboarding and rebalanced the two remaining cards.
- Added permanent Chromium assertions that the Google Analytics notice is absent from first-use and import UI.
- Kept the GA4 runtime destination `G-DGH8HNQKE4`, full-URL reporting including query strings and `?add=...`, disabled Google signals/ad-personalization signals, and repository/documentation disclosure unchanged.

## Deployment evidence

- The `app-pages` artifact branch exposes exact squash commit `2df9e0f50cc93d79418a435069f46150d76d46f6`, source `github-actions`.
- The closeout pull request must not merge until its Production evidence job independently observes the same exact commit on `https://app.webnovel.win/build.json`.

No documentation render change is part of this focused delivery.
