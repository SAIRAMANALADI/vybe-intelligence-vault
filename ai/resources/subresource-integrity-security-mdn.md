---
title: Subresource Integrity - Security | MDN
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
published_at: '2026-08-03T20:57:10.841074+05:30'
collected_at: '2026-08-03T20:57:10.841088+05:30'
tags:
- web-crawled
- youtube
status: active
resource_id: blog:subresource-integrity-security-mdn
first_seen: '2026-08-03T20:57:10.841088+05:30'
last_seen: '2026-08-03T20:57:10.841088+05:30'
last_checked: '2026-08-03T20:57:10.841088+05:30'
health_score: 100
---

# Subresource Integrity - Security | MDN

## Summary

- **SRI Mechanism**: Browsers verify fetched resources (e.g., from CDNs) by comparing cryptographic hashes (SHA-384) provided in the `integrity` attribute against the resource's actual content to detect tampering or supply chain attacks.

- **CORS Interaction**: SRI requires `crossorigin="anonymous"` for cross-origin resources to enforce integrity checks; `no-cors` mode explicitly blocks SRI validation to prevent side-channel attacks (e.g., hash-based information leakage).

- **Policy Enforcement**: The `Integrity-Policy` header (or `Integrity-Policy-Report-Only`) mandates integrity metadata for scripts/styles, blocking or reporting violations via the Reporting API, with structured directives like `blocked-destinations=(script, style)` and `endpoints` for violation logging.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-03T20:57:10.841074+05:30

## Related Tags

- web-crawled
- youtube

## Source

Original source: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
