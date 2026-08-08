---
title: Subresource Integrity - Security | MDN
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
published_at: '2026-08-08T21:30:27.804318+05:30'
collected_at: '2026-08-08T21:30:27.804331+05:30'
tags:
- web-crawled
- youtube
status: active
resource_id: blog:subresource-integrity-security-mdn
first_seen: '2026-08-08T21:30:27.804331+05:30'
last_seen: '2026-08-08T21:30:27.804331+05:30'
last_checked: '2026-08-08T21:30:27.804331+05:30'
health_score: 100
---

# Subresource Integrity - Security | MDN

## Summary

- **Mechanism**: SRI enforces integrity verification of fetched resources (e.g., CDN-hosted files) by requiring cryptographic hash matching (`sha384`, `sha256`, etc.) via the `integrity` attribute in `<script>`/`<link>` tags to mitigate supply chain attacks.

- **CORS Interaction**: SRI requires `crossorigin="anonymous"` for cross-origin resources; `no-cors` mode is explicitly blocked to prevent integrity-based side-channel leaks (e.g., hash-guessing attacks via `error` event monitoring).

- **Policy Enforcement**: The `Integrity-Policy`/`Integrity-Policy-Report-Only` headers enforce mandatory `integrity` attributes for scripts/styles, blocking violations (or reporting them in report-only mode), with structured reporting via `Reporting-Endpoints` for debugging.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-08T21:30:27.804318+05:30

## Related Tags

- web-crawled
- youtube

## Source

Original source: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
