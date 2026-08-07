---
title: CSS Nesting | Chrome for Developers
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developer.chrome.com/docs/css-ui/css-nesting
published_at: '2026-08-07T09:00:45.516525+05:30'
collected_at: '2026-08-07T09:00:45.516533+05:30'
tags:
- hackernews
- reddit
- web-crawled
status: active
resource_id: blog:css-nesting-chrome-for-developers
first_seen: '2026-08-07T09:00:45.516533+05:30'
last_seen: '2026-08-07T09:00:45.516533+05:30'
last_checked: '2026-08-07T09:00:45.516533+05:30'
health_score: 100
---

# CSS Nesting | Chrome for Developers

## Summary

- **CSS Nesting Syntax**: Introduces native nesting of style rules within the language (e.g., `.parent { .child { color: red; } }`), eliminating selector repetition and improving organization. Supported in Chrome 112+ and Safari Technical Preview 162+.

- **`&` Symbol and Selector Context**: The `&` symbol explicitly references the parent selector, enabling precise compound selectors (e.g., `.lg { &.triangle { ... } }` for `.lg.triangle`). Omission defaults to descendant selectors (e.g., `.lg .triangle`).

- **Feature Detection and Debugging**: Nesting can be detected via `@supports (selector(&))` or by testing a `.has-nesting` class. Chrome DevTools (v113+) will improve nesting visualization, though current support is limited.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-07T09:00:45.516525+05:30

## Related Tags

- hackernews
- reddit
- web-crawled

## Source

Original source: https://developer.chrome.com/docs/css-ui/css-nesting
