---
title: Subresource Integrity - Security | MDN
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
published_at: '2026-07-14T13:08:28.611206+05:30'
collected_at: '2026-07-14T13:08:28.611217+05:30'
tags:
- web-crawled
- youtube
status: active
resource_id: blog:subresource-integrity-security-mdn
first_seen: '2026-07-14T13:08:28.611217+05:30'
last_seen: '2026-07-14T13:08:28.611217+05:30'
last_checked: '2026-07-14T13:08:28.611217+05:30'
health_score: 100
---

# Subresource Integrity - Security | MDN

## Summary

- **Mechanism**: Subresource Integrity (SRI) enforces cryptographic hash validation (`sha256`, `sha384`, or `sha512`) on fetched resources (e.g., CDN-hosted scripts/stylesheets) to detect tampering, specified via the `integrity` attribute in `<script>`/`<link>` tags.

- **CORS Interaction**: SRI requires `crossorigin="anonymous"` for cross-origin resources to function; `no-cors` mode explicitly blocks SRI validation to prevent side-channel attacks (e.g., hash-based content inference).

- **Policy Enforcement**: The `Integrity-Policy`/`Integrity-Policy-Report-Only` headers enforce mandatory `integrity` attributes on scripts/styles, blocking violations (or reporting them) via structured directives (`blocked-destinations`, `sources`, `endpoints`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-14T13:08:28.611206+05:30

## Related Tags

- web-crawled
- youtube

## Source

Original source: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
