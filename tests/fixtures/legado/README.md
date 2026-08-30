# WebNR Legado compatibility corpus

Suite version: `2026-08-30.1`

This directory is an isolated, clean-room compatibility corpus. The JSON fixtures are authored by WebNR and use only `example.invalid` / `example.test` hosts. They do **not** contain third-party story text, credentials, cookies, paywall logic, CAPTCHA bypasses, DRM bypasses, or copied third-party source rules.

The 2026-08-30 source-program audit screened five public Legado source/compatibility collections as field-shape and failure-mode references:

1. `XIU2/Yuedu` — active public collection, GPL-3.0 repository; useful for common top-level fields and CSS/XPath/JSONPath rule shapes. The collection explicitly targets third-party sites and warns about rate limits and source breakage, so WebNR does not import its target-site definitions into the recommended source catalog.
2. `tickmao/Novel` — large public multi-reader source collection; useful for scale and source-file shape. No repository license was found during this bounded audit, so no rule content is copied into WebNR.
3. `ZWolken/Light-Novel-Yuedu-Source` — public light-novel collection in a semi-maintenance state. Its README documents login-required sources, stale-source risk, attribution requirements, and anti-crawl/font-obfuscation breakage. WebNR records only capability/failure-mode observations, not its target-site rules.
4. `aoaostar/legado` — public Legado-source aggregation/filtering project surfaced during screening; issue history includes examples of empty or malicious/script-bearing rules. It remains a security-corpus candidate, not a recommended content source.
5. `Orokapei/BookSource` — public Legado JSON collection with CSS rules, pagination, charset/POST patterns, login fields, and target-site definitions. It remains a field-shape reference only because target-site rights and current access conditions are not established by the rule file itself.

The three WebNR fixtures below intentionally cover the capability families that recurred across the audited material and public Legado documentation without reproducing any third-party rule body:

- `01-declarative.json`: metadata plus search/book-info/TOC/content fields using harmless local example selectors.
- `02-stateful.json`: cookie/login/concurrency fields that need explicit state and permission boundaries.
- `03-script-bridge.json`: script and WebView/Bridge markers that the browser inspector must classify as restricted and never execute.

Passing these fixtures means only that WebNR can parse, preserve, and classify their fields at **L1 / Phase 1**. It does not mean WebNR can execute L2–L5 behavior, that any referenced third-party source is healthy, or that target-site access/redistribution is authorized.
