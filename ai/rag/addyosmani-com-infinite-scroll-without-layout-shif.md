---
title: AddyOsmani.com - Infinite Scroll without Layout Shifts
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://addyosmani.com/blog/infinite-scroll-without-layout-shifts/
published_at: '2026-07-19T19:36:28.588993+05:30'
collected_at: '2026-07-19T19:36:28.589006+05:30'
tags:
- frontend_ui
- hackernews
- rag
- reddit
- web-crawled
- youtube
status: active
resource_id: blog:addyosmani-com-infinite-scroll-without-layout-shif
first_seen: '2026-07-19T19:36:28.589006+05:30'
last_seen: '2026-07-19T19:36:28.589006+05:30'
last_checked: '2026-07-19T19:36:28.589006+05:30'
health_score: 100
---

# AddyOsmani.com - Infinite Scroll without Layout Shifts

## Summary

- **Layout Shifts in Infinite Scroll**: Infinite scrolling can cause Cumulative Layout Shift (CLS) by pushing page footers or other content down as new items load, violating Core Web Vitals thresholds unless mitigated by reserving space or removing dynamic footers.

- **Space Reservation & Prefetching**: Mitigate CLS by reserving space for dynamic content (e.g., skeleton placeholders) and prefetching data/images for below-the-fold content to ensure smooth rendering within the 500ms user-input threshold.

- **Virtualization & Accessibility Trade-offs**: Use list virtualization libraries (e.g., `react-window`) to optimize rendering, but note that infinite scroll poses accessibility challenges (e.g., keyboard navigation, footer access) compared to "Load More" patterns.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-19T19:36:28.588993+05:30

## Related Tags

- frontend_ui
- hackernews
- rag
- reddit
- web-crawled
- youtube

## Source

Original source: https://addyosmani.com/blog/infinite-scroll-without-layout-shifts/
