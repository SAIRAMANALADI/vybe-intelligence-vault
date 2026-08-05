---
title: Subresource Integrity - Security | MDN
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
published_at: '2026-08-06T04:03:55.556248+05:30'
collected_at: '2026-08-06T04:03:55.556266+05:30'
tags:
- web-crawled
status: active
resource_id: blog:subresource-integrity-security-mdn
first_seen: '2026-08-06T04:03:55.556266+05:30'
last_seen: '2026-08-06T04:03:55.556266+05:30'
last_checked: '2026-08-06T04:03:55.556266+05:30'
health_score: 100
---

# Subresource Integrity - Security | MDN

## Summary

- **Mechanism**: SRI enforces cryptographic integrity checks on fetched resources (e.g., CDN-hosted files) via `integrity` attributes containing hash digests (SHA-256/384/512) to detect tampering or corruption.

- **Security Constraints**: Browsers block `no-cors` requests with SRI to prevent XS-Leak attacks, and `Integrity-Policy` headers enforce mandatory `integrity` attributes for scripts/styles, with `Report-Only` mode for safe deployment.

- **Implementation Tools**: Hashes can be generated via CLI tools (`openssl dgst -sha384`, `shasum`) or online utilities (e.g., [srihash.org](https://srihash.org)), with structured reporting for violations via `IntegrityViolationReport` and `Reporting-Endpoints`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-06T04:03:55.556248+05:30

## Related Tags

- web-crawled

## Source

Original source: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
