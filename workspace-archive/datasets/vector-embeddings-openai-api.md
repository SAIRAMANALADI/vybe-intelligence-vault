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

- **New Models & Performance**: `text-embedding-3-small` (1536-dim, 62.3% MTEB) and `text-embedding-3-large` (3072-dim, 64.6% MTEB) offer lower cost, improved multilingual performance, and configurable output dimensions via the `dimensions` parameter.

- **Embedding Mechanics**: Text embeddings are floating-point vectors where cosine similarity between vectors measures semantic relatedness; default dimensions can be reduced (e.g., to 256) without significant performance loss using the `dimension

## Use Cases

- Instruction tuning source
- Evals dataset building
- Synthetic dataset creation

## Source

Original source URL: https://platform.openai.com/docs/guides/embeddings

## Local Vault File

Path: [vector-embeddings-openai-api.md](../../ai/rag/vector-embeddings-openai-api.md)
