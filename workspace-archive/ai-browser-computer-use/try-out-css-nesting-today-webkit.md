---
title: Try out CSS Nesting today | WebKit
archive_category: ai-browser-computer-use
source_category: ai/rag
source_url: https://webkit.org/blog/13813/try-css-nesting-today-in-safari-technology-preview/
resource_id: blog:try-out-css-nesting-today-webkit
local_vault_path: ai/rag/try-out-css-nesting-today-webkit.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- hackernews
- rag
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Try out CSS Nesting today | WebKit

## Why This Is In The Archive

- Matched archive category: `AI Browser and Computer Use`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **CSS Nesting Implementation**: Safari Technology Preview 162+ and Chrome (with flag) support **Option 3** syntax, allowing nested rules (e.g., `.foo { .bar { ... } }`) with **symbol-restricted selectors** (`.`, `#`, `:`, `[`, etc.), except for element selectors (e.g., `article`), which require `&` prefix or `:is()` wrapper.
- **`&` Operator**: The `&` symbol resolves nesting ambiguity by placing the parent selector (e.g., `& article` → `main article`), enabling precise selector composition wi

## Use Cases

- Browser web automation
- GUI action orchestration
- Agent computer control

## Source

Original source URL: https://webkit.org/blog/13813/try-css-nesting-today-in-safari-technology-preview/

## Local Vault File

Path: [try-out-css-nesting-today-webkit.md](../../ai/rag/try-out-css-nesting-today-webkit.md)
