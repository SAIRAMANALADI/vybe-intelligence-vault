---
title: Configure markup
archive_category: rag-systems
source_category: ai/rag
source_url: https://gohugo.io/configuration/markup/#syntaxhighlight
resource_id: blog:configure-markup
local_vault_path: ai/rag/configure-markup.md
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

# Configure markup

## Why This Is In The Archive

- Matched archive category: `RAG Systems`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Markup Handler Configuration**: Hugo defaults to Goldmark for Markdown rendering (`defaultMarkdownHandler: goldmark`), but supports alternative renderers (`asciidocext`, `org`, `pandoc`, `rst`) via configuration, with Goldmark recommended for performance and CommonMark/GFM compliance.

- **Goldmark Extensions**: Default extensions include `footnote`, `linkify`, `strikethrough`, `table`, `taskList`, and `typographer`; customizable via `markup.goldmark.extensions` with optional `extras` (e.g.,

## Use Cases

- Knowledge querying
- Document summarization
- Hybrid retrieval

## Source

Original source URL: https://gohugo.io/configuration/markup/#syntaxhighlight

## Local Vault File

Path: [configure-markup.md](../../ai/rag/configure-markup.md)
