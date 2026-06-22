---
title: :has() CSS pseudo-class - CSS | MDN
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/docs/Web/CSS/:has
published_at: '2026-06-22T10:51:28.166662+05:30'
collected_at: '2026-06-22T10:51:28.166675+05:30'
tags:
- rag
- web-crawled
- youtube
status: active
resource_id: blog:has-css-pseudo-class-css-mdn
first_seen: '2026-06-22T10:51:28.166675+05:30'
last_seen: '2026-06-22T10:51:28.166675+05:30'
last_checked: '2026-06-22T10:51:28.166675+05:30'
health_score: 100
---

# :has() CSS pseudo-class - CSS | MDN

## Summary

- **Functionality**: The `:has()` CSS pseudo-class enables selection of an element if any relative selector passed as an argument matches at least one element when anchored against it, allowing parent or previous sibling selection (e.g., `h1:has(+ p)` styles an `h1` if immediately followed by a `p`).

- **Syntax & Constraints**: Takes a relative selector list as an argument, inherits specificity from its most specific selector, cannot be nested, and rejects pseudo-elements or pseudo-elements as anchors to avoid cyclic querying.

- **Performance Considerations**: Broad anchoring (e.g., `body:has(.sidebar)`) or unconstrained inner selectors (e.g., `.ancestor:has(.foo)`) degrade performance during DOM mutations; use specific containers and combinators (e.g., `>`, `+`) to limit traversal scope.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-22T10:51:28.166662+05:30

## Related Tags

- rag
- web-crawled
- youtube

## Source

Original source: https://developer.mozilla.org/docs/Web/CSS/:has
