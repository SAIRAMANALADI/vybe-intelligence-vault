---
title: content/files/en-us/web/security/defenses/subresource_integrity/index.md at
  main · mdn/content · GitHub
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://github.com/mdn/content/blob/main/files/en-us/web/security/defenses/subresource_integrity/index.md?plain=1
published_at: '2026-08-05T14:36:42.472970+05:30'
collected_at: '2026-08-05T14:36:42.472984+05:30'
tags:
- web-crawled
- youtube
status: active
resource_id: github:mdn/content
first_seen: '2026-08-05T14:36:42.472984+05:30'
last_seen: '2026-08-05T14:36:42.472984+05:30'
last_checked: '2026-08-05T14:36:42.472984+05:30'
health_score: 100
---

# content/files/en-us/web/security/defenses/subresource_integrity/index.md at main · mdn/content · GitHub

## Summary

- **Subresource Integrity (SRI)** enforces cryptographic hash validation (SHA-256/384/512) on fetched resources (e.g., CDN-hosted scripts/stylesheets) to detect tampering, mitigating supply chain attacks by ensuring resource integrity via `integrity` attribute hashes.

- **CORS Requirement**: SRI mandates Cross-Origin Resource Sharing (CORS) compliance; resources must include `crossorigin` attribute and `Access-Control-Allow-Origin` headers to validate integrity, preventing `no-cors` mode exploitation for hash-based side-channel attacks.

- **Integrity Policy Headers**: `Integrity-Policy` and `Integrity-Policy-Report-Only` HTTP headers enforce mandatory `integrity` attributes on script/style resources, blocking violations (or reporting them) with structured violation reports via Reporting API.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-05T14:36:42.472970+05:30

## Related Tags

- web-crawled
- youtube

## Source

Original source: https://github.com/mdn/content/blob/main/files/en-us/web/security/defenses/subresource_integrity/index.md?plain=1
