---
title: Subresource Integrity - Security | MDN
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
published_at: '2026-08-06T09:16:49.461496+05:30'
collected_at: '2026-08-06T09:16:49.461512+05:30'
tags:
- web-crawled
status: active
resource_id: blog:subresource-integrity-security-mdn
first_seen: '2026-08-06T09:16:49.461512+05:30'
last_seen: '2026-08-06T09:16:49.461512+05:30'
last_checked: '2026-08-06T09:16:49.461512+05:30'
health_score: 100
---

# Subresource Integrity - Security | MDN

## Summary

- **SRI Mechanism**: Enables browsers to verify fetched resources (e.g., from CDNs) by validating cryptographic hashes (`SHA-256`, `SHA-384`, or `SHA-512`) against the `integrity` attribute in `<script>` or `<link>` tags to detect tampering or supply chain attacks.

- **CORS & SRI Restrictions**: Browsers block SRI validation for `no-cors` requests to prevent XS-Leak attacks where attackers infer resource content via load success/failure events; `crossorigin` attribute is required for cross-origin resources.

- **Integrity Policy Headers**: `Integrity-Policy` enforces mandatory `integrity` attributes for scripts/styles, blocking violations (or reporting-only via `Integrity-Policy-Report-Only`), with structured directives like `blocked-destinations=(script,style)` and reporting endpoints for violation logs.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-06T09:16:49.461496+05:30

## Related Tags

- web-crawled

## Source

Original source: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
