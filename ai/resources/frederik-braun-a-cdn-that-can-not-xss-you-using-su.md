---
title: 'Frederik Braun: A CDN that can not XSS you: Using Subresource Integrity'
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://frederikbraun.de/using-subresource-integrity.html
published_at: '2026-07-21T20:03:16.152233+05:30'
collected_at: '2026-07-21T20:03:16.152246+05:30'
tags:
- hackernews
- reddit
- web-crawled
- youtube
status: active
resource_id: blog:frederik-braun-a-cdn-that-can-not-xss-you-using-su
first_seen: '2026-07-21T20:03:16.152246+05:30'
last_seen: '2026-07-21T20:03:16.152246+05:30'
last_checked: '2026-07-21T20:03:16.152246+05:30'
health_score: 100
---

# Frederik Braun: A CDN that can not XSS you: Using Subresource Integrity

## Summary

- **Purpose & Mechanism**: Subresource Integrity (SRI) is a W3C standard enabling cryptographic verification of third-party JavaScript/CSS resources via hash-based integrity checks in HTML tags, mitigating CDN compromise risks by ensuring delivered content matches expected digests.

- **Implementation Requirements**: Requires `crossorigin` attribute for CORS-compliant fetching and supports multiple hash algorithms (e.g., `sha256-`, `sha384-`) in the `integrity` attribute, with browsers prioritizing stronger hashes and failing execution if mismatches occur.

- **Tooling & Status**: Includes utilities like `sri-toolbox` for hash generation and browser support in Firefox/Chrome, with polyfills available; error recovery requires fallback scripts or `navigator.sendBeacon` for reporting.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-21T20:03:16.152233+05:30

## Related Tags

- hackernews
- reddit
- web-crawled
- youtube

## Source

Original source: https://frederikbraun.de/using-subresource-integrity.html
