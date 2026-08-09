---
title: Subresource Integrity - Security | MDN
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
published_at: '2026-08-09T15:42:07.823651+05:30'
collected_at: '2026-08-09T15:42:07.823666+05:30'
tags:
- web-crawled
status: active
resource_id: blog:subresource-integrity-security-mdn
first_seen: '2026-08-09T15:42:07.823666+05:30'
last_seen: '2026-08-09T15:42:07.823666+05:30'
last_checked: '2026-08-09T15:42:07.823666+05:30'
health_score: 100
---

# Subresource Integrity - Security | MDN

## Summary

- **Mechanism**: Subresource Integrity (SRI) verifies fetched resources (e.g., from CDNs) by enforcing cryptographic hash matching to prevent supply chain attacks via unexpected file manipulation.

- **Implementation**: Requires `integrity` attribute in `<script>`/`<link>` tags with base64-encoded hashes (e.g., `sha384-...`) and `crossorigin` attribute for CORS-enabled validation.

- **Policy Enforcement**: Uses `Integrity-Policy`/`Integrity-Policy-Report-Only` headers to block or report violations for scripts/styles without integrity metadata, with structured reporting via `Reporting-Endpoints`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-09T15:42:07.823651+05:30

## Related Tags

- web-crawled

## Source

Original source: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
