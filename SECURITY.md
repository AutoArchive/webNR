# Security policy

## Supported version

Security fixes target the current `main` branch and the production build identified by `https://app.webnovel.win/build.json`. WebNR does not currently maintain multiple supported release branches.

## Report a vulnerability

Use GitHub's private vulnerability reporting or security-advisory flow for `AutoArchive/webNR`. Do not open a public issue containing exploit details, credentials, private source definitions, user book data, cookies, or private URLs.

Include:

- the affected commit or production build identity;
- reproducible steps and expected impact;
- affected browser and operating system;
- whether the issue exposes imported content, filenames, progress, source credentials, or cross-origin capabilities;
- a minimal proof of concept that does not contain copyrighted books or private user data.

## Security boundaries

- Imported TXT content and reading progress are intended to remain in browser storage.
- URL imports contact the URL chosen by the user and remain subject to browser CORS and remote-site policies.
- Source definitions are untrusted input and must not gain unrestricted script, cookie, filesystem, or network capabilities.
- WebNR does not bypass authentication, payment, DRM, robots, or access controls.
- EPUB and Legado compatibility may not be advertised until implementations have explicit capability boundaries and versioned security fixtures.

## Dependency policy

Every pull request runs an npm dependency audit. Critical findings and unexpected high-severity findings block CI. Any temporary exception must identify the exact upstream packages, explain why the vulnerable path is not exposed by WebNR, and be removed as soon as a stable fix exists.
