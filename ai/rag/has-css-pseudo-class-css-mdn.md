---
title: :has() CSS pseudo-class - CSS | MDN
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/docs/Web/CSS/:has
published_at: '2026-07-03T03:59:08.611784+05:30'
collected_at: '2026-07-03T03:59:08.611797+05:30'
tags:
- rag
- web-crawled
- youtube
status: active
resource_id: blog:has-css-pseudo-class-css-mdn
first_seen: '2026-07-03T03:59:08.611797+05:30'
last_seen: '2026-07-03T03:59:08.611797+05:30'
last_checked: '2026-07-03T03:59:08.611797+05:30'
health_score: 100
---

# :has() CSS pseudo-class - CSS | MDN

## Summary

- **Functionality**: The `:has()` pseudo-class enables selection of an element if any of its relative selectors match at least one descendant, allowing parent/sibling selection via relative selector lists (e.g., `h1:has(+ p)` for styling `h1` when followed by `p`).
- **Syntax & Constraints**: Takes a relative selector list as an argument, inherits specificity from its most specific argument (like `:is()`/`:not()`), and cannot nest `:has()` or use pseudo-elements as anchors to avoid cyclic queries.
- **Performance**: Broad anchoring (e.g., `body:has(.sidebar)`) or unconstrained inner selectors (e.g., `.ancestor:has(.foo)`) triggers expensive subtree traversals; optimize by using specific containers and combinators (e.g., `.container:has(.sidebar-expanded)`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-03T03:59:08.611784+05:30

## Related Tags

- rag
- web-crawled
- youtube

## Source

Original source: https://developer.mozilla.org/docs/Web/CSS/:has
