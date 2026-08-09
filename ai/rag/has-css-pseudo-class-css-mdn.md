---
title: :has() CSS pseudo-class - CSS | MDN
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/docs/Web/CSS/:has
published_at: '2026-08-09T08:13:03.488885+05:30'
collected_at: '2026-08-09T08:13:03.488900+05:30'
tags:
- rag
- web-crawled
- youtube
status: active
resource_id: blog:has-css-pseudo-class-css-mdn
first_seen: '2026-08-09T08:13:03.488900+05:30'
last_seen: '2026-08-09T08:13:03.488900+05:30'
last_checked: '2026-08-09T08:13:03.488900+05:30'
health_score: 100
---

# :has() CSS pseudo-class - CSS | MDN

## Summary

- **Functionality**: The `:has()` CSS pseudo-class enables selection of an element if any of its relative selectors match at least one descendant, allowing parent/sibling selection via relative selector lists (e.g., `h1:has(+ p)` for styling `h1` if immediately followed by `p`).

- **Syntax & Constraints**: Takes a relative selector list as an argument, inherits specificity from its most specific selector, and cannot be nested or use pseudo-elements; unsupported browsers fail the entire selector block unless in forgiving lists like `:is()`.

- **Performance Considerations**: Broad anchoring (e.g., `body:has(.x)`) or unconstrained inner selectors (e.g., `.ancestor:has(.foo)`) degrade performance during DOM mutations; optimize by using specific containers and tight combinators (e.g., `.container:has(> .foo)`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-09T08:13:03.488885+05:30

## Related Tags

- rag
- web-crawled
- youtube

## Source

Original source: https://developer.mozilla.org/docs/Web/CSS/:has
