---
title: Subresource Integrity - Security | MDN
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
published_at: '2026-08-01T14:13:30.914438+05:30'
collected_at: '2026-08-01T14:13:30.914451+05:30'
tags:
- web-crawled
status: active
resource_id: blog:subresource-integrity-security-mdn
first_seen: '2026-08-01T14:13:30.914451+05:30'
last_seen: '2026-08-01T14:13:30.914451+05:30'
last_checked: '2026-08-01T14:13:30.914451+05:30'
health_score: 100
---

# Subresource Integrity - Security | MDN

## Summary

- **Purpose & Mechanism**: Subresource Integrity (SRI) verifies fetched resources (e.g., from CDNs) by enforcing cryptographic hash validation (`sha384`/`sha512`) via the `integrity` attribute in `<script>`/`<link>` tags to prevent supply chain attacks.

- **Enforcement & Security**: Browsers block `no-cors` requests with SRI to mitigate XS-Leak attacks; `Integrity-Policy`/`Integrity-Policy-Report-Only` headers enforce mandatory integrity checks for scripts/styles, generating `integrity-violation` reports via the Reporting API.

- **Hash Generation & Tools**: SRI hashes are generated using tools like OpenSSL (`openssl dgst -sha384 -binary | openssl base64 -A`) or `shasum`, with online generators (e.g., [srihash.org](https://srihash.org)) for cross-platform deployment.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-01T14:13:30.914438+05:30

## Related Tags

- web-crawled

## Source

Original source: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
