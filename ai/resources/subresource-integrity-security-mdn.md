---
title: Subresource Integrity - Security | MDN
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
published_at: '2026-08-06T17:16:36.702173+05:30'
collected_at: '2026-08-06T17:16:36.702190+05:30'
tags:
- web-crawled
- youtube
status: active
resource_id: blog:subresource-integrity-security-mdn
first_seen: '2026-08-06T17:16:36.702190+05:30'
last_seen: '2026-08-06T17:16:36.702190+05:30'
last_checked: '2026-08-06T17:16:36.702190+05:30'
health_score: 100
---

# Subresource Integrity - Security | MDN

## Summary

- **Mechanism**: Subresource Integrity (SRI) enforces cryptographic hash verification (`SHA-256`, `SHA-384`, or `SHA-512`) on fetched resources (e.g., CDN-hosted scripts/styles) via the `integrity` attribute in `<script>`/`<link>` tags to detect tampering or corruption.

- **Security Constraints**: Browsers enforce SRI only for `crossorigin` requests; `no-cors` mode explicitly blocks SRI to prevent side-channel attacks (e.g., hash-guessing via load success/failure events).

- **Policy Enforcement**: The `Integrity-Policy` header (or `Integrity-Policy-Report-Only`) mandates SRI for scripts/styles, blocking violations or reporting them via the Reporting API, with structured fields like `blocked-destinations=(script,style)` and `endpoints` for violation logging.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-06T17:16:36.702173+05:30

## Related Tags

- web-crawled
- youtube

## Source

Original source: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
