---
title: Changelog - Docs by LangChain
archive_category: model-providers
source_category: ai/rag
source_url: https://docs.langchain.com/oss/python/releases/changelog
resource_id: blog:changelog-docs-by-langchain
local_vault_path: ai/rag/changelog-docs-by-langchain.md
quality_score: 70
archive_score: 74
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- agents
- anthropic
- openai
- producthunt
- rag
- web-crawled
- workflows
- youtube
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Changelog - Docs by LangChain

## Why This Is In The Archive

- Matched archive category: `Model Providers`
- Quality score: 70 | Archive score: 74 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **`deepagents` v0.7.0**: Introduced a new `delete` filesystem tool for recursive directory deletion, modified `write_file` to overwrite existing files (use `edit_file` for targeted changes), enabled middleware instance overriding via name matching, and added filesystem tool allowlisting in `FilesystemMiddleware`.

- **`DeltaChannel` (beta)**: Implemented in `deepagents` and `langgraph` v1.2.0 to store only incremental deltas for large-growing channels (e.g., message lists), reducing checkpoint

## Use Cases

- API key selection
- Cost/capability profiling
- Provider fallback routing

## Source

Original source URL: https://docs.langchain.com/oss/python/releases/changelog

## Local Vault File

Path: [changelog-docs-by-langchain.md](../../ai/rag/changelog-docs-by-langchain.md)
