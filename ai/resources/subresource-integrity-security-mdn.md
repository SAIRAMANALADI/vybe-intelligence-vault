---
title: Subresource Integrity - Security | MDN
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
published_at: '2026-07-21T01:35:15.713878+05:30'
collected_at: '2026-07-21T01:35:15.713898+05:30'
tags:
- web-crawled
status: active
resource_id: blog:subresource-integrity-security-mdn
first_seen: '2026-07-21T01:35:15.713898+05:30'
last_seen: '2026-07-21T01:35:15.713898+05:30'
last_checked: '2026-07-21T01:35:15.713898+05:30'
health_score: 100
---

# Subresource Integrity - Security | MDN

## Summary

- **Mechanism**: SRI enforces integrity verification of fetched resources (e.g., from CDNs) by requiring cryptographic hash matches (`sha256`, `sha384`, or `sha512`) in the `integrity` attribute of `<script>`/`<link>` tags to mitigate supply chain attacks.

- **CORS Dependency**: SRI requires `crossorigin="anonymous"` for cross-origin resources to work; `no-cors` mode explicitly blocks SRI enforcement to prevent XS-Leak attacks via hash-based inference.

- **Policy Enforcement**: HTTP headers `Integrity-Policy` (blocking) and `Integrity-Policy-Report-Only` (monitoring) enforce mandatory `integrity` attributes on script/style resources, generating `integrity-violation` reports via the Reporting API when violated.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-21T01:35:15.713878+05:30

## Related Tags

- web-crawled

## Source

Original source: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
