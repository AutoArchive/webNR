# WebNR

WebNR is a private, local-first web reader for user-owned TXT books and supported text URLs. It runs as an installable progressive web app, stores books and reading progress in the browser, and does not require an account.

- Reader: <https://app.webnovel.win/>
- Documentation: <https://www.webnovel.win/>
- Source and issues: <https://github.com/AutoArchive/webNR>

## Current capabilities

- Import local `.txt` files with UTF-8 and common legacy encodings such as GB18030 and Big5.
- Import text from an HTTP or HTTPS URL when the remote server permits browser access.
- Read in scrolling or paged mode with configurable typography, dark mode, bookmarks, progress, and text-to-speech.
- Install WebNR as a PWA and reopen the application shell offline.
- Add independently distributed WebNR repository definitions for discovery and search.

## Important limitations

- **EPUB is not supported yet.** WebNR rejects EPUB and other non-TXT local files until a real parser, security review, fixtures, and import tests exist.
- URL imports are subject to browser CORS rules and the remote site's availability and terms.
- Browser storage can be removed by the browser or user. A complete backup and restore workflow remains a product priority.
- WebNR does not provide or bundle books and does not operate an official registry of unreviewed third-party sources.

## Use WebNR

1. Open <https://app.webnovel.win/>.
2. Choose **Add** or **Import Novel**.
3. Select a local TXT file, or enter a supported text URL.
4. Start reading. The book and progress are stored in the current browser profile.

## Local development

Requirements: Node.js 20 and npm.

```bash
git clone --recurse-submodules https://github.com/AutoArchive/webNR.git
cd webNR
npm ci
npm run dev
```

Before opening a pull request, run:

```bash
npm run lint
npm run typecheck
npm run build
```

The documentation site additionally requires Python 3.12:

```bash
python -m pip install --requirement .github/requirements-docs.txt
mkdocs build --strict
```

## Privacy boundary

The reading application does not load Google Analytics. Imported book content, filenames, and reading progress are not sent to WebNR servers. Network imports contact the URL selected by the user, and source definitions may contact the domains they declare. Do not put private user data, credentials, analytics identifiers, or raw provider exports in this public repository.

## Source definitions and content policy

WebNR source definitions are connectors, not content licenses. Contributors must follow target-site terms, use reasonable request rates, avoid bypassing authentication, payment, DRM, robots, or access controls, and publish only public-domain, self-owned, or explicitly authorized examples in official project materials.

## Contributing

Issues and focused pull requests are welcome. See the [contributing guide](docs/mannual/contributing.md). Every change must use a branch and pull request, pass the expected app/documentation/SEO checks, receive a complete final review, and preserve the local-data and content-policy boundaries.

## License

MIT. See [LICENSE](LICENSE).
