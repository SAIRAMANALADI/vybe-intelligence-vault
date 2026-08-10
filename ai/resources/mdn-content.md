---
title: content/files/en-us/web/security/defenses/subresource_integrity/index.md at
  main · mdn/content · GitHub
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://github.com/mdn/content/blob/main/files/en-us/web/security/defenses/subresource_integrity/index.md?plain=1
published_at: '2026-08-10T08:18:33.605627+05:30'
collected_at: '2026-08-10T08:18:33.605638+05:30'
tags:
- web-crawled
- youtube
status: active
resource_id: github:mdn/content
first_seen: '2026-08-10T08:18:33.605638+05:30'
last_seen: '2026-08-10T08:18:33.605638+05:30'
last_checked: '2026-08-10T08:18:33.605638+05:30'
health_score: 100
---

# content/files/en-us/web/security/defenses/subresource_integrity/index.md at main · mdn/content · GitHub

## Summary

- **Subresource Integrity (SRI)** enforces cryptographic hash validation (SHA-256/384/512) on fetched resources (scripts/stylesheets) to detect tampering, mitigating supply chain attacks via CDNs or third-party hosts.

- **CORS Requirement**: SRI mandates `crossorigin` attribute and valid CORS headers (`Access-Control-Allow-Origin`) for cross-origin resources; `no-cors` mode explicitly blocks SRI validation to prevent hash-based side-channel leaks.

- **Integrity Policy Headers**: `Integrity-Policy` (blocking) and `Integrity-Policy-Report-Only` headers enforce mandatory `integrity` attributes on scripts/stylesheets, with violation reports sent to configured endpoints via the Reporting API.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-10T08:18:33.605627+05:30

## Related Tags

- web-crawled
- youtube

## Source

Original source: https://github.com/mdn/content/blob/main/files/en-us/web/security/defenses/subresource_integrity/index.md?plain=1
