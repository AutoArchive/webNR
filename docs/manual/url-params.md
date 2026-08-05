# URL parameters

WebNR accepts a small set of query parameters for explicit import and navigation actions. Encode nested URLs before placing them in a WebNR link.

## Import a text URL

Use `add` with an HTTP or HTTPS URL that returns readable text and permits browser access:

```text
https://app.webnovel.win/?add=https%3A%2F%2Fexample.org%2Fbook.txt
```

The remote server must allow the browser request through CORS. WebNR does not proxy the request or bypass authentication, payment, DRM, robots, or other access controls.

## Add repository definitions

Use `repos` with one or more comma-separated repository-definition URLs:

```text
https://app.webnovel.win/?repos=https%3A%2F%2Fexample.org%2Frepository.json
```

A repository definition is a connector configuration, not a content license or endorsement. Add only definitions you trust and are authorized to use.

## Open repository search

Use `search` to open the search view for a repository definition:

```text
https://app.webnovel.win/?search=https%3A%2F%2Fexample.org%2Frepository.json
```

## Safety and privacy

- Query parameters can appear in browser history and copied links. Do not put credentials, cookies, private tokens, or private source URLs in them.
- Imported text and reading progress are stored in the current browser profile.
- The selected remote URL receives a normal browser request and may observe standard network metadata.
- WebNR does not publish an official registry of unreviewed third-party repositories.

For import failures, see [TXT import troubleshooting](../troubleshooting/txt-import.md).
