---
title: Vector embeddings | OpenAI API
archive_category: vector-databases
source_category: ai/rag
source_url: https://platform.openai.com/docs/guides/embeddings
resource_id: blog:vector-embeddings-openai-api
local_vault_path: ai/rag/vector-embeddings-openai-api.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: prompt
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

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: prompt
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Model Specifications**: `text-embedding-3-small` (1536-dim, 62.5k pages/$) and `text-embedding-3-large` (3072-dim, 9.6k pages/$) offer reduced costs, improved multilingual performance, and adjustable dimensionality via the `dimensions` parameter, outperforming `text-embedding-ada-002` (61.0% vs. 62.3%/64.6% on MTEB benchmark).

- **Embedding Mechanics**: Embeddings are floating-point vectors where cosine similarity/distance quantifies text relatedness; default dimensions (1536/3072) can be t

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://platform.openai.com/docs/guides/embeddings

## Local Vault File

Path: [vector-embeddings-openai-api.md](../../ai/rag/vector-embeddings-openai-api.md)
