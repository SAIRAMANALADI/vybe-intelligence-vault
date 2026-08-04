---
title: Subresource Integrity - Security | MDN
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
published_at: '2026-08-04T22:44:35.473829+05:30'
collected_at: '2026-08-04T22:44:35.473840+05:30'
tags:
- web-crawled
- youtube
status: active
resource_id: blog:subresource-integrity-security-mdn
first_seen: '2026-08-04T22:44:35.473840+05:30'
last_seen: '2026-08-04T22:44:35.473840+05:30'
last_checked: '2026-08-04T22:44:35.473840+05:30'
health_score: 100
---

# Subresource Integrity - Security | MDN

## Summary

- **Mechanism**: Subresource Integrity (SRI) enforces cryptographic hash verification (`SHA-256/384/512`) of fetched resources (e.g., CDN-hosted scripts/styles) via the `integrity` attribute, blocking tampered content by comparing hashes before execution/rendering.

- **CORS Interaction**: SRI requires `crossorigin="anonymous"` for cross-origin resources to function; `no-cors` mode explicitly blocks SRI enforcement to prevent side-channel attacks (e.g., hash-based content inference via load success/failure).

- **Policy Enforcement**: The `Integrity-Policy`/`Integrity-Policy-Report-Only` headers enforce mandatory `integrity` attributes for `<script>`/`<style>` resources, blocking violations (or reporting them in report-only mode) with structured violation reports sent to defined endpoints.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-04T22:44:35.473829+05:30

## Related Tags

- web-crawled
- youtube

## Source

Original source: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
