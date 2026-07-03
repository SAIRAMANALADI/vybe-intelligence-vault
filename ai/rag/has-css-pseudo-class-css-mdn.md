---
title: :has() CSS pseudo-class - CSS | MDN
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/docs/Web/CSS/:has
published_at: '2026-07-04T01:28:26.561653+05:30'
collected_at: '2026-07-04T01:28:26.561663+05:30'
tags:
- rag
- web-crawled
- youtube
status: active
resource_id: blog:has-css-pseudo-class-css-mdn
first_seen: '2026-07-04T01:28:26.561663+05:30'
last_seen: '2026-07-04T01:28:26.561663+05:30'
last_checked: '2026-07-04T01:28:26.561663+05:30'
health_score: 100
---

# :has() CSS pseudo-class - CSS | MDN

## Summary

- **Functionality**: The `:has()` CSS pseudo-class enables selection of an element if any of its relative selectors match at least one descendant, allowing parent/previous-sibling selection (e.g., `h1:has(+ p)` styles an `h1` if an adjacent `p` follows it).
- **Specificity & Constraints**: Inherits specificity from its most specific argument (like `:is()`/`:not()`), cannot nest `:has()` or use pseudo-elements, and fails entirely in unsupported browsers unless in forgiving selectors (e.g., `:is()`).
- **Performance Risks**: Broad anchoring (e.g., `:root:has(.item)`) or unconstrained inner selectors (e.g., `.ancestor:has(.foo)`) trigger costly subtree traversals; optimize with specific containers and combinators (e.g., `.container:has(> .foo)`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-04T01:28:26.561653+05:30

## Related Tags

- rag
- web-crawled
- youtube

## Source

Original source: https://developer.mozilla.org/docs/Web/CSS/:has
