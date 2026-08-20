---
title: Time to First Byte (TTFB) | Articles | web.dev
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://web.dev/articles/ttfb
published_at: '2026-08-10T08:20:50.430521+05:30'
collected_at: '2026-08-10T08:20:50.430533+05:30'
tags:
- hackernews
- web-crawled
status: active
resource_id: blog:time-to-first-byte-ttfb-articles-web-dev
first_seen: '2026-08-10T08:20:50.430533+05:30'
last_seen: '2026-08-10T08:20:50.430533+05:30'
last_checked: '2026-08-10T08:20:50.430533+05:30'
health_score: 100
---

# Time to First Byte (TTFB) | Articles | web.dev

## Summary

- **TTFB Composition**: TTFB measures the elapsed time between `startTime` and `responseStart`, encompassing redirect time, service worker startup (if applicable), DNS lookup, TCP/TLS negotiation, and request processing until the first byte of the response arrives.

- **Early Hints & TTFB**: 103 Early Hints responses count as the "first bytes" for TTFB, but Chrome's recent changes (reverted in v133) caused compatibility issues; tools must account for `finalResponseHeadersStart` vs. `responseStart` to ensure accurate comparisons.

- **Measurement & Optimization**: TTFB is measured via Navigation/Resource Timing APIs (field/lab tools like CrUX, DevTools, WebPageTest) and optimized by reducing backend latency, improving connection setup, and ensuring proper `Timing-Allow-Origin` headers for cross-origin resources.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-10T08:20:50.430521+05:30

## Related Tags

- hackernews
- web-crawled

## Source

Original source: https://web.dev/articles/ttfb
