---
title: content/files/en-us/web/security/defenses/subresource_integrity/index.md at
  main · mdn/content · GitHub
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://github.com/mdn/content/blob/main/files/en-us/web/security/defenses/subresource_integrity/index.md?plain=1
published_at: '2026-08-06T09:19:27.557943+05:30'
collected_at: '2026-08-06T09:19:27.557959+05:30'
tags:
- web-crawled
status: active
resource_id: github:mdn/content
first_seen: '2026-08-06T09:19:27.557959+05:30'
last_seen: '2026-08-06T09:19:27.557959+05:30'
last_checked: '2026-08-06T09:19:27.557959+05:30'
health_score: 100
---

# content/files/en-us/web/security/defenses/subresource_integrity/index.md at main · mdn/content · GitHub

## Summary

- **Subresource Integrity (SRI)** enforces cryptographic hash verification of fetched resources (e.g., from CDNs) to detect tampering, using `sha256`, `sha384`, or `sha512` hashes in the `integrity` attribute of `<script>` or `<link>` elements.

- **CORS enforcement** is mandatory for SRI; resources must include the `crossorigin` attribute and the server must respond with `Access-Control-Allow-Origin` headers to permit cross-origin access.

- **Integrity Policy headers** (`Integrity-Policy`/`Integrity-Policy-Report-Only`) enforce mandatory `integrity` attributes on scripts/stylesheets, blocking or reporting violations via the Reporting API with structured violation reports.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-06T09:19:27.557943+05:30

## Related Tags

- web-crawled

## Source

Original source: https://github.com/mdn/content/blob/main/files/en-us/web/security/defenses/subresource_integrity/index.md?plain=1
