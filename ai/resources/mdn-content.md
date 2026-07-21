---
title: content/files/en-us/web/security/defenses/subresource_integrity/index.md at
  main · mdn/content · GitHub
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://github.com/mdn/content/blob/main/files/en-us/web/security/defenses/subresource_integrity/index.md?plain=1
published_at: '2026-07-21T22:23:23.039135+05:30'
collected_at: '2026-07-21T22:23:23.039149+05:30'
tags:
- web-crawled
status: active
resource_id: github:mdn/content
first_seen: '2026-07-21T22:23:23.039149+05:30'
last_seen: '2026-07-21T22:23:23.039149+05:30'
last_checked: '2026-07-21T22:23:23.039149+05:30'
health_score: 100
---

# content/files/en-us/web/security/defenses/subresource_integrity/index.md at main · mdn/content · GitHub

## Summary

- **Subresource Integrity (SRI)**: A security mechanism verifying fetched resources (e.g., from CDNs) via cryptographic hashes (`sha256`, `sha384`, `sha512`) in the `integrity` attribute, preventing supply chain attacks by ensuring resource integrity before execution.

- **CORS Dependency & `crossorigin` Requirement**: SRI mandates CORS-enabled cross-origin requests; the `crossorigin` attribute must be set to avoid `no-cors` mode, which would otherwise bypass integrity checks and enable hash-based content inference attacks.

- **Integrity Policy Headers**: HTTP headers (`Integrity-Policy`/`Integrity-Policy-Report-Only`) enforce mandatory `integrity` attributes on scripts/stylesheets, blocking violations or reporting them via the Reporting API, with structured field dictionaries defining blocked destinations (`script`/`style`) and reporting endpoints.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-21T22:23:23.039135+05:30

## Related Tags

- web-crawled

## Source

Original source: https://github.com/mdn/content/blob/main/files/en-us/web/security/defenses/subresource_integrity/index.md?plain=1
