---
title: content/files/en-us/web/security/defenses/subresource_integrity/index.md at
  main · mdn/content · GitHub
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://github.com/mdn/content/blob/main/files/en-us/web/security/defenses/subresource_integrity/index.md?plain=1
published_at: '2026-08-08T12:56:36.289078+05:30'
collected_at: '2026-08-08T12:56:36.289088+05:30'
tags:
- web-crawled
- youtube
status: active
resource_id: github:mdn/content
first_seen: '2026-08-08T12:56:36.289088+05:30'
last_seen: '2026-08-08T12:56:36.289088+05:30'
last_checked: '2026-08-08T12:56:36.289088+05:30'
health_score: 100
---

# content/files/en-us/web/security/defenses/subresource_integrity/index.md at main · mdn/content · GitHub

## Summary

- **Subresource Integrity (SRI)** mechanism enforces cryptographic hash validation (SHA-256/384/512) on fetched resources (scripts/stylesheets) to detect tampering, mitigating supply-chain attacks via CDNs or third-party hosts.

- **CORS Requirement**: SRI mandates `crossorigin` attribute and proper `Access-Control-Allow-Origin` headers for cross-origin requests, blocking `no-cors` mode to prevent hash-based side-channel attacks.

- **Integrity Policy Headers**: `Integrity-Policy` (blocking) and `Integrity-Policy-Report-Only` headers enforce mandatory `integrity` attributes, with violation reports sent via Reporting API when misconfigured.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-08T12:56:36.289078+05:30

## Related Tags

- web-crawled
- youtube

## Source

Original source: https://github.com/mdn/content/blob/main/files/en-us/web/security/defenses/subresource_integrity/index.md?plain=1
