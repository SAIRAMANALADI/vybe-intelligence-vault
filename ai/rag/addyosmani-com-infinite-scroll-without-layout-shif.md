---
title: AddyOsmani.com - Infinite Scroll without Layout Shifts
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://addyosmani.com/blog/infinite-scroll-without-layout-shifts/
published_at: '2026-08-08T12:57:17.672508+05:30'
collected_at: '2026-08-08T12:57:17.672521+05:30'
tags:
- frontend_ui
- hackernews
- rag
- reddit
- web-crawled
- youtube
status: active
resource_id: blog:addyosmani-com-infinite-scroll-without-layout-shif
first_seen: '2026-08-08T12:57:17.672521+05:30'
last_seen: '2026-08-08T12:57:17.672521+05:30'
last_checked: '2026-08-08T12:57:17.672521+05:30'
health_score: 100
---

# AddyOsmani.com - Infinite Scroll without Layout Shifts

## Summary

- **Layout shifts in infinite scroll** occur when dynamically loaded content pushes down existing elements (e.g., footers) or lacks reserved space for new items, violating [Cumulative Layout Shift (CLS)](https://web.dev/cls/) thresholds, especially if shifts persist beyond 500ms post-user interaction.

- **Mitigation strategies** include reserving space via skeleton placeholders, prefetching content/images, or removing fixed footers; libraries like [react-window](https://github.com/bvaughn/react-window) optimize rendering by virtualizing only visible items, reducing layout instability.

- **Accessibility and SEO trade-offs**: Infinite scroll complicates keyboard navigation, footer access, and URL-based navigation, while Googlebot requires explicit pagination support for SEO compliance; "Load More" patterns often balance engagement and usability better.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-08T12:57:17.672508+05:30

## Related Tags

- frontend_ui
- hackernews
- rag
- reddit
- web-crawled
- youtube

## Source

Original source: https://addyosmani.com/blog/infinite-scroll-without-layout-shifts/
