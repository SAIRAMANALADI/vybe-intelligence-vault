---
title: Eliminate render-blocking resources | Lighthouse | Chrome for Developers
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources
published_at: '2026-06-26T02:02:26.644335+05:30'
collected_at: '2026-06-26T02:02:26.644347+05:30'
tags:
- web-crawled
status: active
resource_id: blog:eliminate-render-blocking-resources-lighthouse-chr
first_seen: '2026-06-26T02:02:26.644347+05:30'
last_seen: '2026-06-26T02:02:26.644347+05:30'
last_checked: '2026-06-26T02:02:26.644347+05:30'
health_score: 100
---

# Eliminate render-blocking resources | Lighthouse | Chrome for Developers

## Summary

- **Render-blocking resources** identified by Lighthouse include **scripts** and **stylesheets** that delay the first paint of a page, impacting performance metrics like First Contentful Paint (FCP) and Largest Contentful Paint (LCP).

- **Optimization strategies** involve **inlining critical CSS/JS**, **deferring non-critical resources** (using `defer` or `async` attributes), and **removing unused code** to reduce render-blocking impact.

- **Lighthouse 13+** consolidates this audit under the [Render-blocking requests](https://developer.chrome.com/docs/performance/insights/render-blocking) insight, replacing the standalone "Eliminate render-blocking resources" audit.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-26T02:02:26.644335+05:30

## Related Tags

- web-crawled

## Source

Original source: https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources
