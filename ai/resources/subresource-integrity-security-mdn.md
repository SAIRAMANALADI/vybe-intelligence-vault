---
title: Subresource Integrity - Security | MDN
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
published_at: '2026-08-09T10:19:35.826319+05:30'
collected_at: '2026-08-09T10:19:35.826325+05:30'
tags:
- web-crawled
- youtube
status: active
resource_id: blog:subresource-integrity-security-mdn
first_seen: '2026-08-09T10:19:35.826325+05:30'
last_seen: '2026-08-09T10:19:35.826325+05:30'
last_checked: '2026-08-09T10:19:35.826325+05:30'
health_score: 100
---

# Subresource Integrity - Security | MDN

## Summary

- **SRI Mechanism**: Browsers verify fetched resources (e.g., from CDNs) using cryptographic hashes (`SHA-256`, `SHA-384`, `SHA-512`) embedded in the `integrity` attribute of `<script>`/`<link>` tags to detect tampering or supply chain attacks.

- **CORS Restriction**: SRI requires `crossorigin="anonymous"` for cross-origin resources; `no-cors` mode explicitly blocks SRI enforcement to prevent XS-Leak attacks via hash-based side channels.

- **Integrity Policy Headers**: `Integrity-Policy`/`Integrity-Policy-Report-Only` headers enforce mandatory `integrity` attributes for scripts/styles, blocking violations or reporting them via the Reporting API with structured violation data (e.g., `integrity-violation` reports).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-09T10:19:35.826319+05:30

## Related Tags

- web-crawled
- youtube

## Source

Original source: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
