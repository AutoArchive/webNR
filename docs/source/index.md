# WebNR source definitions

WebNR can import independently distributed repository definitions for discovery and search. A source definition is a connector configuration, not a content license, endorsement, or promise that a target website permits automated access.

## Current support

The current source system can load WebNR repository metadata and use its configured search and import behavior when the browser is allowed to contact the declared URLs. Browser CORS rules, remote availability, rate limits, authentication, and target-site terms still apply.

WebNR does not currently claim complete Legado compatibility. Compatibility work must use a clean-room implementation and a versioned fixture suite that states which fields, rules, and capabilities are supported.

## Official project boundary

WebNR and its official documentation:

- do not host or bundle novels;
- do not operate a public proxy for bypassing browser or target-site controls;
- do not publish unreviewed third-party source collections;
- use only synthetic, public-domain, self-owned, or explicitly authorized fixtures and examples;
- do not bypass authentication, payment, DRM, robots, rate limits, or other access controls.

A user-installed definition remains the user's responsibility. Its presence in a browser does not transfer copyright or access rights.

## Requirements for source contributors

A proposed source or fixture must document:

1. its stable identifier and schema version;
2. every network domain and capability it requires;
3. whether it uses cookies, authentication, JavaScript, dynamic DOM, pagination, or non-UTF text;
4. the license or authorization for any public example data;
5. reasonable request rates and failure behavior;
6. deterministic validation steps and expected results;
7. known incompatibilities and security limitations.

Do not submit private URLs, credentials, cookies, imported book text, reading history, or unauthorized content.

## Reporting compatibility issues

Use the [structured compatibility report](https://github.com/AutoArchive/webNR/issues/new?template=compatibility.yml) with a synthetic, public-domain, self-owned, or explicitly authorized fixture. Include the WebNR build from `/build.json` and the exact capability that failed.

See the [contributing guide](../manual/contributing.md), [TXT import troubleshooting](../troubleshooting/txt-import.md), and the [roadmap](https://github.com/AutoArchive/webNR/blob/main/ROADMAP.md) before proposing a new source runtime feature.
