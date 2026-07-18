---
title: :has() CSS pseudo-class - CSS | MDN
archive_category: evals-and-benchmarks
source_category: ai/rag
source_url: https://developer.mozilla.org/docs/Web/CSS/:has
resource_id: blog:has-css-pseudo-class-css-mdn
local_vault_path: ai/rag/has-css-pseudo-class-css-mdn.md
quality_score: 70
archive_score: 74
archive_tier: useful
resource_kind: benchmark
importance: medium
tags:
- benchmark
- rag
- web-crawled
- youtube
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# :has() CSS pseudo-class - CSS | MDN

## Why This Is In The Archive

- Matched archive category: `Evals and Benchmarks`
- Quality score: 70 | Archive score: 74 (useful)
- Resource kind: benchmark
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Functionality**: The `:has()` CSS pseudo-class enables selection of an element if any of its relative selectors match at least one descendant, allowing parent/sibling selection (e.g., `h1:has(+ p)` styles `h1` if immediately followed by `p`).
- **Syntax Constraints**: Cannot be nested, does not support pseudo-elements, and fails entirely in unsupported browsers unless in forgiving selector lists (e.g., `:is()` or `:where()`).
- **Performance Impact**: Broad anchoring (e.g., `:root:has(.x)`)

## Use Cases

- Model performance auditing
- Prompt regression tracking
- Hallucination testing

## Source

Original source URL: https://developer.mozilla.org/docs/Web/CSS/:has

## Local Vault File

Path: [has-css-pseudo-class-css-mdn.md](../../ai/rag/has-css-pseudo-class-css-mdn.md)
