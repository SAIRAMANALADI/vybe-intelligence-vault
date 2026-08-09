---
title: AddyOsmani.com - Infinite Scroll without Layout Shifts
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://addyosmani.com/blog/infinite-scroll-without-layout-shifts/
published_at: '2026-08-10T03:32:19.905139+05:30'
collected_at: '2026-08-10T03:32:19.905149+05:30'
tags:
- frontend_ui
- hackernews
- rag
- reddit
- web-crawled
- youtube
status: active
resource_id: blog:addyosmani-com-infinite-scroll-without-layout-shif
first_seen: '2026-08-10T03:32:19.905149+05:30'
last_seen: '2026-08-10T03:32:19.905149+05:30'
last_checked: '2026-08-10T03:32:19.905149+05:30'
health_score: 100
---

# AddyOsmani.com - Infinite Scroll without Layout Shifts

## Summary

- **Layout shifts in infinite scroll** occur when dynamically loaded content pushes down existing elements (e.g., footers) or lacks reserved space, degrading [Cumulative Layout Shift (CLS)](https://web.dev/cls/) scores due to post-load DOM changes exceeding Chrome’s 500ms user-input threshold.

- **Mitigation strategies** include:
  - **Reserving space** via skeleton placeholders or fixed-height containers for upcoming content.
  - **Prefetching** data/images for below-the-fold content to ensure sub-500ms rendering (e.g., Instagram’s approach).
  - **Removing/reducing footer elements** or using list virtualization (e.g., `react-window`) to minimize DOM disruption.

- **Accessibility trade-offs**: Infinite scroll lacks keyboard navigation support, footer access, and URL persistence, making "Load More" a more inclusive alternative despite similar CLS risks if not optimized.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-10T03:32:19.905139+05:30

## Related Tags

- frontend_ui
- hackernews
- rag
- reddit
- web-crawled
- youtube

## Source

Original source: https://addyosmani.com/blog/infinite-scroll-without-layout-shifts/
