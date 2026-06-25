---
title: AddyOsmani.com - Infinite Scroll without Layout Shifts
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://addyosmani.com/blog/infinite-scroll-without-layout-shifts/
published_at: '2026-06-25T20:53:14.704834+05:30'
collected_at: '2026-06-25T20:53:14.704849+05:30'
tags:
- frontend_ui
- hackernews
- rag
- reddit
- web-crawled
- youtube
status: active
resource_id: blog:addyosmani-com-infinite-scroll-without-layout-shif
first_seen: '2026-06-25T20:53:14.704849+05:30'
last_seen: '2026-06-25T20:53:14.704849+05:30'
last_checked: '2026-06-25T20:53:14.704849+05:30'
health_score: 100
---

# AddyOsmani.com - Infinite Scroll without Layout Shifts

## Summary

- **Layout shifts in infinite scroll** occur when dynamically loaded content pushes down elements like footers, negatively impacting CLS (Cumulative Layout Shift) scores, especially if the shift exceeds Chrome’s 500ms post-interaction threshold.

- **Mitigation strategies** include reserving space via skeleton placeholders, prefetching content/images, or removing footers; libraries like `react-window` optimize rendering by virtualizing lists to minimize shifts.

- **Accessibility and SEO trade-offs**: Infinite scroll lacks pagination benefits (URLs, back-button support), harms keyboard navigation, and requires fallback pagination for SEO (Googlebot doesn’t scroll). "Load More" patterns offer a more accessible alternative.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-25T20:53:14.704834+05:30

## Related Tags

- frontend_ui
- hackernews
- rag
- reddit
- web-crawled
- youtube

## Source

Original source: https://addyosmani.com/blog/infinite-scroll-without-layout-shifts/
