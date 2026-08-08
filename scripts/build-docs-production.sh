#!/usr/bin/env bash
set -euo pipefail

build_sha="${WEBNR_DOCS_BUILD_SHA:-${CF_PAGES_COMMIT_SHA:-}}"
if [ -z "${build_sha}" ]; then
  build_sha="$(git rev-parse HEAD)"
fi

if [[ ! "${build_sha}" =~ ^[0-9a-f]{40}$ ]]; then
  echo "Invalid documentation build SHA: ${build_sha}" >&2
  exit 1
fi

build_source="${WEBNR_DOCS_BUILD_SOURCE:-}"
if [ -z "${build_source}" ]; then
  if [ "${CF_PAGES:-}" = '1' ]; then
    build_source='cloudflare-pages'
  else
    build_source='repository-docs-builder'
  fi
fi

WEBNR_DOCS_BUILD_SHA="${build_sha}" \
WEBNR_DOCS_BUILD_SOURCE="${build_source}" \
python - <<'PY'
import json
import os
from datetime import datetime, timezone
from pathlib import Path

payload = {
    "commit": os.environ["WEBNR_DOCS_BUILD_SHA"],
    "builtAt": datetime.now(timezone.utc).isoformat(),
    "source": os.environ["WEBNR_DOCS_BUILD_SOURCE"],
}
Path("docs/build.json").write_text(json.dumps(payload, indent=2) + "\n", encoding="utf-8")
PY

mkdocs build --strict

# The canonical domain is controlled by the public Cloudflare route, not by a
# GitHub Pages CNAME file. Removing a stray generated CNAME prevents the build
# mirror from accidentally reclaiming domain ownership.
rm -f site/CNAME

# Keep the production artifact self-verifying regardless of whether it is
# deployed by Cloudflare Pages or copied to the GitHub Pages build mirror.
test -f site/index.html
test -f site/build.json
test -f site/sitemap.xml
test -f site/feed_rss_created.xml
test -f site/blog/2026/08/06/legado-source-guide/index.html
test -f site/blog/2026/08/08/legal-free-novels-txt-collections/index.html
grep -Fq "\"commit\": \"${build_sha}\"" site/build.json
grep -Fq 'https://www.webnovel.win/' site/index.html
grep -Fq 'https://www.webnovel.win/blog/2026/08/06/legado-source-guide/' site/blog/2026/08/06/legado-source-guide/index.html
grep -Fq 'https://www.webnovel.win/blog/2026/08/08/legal-free-novels-txt-collections/' site/blog/2026/08/08/legal-free-novels-txt-collections/index.html
grep -Fq 'https://www.webnovel.win/blog/2026/08/08/legal-free-novels-txt-collections/' site/sitemap.xml
grep -Fq 'https://www.webnovel.win/blog/2026/08/08/legal-free-novels-txt-collections/' site/feed_rss_created.xml
grep -R -Fq 'G-DGH8HNQKE4' site
if grep -R -Fq 'G-NL0WV2XMJN' site; then
  echo 'Obsolete secondary GA4 destination found in documentation output' >&2
  exit 1
fi
if grep -R -E -q 'yourusername/webnr|yunwei37/webNR|https://autoarchive\.github\.io/webNR' site; then
  echo 'Obsolete repository or noncanonical documentation origin found in artifact' >&2
  exit 1
fi
