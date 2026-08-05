# WebNR roadmap

The roadmap describes intended outcomes, not promised release dates. A capability is marked complete only after implementation, automated validation, deployment attribution, and public verification.

## Now: dependable TXT reader

- Reliable TXT import across UTF-8, GB18030, Big5, and representative legacy-encoding fixtures.
- Backup, restore, export, storage migrations, and data-loss recovery guidance.
- End-to-end tests for first use, reading progress, deletion, export, offline startup, and updates.
- Accessibility tests for keyboard use, zoom, language changes, screen readers, and reduced motion.
- Stable releases, changelog, rollback guidance, and reproducible production builds.
- Durable troubleshooting pages tied to stable error codes.

## Next: real format and interoperability work

- EPUB parsing through a maintained library or clean adapter, with scripts disabled, path traversal protections, size limits, fixtures, and import/reading tests.
- OPDS and authorized/public-domain connector examples.
- A versioned WebNR source schema, validator, permission manifest, and compatibility dashboard.
- Clean-room import/export adapters for common Legado data fields and declarative rules.
- Public compatibility levels that distinguish data recognition, declarative rules, stateful requests, restricted scripts, and capabilities that require a local bridge.

## Later: optional bridge and multi-device use

- A browser extension or local companion for user-authorized cross-origin requests, isolated cookies, and dynamic pages.
- Desktop packaging after the web storage and compatibility contracts stabilize.
- Optional end-to-end encrypted synchronization or WebDAV-compatible backup.
- Community governance for reviewed public-domain, self-owned, and explicitly authorized connectors.

## Non-goals

- Bundling or distributing copyrighted books without authorization.
- Operating a public proxy that bypasses CORS, authentication, payment, DRM, robots, or access controls.
- Claiming full Legado compatibility without versioned fixture evidence.
- Publishing daily thin pages, keyword variants, generic AI articles, fabricated benchmarks, or unverified feature claims.
