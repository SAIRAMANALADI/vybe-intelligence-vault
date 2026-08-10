---
title: Subresource Integrity - Security | MDN
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
published_at: '2026-08-10T16:21:45.503051+05:30'
collected_at: '2026-08-10T16:21:45.503065+05:30'
tags:
- web-crawled
status: active
resource_id: blog:subresource-integrity-security-mdn
first_seen: '2026-08-10T16:21:45.503065+05:30'
last_seen: '2026-08-10T16:21:45.503065+05:30'
last_checked: '2026-08-10T16:21:45.503065+05:30'
health_score: 100
---

# Subresource Integrity - Security | MDN

## Summary

- **Mechanism**: Subresource Integrity (SRI) enforces cryptographic hash validation (`sha256`, `sha384`, or `sha512`) on fetched resources (e.g., CDN-hosted scripts/styles) via the `integrity` attribute, blocking mismatched content to mitigate supply chain attacks.

- **CORS Dependency**: SRI requires `crossorigin="anonymous"` for cross-origin resources to enable integrity checks; `no-cors` mode explicitly blocks SRI enforcement to prevent XS-Leak attacks.

- **Policy Enforcement**: HTTP headers `Integrity-Policy` (blocking) and `Integrity-Policy-Report-Only` (monitoring) enforce integrity metadata requirements for scripts/styles, with violation reports sent to configured endpoints via the Reporting API.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-10T16:21:45.503051+05:30

## Related Tags

- web-crawled

## Source

Original source: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
