---
title: 'Frederik Braun: A CDN that can not XSS you: Using Subresource Integrity'
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://frederikbraun.de/using-subresource-integrity.html
published_at: '2026-08-10T08:18:34.891499+05:30'
collected_at: '2026-08-10T08:18:34.891511+05:30'
tags:
- hackernews
- reddit
- web-crawled
- youtube
status: active
resource_id: blog:frederik-braun-a-cdn-that-can-not-xss-you-using-su
first_seen: '2026-08-10T08:18:34.891511+05:30'
last_seen: '2026-08-10T08:18:34.891511+05:30'
last_checked: '2026-08-10T08:18:34.891511+05:30'
health_score: 100
---

# Frederik Braun: A CDN that can not XSS you: Using Subresource Integrity

## Summary

- **Subresource Integrity (SRI)** is a W3C standard enabling cryptographic verification of third-party JavaScript/CSS resources via hash-based integrity checks in HTML tags (`integrity` attribute), preventing unauthorized modifications.

- **Implementation requires CORS support** (`crossorigin` attribute) to fetch and validate external resources; browsers prioritize strongest hash algorithms and support multiple hashes for redundancy or versioning.

- **Error recovery is manual** (fallback to self-hosted resources) due to lack of native error handling; tooling like `sri-toolbox` automates hash generation, with partial browser support (Firefox/Chrome) and polyfill availability.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-10T08:18:34.891499+05:30

## Related Tags

- hackernews
- reddit
- web-crawled
- youtube

## Source

Original source: https://frederikbraun.de/using-subresource-integrity.html
