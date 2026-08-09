---
title: AddyOsmani.com - Infinite Scroll without Layout Shifts
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://addyosmani.com/blog/infinite-scroll-without-layout-shifts/
published_at: '2026-08-09T10:21:21.012528+05:30'
collected_at: '2026-08-09T10:21:21.012537+05:30'
tags:
- frontend_ui
- hackernews
- rag
- reddit
- web-crawled
- youtube
status: active
resource_id: blog:addyosmani-com-infinite-scroll-without-layout-shif
first_seen: '2026-08-09T10:21:21.012537+05:30'
last_seen: '2026-08-09T10:21:21.012537+05:30'
last_checked: '2026-08-09T10:21:21.012537+05:30'
health_score: 100
---

# AddyOsmani.com - Infinite Scroll without Layout Shifts

## Summary

- **Layout Shifts in Infinite Scroll**: Infinite scroll can cause Cumulative Layout Shift (CLS) by pushing page footers or dynamically loaded content down, violating Core Web Vitals thresholds if shifts occur >500ms post-user interaction.
- **Space Reservation & Prefetching**: Mitigate CLS by reserving DOM space (e.g., skeleton placeholders) for dynamically loaded content and prefetching data/images to ensure content renders within the 500ms threshold.
- **Virtualization & Accessibility Trade-offs**: Use list virtualization (e.g., `react-window`) to optimize rendering, but note that infinite scroll poses accessibility challenges (e.g., keyboard navigation, footer access) compared to "Load More" patterns.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-09T10:21:21.012528+05:30

## Related Tags

- frontend_ui
- hackernews
- rag
- reddit
- web-crawled
- youtube

## Source

Original source: https://addyosmani.com/blog/infinite-scroll-without-layout-shifts/
