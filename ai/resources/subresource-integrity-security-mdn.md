---
title: Subresource Integrity - Security | MDN
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
published_at: '2026-08-10T19:27:04.464677+05:30'
collected_at: '2026-08-10T19:27:04.464690+05:30'
tags:
- web-crawled
- youtube
status: active
resource_id: blog:subresource-integrity-security-mdn
first_seen: '2026-08-10T19:27:04.464690+05:30'
last_seen: '2026-08-10T19:27:04.464690+05:30'
last_checked: '2026-08-10T19:27:04.464690+05:30'
health_score: 100
---

# Subresource Integrity - Security | MDN

## Summary

- **Mechanism**: Subresource Integrity (SRI) enforces cryptographic hash verification of fetched resources (e.g., from CDNs) to detect tampering by comparing the resource's hash against a precomputed value in the `integrity` attribute.

- **Security Constraints**: Browsers enforce SRI by blocking `no-cors` requests with integrity checks to prevent side-channel attacks (e.g., hash-based content inference via load success/failure monitoring).

- **Policy Enforcement**: The `Integrity-Policy` header mandates SRI for scripts/styles, blocking non-compliant requests and generating violation reports via the Reporting API, while `Integrity-Policy-Report-Only` allows monitoring without enforcement.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-10T19:27:04.464677+05:30

## Related Tags

- web-crawled
- youtube

## Source

Original source: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
