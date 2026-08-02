---
title: 'Frederik Braun: A CDN that can not XSS you: Using Subresource Integrity'
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://frederikbraun.de/using-subresource-integrity.html
published_at: '2026-08-02T19:35:20.608155+05:30'
collected_at: '2026-08-02T19:35:20.608168+05:30'
tags:
- hackernews
- reddit
- web-crawled
- youtube
status: active
resource_id: blog:frederik-braun-a-cdn-that-can-not-xss-you-using-su
first_seen: '2026-08-02T19:35:20.608168+05:30'
last_seen: '2026-08-02T19:35:20.608168+05:30'
last_checked: '2026-08-02T19:35:20.608168+05:30'
health_score: 100
---

# Frederik Braun: A CDN that can not XSS you: Using Subresource Integrity

## Summary

- **Subresource Integrity (SRI)** is a W3C standard enabling cryptographic verification of third-party JavaScript/CSS resources via hash-based integrity checks in HTML tags to mitigate CDN compromise risks.
- **Implementation requires** the `integrity` attribute (e.g., `sha256-<base64-hash>`) and `crossorigin` attribute for CORS-compliant CDNs, with browsers rejecting mismatched resources.
- **Tooling support** includes generators (e.g., `sri-toolbox`) and polyfills, while error handling relies on fallback scripts or `navigator.sendBeacon` for reporting.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-02T19:35:20.608155+05:30

## Related Tags

- hackernews
- reddit
- web-crawled
- youtube

## Source

Original source: https://frederikbraun.de/using-subresource-integrity.html
