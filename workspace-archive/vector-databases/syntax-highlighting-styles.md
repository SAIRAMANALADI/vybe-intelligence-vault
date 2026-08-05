---
title: Syntax highlighting styles
archive_category: vector-databases
source_category: ai/rag
source_url: https://gohugo.io/quick-reference/syntax-highlighting-styles/#modes
resource_id: blog:syntax-highlighting-styles
local_vault_path: ai/rag/syntax-highlighting-styles.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- rag
- reddit
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Syntax highlighting styles

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- Hugo supports syntax highlighting via `transform.Highlight` function, `highlight` shortcode, or fenced code blocks in Markdown; default style set in `markup.highlight.style` config (e.g., `monokai`).
- Syntax highlighting styles are mode-specific (light/dark); some styles have counterparts (e.g., `catppuccin-latte` (light) ↔ `catppuccin-mocha` (dark)).
- External CSS stylesheets can be generated with `hugo gen chromastyles` when `markup.highlight.noClasses = false` is configured.

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://gohugo.io/quick-reference/syntax-highlighting-styles/#modes

## Local Vault File

Path: [syntax-highlighting-styles.md](../../ai/rag/syntax-highlighting-styles.md)
