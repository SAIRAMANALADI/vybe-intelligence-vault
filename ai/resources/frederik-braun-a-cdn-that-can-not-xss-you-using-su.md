---
title: 'Frederik Braun: A CDN that can not XSS you: Using Subresource Integrity'
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://frederikbraun.de/using-subresource-integrity.html
published_at: '2026-08-08T12:56:36.741018+05:30'
collected_at: '2026-08-08T12:56:36.741030+05:30'
tags:
- hackernews
- reddit
- web-crawled
- youtube
status: active
resource_id: blog:frederik-braun-a-cdn-that-can-not-xss-you-using-su
first_seen: '2026-08-08T12:56:36.741030+05:30'
last_seen: '2026-08-08T12:56:36.741030+05:30'
last_checked: '2026-08-08T12:56:36.741030+05:30'
health_score: 100
---

# Frederik Braun: A CDN that can not XSS you: Using Subresource Integrity

## Summary

- **Purpose & Mechanism**: Subresource Integrity (SRI) is a W3C standard enabling cryptographic validation of third-party JavaScript/CSS resources via `integrity` attributes in HTML tags, preventing unauthorized modifications by comparing file content against precomputed hashes (e.g., SHA-256).
- **Implementation Requirements**: SRI mandates CORS support (`crossorigin` attribute) for cross-origin resources; browsers enforce integrity checks, blocking execution if hashes mismatch, and support multiple hash algorithms/prioritization for robustness.
- **Tooling & Adoption**: Existing tools (e.g., `sri-toolbox`, Ember.js/broccoli plugins) automate hash generation; SRI is supported in major browsers (Firefox/Chrome) with polyfill availability, though error recovery/reporting remains unimplemented.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-08T12:56:36.741018+05:30

## Related Tags

- hackernews
- reddit
- web-crawled
- youtube

## Source

Original source: https://frederikbraun.de/using-subresource-integrity.html
