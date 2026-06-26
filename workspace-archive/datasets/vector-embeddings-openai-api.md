---
title: Vector embeddings | OpenAI API
archive_category: datasets
source_category: ai/rag
source_url: https://platform.openai.com/docs/guides/embeddings
resource_id: blog:vector-embeddings-openai-api
local_vault_path: ai/rag/vector-embeddings-openai-api.md
quality_score: 70
archive_score: 74
archive_tier: useful
resource_kind: dataset
importance: medium
tags:
- benchmark
- dataset
- hackernews
- openai
- producthunt
- rag
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Vector embeddings | OpenAI API

## Why This Is In The Archive

- Matched archive category: `Datasets`
- Quality score: 70 | Archive score: 74 (useful)
- Resource kind: dataset
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **New Embedding Models**: `text-embedding-3-small` and `text-embedding-3-large` offer lower costs, improved multilingual performance, and configurable output dimensions (default: 1536/3072) via the `dimensions` parameter, with performance trade-offs (e.g., 256-dim `text-embedding-3-large` outperforms 1536-dim `text-embedding-ada-002` on MTEB).

- **Embedding Mechanics**: Text embeddings are high-dimensional vectors (floating-point lists) where cosine similarity/distance quantifies semantic rel

## Use Cases

- Instruction tuning source
- Evals dataset building
- Synthetic dataset creation

## Source

Original source URL: https://platform.openai.com/docs/guides/embeddings

## Local Vault File

Path: [vector-embeddings-openai-api.md](../../ai/rag/vector-embeddings-openai-api.md)
