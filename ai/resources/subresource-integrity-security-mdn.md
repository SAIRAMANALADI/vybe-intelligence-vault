---
title: Subresource Integrity - Security | MDN
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
published_at: '2026-08-02T19:33:18.873876+05:30'
collected_at: '2026-08-02T19:33:18.873889+05:30'
tags:
- web-crawled
status: active
resource_id: blog:subresource-integrity-security-mdn
first_seen: '2026-08-02T19:33:18.873889+05:30'
last_seen: '2026-08-02T19:33:18.873889+05:30'
last_checked: '2026-08-02T19:33:18.873889+05:30'
health_score: 100
---

# Subresource Integrity - Security | MDN

## Summary

- **Mechanism**: Subresource Integrity (SRI) enforces cryptographic hash verification of fetched resources (e.g., from CDNs) to detect tampering by comparing the resource's hash against a precomputed value embedded in the `<script>` or `<link>` tag.

- **Policy Enforcement**: The `Integrity-Policy` HTTP header blocks or reports violations for script/style resources loaded without integrity checks or in `no-cors` mode, while `Integrity-Policy-Report-Only` logs violations without blocking.

- **Hash Generation**: SRI hashes are generated using tools like OpenSSL (`openssl dgst -sha384 -binary | openssl base64 -A`) or `shasum` with base64 encoding, ensuring compatibility with the `integrity` attribute syntax (e.g., `sha384-<base64-hash>`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-02T19:33:18.873876+05:30

## Related Tags

- web-crawled

## Source

Original source: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
