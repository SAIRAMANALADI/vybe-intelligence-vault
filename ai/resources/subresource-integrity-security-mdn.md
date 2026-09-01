---
title: Subresource Integrity - Security | MDN
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/docs/Web/Security/Subresource_Integrity
published_at: '2026-09-02T04:25:15.086960+05:30'
collected_at: '2026-09-02T04:25:15.086971+05:30'
tags:
- web-crawled
- youtube
status: active
resource_id: blog:subresource-integrity-security-mdn
first_seen: '2026-09-02T04:25:15.086971+05:30'
last_seen: '2026-09-02T04:25:15.086971+05:30'
last_checked: '2026-09-02T04:25:15.086971+05:30'
health_score: 100
---

# Subresource Integrity - Security | MDN

## Summary

- **SRI Mechanism**: Enables browsers to verify fetched resources (e.g., from CDNs) by comparing cryptographic hashes (SHA-256/384/512) embedded in the `integrity` attribute of `<script>`/`<link>` tags against the resource's actual content to detect tampering or corruption.

- **CORS & SRI Interaction**: Browsers enforce SRI only for cross-origin requests with `crossorigin` attribute (e.g., `crossorigin="anonymous"`); `no-cors` mode explicitly blocks SRI to prevent side-channel attacks (e.g., hash-based content inference via error events).

- **Integrity Policy Headers**: The `Integrity-Policy` and `Integrity-Policy-Report-Only` headers enforce mandatory `integrity` attributes on scripts/stylesheets, blocking non-compliant requests (or reporting violations) via structured directives like `blocked-destinations=(script, style)` and `endpoints` for violation reporting.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-09-02T04:25:15.086960+05:30

## Related Tags

- web-crawled
- youtube

## Source

Original source: https://developer.mozilla.org/docs/Web/Security/Subresource_Integrity
