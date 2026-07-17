---
title: :has() CSS pseudo-class - CSS | MDN
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/docs/Web/CSS/:has
published_at: '2026-07-18T01:15:21.844731+05:30'
collected_at: '2026-07-18T01:15:21.844745+05:30'
tags:
- benchmark
- rag
- web-crawled
- youtube
status: active
resource_id: blog:has-css-pseudo-class-css-mdn
first_seen: '2026-07-18T01:15:21.844745+05:30'
last_seen: '2026-07-18T01:15:21.844745+05:30'
last_checked: '2026-07-18T01:15:21.844745+05:30'
health_score: 100
---

# :has() CSS pseudo-class - CSS | MDN

## Summary

- **Functionality**: The `:has()` CSS pseudo-class enables selection of an element if any of its relative selectors match at least one descendant, allowing parent/sibling selection (e.g., `h1:has(+ p)` styles `h1` if immediately followed by `p`).
- **Syntax Constraints**: Cannot be nested, does not support pseudo-elements, and fails entirely in unsupported browsers unless in forgiving selector lists (e.g., `:is()` or `:where()`).
- **Performance Impact**: Broad anchoring (e.g., `:root:has(.x)`) or unconstrained inner selectors (e.g., `.ancestor:has(.foo)`) triggers costly subtree traversals; use specific containers and combinators (e.g., `>`, `+`) to minimize DOM re-evaluation overhead.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-18T01:15:21.844731+05:30

## Related Tags

- benchmark
- rag
- web-crawled
- youtube

## Source

Original source: https://developer.mozilla.org/docs/Web/CSS/:has
