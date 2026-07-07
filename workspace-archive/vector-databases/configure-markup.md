---
title: Configure markup
archive_category: vector-databases
source_category: ai/rag
source_url: https://gohugo.io/configuration/markup/#syntaxhighlight
resource_id: blog:configure-markup
local_vault_path: ai/rag/configure-markup.md
quality_score: 70
archive_score: 70
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- rag
- reddit
- web-crawled
selection_reason:
- Valuable developer reference
---

# Configure markup

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Valuable developer reference

## Summary

- **Markup Handler Configuration**: Hugo defaults to Goldmark for Markdown rendering (`defaultMarkdownHandler: goldmark`), but supports alternatives like AsciiDoc, Org, Pandoc, or reStructuredText via configuration; requires external tooling for non-default handlers.

- **Goldmark Extensions**: Default extensions include `footnote`, `linkify`, `strikethrough`, `table`, `taskList`, and `typographer`; extras (e.g., `subscript`, `superscript`) require explicit enablement and may conflict with defau

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://gohugo.io/configuration/markup/#syntaxhighlight

## Local Vault File

Path: [configure-markup.md](../../ai/rag/configure-markup.md)
