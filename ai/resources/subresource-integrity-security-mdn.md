---
title: Subresource Integrity - Security | MDN
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
published_at: '2026-08-06T14:39:02.002903+05:30'
collected_at: '2026-08-06T14:39:02.002917+05:30'
tags:
- web-crawled
- youtube
status: active
resource_id: blog:subresource-integrity-security-mdn
first_seen: '2026-08-06T14:39:02.002917+05:30'
last_seen: '2026-08-06T14:39:02.002917+05:30'
last_checked: '2026-08-06T14:39:02.002917+05:30'
health_score: 100
---

# Subresource Integrity - Security | MDN

## Summary

- **Mechanism**: Subresource Integrity (SRI) enforces cryptographic hash verification of fetched resources (e.g., from CDNs) via the `integrity` attribute in `<script>`/`<link>` tags, blocking mismatched content to mitigate supply chain attacks.

- **CORS Interaction**: SRI requires `crossorigin="anonymous"` for cross-origin resources; `no-cors` mode explicitly blocks SRI enforcement to prevent hash-based side-channel attacks (e.g., inferring resource content via load success/failure).

- **Policy Enforcement**: The `Integrity-Policy` header (or `Integrity-Policy-Report-Only`) mandates `integrity` attributes for scripts/styles, blocking non-compliant requests and reporting violations via the Reporting API with structured `integrity-violation` reports.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-06T14:39:02.002903+05:30

## Related Tags

- web-crawled
- youtube

## Source

Original source: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
