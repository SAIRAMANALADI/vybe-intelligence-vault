---
title: Subresource Integrity - Security | MDN
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
published_at: '2026-08-01T19:34:16.800294+05:30'
collected_at: '2026-08-01T19:34:16.800303+05:30'
tags:
- web-crawled
- youtube
status: active
resource_id: blog:subresource-integrity-security-mdn
first_seen: '2026-08-01T19:34:16.800303+05:30'
last_seen: '2026-08-01T19:34:16.800303+05:30'
last_checked: '2026-08-01T19:34:16.800303+05:30'
health_score: 100
---

# Subresource Integrity - Security | MDN

## Summary

- **Mechanism**: Subresource Integrity (SRI) enforces cryptographic hash validation on fetched resources (e.g., from CDNs) to detect tampering by verifying that the resource matches the expected hash before execution or rendering.

- **CORS Interaction**: SRI requires `crossorigin` attribute for cross-origin resources to function; `no-cors` mode explicitly blocks SRI enforcement to prevent side-channel attacks (e.g., hash-based information leakage).

- **Policy Enforcement**: The `Integrity-Policy` and `Integrity-Policy-Report-Only` headers enforce integrity metadata requirements for scripts/stylesheets, blocking or reporting violations via the Reporting API when resources lack integrity attributes or are loaded in restricted modes.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-01T19:34:16.800294+05:30

## Related Tags

- web-crawled
- youtube

## Source

Original source: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
