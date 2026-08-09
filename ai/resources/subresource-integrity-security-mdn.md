---
title: Subresource Integrity - Security | MDN
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
published_at: '2026-08-10T03:31:47.872801+05:30'
collected_at: '2026-08-10T03:31:47.872812+05:30'
tags:
- web-crawled
- youtube
status: active
resource_id: blog:subresource-integrity-security-mdn
first_seen: '2026-08-10T03:31:47.872812+05:30'
last_seen: '2026-08-10T03:31:47.872812+05:30'
last_checked: '2026-08-10T03:31:47.872812+05:30'
health_score: 100
---

# Subresource Integrity - Security | MDN

## Summary

- **Mechanism**: Subresource Integrity (SRI) verifies fetched resources (e.g., from CDNs) by comparing cryptographic hashes (SHA-256/384/512) embedded in the `integrity` attribute of `<script>`/`<link>` tags against the resource's actual content to detect tampering or corruption.

- **Security Constraints**: Browsers enforce SRI only for `crossorigin` resources (CORS-enabled) to prevent XS-Leak attacks; `no-cors` requests (e.g., same-origin) are blocked if SRI is enforced, mitigating hash-based side-channel leaks.

- **Policy Enforcement**: The `Integrity-Policy` header (or `Integrity-Policy-Report-Only`) mandates SRI for scripts/styles, blocking violations (or reporting them) via structured dictionaries (`blocked-destinations`, `sources`, `endpoints`) and generating `integrity-violation` reports via the Reporting API.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-10T03:31:47.872801+05:30

## Related Tags

- web-crawled
- youtube

## Source

Original source: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
