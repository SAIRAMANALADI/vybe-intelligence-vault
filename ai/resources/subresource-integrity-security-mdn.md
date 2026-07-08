---
title: Subresource Integrity - Security | MDN
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
published_at: '2026-07-09T01:36:14.151568+05:30'
collected_at: '2026-07-09T01:36:14.151582+05:30'
tags:
- web-crawled
- youtube
status: active
resource_id: blog:subresource-integrity-security-mdn
first_seen: '2026-07-09T01:36:14.151582+05:30'
last_seen: '2026-07-09T01:36:14.151582+05:30'
last_checked: '2026-07-09T01:36:14.151582+05:30'
health_score: 100
---

# Subresource Integrity - Security | MDN

## Summary

- **Mechanism**: Subresource Integrity (SRI) enforces cryptographic hash verification of fetched resources (e.g., from CDNs) to detect tampering, using attributes like `integrity` with base64-encoded SHA-256/384/512 hashes in `<script>`/`<link>` tags.

- **Security Constraints**: Browsers block `no-cors` requests with SRI to prevent side-channel attacks (e.g., hash-guessing via `error` events), ensuring integrity checks only apply to same-origin or CORS-enabled cross-origin resources.

- **Policy Enforcement**: The `Integrity-Policy` header (or `Integrity-Policy-Report-Only`) mandates `integrity` attributes for scripts/stylesheets, blocking violations or reporting them via the Reporting API, with structured directives like `blocked-destinations=(script,style)` and `endpoints` for violation logging.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-09T01:36:14.151568+05:30

## Related Tags

- web-crawled
- youtube

## Source

Original source: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
