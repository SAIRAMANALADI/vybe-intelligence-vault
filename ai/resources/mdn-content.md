---
title: content/files/en-us/web/security/defenses/subresource_integrity/index.md at
  main · mdn/content · GitHub
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://github.com/mdn/content/blob/main/files/en-us/web/security/defenses/subresource_integrity/index.md?plain=1
published_at: '2026-07-18T16:57:30.293853+05:30'
collected_at: '2026-07-18T16:57:30.293860+05:30'
tags:
- web-crawled
status: active
resource_id: github:mdn/content
first_seen: '2026-07-18T16:57:30.293860+05:30'
last_seen: '2026-07-18T16:57:30.293860+05:30'
last_checked: '2026-07-18T16:57:30.293860+05:30'
health_score: 100
---

# content/files/en-us/web/security/defenses/subresource_integrity/index.md at main · mdn/content · GitHub

## Summary

- **Subresource Integrity (SRI)** is a security mechanism that verifies the integrity of fetched resources (e.g., from CDNs) using cryptographic hashes (`sha256`, `sha384`, `sha512`) in the `integrity` attribute of `<script>` or `<link>` elements to prevent supply chain attacks.

- **CORS Requirement**: SRI requires Cross-Origin Resource Sharing (CORS) headers (`Access-Control-Allow-Origin`) for cross-origin requests; the `crossorigin` attribute must be set in markup to enforce this.

- **Integrity Policy Headers**: The `Integrity-Policy` and `Integrity-Policy-Report-Only` HTTP headers enforce mandatory `integrity` attributes on subresources, blocking or reporting violations via the Reporting API.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-18T16:57:30.293853+05:30

## Related Tags

- web-crawled

## Source

Original source: https://github.com/mdn/content/blob/main/files/en-us/web/security/defenses/subresource_integrity/index.md?plain=1
