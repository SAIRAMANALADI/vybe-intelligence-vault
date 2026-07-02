---
title: :has() CSS pseudo-class - CSS | MDN
archive_category: rag-systems
source_category: ai/rag
source_url: https://developer.mozilla.org/docs/Web/CSS/:has
resource_id: blog:has-css-pseudo-class-css-mdn
local_vault_path: ai/rag/has-css-pseudo-class-css-mdn.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- rag
- web-crawled
- youtube
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# :has() CSS pseudo-class - CSS | MDN

## Why This Is In The Archive

- Matched archive category: `RAG Systems`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Functionality**: The `:has()` pseudo-class enables selection of an element if any of its relative selectors match at least one descendant, allowing parent/sibling selection via relative selector lists (e.g., `h1:has(+ p)` for styling `h1` when followed by `p`).
- **Syntax & Constraints**: Takes a relative selector list as an argument, inherits specificity from its most specific argument (like `:is()`/`:not()`), and cannot nest `:has()` or use pseudo-elements as anchors to avoid cyclic querie

## Use Cases

- Knowledge querying
- Document summarization
- Hybrid retrieval

## Source

Original source URL: https://developer.mozilla.org/docs/Web/CSS/:has

## Local Vault File

Path: [has-css-pseudo-class-css-mdn.md](../../ai/rag/has-css-pseudo-class-css-mdn.md)
