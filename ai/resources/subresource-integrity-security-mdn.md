---
title: Subresource Integrity - Security | MDN
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
published_at: '2026-08-03T23:01:03.768950+05:30'
collected_at: '2026-08-03T23:01:03.768964+05:30'
tags:
- web-crawled
status: active
resource_id: blog:subresource-integrity-security-mdn
first_seen: '2026-08-03T23:01:03.768964+05:30'
last_seen: '2026-08-03T23:01:03.768964+05:30'
last_checked: '2026-08-03T23:01:03.768964+05:30'
health_score: 100
---

# Subresource Integrity - Security | MDN

## Summary

- **Mechanism**: Subresource Integrity (SRI) verifies fetched resources (e.g., from CDNs) by comparing cryptographic hashes (SHA-256/384/512) embedded in the `integrity` attribute of `<script>`/`<link>` tags against the actual resource content to detect tampering.

- **Enforcement & Policy**: Browsers enforce SRI via `Integrity-Policy`/`Integrity-Policy-Report-Only` headers, blocking `no-cors` requests without integrity metadata and reporting violations via the Reporting API (e.g., `integrity-violation` reports).

- **Hash Generation & Tools**: SRI hashes can be generated using tools like OpenSSL (`openssl dgst -sha384 -binary | openssl base64 -A`), `shasum`, or online generators (e.g., [srihash.org](https://srihash.org)), ensuring resources match expected cryptographic digests.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-03T23:01:03.768950+05:30

## Related Tags

- web-crawled

## Source

Original source: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
