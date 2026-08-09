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

if [ "$(git rev-parse --is-shallow-repository)" = "true" ]; then
  git fetch --unshallow --tags
fi

python -m mkdocs build --strict

# Domain ownership is configured at the serving platform. Never let a stale
# source-tree CNAME make the generated artifact claim a GitHub Pages domain.
rm -f site/CNAME

test -f site/index.html
test -f site/build.json
grep -Fq "\"commit\": \"${build_sha}\"" site/build.json
