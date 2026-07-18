---
title: Subresource Integrity - Security | MDN
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
published_at: '2026-07-18T16:56:03.090214+05:30'
collected_at: '2026-07-18T16:56:03.090227+05:30'
tags:
- web-crawled
status: active
resource_id: blog:subresource-integrity-security-mdn
first_seen: '2026-07-18T16:56:03.090227+05:30'
last_seen: '2026-07-18T16:56:03.090227+05:30'
last_checked: '2026-07-18T16:56:03.090227+05:30'
health_score: 100
---

# Subresource Integrity - Security | MDN

## Summary

- **Mechanism**: Subresource Integrity (SRI) enforces cryptographic hash validation (`SHA-256`, `SHA-384`, or `SHA-512`) on fetched resources (e.g., CDN-hosted scripts/styles) via the `integrity` attribute, blocking tampered content by comparing hashes to detect supply chain attacks.

- **CORS Interaction**: SRI requires `crossorigin="anonymous"` for cross-origin resources to enforce integrity checks; `no-cors` mode explicitly disables SRI to prevent XS-Leak attacks where hash validation could leak resource existence.

- **Policy Enforcement**: The `Integrity-Policy`/`Integrity-Policy-Report-Only` headers enforce mandatory `integrity` attributes on `<script>`/`<style>` tags, blocking or reporting violations via the Reporting API, with structured directives like `blocked-destinations` and `endpoints` for granular control.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-18T16:56:03.090214+05:30

## Related Tags

- web-crawled

## Source

Original source: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
