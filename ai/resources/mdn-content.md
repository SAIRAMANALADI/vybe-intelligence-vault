---
title: content/files/en-us/web/security/defenses/subresource_integrity/index.md at
  main · mdn/content · GitHub
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://github.com/mdn/content/blob/main/files/en-us/web/security/defenses/subresource_integrity/index.md?plain=1
published_at: '2026-07-21T01:37:06.822631+05:30'
collected_at: '2026-07-21T01:37:06.822652+05:30'
tags:
- web-crawled
status: active
resource_id: github:mdn/content
first_seen: '2026-07-21T01:37:06.822652+05:30'
last_seen: '2026-07-21T01:37:06.822652+05:30'
last_checked: '2026-07-21T01:37:06.822652+05:30'
health_score: 100
---

# content/files/en-us/web/security/defenses/subresource_integrity/index.md at main · mdn/content · GitHub

## Summary

- **Purpose & Mechanism**: Subresource Integrity (SRI) uses cryptographic hashes (SHA-256/384/512) in the `integrity` attribute to verify fetched resources (scripts/stylesheets) against expected values, mitigating supply chain attacks via CDNs or third-party hosts.

- **CORS Dependency & Enforcement**: SRI requires CORS-enabled cross-origin requests; the `crossorigin` attribute must be set, and the server must include `Access-Control-Allow-Origin` headers to permit integrity checks.

- **Policy Headers & Tools**: The `Integrity-Policy` header enforces SRI requirements (blocking or reporting violations), while tools like OpenSSL (`openssl dgst -sha384 -binary | openssl base64 -A`) and online generators (e.g., [srihash.org](https://srihash.org)) automate hash generation.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-21T01:37:06.822631+05:30

## Related Tags

- web-crawled

## Source

Original source: https://github.com/mdn/content/blob/main/files/en-us/web/security/defenses/subresource_integrity/index.md?plain=1
