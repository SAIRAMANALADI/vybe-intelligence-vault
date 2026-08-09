---
title: 'Frederik Braun: A CDN that can not XSS you: Using Subresource Integrity'
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://frederikbraun.de/using-subresource-integrity.html
published_at: '2026-08-09T08:14:14.018212+05:30'
collected_at: '2026-08-09T08:14:14.018228+05:30'
tags:
- hackernews
- reddit
- web-crawled
- youtube
status: active
resource_id: blog:frederik-braun-a-cdn-that-can-not-xss-you-using-su
first_seen: '2026-08-09T08:14:14.018228+05:30'
last_seen: '2026-08-09T08:14:14.018228+05:30'
last_checked: '2026-08-09T08:14:14.018228+05:30'
health_score: 100
---

# Frederik Braun: A CDN that can not XSS you: Using Subresource Integrity

## Summary

- **Subresource Integrity (SRI)** is a W3C standard enabling cryptographic verification of third-party JavaScript/CSS resources via hash digests in HTML tags, mitigating CDN compromise risks.
- **Implementation requires `crossorigin` attribute** for CORS compliance, as browsers must read external resources; multiple hash algorithms can be specified for prioritization.
- **Error handling is manual**—failed loads must be recovered via fallback resources, with optional reporting via `navigator.sendBeacon`; tooling like `sri-toolbox` automates hash generation.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-09T08:14:14.018212+05:30

## Related Tags

- hackernews
- reddit
- web-crawled
- youtube

## Source

Original source: https://frederikbraun.de/using-subresource-integrity.html
