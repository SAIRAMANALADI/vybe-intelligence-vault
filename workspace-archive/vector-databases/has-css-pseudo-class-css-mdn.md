---
title: :has() CSS pseudo-class - CSS | MDN
archive_category: vector-databases
source_category: ai/rag
source_url: https://developer.mozilla.org/docs/Web/CSS/:has
resource_id: blog:has-css-pseudo-class-css-mdn
local_vault_path: ai/rag/has-css-pseudo-class-css-mdn.md
quality_score: 70
archive_score: 70
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- rag
- web-crawled
- youtube
selection_reason:
- Valuable developer reference
---

# :has() CSS pseudo-class - CSS | MDN

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Valuable developer reference

## Summary

- **Functionality**: The `:has()` CSS pseudo-class enables selection of an element if any relative selector passed as an argument matches at least one element when anchored against it, allowing parent/sibling traversal (e.g., `h1:has(+ p)` styles an `h1` followed by a `p`).

- **Syntax Constraints**: Cannot be nested, does not support pseudo-elements, and fails entirely in unsupported browsers unless used in forgiving selector lists (e.g., `:is()` or `:where()`).

- **Performance Considerations*

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://developer.mozilla.org/docs/Web/CSS/:has

## Local Vault File

Path: [has-css-pseudo-class-css-mdn.md](../../ai/rag/has-css-pseudo-class-css-mdn.md)
