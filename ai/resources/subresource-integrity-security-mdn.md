---
title: Subresource Integrity - Security | MDN
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
published_at: '2026-07-21T22:21:11.140230+05:30'
collected_at: '2026-07-21T22:21:11.140247+05:30'
tags:
- web-crawled
status: active
resource_id: blog:subresource-integrity-security-mdn
first_seen: '2026-07-21T22:21:11.140247+05:30'
last_seen: '2026-07-21T22:21:11.140247+05:30'
last_checked: '2026-07-21T22:21:11.140247+05:30'
health_score: 100
---

# Subresource Integrity - Security | MDN

## Summary

- **Mechanism**: Subresource Integrity (SRI) enforces cryptographic hash validation (`SHA-256`, `SHA-384`, or `SHA-512`) on fetched resources (e.g., CDN-hosted scripts/styles) to detect tampering or corruption, mitigating supply-chain attacks.

- **Implementation**: Requires `integrity` attribute in `<script>`/`<link>` tags (e.g., `integrity="sha384-..."`) and `crossorigin="anonymous"` for cross-origin resources; browsers block mismatched hashes or `no-cors` requests with SRI.

- **Policy Enforcement**: Headers `Integrity-Policy` (blocking) and `Integrity-Policy-Report-Only` (monitoring) enforce SRI compliance, generating `integrity-violation` reports via the Reporting API for violations.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-21T22:21:11.140230+05:30

## Related Tags

- web-crawled

## Source

Original source: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
