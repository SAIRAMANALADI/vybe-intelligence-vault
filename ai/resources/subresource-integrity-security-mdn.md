---
title: Subresource Integrity - Security | MDN
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
published_at: '2026-08-02T01:12:07.312522+05:30'
collected_at: '2026-08-02T01:12:07.312538+05:30'
tags:
- web-crawled
status: active
resource_id: blog:subresource-integrity-security-mdn
first_seen: '2026-08-02T01:12:07.312538+05:30'
last_seen: '2026-08-02T01:12:07.312538+05:30'
last_checked: '2026-08-02T01:12:07.312538+05:30'
health_score: 100
---

# Subresource Integrity - Security | MDN

## Summary

- **Mechanism**: Subresource Integrity (SRI) verifies fetched resources (e.g., from CDNs) by requiring cryptographic hash matches in the `integrity` attribute of `<script>`/`<link>` tags to prevent supply chain attacks.
- **Enforcement**: Browsers enforce SRI via `Integrity-Policy`/`Integrity-Policy-Report-Only` headers, blocking or reporting violations for scripts/styles without integrity metadata or `no-cors` requests.
- **Hash Generation**: SRI hashes can be generated using tools like `openssl dgst -sha384 -binary | openssl base64 -A` or online generators (e.g., srihash.org) for SHA-384/256 integrity values.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-02T01:12:07.312522+05:30

## Related Tags

- web-crawled

## Source

Original source: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
