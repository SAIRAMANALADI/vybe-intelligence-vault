---
title: content/files/en-us/web/security/defenses/subresource_integrity/index.md at
  main · mdn/content · GitHub
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://github.com/mdn/content/blob/main/files/en-us/web/security/defenses/subresource_integrity/index.md?plain=1
published_at: '2026-08-09T08:14:13.755927+05:30'
collected_at: '2026-08-09T08:14:13.755945+05:30'
tags:
- web-crawled
- youtube
status: active
resource_id: github:mdn/content
first_seen: '2026-08-09T08:14:13.755945+05:30'
last_seen: '2026-08-09T08:14:13.755945+05:30'
last_checked: '2026-08-09T08:14:13.755945+05:30'
health_score: 100
---

# content/files/en-us/web/security/defenses/subresource_integrity/index.md at main · mdn/content · GitHub

## Summary

- **SRI Mechanism**: Uses cryptographic hashes (`sha256`, `sha384`, `sha512`) in the `integrity` attribute to verify fetched resources (scripts/stylesheets) against expected values, preventing supply chain attacks by detecting unauthorized modifications.

- **CORS Requirement**: Enforces Cross-Origin Resource Sharing (CORS) via `crossorigin` attribute; resources must include `Access-Control-Allow-Origin` headers to validate integrity, blocking `no-cors` mode to mitigate hash-based side-channel attacks.

- **Policy Enforcement**: Supports `Integrity-Policy`/`Integrity-Policy-Report-Only` headers to mandate `integrity` attributes on subresources, with violation reporting via the Reporting API for debugging and compliance.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-09T08:14:13.755927+05:30

## Related Tags

- web-crawled
- youtube

## Source

Original source: https://github.com/mdn/content/blob/main/files/en-us/web/security/defenses/subresource_integrity/index.md?plain=1
