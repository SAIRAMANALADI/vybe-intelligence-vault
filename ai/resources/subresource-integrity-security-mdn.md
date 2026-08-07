---
title: Subresource Integrity - Security | MDN
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
published_at: '2026-08-07T08:58:56.921396+05:30'
collected_at: '2026-08-07T08:58:56.921404+05:30'
tags:
- web-crawled
- youtube
status: active
resource_id: blog:subresource-integrity-security-mdn
first_seen: '2026-08-07T08:58:56.921404+05:30'
last_seen: '2026-08-07T08:58:56.921404+05:30'
last_checked: '2026-08-07T08:58:56.921404+05:30'
health_score: 100
---

# Subresource Integrity - Security | MDN

## Summary

- **Mechanism**: Subresource Integrity (SRI) enforces cryptographic hash verification of fetched resources (e.g., from CDNs) to detect tampering, using attributes like `integrity` (e.g., `sha384-<base64-hash>`) in `<script>`/`<link>` tags to block mismatched content.

- **CORS Interaction**: SRI requires `crossorigin="anonymous"` for cross-origin resources to function; `no-cors` mode explicitly blocks SRI enforcement to prevent side-channel attacks (e.g., hash-based content inference via load success/failure).

- **Policy Enforcement**: The `Integrity-Policy` header (or `Integrity-Policy-Report-Only`) mandates SRI for scripts/styles, blocking non-compliant requests (e.g., `no-cors` or missing `integrity`) and reporting violations via the Reporting API with structured `integrity-violation` reports.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-07T08:58:56.921396+05:30

## Related Tags

- web-crawled
- youtube

## Source

Original source: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
