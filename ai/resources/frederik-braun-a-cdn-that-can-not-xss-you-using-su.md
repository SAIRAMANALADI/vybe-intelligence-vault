---
title: 'Frederik Braun: A CDN that can not XSS you: Using Subresource Integrity'
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://frederikbraun.de/using-subresource-integrity.html
published_at: '2026-08-09T18:59:52.451721+05:30'
collected_at: '2026-08-09T18:59:52.451733+05:30'
tags:
- hackernews
- reddit
- web-crawled
- youtube
status: active
resource_id: blog:frederik-braun-a-cdn-that-can-not-xss-you-using-su
first_seen: '2026-08-09T18:59:52.451733+05:30'
last_seen: '2026-08-09T18:59:52.451733+05:30'
last_checked: '2026-08-09T18:59:52.451733+05:30'
health_score: 100
---

# Frederik Braun: A CDN that can not XSS you: Using Subresource Integrity

## Summary

- **Purpose & Mechanism**: Subresource Integrity (SRI) is a W3C standard enabling cryptographic verification of third-party JavaScript/CSS integrity via hash digests (`integrity` attribute) to prevent unauthorized modifications during transit or at the CDN.
- **Syntax & Requirements**: The `integrity` attribute uses a micro-syntax (e.g., `sha256-<base64-hash>`), requires CORS-enabled CDNs (via `crossorigin` attribute), and supports multiple hashes for redundancy or algorithm agility.
- **Implementation & Limitations**: SRI is supported in modern browsers (Firefox/Chrome) with polyfill options; lacks native error recovery, necessitating fallback mechanisms (e.g., local copies) or error reporting via `navigator.sendBeacon`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-09T18:59:52.451721+05:30

## Related Tags

- hackernews
- reddit
- web-crawled
- youtube

## Source

Original source: https://frederikbraun.de/using-subresource-integrity.html
