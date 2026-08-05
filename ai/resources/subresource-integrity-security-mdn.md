---
title: Subresource Integrity - Security | MDN
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
published_at: '2026-08-05T09:13:40.011220+05:30'
collected_at: '2026-08-05T09:13:40.011233+05:30'
tags:
- web-crawled
status: active
resource_id: blog:subresource-integrity-security-mdn
first_seen: '2026-08-05T09:13:40.011233+05:30'
last_seen: '2026-08-05T09:13:40.011233+05:30'
last_checked: '2026-08-05T09:13:40.011233+05:30'
health_score: 100
---

# Subresource Integrity - Security | MDN

## Summary

- **Mechanism**: Subresource Integrity (SRI) enforces cryptographic hash verification of fetched resources (e.g., from CDNs) to detect tampering or corruption, mitigating supply chain attacks by ensuring resource integrity via SHA-256/384/512 hashes in the `integrity` attribute.

- **Policy Enforcement**: The `Integrity-Policy` and `Integrity-Policy-Report-Only` headers enforce mandatory integrity checks for scripts/stylesheets, blocking `no-cors` requests without hashes or reporting violations to configured endpoints (e.g., `blocked-destinations=(script,style)`).

- **Tools & Generation**: SRI hashes are generated via tools like OpenSSL (`openssl dgst -sha384 -binary | openssl base64 -A`) or online generators (e.g., [srihash.org](https://srihash.org)), with enforcement requiring the `crossorigin` attribute for cross-origin resources to enable CORS-compliant validation.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-05T09:13:40.011220+05:30

## Related Tags

- web-crawled

## Source

Original source: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
