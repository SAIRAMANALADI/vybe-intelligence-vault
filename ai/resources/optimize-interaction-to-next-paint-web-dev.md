---
title: Optimize Interaction to Next Paint | web.dev
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://web.dev/articles/optimize-inp
published_at: '2026-07-02T15:16:58.546077+05:30'
collected_at: '2026-07-02T15:16:58.546092+05:30'
tags:
- benchmark
- dataset
- hackernews
- web-crawled
status: active
resource_id: blog:optimize-interaction-to-next-paint-web-dev
first_seen: '2026-07-02T15:16:58.546092+05:30'
last_seen: '2026-07-02T15:16:58.546092+05:30'
last_checked: '2026-07-02T15:16:58.546092+05:30'
health_score: 100
---

# Optimize Interaction to Next Paint | web.dev

## Summary

- **INP Metric**: Interaction to Next Paint (INP) is a Core Web Vital measuring page responsiveness by tracking the latency of all qualifying interactions during a user's visit; target is **≤200ms** (75th percentile across mobile/desktop).

- **Interaction Breakdown**: INP latency consists of **input delay** (time until event callbacks start), **processing duration** (event callback execution), and **presentation delay** (time to render next frame); optimization requires addressing all three subparts.

- **Optimization Strategies**: Reduce input delay by minimizing long tasks during page load (e.g., script evaluation), yield to the main thread in event callbacks (e.g., `setTimeout`, `requestAnimationFrame`), and avoid layout thrashing to improve rendering performance.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-02T15:16:58.546077+05:30

## Related Tags

- benchmark
- dataset
- hackernews
- web-crawled

## Source

Original source: https://web.dev/articles/optimize-inp
