---
title: Subresource Integrity - Security | MDN
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
published_at: '2026-08-06T01:36:37.000612+05:30'
collected_at: '2026-08-06T01:36:37.000623+05:30'
tags:
- web-crawled
status: active
resource_id: blog:subresource-integrity-security-mdn
first_seen: '2026-08-06T01:36:37.000623+05:30'
last_seen: '2026-08-06T01:36:37.000623+05:30'
last_checked: '2026-08-06T01:36:37.000623+05:30'
health_score: 100
---

# Subresource Integrity - Security | MDN

## Summary

- **Purpose & Mechanism**: Subresource Integrity (SRI) verifies fetched resources (e.g., from CDNs) by enforcing cryptographic hash validation (`sha256`, `sha384`, `sha512`) via the `integrity` attribute in `<script>`/`<link>` tags to prevent supply chain attacks.

- **CORS & Security Constraints**: SRI requires `crossorigin="anonymous"` for cross-origin resources; `no-cors` mode explicitly blocks SRI enforcement to mitigate XS-Leak attacks where attackers infer resource content via load success/failure.

- **Policy Enforcement**: The `Integrity-Policy`/`Integrity-Policy-Report-Only` headers enforce mandatory `integrity` attributes for scripts/styles, blocking violations (or reporting them) with structured violation reports via the Reporting API.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-06T01:36:37.000612+05:30

## Related Tags

- web-crawled

## Source

Original source: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
