---
title: 'Frederik Braun: A CDN that can not XSS you: Using Subresource Integrity'
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://frederikbraun.de/using-subresource-integrity.html
published_at: '2026-08-10T16:23:51.027491+05:30'
collected_at: '2026-08-10T16:23:51.027507+05:30'
tags:
- hackernews
- reddit
- web-crawled
- youtube
status: active
resource_id: blog:frederik-braun-a-cdn-that-can-not-xss-you-using-su
first_seen: '2026-08-10T16:23:51.027507+05:30'
last_seen: '2026-08-10T16:23:51.027507+05:30'
last_checked: '2026-08-10T16:23:51.027507+05:30'
health_score: 100
---

# Frederik Braun: A CDN that can not XSS you: Using Subresource Integrity

## Summary

- **Purpose & Mechanism**: Subresource Integrity (SRI) is a W3C standard enabling cryptographic verification of third-party JavaScript/CSS files via `integrity` attributes in HTML tags, preventing unauthorized modifications by comparing file content against precomputed hashes (e.g., SHA-256).
- **Requirements & Syntax**: SRI mandates the `crossorigin` attribute for CORS compliance; the `integrity` value follows a micro-syntax (`<hash-algorithm>-<base64-digest>`), e.g., `sha256-qznLcsROx4GACP2dm0UCKCzCG+HiZ1guq6ZZDob/Tng=`, with support for multiple hashes prioritized by strength.
- **Implementation & Fallback**: SRI is supported in modern browsers (Firefox/Chrome) with polyfills available; failure triggers DOM recovery (e.g., fallback to self-hosted scripts) due to lack of built-in error handling, with optional reporting via `navigator.sendBeacon`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-10T16:23:51.027491+05:30

## Related Tags

- hackernews
- reddit
- web-crawled
- youtube

## Source

Original source: https://frederikbraun.de/using-subresource-integrity.html
