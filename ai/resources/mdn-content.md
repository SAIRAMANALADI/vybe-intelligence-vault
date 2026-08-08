---
title: content/files/en-us/web/security/defenses/subresource_integrity/index.md at
  main · mdn/content · GitHub
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://github.com/mdn/content/blob/main/files/en-us/web/security/defenses/subresource_integrity/index.md?plain=1
published_at: '2026-08-09T03:28:23.417066+05:30'
collected_at: '2026-08-09T03:28:23.417079+05:30'
tags:
- web-crawled
status: active
resource_id: github:mdn/content
first_seen: '2026-08-09T03:28:23.417079+05:30'
last_seen: '2026-08-09T03:28:23.417079+05:30'
last_checked: '2026-08-09T03:28:23.417079+05:30'
health_score: 100
---

# content/files/en-us/web/security/defenses/subresource_integrity/index.md at main · mdn/content · GitHub

## Summary

- **Subresource Integrity (SRI)** enables browsers to verify fetched resources (e.g., from CDNs) by comparing cryptographic hashes (SHA-256/384/512) against expected values in the `integrity` attribute, mitigating supply chain attacks.

- **CORS Requirement**: SRI enforces cross-origin requests to include the `crossorigin` attribute and valid CORS headers (e.g., `Access-Control-Allow-Origin`), blocking `no-cors` mode to prevent hash-based information leakage attacks.

- **Integrity Policy Headers**: The `Integrity-Policy` and `Integrity-Policy-Report-Only` headers enforce mandatory `integrity` attributes on scripts/stylesheets, with violation reports sent to specified endpoints via the Reporting API.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-09T03:28:23.417066+05:30

## Related Tags

- web-crawled

## Source

Original source: https://github.com/mdn/content/blob/main/files/en-us/web/security/defenses/subresource_integrity/index.md?plain=1
