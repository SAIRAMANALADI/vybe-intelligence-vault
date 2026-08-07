---
title: :has() CSS pseudo-class - CSS | MDN
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/docs/Web/CSS/:has
published_at: '2026-08-01T09:32:55.331942+05:30'
collected_at: '2026-08-01T09:32:55.331951+05:30'
tags:
- rag
- web-crawled
- youtube
status: active
resource_id: blog:has-css-pseudo-class-css-mdn
first_seen: '2026-08-01T09:32:55.331951+05:30'
last_seen: '2026-08-01T09:32:55.331951+05:30'
last_checked: '2026-08-01T09:32:55.331951+05:30'
health_score: 100
---

# :has() CSS pseudo-class - CSS | MDN

## Summary

- **Functionality**: The `:has()` pseudo-class enables selection of an element if any relative selector passed as an argument matches at least one descendant, allowing parent/previous-sibling selection via relative selector lists (e.g., `h1:has(+ p)`).
- **Specificity & Nesting**: Inherits specificity from the most specific selector in its arguments (like `:is()`/`:not()`), cannot nest `:has()` within another `:has()`, and rejects pseudo-elements or invalid anchors to prevent cyclic querying.
- **Performance**: Broad anchoring (e.g., `:root`, `body`) or unconstrained inner selectors (e.g., `.ancestor:has(.foo)`) degrades performance; use specific containers (e.g., `.container:has(.sidebar-expanded)`) and tight combinators (`>`, `+`) to limit subtree traversal.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-01T09:32:55.331942+05:30

## Related Tags

- rag
- web-crawled
- youtube

## Source

Original source: https://developer.mozilla.org/docs/Web/CSS/:has
