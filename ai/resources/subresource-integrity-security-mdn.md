---
title: Subresource Integrity - Security | MDN
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
published_at: '2026-08-02T16:30:08.543315+05:30'
collected_at: '2026-08-02T16:30:08.543324+05:30'
tags:
- web-crawled
status: active
resource_id: blog:subresource-integrity-security-mdn
first_seen: '2026-08-02T16:30:08.543324+05:30'
last_seen: '2026-08-02T16:30:08.543324+05:30'
last_checked: '2026-08-02T16:30:08.543324+05:30'
health_score: 100
---

# Subresource Integrity - Security | MDN

## Summary

- **Mechanism**: Subresource Integrity (SRI) enforces cryptographic hash validation (`SHA-256/384/512`) on fetched resources (e.g., CDN-hosted scripts/styles) via the `integrity` attribute in `<script>`/`<link>` tags to detect tampering or corruption.

- **Security Constraints**: Browsers block `no-cors` requests with SRI to prevent XS-Leak attacks (e.g., hash-based content inference), requiring explicit `crossorigin` attributes for cross-origin resources to enforce integrity checks.

- **Policy Enforcement**: The `Integrity-Policy`/`Integrity-Policy-Report-Only` headers enforce mandatory SRI metadata for scripts/styles, blocking violations (or reporting them in report-only mode) via structured directives (`blocked-destinations`, `sources`, `endpoints`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-02T16:30:08.543315+05:30

## Related Tags

- web-crawled

## Source

Original source: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
