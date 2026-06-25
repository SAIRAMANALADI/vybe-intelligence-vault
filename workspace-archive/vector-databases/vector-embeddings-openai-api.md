---
title: Vector embeddings | OpenAI API
archive_category: vector-databases
source_category: ai/rag
source_url: https://platform.openai.com/docs/guides/embeddings
resource_id: blog:vector-embeddings-openai-api
local_vault_path: ai/rag/vector-embeddings-openai-api.md
quality_score: 70
archive_score: 70
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
- Valuable developer reference
---

# Vector embeddings | OpenAI API

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: prompt
- Selection reasons:
  - Valuable developer reference

## Summary

- **Model Specifications**: `text-embedding-3-small` (1536D vectors, ~62.5k pages/USD, 62.3% MTEB) and `text-embedding-3-large` (3072D vectors, ~9.6k pages/USD, 64.6% MTEB) support dynamic dimension reduction via `dimensions` parameter, enabling trade-offs between vector size and performance.

- **API Integration**: Embeddings are generated via API calls (e.g., `POST /v1/embeddings`) with input text tokenized and billed per token; responses include normalized float vectors (default 1536/3072D) a

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://platform.openai.com/docs/guides/embeddings

## Local Vault File

Path: [vector-embeddings-openai-api.md](../../ai/rag/vector-embeddings-openai-api.md)
