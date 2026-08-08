---
title: Subresource Integrity - Security | MDN
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
published_at: '2026-08-09T03:26:44.400284+05:30'
collected_at: '2026-08-09T03:26:44.400302+05:30'
tags:
- web-crawled
status: active
resource_id: blog:subresource-integrity-security-mdn
first_seen: '2026-08-09T03:26:44.400302+05:30'
last_seen: '2026-08-09T03:26:44.400302+05:30'
last_checked: '2026-08-09T03:26:44.400302+05:30'
health_score: 100
---

# Subresource Integrity - Security | MDN

## Summary

- **Purpose & Mechanism**: Subresource Integrity (SRI) verifies fetched resources (e.g., from CDNs) via cryptographic hashes to prevent supply chain attacks by ensuring resource integrity.

- **Implementation Requirements**: Requires `integrity` attribute with hash (e.g., `sha384-...`) in `<script>`/`<link>` tags; `crossorigin` attribute mandatory for external resources; `no-cors` mode incompatible with SRI.

- **Enforcement & Reporting**: `Integrity-Policy` header enforces SRI compliance (blocking violations), while `Integrity-Policy-Report-Only` logs violations without blocking; violations trigger `integrity-violation` reports via Reporting API.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-09T03:26:44.400284+05:30

## Related Tags

- web-crawled

## Source

Original source: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
