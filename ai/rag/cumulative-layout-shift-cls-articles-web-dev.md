---
title: Cumulative Layout Shift (CLS) | Articles | web.dev
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://web.dev/articles/cls
published_at: '2026-08-01T09:32:10.864957+05:30'
collected_at: '2026-08-01T09:32:10.864970+05:30'
tags:
- benchmark
- rag
- reddit
- web-crawled
- youtube
status: active
resource_id: blog:cumulative-layout-shift-cls-articles-web-dev
first_seen: '2026-08-01T09:32:10.864970+05:30'
last_seen: '2026-08-01T09:32:10.864970+05:30'
last_checked: '2026-08-01T09:32:10.864970+05:30'
health_score: 100
---

# Cumulative Layout Shift (CLS) | Articles | web.dev

## Summary

- **CLS Calculation**: Cumulative Layout Shift (CLS) measures visual stability by quantifying unexpected layout shifts during a page's lifecycle, using the largest burst of *layout shift scores* within a *session window* (≤5s duration with shifts <1s apart). The score is derived from the product of *impact fraction* (viewport area affected by unstable elements) and *distance fraction* (maximum displacement of unstable elements relative to viewport size).

- **Layout Shift Mechanics**: A layout shift occurs when visible elements change start positions between frames, tracked via the [Layout Instability API](https://github.com/WICG/layout-instability). Unstable elements are those whose start positions change, excluding DOM additions or size changes unless they displace other elements. The *impact fraction* and *distance fraction* are computed to derive the shift score (e.g., 0.75 impact × 0.25 distance = 0.1875 score).

- **Thresholds & Mitigation**: A "good" CLS score is ≤0.1 (75th percentile across devices). Mitigation strategies include reserving space for dynamic content (e.g., ads, images), avoiding animations that trigger layout shifts (use `transform` instead of `top/left`), and excluding user-initiated shifts (flagged by `hadRecentInput` within 500ms of input). Tools like Chrome DevTools, Lighthouse, and the `web-vitals` library measure CLS in lab/field environments.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-01T09:32:10.864957+05:30

## Related Tags

- benchmark
- rag
- reddit
- web-crawled
- youtube

## Source

Original source: https://web.dev/articles/cls
