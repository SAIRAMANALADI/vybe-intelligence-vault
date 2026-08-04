---
title: Subresource Integrity - Security | MDN
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
published_at: '2026-08-05T01:39:04.437440+05:30'
collected_at: '2026-08-05T01:39:04.437447+05:30'
tags:
- web-crawled
status: active
resource_id: blog:subresource-integrity-security-mdn
first_seen: '2026-08-05T01:39:04.437447+05:30'
last_seen: '2026-08-05T01:39:04.437447+05:30'
last_checked: '2026-08-05T01:39:04.437447+05:30'
health_score: 100
---

# Subresource Integrity - Security | MDN

## Summary

- **Mechanism**: SRI enforces integrity verification of fetched resources (e.g., CDN-hosted files) via cryptographic hashes (`sha384`, `sha512`) embedded in the `integrity` attribute of `<script>`/`<link>` tags, blocking mismatched content to mitigate supply chain attacks.

- **CORS Interaction**: Requires `crossorigin="anonymous"` for cross-origin resources to enforce SRI; `no-cors` mode explicitly blocks SRI enforcement to prevent XS-Leak attacks via error event monitoring.

- **Policy Enforcement**: The `Integrity-Policy`/`Integrity-Policy-Report-Only` headers enforce mandatory `integrity` attributes on `<script>`/`<style>` resources, blocking or reporting violations via Reporting API with structured violation reports (e.g., `integrity-violation`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-05T01:39:04.437440+05:30

## Related Tags

- web-crawled

## Source

Original source: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
