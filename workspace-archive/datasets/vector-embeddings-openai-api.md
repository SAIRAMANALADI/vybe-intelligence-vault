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

- **New Models & Performance**: `text-embedding-3-small` (1536D, 62.5k pages/$) and `text-embedding-3-large` (3072D, 9.6k pages/$) offer lower costs, higher multilingual performance, and dimensionality control via the `dimensions` parameter, outperforming `text-embedding-ada-002` (61.0% vs 64.6% on MTEB benchmark).

- **Embedding Mechanics**: Text strings are converted to floating-point vectors (default 1536D/3072D) where cosine distance measures semantic relatedness; dimensions can be reduced (

## Use Cases

- Instruction tuning source
- Evals dataset building
- Synthetic dataset creation

## Source

Original source URL: https://platform.openai.com/docs/guides/embeddings

## Local Vault File

Path: [vector-embeddings-openai-api.md](../../ai/rag/vector-embeddings-openai-api.md)
