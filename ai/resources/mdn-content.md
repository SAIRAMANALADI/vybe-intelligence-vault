---
title: content/files/en-us/web/security/defenses/subresource_integrity/index.md at
  main · mdn/content · GitHub
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://github.com/mdn/content/blob/main/files/en-us/web/security/defenses/subresource_integrity/index.md?plain=1
published_at: '2026-08-03T20:59:05.547838+05:30'
collected_at: '2026-08-03T20:59:05.547850+05:30'
tags:
- web-crawled
status: active
resource_id: github:mdn/content
first_seen: '2026-08-03T20:59:05.547850+05:30'
last_seen: '2026-08-03T20:59:05.547850+05:30'
last_checked: '2026-08-03T20:59:05.547850+05:30'
health_score: 100
---

# content/files/en-us/web/security/defenses/subresource_integrity/index.md at main · mdn/content · GitHub

## Summary

- **Subresource Integrity (SRI)** enforces cryptographic hash validation (SHA-256/384/512) on fetched resources (scripts/stylesheets) to prevent supply chain attacks by ensuring resource integrity.

- **CORS Requirement**: SRI mandates `crossorigin` attribute and CORS-enabled responses (`Access-Control-Allow-Origin`) for cross-origin resources; `no-cors` mode is explicitly blocked to prevent hash-based information leakage.

- **Policy Enforcement**: HTTP headers `Integrity-Policy` and `Integrity-Policy-Report-Only` enforce mandatory `integrity` attributes on scripts/stylesheets, with violation reporting via the Reporting API.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-03T20:59:05.547838+05:30

## Related Tags

- web-crawled

## Source

Original source: https://github.com/mdn/content/blob/main/files/en-us/web/security/defenses/subresource_integrity/index.md?plain=1
