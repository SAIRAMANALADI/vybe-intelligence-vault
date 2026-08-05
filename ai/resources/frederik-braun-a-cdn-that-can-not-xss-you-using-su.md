---
title: 'Frederik Braun: A CDN that can not XSS you: Using Subresource Integrity'
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://frederikbraun.de/using-subresource-integrity.html
published_at: '2026-08-05T14:36:43.246098+05:30'
collected_at: '2026-08-05T14:36:43.246111+05:30'
tags:
- hackernews
- reddit
- web-crawled
- youtube
status: active
resource_id: blog:frederik-braun-a-cdn-that-can-not-xss-you-using-su
first_seen: '2026-08-05T14:36:43.246111+05:30'
last_seen: '2026-08-05T14:36:43.246111+05:30'
last_checked: '2026-08-05T14:36:43.246111+05:30'
health_score: 100
---

# Frederik Braun: A CDN that can not XSS you: Using Subresource Integrity

## Summary

- **Purpose & Mechanism**: Subresource Integrity (SRI) is a W3C standard enabling cryptographic verification of third-party JavaScript/CSS integrity via hash digests (`integrity` attribute) in HTML tags, preventing unauthorized script modifications.
- **Implementation Requirements**: Requires `crossorigin` attribute for CORS compliance; supports multiple hash algorithms (e.g., `sha256-`, `sha384-`) with prioritization of strongest hash; no built-in error recovery.
- **Tooling & Status**: Supported in modern browsers (Firefox/Chrome) with polyfills available; tools like `sri-toolbox` automate hash generation; fallback mechanisms (e.g., local script loading) mitigate load failures.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-05T14:36:43.246098+05:30

## Related Tags

- hackernews
- reddit
- web-crawled
- youtube

## Source

Original source: https://frederikbraun.de/using-subresource-integrity.html
