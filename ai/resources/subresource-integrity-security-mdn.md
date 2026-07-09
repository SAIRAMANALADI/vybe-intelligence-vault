---
title: Subresource Integrity - Security | MDN
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/docs/Web/Security/Subresource_Integrity
published_at: '2026-07-10T04:24:23.880912+05:30'
collected_at: '2026-07-10T04:24:23.880925+05:30'
tags:
- web-crawled
- youtube
status: active
resource_id: blog:subresource-integrity-security-mdn
first_seen: '2026-07-10T04:24:23.880925+05:30'
last_seen: '2026-07-10T04:24:23.880925+05:30'
last_checked: '2026-07-10T04:24:23.880925+05:30'
health_score: 100
---

# Subresource Integrity - Security | MDN

## Summary

- **Mechanism**: Subresource Integrity (SRI) verifies fetched resources (e.g., from CDNs) by comparing cryptographic hashes (SHA-256/384/512) embedded in the `integrity` attribute of `<script>`/`<link>` tags against the actual resource content to detect tampering or corruption.

- **Enforcement & Constraints**: SRI requires `crossorigin="anonymous"` for cross-origin resources and blocks `no-cors` requests to prevent side-channel attacks (e.g., hash-based information leakage). The `Integrity-Policy` header enforces mandatory integrity checks for scripts/stylesheets, with `Report-Only` mode for gradual deployment.

- **Implementation Tools**: Hashes can be generated via CLI tools (`openssl dgst -sha384`, `shasum -a 384`) or web-based generators (e.g., [srihash.org](https://srihash.org)), with the `Integrity-Policy-Report-Only` header used to log violations before enforcing blocking.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-10T04:24:23.880912+05:30

## Related Tags

- web-crawled
- youtube

## Source

Original source: https://developer.mozilla.org/docs/Web/Security/Subresource_Integrity
