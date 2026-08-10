---
title: content/files/en-us/web/security/defenses/subresource_integrity/index.md at
  main · mdn/content · GitHub
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://github.com/mdn/content/blob/main/files/en-us/web/security/defenses/subresource_integrity/index.md?plain=1
published_at: '2026-08-10T16:23:53.664391+05:30'
collected_at: '2026-08-10T16:23:53.664408+05:30'
tags:
- web-crawled
- youtube
status: active
resource_id: github:mdn/content
first_seen: '2026-08-10T16:23:53.664408+05:30'
last_seen: '2026-08-10T16:23:53.664408+05:30'
last_checked: '2026-08-10T16:23:53.664408+05:30'
health_score: 100
---

# content/files/en-us/web/security/defenses/subresource_integrity/index.md at main · mdn/content · GitHub

## Summary

- **Subresource Integrity (SRI)** verifies fetched resources (e.g., from CDNs) by comparing cryptographic hashes (SHA-256/384/512) embedded in the `integrity` attribute of `<script>` or `<link>` elements against the downloaded content to prevent supply chain attacks.

- **CORS Requirement**: SRI enforces cross-origin requests to include the `crossorigin` attribute and valid CORS headers (`Access-Control-Allow-Origin`), blocking `no-cors` mode to mitigate hash-based side-channel attacks.

- **Integrity Policy Headers**: The `Integrity-Policy` and `Integrity-Policy-Report-Only` HTTP headers enforce mandatory `integrity` attributes on subresources, with violation reports sent to specified endpoints via the Reporting API.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-10T16:23:53.664391+05:30

## Related Tags

- web-crawled
- youtube

## Source

Original source: https://github.com/mdn/content/blob/main/files/en-us/web/security/defenses/subresource_integrity/index.md?plain=1
