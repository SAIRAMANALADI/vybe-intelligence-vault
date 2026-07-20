---
title: Subresource Integrity - Security | MDN
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
published_at: '2026-07-20T01:14:06.785888+05:30'
collected_at: '2026-07-20T01:14:06.785899+05:30'
tags:
- web-crawled
status: active
resource_id: blog:subresource-integrity-security-mdn
first_seen: '2026-07-20T01:14:06.785899+05:30'
last_seen: '2026-07-20T01:14:06.785899+05:30'
last_checked: '2026-07-20T01:14:06.785899+05:30'
health_score: 100
---

# Subresource Integrity - Security | MDN

## Summary

- **Mechanism**: SRI enforces integrity verification of fetched resources (e.g., CDN-hosted files) via cryptographic hashes (SHA-256/384/512) embedded in the `integrity` attribute of `<script>`/`<link>` tags, blocking mismatched content to mitigate supply chain attacks.

- **Policy Enforcement**: The `Integrity-Policy` header blocks `no-cors` requests or resources lacking `integrity` attributes, while `Integrity-Policy-Report-Only` logs violations without blocking, enabling staged deployment.

- **Generation/Tools**: SRI hashes can be generated via CLI tools (e.g., `openssl dgst -sha384 -binary | openssl base64 -A`) or online utilities like [srihash.org](https://srihash.org/), with `crossorigin` attributes required for non-inline resources to enable CORS-based validation.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-20T01:14:06.785888+05:30

## Related Tags

- web-crawled

## Source

Original source: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
