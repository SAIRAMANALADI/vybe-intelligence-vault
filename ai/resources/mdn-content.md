---
title: content/files/en-us/web/security/defenses/subresource_integrity/index.md at
  main · mdn/content · GitHub
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://github.com/mdn/content/blob/main/files/en-us/web/security/defenses/subresource_integrity/index.md?plain=1
published_at: '2026-08-01T14:15:30.314785+05:30'
collected_at: '2026-08-01T14:15:30.314799+05:30'
tags:
- web-crawled
status: active
resource_id: github:mdn/content
first_seen: '2026-08-01T14:15:30.314799+05:30'
last_seen: '2026-08-01T14:15:30.314799+05:30'
last_checked: '2026-08-01T14:15:30.314799+05:30'
health_score: 100
---

# content/files/en-us/web/security/defenses/subresource_integrity/index.md at main · mdn/content · GitHub

## Summary

- **Subresource Integrity (SRI)** enforces cryptographic hash validation (`sha256`, `sha384`, `sha514`) on fetched resources (scripts/stylesheets) to prevent supply chain attacks by verifying resource integrity via `integrity` attribute.

- **CORS Requirement**: SRI mandates `crossorigin` attribute and valid `Access-Control-Allow-Origin` headers for cross-origin requests; `no-cors` mode is explicitly blocked to prevent integrity-based XS-Leak attacks.

- **Integrity Policy Headers**: `Integrity-Policy` (blocking) and `Integrity-Policy-Report-Only` headers enforce SRI metadata requirements, generating `integrity-violation` reports via Reporting API for violations.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-01T14:15:30.314785+05:30

## Related Tags

- web-crawled

## Source

Original source: https://github.com/mdn/content/blob/main/files/en-us/web/security/defenses/subresource_integrity/index.md?plain=1
