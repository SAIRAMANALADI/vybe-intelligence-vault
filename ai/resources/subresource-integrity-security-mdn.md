---
title: Subresource Integrity - Security | MDN
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
published_at: '2026-08-04T03:58:08.253649+05:30'
collected_at: '2026-08-04T03:58:08.253659+05:30'
tags:
- web-crawled
- youtube
status: active
resource_id: blog:subresource-integrity-security-mdn
first_seen: '2026-08-04T03:58:08.253659+05:30'
last_seen: '2026-08-04T03:58:08.253659+05:30'
last_checked: '2026-08-04T03:58:08.253659+05:30'
health_score: 100
---

# Subresource Integrity - Security | MDN

## Summary

- **Mechanism**: Subresource Integrity (SRI) enforces cryptographic hash validation (`SHA-256`, `SHA-384`, or `SHA-512`) on fetched resources (e.g., CDN-hosted scripts/styles) via the `integrity` attribute, mitigating supply-chain attacks by ensuring resource integrity.

- **CORS Dependency**: SRI requires `crossorigin="anonymous"` for cross-origin resources to function; `no-cors` mode explicitly blocks SRI validation to prevent side-channel leaks (e.g., hash-based content inference).

- **Policy Enforcement**: The `Integrity-Policy` header (or `Integrity-Policy-Report-Only`) mandates `integrity` attributes for scripts/styles, blocking violations or reporting them via the Reporting API, with structured fields like `blocked-destinations` and `endpoints` for granular control.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-04T03:58:08.253649+05:30

## Related Tags

- web-crawled
- youtube

## Source

Original source: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
