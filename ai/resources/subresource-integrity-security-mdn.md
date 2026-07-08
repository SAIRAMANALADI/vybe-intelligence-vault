---
title: Subresource Integrity - Security | MDN
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
published_at: '2026-07-08T09:26:33.121599+05:30'
collected_at: '2026-07-08T09:26:33.121611+05:30'
tags:
- web-crawled
status: active
resource_id: blog:subresource-integrity-security-mdn
first_seen: '2026-07-08T09:26:33.121611+05:30'
last_seen: '2026-07-08T09:26:33.121611+05:30'
last_checked: '2026-07-08T09:26:33.121611+05:30'
health_score: 100
---

# Subresource Integrity - Security | MDN

## Summary

- **Mechanism**: Subresource Integrity (SRI) enforces cryptographic hash verification of fetched resources (e.g., from CDNs) to detect tampering by comparing the resource's hash against a precomputed value embedded in the `integrity` attribute of `<script>` or `<link>` tags.

- **Security Constraints**: Browsers enforce SRI by blocking `no-cors` mode requests with `integrity` attributes to prevent XS-Leak attacks where attackers infer resource content via load success/failure events; enforcement is strict unless overridden by `Integrity-Policy` headers.

- **Policy Enforcement**: The `Integrity-Policy` and `Integrity-Policy-Report-Only` HTTP headers allow websites to mandate SRI for scripts/stylesheets, blocking non-compliant requests or reporting violations via the Reporting API, with structured field dictionaries defining blocked destinations (`script`, `style`) and reporting endpoints.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-08T09:26:33.121599+05:30

## Related Tags

- web-crawled

## Source

Original source: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
