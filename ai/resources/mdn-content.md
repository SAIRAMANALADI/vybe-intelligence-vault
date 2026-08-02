---
title: content/files/en-us/web/security/defenses/subresource_integrity/index.md at
  main · mdn/content · GitHub
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://github.com/mdn/content/blob/main/files/en-us/web/security/defenses/subresource_integrity/index.md?plain=1
published_at: '2026-08-02T19:35:23.040674+05:30'
collected_at: '2026-08-02T19:35:23.040686+05:30'
tags:
- web-crawled
status: active
resource_id: github:mdn/content
first_seen: '2026-08-02T19:35:23.040686+05:30'
last_seen: '2026-08-02T19:35:23.040686+05:30'
last_checked: '2026-08-02T19:35:23.040686+05:30'
health_score: 100
---

# content/files/en-us/web/security/defenses/subresource_integrity/index.md at main · mdn/content · GitHub

## Summary

- **Subresource Integrity (SRI)** enables browsers to verify fetched resources (e.g., from CDNs) by comparing cryptographic hashes (SHA-256/384/512) against expected values in the `integrity` attribute, preventing supply chain attacks via unexpected resource manipulation.

- **CORS Requirement**: SRI enforces cross-origin requests to use CORS (`Access-Control-Allow-Origin` headers), and requires the `crossorigin` attribute on `<script>`/`<link>` elements to prevent integrity-based XS-Leak attacks.

- **Integrity Policy Headers**: The `Integrity-Policy` and `Integrity-Policy-Report-Only` HTTP headers enforce mandatory `integrity` attributes on subresources, blocking violations (or reporting them) via structured field dictionaries with `blocked-destinations`, `sources`, and `endpoints` directives.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-02T19:35:23.040674+05:30

## Related Tags

- web-crawled

## Source

Original source: https://github.com/mdn/content/blob/main/files/en-us/web/security/defenses/subresource_integrity/index.md?plain=1
