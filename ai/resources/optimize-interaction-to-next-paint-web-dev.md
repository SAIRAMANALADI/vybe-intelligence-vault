---
title: Optimize Interaction to Next Paint | web.dev
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://web.dev/articles/optimize-inp
published_at: '2026-06-30T04:04:19.979874+05:30'
collected_at: '2026-06-30T04:04:19.979885+05:30'
tags:
- benchmark
- dataset
- hackernews
- web-crawled
status: active
resource_id: blog:optimize-interaction-to-next-paint-web-dev
first_seen: '2026-06-30T04:04:19.979885+05:30'
last_seen: '2026-06-30T04:04:19.979885+05:30'
last_checked: '2026-06-30T04:04:19.979885+05:30'
health_score: 100
---

# Optimize Interaction to Next Paint | web.dev

## Summary

- **INP Metric Definition**: Interaction to Next Paint (INP) measures a page's responsiveness by tracking the latency of all qualifying interactions during a user's visit, with the final INP value being the longest observed interaction (excluding outliers). Optimal INP is **≤200ms**, measured at the **75th percentile** across mobile and desktop devices.

- **Interaction Breakdown & Optimization**: Interactions consist of **input delay** (time until event callbacks start), **processing duration** (event callback execution time), and **presentation delay** (time to render the next frame). Optimization requires reducing each subpart via techniques like yielding to the main thread (`setTimeout`, `requestAnimationFrame`) and avoiding layout thrashing.

- **Diagnostic & Field Data Approach**: Start with **field data** (RUM or CrUX) to identify slow interactions, then diagnose in the lab by reproducing issues. Key strategies include testing during page load (when the main thread is busiest) and segmenting interactions by browsing context (top-level page vs. iframes) to isolate performance bottlenecks.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-30T04:04:19.979874+05:30

## Related Tags

- benchmark
- dataset
- hackernews
- web-crawled

## Source

Original source: https://web.dev/articles/optimize-inp
