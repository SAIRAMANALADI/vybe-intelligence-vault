---
title: Subresource Integrity - Security | MDN
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/docs/Web/Security/Subresource_Integrity
published_at: '2026-08-09T19:02:04.284500+05:30'
collected_at: '2026-08-09T19:02:04.284512+05:30'
tags:
- web-crawled
status: active
resource_id: blog:subresource-integrity-security-mdn
first_seen: '2026-08-09T19:02:04.284512+05:30'
last_seen: '2026-08-09T19:02:04.284512+05:30'
last_checked: '2026-08-09T19:02:04.284512+05:30'
health_score: 100
---

# Subresource Integrity - Security | MDN

## Summary

- **SRI Mechanism**: Enables browsers to verify fetched resources (e.g., from CDNs) using cryptographic hashes to detect tampering or supply chain attacks.
- **CORS Restriction**: Blocks `no-cors` mode requests with SRI to prevent XS-Leak attacks where attackers infer resource content via hash validation failures.
- **Integrity Policy Headers**: Uses `Integrity-Policy`/`Integrity-Policy-Report-Only` to enforce or monitor SRI requirements, generating violation reports via the Reporting API when resources lack integrity metadata or violate policy.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-09T19:02:04.284500+05:30

## Related Tags

- web-crawled

## Source

Original source: https://developer.mozilla.org/docs/Web/Security/Subresource_Integrity
