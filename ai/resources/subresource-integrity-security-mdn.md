---
title: Subresource Integrity - Security | MDN
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
published_at: '2026-08-10T13:47:49.184348+05:30'
collected_at: '2026-08-10T13:47:49.184357+05:30'
tags:
- web-crawled
- youtube
status: active
resource_id: blog:subresource-integrity-security-mdn
first_seen: '2026-08-10T13:47:49.184357+05:30'
last_seen: '2026-08-10T13:47:49.184357+05:30'
last_checked: '2026-08-10T13:47:49.184357+05:30'
health_score: 100
---

# Subresource Integrity - Security | MDN

## Summary

- **Mechanism**: Subresource Integrity (SRI) enforces cryptographic hash validation on fetched resources (e.g., CDN-hosted files) to detect tampering or corruption, mitigating supply chain attacks by ensuring resource integrity via precomputed hashes (SHA-256/384/512) embedded in `<script>`/`<link>` tags.

- **CORS Interaction**: SRI requires `crossorigin="anonymous"` for cross-origin resources to enforce integrity checks; `no-cors` mode explicitly blocks SRI enforcement to prevent side-channel attacks (e.g., hash-based content inference via load success/failure).

- **Policy Enforcement**: The `Integrity-Policy` header (or `Integrity-Policy-Report-Only`) mandates integrity metadata for scripts/styles, blocking non-compliant requests and reporting violations via Reporting API; supported destinations include `script`/`style` with optional `inline` sources and reporting endpoints.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-10T13:47:49.184348+05:30

## Related Tags

- web-crawled
- youtube

## Source

Original source: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
