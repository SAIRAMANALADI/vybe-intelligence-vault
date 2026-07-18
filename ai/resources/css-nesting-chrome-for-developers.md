---
title: CSS Nesting | Chrome for Developers
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developer.chrome.com/docs/css-ui/css-nesting
published_at: '2026-07-18T01:15:25.942393+05:30'
collected_at: '2026-07-18T01:15:25.942407+05:30'
tags:
- hackernews
- reddit
- web-crawled
status: active
resource_id: blog:css-nesting-chrome-for-developers
first_seen: '2026-07-18T01:15:25.942407+05:30'
last_seen: '2026-07-18T01:15:25.942407+05:30'
last_checked: '2026-07-18T01:15:25.942407+05:30'
health_score: 100
---

# CSS Nesting | Chrome for Developers

## Summary

- **CSS Nesting Syntax**: Introduces native nesting of style rules within CSS (e.g., `.parent { .child { color: red; } }`), reducing selector repetition and improving code organization. The `&` symbol explicitly references parent selectors (e.g., `& .child`), enabling precise compound selectors and avoiding unintended descendant selectors.

- **Key Features & Limitations**: Supports `@media` nesting (e.g., `.card { @media (width >= 1024px) { font-size: 1.25rem; } }`), selector lists, and negation (`:not()`). Invalid cases include string-like concatenation (e.g., `&--header` ≠ `.card--header`) and intermixed declarations (hoisted to top unless wrapped in `&`).

- **Browser Support & Debugging**: Available in Chrome 112+, Safari TP 162. Feature detection via `@supports (selector(&))` or nesting tests (e.g., `.has-nesting { display: block; }`). Chrome DevTools lacks full nesting context visualization (planned for Chrome 113).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-18T01:15:25.942393+05:30

## Related Tags

- hackernews
- reddit
- web-crawled

## Source

Original source: https://developer.chrome.com/docs/css-ui/css-nesting
