---
title: Subresource Integrity - Security | MDN
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/docs/Web/Security/Subresource_Integrity
published_at: '2026-08-10T08:19:38.835336+05:30'
collected_at: '2026-08-10T08:19:38.835348+05:30'
tags:
- web-crawled
status: active
resource_id: blog:subresource-integrity-security-mdn
first_seen: '2026-08-10T08:19:38.835348+05:30'
last_seen: '2026-08-10T08:19:38.835348+05:30'
last_checked: '2026-08-10T08:19:38.835348+05:30'
health_score: 100
---

# Subresource Integrity - Security | MDN

## Summary

- **SRI Mechanism**: Enables browsers to verify fetched resources (e.g., from CDNs) by comparing cryptographic hashes (SHA-256/384/512) embedded in the `integrity` attribute against the resource's content to detect tampering or corruption.

- **CORS Interaction**: Requires `crossorigin` attribute for cross-origin resources to enforce SRI; `no-cors` mode explicitly blocks SRI enforcement to prevent XS-Leak attacks via error event monitoring.

- **Policy Enforcement**: `Integrity-Policy` header enforces `integrity` attribute usage for scripts/styles, blocking violations (or reporting-only via `Integrity-Policy-Report-Only`), with violation reports sent to configured endpoints.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-10T08:19:38.835336+05:30

## Related Tags

- web-crawled

## Source

Original source: https://developer.mozilla.org/docs/Web/Security/Subresource_Integrity
