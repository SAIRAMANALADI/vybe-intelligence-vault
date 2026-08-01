---
title: 'Frederik Braun: A CDN that can not XSS you: Using Subresource Integrity'
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://frederikbraun.de/using-subresource-integrity.html
published_at: '2026-08-01T19:36:16.097551+05:30'
collected_at: '2026-08-01T19:36:16.097560+05:30'
tags:
- hackernews
- reddit
- web-crawled
- youtube
status: active
resource_id: blog:frederik-braun-a-cdn-that-can-not-xss-you-using-su
first_seen: '2026-08-01T19:36:16.097560+05:30'
last_seen: '2026-08-01T19:36:16.097560+05:30'
last_checked: '2026-08-01T19:36:16.097560+05:30'
health_score: 100
---

# Frederik Braun: A CDN that can not XSS you: Using Subresource Integrity

## Summary

- **Purpose & Mechanism**: Subresource Integrity (SRI) is a W3C standard enabling cryptographic verification of third-party JavaScript/CSS integrity via hash-based digests (`integrity` attribute) in `<script>`/`<link>` tags, preventing unauthorized modifications during transit or at the CDN.

- **Technical Requirements**: SRI mandates CORS support (`crossorigin` attribute) for cross-origin resources; browsers prioritize strongest hash when multiple digests are provided, and fail closed on mismatches, requiring fallback mechanisms (e.g., self-hosted copies).

- **Tooling & Adoption**: Pre-release tooling (e.g., `sri-toolbox`, Ember.js/Broccoli plugins) automates digest generation; SRI is implemented in modern browsers (Firefox/Chrome) with polyfill support, though lacks native error recovery/reporting.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-01T19:36:16.097551+05:30

## Related Tags

- hackernews
- reddit
- web-crawled
- youtube

## Source

Original source: https://frederikbraun.de/using-subresource-integrity.html
