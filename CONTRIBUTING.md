# Contributing to WebNR

Thank you for helping make WebNR a reliable, private, local-first reader.

Read the complete [contributing guide](docs/mannual/contributing.md) before opening a pull request. The minimum workflow is:

```bash
git clone --recurse-submodules https://github.com/AutoArchive/webNR.git
cd webNR
npm ci
npm run lint
npm run typecheck
npm run build
```

Documentation changes additionally require:

```bash
python -m pip install --requirement .github/requirements-docs.txt
mkdocs build --strict
```

Use a focused branch and non-draft pull request. Wait for every expected CI check, review the complete final diff after CI is green, fix findings on the same branch, and squash-merge only after the final review is clean.

Do not commit credentials, user book data, private URLs, raw analytics exports, or unauthorized content. Do not advertise format or Legado compatibility without implementation and versioned fixture evidence.
