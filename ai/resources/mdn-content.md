---
title: content/files/en-us/web/security/defenses/subresource_integrity/index.md at
  main · mdn/content · GitHub
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://github.com/mdn/content/blob/main/files/en-us/web/security/defenses/subresource_integrity/index.md?plain=1
published_at: '2026-08-04T22:46:30.929328+05:30'
collected_at: '2026-08-04T22:46:30.929339+05:30'
tags:
- web-crawled
- youtube
status: active
resource_id: github:mdn/content
first_seen: '2026-08-04T22:46:30.929339+05:30'
last_seen: '2026-08-04T22:46:30.929339+05:30'
last_checked: '2026-08-04T22:46:30.929339+05:30'
health_score: 100
---

# content/files/en-us/web/security/defenses/subresource_integrity/index.md at main · mdn/content · GitHub

## Summary

- **Subresource Integrity (SRI)** verifies fetched resources (e.g., from CDNs) by comparing cryptographic hashes (`sha256`, `sha384`, `sha512`) against expected values in the `integrity` attribute of `<script>` or `<link>` elements.

- **CORS Requirement**: SRI enforces cross-origin requests to include the `crossorigin` attribute and valid CORS headers (`Access-Control-Allow-Origin`), blocking `no-cors` mode to prevent integrity-based side-channel attacks.

- **Integrity Policy Headers**: HTTP headers (`Integrity-Policy`/`Integrity-Policy-Report-Only`) enforce mandatory `integrity` attributes on scripts/stylesheets, with violation reports sent to specified endpoints via the Reporting API.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-04T22:46:30.929328+05:30

## Related Tags

- web-crawled
- youtube

## Source

Original source: https://github.com/mdn/content/blob/main/files/en-us/web/security/defenses/subresource_integrity/index.md?plain=1
