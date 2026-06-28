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

- **Model Specifications**: `text-embedding-3-small` (1536D vectors, ~62.5k pages/USD, 62.3% MTEB) and `text-embedding-3-large` (3072D vectors, ~9.6k pages/USD, 64.6% MTEB) support dynamic dimensionality reduction via `dimensions` parameter, reducing vector size without significant performance loss (e.g., 256D `text-embedding-3-large` outperforms 1536D `text-embedding-ada-002`).

- **API Integration**: Embeddings are generated via OpenAI’s API (`POST /v1/embeddings`) with input token pricing; ve

## Use Cases

- Instruction tuning source
- Evals dataset building
- Synthetic dataset creation

## Source

Original source URL: https://platform.openai.com/docs/guides/embeddings

## Local Vault File

Path: [vector-embeddings-openai-api.md](../../ai/rag/vector-embeddings-openai-api.md)
