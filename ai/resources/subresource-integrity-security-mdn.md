---
title: Subresource Integrity - Security | MDN
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/docs/Web/Security/Subresource_Integrity
published_at: '2026-08-08T12:59:29.330449+05:30'
collected_at: '2026-08-08T12:59:29.330459+05:30'
tags:
- web-crawled
- youtube
status: active
resource_id: blog:subresource-integrity-security-mdn
first_seen: '2026-08-08T12:59:29.330459+05:30'
last_seen: '2026-08-08T12:59:29.330459+05:30'
last_checked: '2026-08-08T12:59:29.330459+05:30'
health_score: 100
---

# Subresource Integrity - Security | MDN

## Summary

- **SRI Mechanism**: Enables browsers to verify fetched resources (e.g., from CDNs) by comparing cryptographic hashes (`SHA-256`, `SHA-384`, `SHA-512`) embedded in the `integrity` attribute of `<script>`/`<link>` tags against the resource's actual content to detect tampering or corruption.

- **CORS Dependency**: Requires the `crossorigin` attribute (e.g., `crossorigin="anonymous"`) for cross-origin resources to enforce SRI; `no-cors` mode explicitly blocks SRI validation to prevent side-channel attacks.

- **Policy Enforcement**: Uses `Integrity-Policy`/`Integrity-Policy-Report-Only` headers to mandate `integrity` attributes on scripts/styles, blocking violations (or reporting them) via structured dictionaries (`blocked-destinations`, `endpoints`), with violation reports sent to configured endpoints.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-08T12:59:29.330449+05:30

## Related Tags

- web-crawled
- youtube

## Source

Original source: https://developer.mozilla.org/docs/Web/Security/Subresource_Integrity
