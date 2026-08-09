---
title: content/files/en-us/web/security/defenses/subresource_integrity/index.md at
  main · mdn/content · GitHub
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://github.com/mdn/content/blob/main/files/en-us/web/security/defenses/subresource_integrity/index.md?plain=1
published_at: '2026-08-09T10:21:19.456247+05:30'
collected_at: '2026-08-09T10:21:19.456255+05:30'
tags:
- web-crawled
status: active
resource_id: github:mdn/content
first_seen: '2026-08-09T10:21:19.456255+05:30'
last_seen: '2026-08-09T10:21:19.456255+05:30'
last_checked: '2026-08-09T10:21:19.456255+05:30'
health_score: 100
---

# content/files/en-us/web/security/defenses/subresource_integrity/index.md at main · mdn/content · GitHub

## Summary

- **Subresource Integrity (SRI)** mechanism enables browsers to verify fetched resources (e.g., from CDNs) by comparing cryptographic hashes (`SHA-256`, `SHA-384`, or `SHA-512`) against expected values in the `integrity` attribute, mitigating supply chain attacks.

- **CORS Requirement**: SRI enforces cross-origin requests to use CORS headers (`Access-Control-Allow-Origin`), and the `crossorigin` attribute must be set on `<script>`/`<link>` elements to avoid `no-cors` mode failures.

- **Integrity Policy Headers**: The `Integrity-Policy` and `Integrity-Policy-Report-Only` HTTP headers enforce or monitor `integrity` attribute requirements, blocking or reporting violations via the Reporting API.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-09T10:21:19.456247+05:30

## Related Tags

- web-crawled

## Source

Original source: https://github.com/mdn/content/blob/main/files/en-us/web/security/defenses/subresource_integrity/index.md?plain=1
