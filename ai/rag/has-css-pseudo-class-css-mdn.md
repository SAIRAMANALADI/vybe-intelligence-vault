---
title: :has() CSS pseudo-class - CSS | MDN
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/docs/Web/CSS/:has
published_at: '2026-07-02T10:02:17.746400+05:30'
collected_at: '2026-07-02T10:02:17.746411+05:30'
tags:
- rag
- web-crawled
- youtube
status: active
resource_id: blog:has-css-pseudo-class-css-mdn
first_seen: '2026-07-02T10:02:17.746411+05:30'
last_seen: '2026-07-02T10:02:17.746411+05:30'
last_checked: '2026-07-02T10:02:17.746411+05:30'
health_score: 100
---

# :has() CSS pseudo-class - CSS | MDN

## Summary

- **Functionality**: The `:has()` CSS pseudo-class enables selection of an element if any of its relative selectors match at least one element when anchored against it, allowing parent/sibling selection (e.g., `h1:has(+ p)` styles `h1` if immediately followed by `p`).
- **Specificity & Constraints**: Inherits specificity from its most specific argument (like `:is()`/`:not()`), cannot nest `:has()` within another `:has()`, and rejects pseudo-elements or invalid selectors to prevent cyclic queries.
- **Performance Considerations**: Broad anchoring (e.g., `body:has(.x)`) or unconstrained inner selectors (e.g., `.ancestor:has(.foo)`) degrade performance; use specific containers (`.container:has(.x)`) and tight combinators (`>`, `+`) to limit subtree traversals.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-02T10:02:17.746400+05:30

## Related Tags

- rag
- web-crawled
- youtube

## Source

Original source: https://developer.mozilla.org/docs/Web/CSS/:has
