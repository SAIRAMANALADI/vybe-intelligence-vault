---
title: Subresource Integrity - Security | MDN
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
published_at: '2026-08-09T12:58:20.370876+05:30'
collected_at: '2026-08-09T12:58:20.370887+05:30'
tags:
- web-crawled
status: active
resource_id: blog:subresource-integrity-security-mdn
first_seen: '2026-08-09T12:58:20.370887+05:30'
last_seen: '2026-08-09T12:58:20.370887+05:30'
last_checked: '2026-08-09T12:58:20.370887+05:30'
health_score: 100
---

# Subresource Integrity - Security | MDN

## Summary

- **Subresource Integrity (SRI)** enforces cryptographic hash validation of fetched resources (e.g., from CDNs) to prevent supply chain attacks by ensuring resource integrity via precomputed hashes (SHA-256/384/512) in the `integrity` attribute.

- **CORS Interaction**: SRI requires `crossorigin="anonymous"` for cross-origin resources to function; `no-cors` mode explicitly blocks SRI enforcement to mitigate XS-Leak attacks where hash validation could leak resource existence.

- **Integrity Policy Headers**: `Integrity-Policy` and `Integrity-Policy-Report-Only` headers enforce mandatory `integrity` attributes for scripts/styles, blocking non-compliant requests (or reporting violations) with structured violation reports via the Reporting API.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-09T12:58:20.370876+05:30

## Related Tags

- web-crawled

## Source

Original source: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
