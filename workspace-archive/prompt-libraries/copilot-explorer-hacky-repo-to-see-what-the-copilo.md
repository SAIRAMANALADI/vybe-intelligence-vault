---
title: copilot-explorer | Hacky repo to see what the Copilot extension sends to the
  server
archive_category: prompt-libraries
source_category: ai/rag
source_url: https://thakkarparth007.github.io/copilot-explorer/posts/copilot-internals.html
resource_id: blog:copilot-explorer-hacky-repo-to-see-what-the-copilo
local_vault_path: ai/rag/copilot-explorer-hacky-repo-to-see-what-the-copilo.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: prompt
importance: medium
tags:
- hackernews
- models
- openai
- rag
- reddit
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# copilot-explorer | Hacky repo to see what the Copilot extension sends to the server

## Why This Is In The Archive

- Matched archive category: `Prompt Libraries`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: prompt
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Prompt Engineering**: Copilot constructs prompts by combining contextual snippets from the current file and other recently accessed files (up to 20) of the same language, including path markers, similar file references, and code before/after the cursor. The prompt is structured with prefix (context) and suffix (completion target), formatted for Codex's FIM (Fill-In-Middle) mode.

- **Snippet Extraction Logic**: Relevant snippets are extracted via `PromptWishlist` with prioritized elements (`

## Use Cases

- System prompt patterns
- Structured prompt design
- Few-shot examples

## Source

Original source URL: https://thakkarparth007.github.io/copilot-explorer/posts/copilot-internals.html

## Local Vault File

Path: [copilot-explorer-hacky-repo-to-see-what-the-copilo.md](../../ai/rag/copilot-explorer-hacky-repo-to-see-what-the-copilo.md)
