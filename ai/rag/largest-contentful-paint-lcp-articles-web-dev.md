---
title: Largest Contentful Paint (LCP) | Articles | web.dev
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://web.dev/articles/lcp
published_at: '2026-08-10T08:20:45.753174+05:30'
collected_at: '2026-08-10T08:20:45.753187+05:30'
tags:
- rag
- reddit
- web-crawled
- youtube
status: active
resource_id: blog:largest-contentful-paint-lcp-articles-web-dev
first_seen: '2026-08-10T08:20:45.753187+05:30'
last_seen: '2026-08-10T08:20:45.753187+05:30'
last_checked: '2026-08-10T08:20:45.753187+05:30'
health_score: 100
---

# Largest Contentful Paint (LCP) | Articles | web.dev

## Summary

- **LCP Definition & Purpose**: LCP measures when the largest image, text block, or video element renders in the viewport, marking the point when the page's main content is likely loaded; a threshold of **≤2.5s** (75th percentile) is recommended for good UX, accounting for TTFB delays and viewport heuristics excluding non-contentful elements (e.g., opacity:0, full-viewport backgrounds).

- **Element Eligibility & Size Calculation**: Only `<img>`, `<image>` (SVG), `<video>`, background images via `url()`, and block-level text containers are considered; size is based on visible viewport area (excluding overflow/margins), with intrinsic dimensions used for resized images and minimal bounding rectangles for text nodes.

- **Measurement Mechanics**: LCP dispatches `PerformanceEntry` events dynamically as the largest contentful element changes, stopping on user interaction or tab focus; Chrome 133+ exposes render timestamps (even without `Timing-Allow-Origin`), resolving prior discrepancies between load/render times in cross-origin contexts.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-10T08:20:45.753174+05:30

## Related Tags

- rag
- reddit
- web-crawled
- youtube

## Source

Original source: https://web.dev/articles/lcp
