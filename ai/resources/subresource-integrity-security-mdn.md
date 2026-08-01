---
title: Subresource Integrity - Security | MDN
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
published_at: '2026-08-01T16:28:27.335844+05:30'
collected_at: '2026-08-01T16:28:27.335852+05:30'
tags:
- web-crawled
- youtube
status: active
resource_id: blog:subresource-integrity-security-mdn
first_seen: '2026-08-01T16:28:27.335852+05:30'
last_seen: '2026-08-01T16:28:27.335852+05:30'
last_checked: '2026-08-01T16:28:27.335852+05:30'
health_score: 100
---

# Subresource Integrity - Security | MDN

## Summary

- **Mechanism**: Subresource Integrity (SRI) enforces cryptographic hash verification (`SHA-256`, `SHA-384`, or `SHA-512`) on fetched resources (e.g., CDN-hosted scripts/styles) via the `integrity` attribute to detect tampering or corruption.

- **Security Constraints**: Browsers block `no-cors` requests with SRI to prevent side-channel attacks (e.g., hash-guessing via `error` events) and enforce integrity policies via `Integrity-Policy`/`Integrity-Policy-Report-Only` headers to mandate `integrity` attributes for scripts/styles.

- **Implementation Tools**: SRI hashes can be generated via CLI tools (`openssl dgst -sha384 -binary | base64 -A`, `shasum -b -a 384`) or online generators (e.g., [srihash.org](https://srihash.org)), with enforcement requiring the `crossorigin` attribute for cross-origin resources.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-01T16:28:27.335844+05:30

## Related Tags

- web-crawled
- youtube

## Source

Original source: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
