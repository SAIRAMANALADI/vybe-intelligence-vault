---
title: 'Frederik Braun: A CDN that can not XSS you: Using Subresource Integrity'
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://frederikbraun.de/using-subresource-integrity.html
published_at: '2026-07-18T16:57:30.687939+05:30'
collected_at: '2026-07-18T16:57:30.687946+05:30'
tags:
- hackernews
- reddit
- web-crawled
- youtube
status: active
resource_id: blog:frederik-braun-a-cdn-that-can-not-xss-you-using-su
first_seen: '2026-07-18T16:57:30.687946+05:30'
last_seen: '2026-07-18T16:57:30.687946+05:30'
last_checked: '2026-07-18T16:57:30.687946+05:30'
health_score: 100
---

# Frederik Braun: A CDN that can not XSS you: Using Subresource Integrity

## Summary

- **Purpose & Mechanism**: Subresource Integrity (SRI) is a W3C standard enabling cryptographic verification of third-party JavaScript/CSS integrity via `integrity` attribute in HTML tags, preventing execution of tampered resources by comparing hashes (e.g., SHA-256) of fetched content against expected digests.

- **Technical Requirements**: SRI mandates CORS support (`crossorigin` attribute) for cross-origin resource fetching; browsers prioritize strongest hash if multiple are provided, and fail closed (no execution) on hash mismatch, requiring fallback mechanisms (e.g., self-hosted copies).

- **Implementation & Tools**: SRI is supported in modern browsers (Firefox/Chrome) with polyfill options; tooling like `sri-toolbox` automates hash generation, while error recovery relies on manual fallbacks or reporting via `navigator.sendBeacon`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-18T16:57:30.687939+05:30

## Related Tags

- hackernews
- reddit
- web-crawled
- youtube

## Source

Original source: https://frederikbraun.de/using-subresource-integrity.html
