---
title: Subresource Integrity - Security | MDN
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
published_at: '2026-08-05T04:03:45.697608+05:30'
collected_at: '2026-08-05T04:03:45.697623+05:30'
tags:
- web-crawled
- youtube
status: active
resource_id: blog:subresource-integrity-security-mdn
first_seen: '2026-08-05T04:03:45.697623+05:30'
last_seen: '2026-08-05T04:03:45.697623+05:30'
last_checked: '2026-08-05T04:03:45.697623+05:30'
health_score: 100
---

# Subresource Integrity - Security | MDN

## Summary

- **Mechanism**: Subresource Integrity (SRI) enforces cryptographic hash validation (`SHA-256`, `SHA-384`, or `SHA-512`) on fetched resources (e.g., CDN-hosted scripts/styles) via the `integrity` attribute, blocking tampered content.
- **Security Constraints**: Browsers reject SRI-protected resources loaded in `no-cors` mode to prevent side-channel attacks (e.g., hash-based content inference via `error` events).
- **Policy Enforcement**: HTTP headers `Integrity-Policy`/`Integrity-Policy-Report-Only` mandate `integrity` attributes for scripts/styles, with violation reports sent to specified endpoints via the Reporting API.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-05T04:03:45.697608+05:30

## Related Tags

- web-crawled
- youtube

## Source

Original source: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
