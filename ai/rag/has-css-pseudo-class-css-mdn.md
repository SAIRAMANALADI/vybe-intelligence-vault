---
title: :has() CSS pseudo-class - CSS | MDN
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/docs/Web/CSS/:has
published_at: '2026-08-10T00:48:02.899359+05:30'
collected_at: '2026-08-10T00:48:02.899370+05:30'
tags:
- rag
- web-crawled
- youtube
status: active
resource_id: blog:has-css-pseudo-class-css-mdn
first_seen: '2026-08-10T00:48:02.899370+05:30'
last_seen: '2026-08-10T00:48:02.899370+05:30'
last_checked: '2026-08-10T00:48:02.899370+05:30'
health_score: 100
---

# :has() CSS pseudo-class - CSS | MDN

## Summary

- **Functionality**: The `:has()` CSS pseudo-class selects an element if any of its relative selectors match at least one descendant, enabling parent/sibling selection (e.g., `h1:has(+ p)` styles `h1` if immediately followed by `p`).
- **Syntax Constraints**: Cannot nest `:has()` within another `:has()`, nor use pseudo-elements as selectors/anchors; specificity matches the most specific selector in its arguments (like `:is()`/`:not()`).
- **Performance Impact**: Broad anchoring (e.g., `:root:has(.item)`) or unconstrained inner selectors (e.g., `.ancestor:has(.foo)`) triggers full subtree traversals during DOM mutations, degrading performance; prefer specific containers and combinators (e.g., `.container:has(> .foo)`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-10T00:48:02.899359+05:30

## Related Tags

- rag
- web-crawled
- youtube

## Source

Original source: https://developer.mozilla.org/docs/Web/CSS/:has
