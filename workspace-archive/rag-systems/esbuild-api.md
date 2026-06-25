---
title: esbuild - API
archive_category: rag-systems
source_category: ai/rag
source_url: https://esbuild.github.io/api/#sources-content
resource_id: blog:esbuild-api
local_vault_path: ai/rag/esbuild-api.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- frontend_ui
- hackernews
- rag
- web-crawled
- workflows
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# esbuild - API

## Why This Is In The Archive

- Matched archive category: `RAG Systems`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **API Access & CLI Syntax**: Esbuild provides APIs in CLI, JavaScript, and Go with identical concepts; CLI flags use `--foo` (boolean), `--foo=bar` (single value), or `--foo:bar` (multi-value), while shell interpretation risks can be avoided via JS/Go APIs.

- **Build & Transform APIs**: Primary `build` API bundles entry points to filesystem with options like `--bundle`, `--outdir`, and supports incremental builds via `context` (watch/serve/rebuild modes); `transform` API operates on in-memory

## Use Cases

- Knowledge querying
- Document summarization
- Hybrid retrieval

## Source

Original source URL: https://esbuild.github.io/api/#sources-content

## Local Vault File

Path: [esbuild-api.md](../../ai/rag/esbuild-api.md)
