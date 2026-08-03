---
title: Subresource Integrity - Security | MDN
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
published_at: '2026-08-04T01:39:27.293390+05:30'
collected_at: '2026-08-04T01:39:27.293403+05:30'
tags:
- web-crawled
- youtube
status: active
resource_id: blog:subresource-integrity-security-mdn
first_seen: '2026-08-04T01:39:27.293403+05:30'
last_seen: '2026-08-04T01:39:27.293403+05:30'
last_checked: '2026-08-04T01:39:27.293403+05:30'
health_score: 100
---

# Subresource Integrity - Security | MDN

## Summary

- **Mechanism**: Subresource Integrity (SRI) enforces cryptographic hash validation (`SHA-256`, `SHA-384`, or `SHA-512`) on fetched resources (e.g., CDN-hosted scripts/styles) via the `integrity` attribute to prevent supply chain attacks by detecting tampered content.

- **CORS Dependency**: SRI requires `crossorigin="anonymous"` for cross-origin resources to function; `no-cors` mode explicitly blocks SRI validation to mitigate side-channel attacks (e.g., hash-based content inference).

- **Policy Enforcement**: The `Integrity-Policy`/`Integrity-Policy-Report-Only` headers enforce integrity metadata requirements for scripts/styles, blocking violations (or reporting them) with structured violation reports sent to configured endpoints.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-04T01:39:27.293390+05:30

## Related Tags

- web-crawled
- youtube

## Source

Original source: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
