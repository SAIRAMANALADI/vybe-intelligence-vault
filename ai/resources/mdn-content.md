---
title: content/files/en-us/web/security/defenses/subresource_integrity/index.md at
  main · mdn/content · GitHub
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://github.com/mdn/content/blob/main/files/en-us/web/security/defenses/subresource_integrity/index.md?plain=1
published_at: '2026-08-10T13:49:44.695773+05:30'
collected_at: '2026-08-10T13:49:44.695789+05:30'
tags:
- web-crawled
status: active
resource_id: github:mdn/content
first_seen: '2026-08-10T13:49:44.695789+05:30'
last_seen: '2026-08-10T13:49:44.695789+05:30'
last_checked: '2026-08-10T13:49:44.695789+05:30'
health_score: 100
---

# content/files/en-us/web/security/defenses/subresource_integrity/index.md at main · mdn/content · GitHub

## Summary

- **Subresource Integrity (SRI)** enforces cryptographic hash validation (`sha256`, `sha384`, `sha514`) on fetched resources (scripts/stylesheets) to detect tampering during CDN-based delivery, mitigating supply chain attacks.

- **CORS Requirement**: SRI mandates `crossorigin` attribute and proper `Access-Control-Allow-Origin` headers for cross-origin resources, blocking `no-cors` mode to prevent integrity-based XS-Leak attacks.

- **Integrity Policy Headers**: `Integrity-Policy` and `Integrity-Policy-Report-Only` HTTP headers enforce mandatory `integrity` attributes on subresources, with violation reporting via the Reporting API.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-10T13:49:44.695773+05:30

## Related Tags

- web-crawled

## Source

Original source: https://github.com/mdn/content/blob/main/files/en-us/web/security/defenses/subresource_integrity/index.md?plain=1
