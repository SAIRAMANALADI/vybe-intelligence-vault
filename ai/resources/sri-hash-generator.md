---
title: SRI Hash Generator
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://srihash.org/
published_at: '2026-08-10T13:49:44.095596+05:30'
collected_at: '2026-08-10T13:49:44.095602+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:sri-hash-generator
first_seen: '2026-08-10T13:49:44.095602+05:30'
last_seen: '2026-08-10T13:49:44.095602+05:30'
last_checked: '2026-08-10T13:49:44.095602+05:30'
health_score: 100
---

# SRI Hash Generator

## Summary

- **Purpose**: Subresource Integrity (SRI) is a W3C specification enabling verification that third-party hosted resources remain unaltered by comparing cryptographic hashes (SHA-256, SHA-384, SHA-512) against the original file.
- **Mechanism**: SRI complements HTTPS by ensuring resource integrity at the file level, whereas HTTPS only secures transport; requires `crossorigin="anonymous"` for cross-origin requests to enforce integrity checks.
- **Implementation**: Generate hashes via `openssl dgst -sha384 -binary FILENAME.js | openssl base64 -A` or tools like [srihash.org](https://srihash.org), with browser support verified via [caniuse](https://caniuse.com/#feat=subresource-integrity).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-10T13:49:44.095596+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://srihash.org/
