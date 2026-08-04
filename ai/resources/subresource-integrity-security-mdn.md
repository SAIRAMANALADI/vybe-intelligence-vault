---
title: Subresource Integrity - Security | MDN
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
published_at: '2026-08-04T17:16:24.315841+05:30'
collected_at: '2026-08-04T17:16:24.315856+05:30'
tags:
- web-crawled
- youtube
status: active
resource_id: blog:subresource-integrity-security-mdn
first_seen: '2026-08-04T17:16:24.315856+05:30'
last_seen: '2026-08-04T17:16:24.315856+05:30'
last_checked: '2026-08-04T17:16:24.315856+05:30'
health_score: 100
---

# Subresource Integrity - Security | MDN

## Summary

- **Mechanism**: Subresource Integrity (SRI) enforces cryptographic hash verification of fetched resources (e.g., from CDNs) to detect tampering by comparing against expected hash values in the `integrity` attribute.

- **Security Constraints**: Browsers block `no-cors` requests with SRI to prevent side-channel attacks (e.g., hash-based content inference via load success/failure monitoring); `Integrity-Policy` headers enforce mandatory SRI for scripts/stylesheets.

- **Implementation Tools**: SRI hashes can be generated via CLI tools (OpenSSL/shasum) or web utilities (e.g., [srihash.org](https://srihash.org)), with enforcement enabled via `Integrity-Policy` or `Integrity-Policy-Report-Only` headers.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-04T17:16:24.315841+05:30

## Related Tags

- web-crawled
- youtube

## Source

Original source: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
