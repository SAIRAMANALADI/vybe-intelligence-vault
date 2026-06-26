---
title: Vector embeddings | OpenAI API
archive_category: model-providers
source_category: ai/rag
source_url: https://platform.openai.com/docs/guides/embeddings
resource_id: blog:vector-embeddings-openai-api
local_vault_path: ai/rag/vector-embeddings-openai-api.md
quality_score: 70
archive_score: 72
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

- Matched archive category: `Model Providers`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: dataset
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Model Specifications**: `text-embedding-3-small` (1536-dim vectors, ~62,500 pages/USD, 62.3% MTEB) and `text-embedding-3-large` (3072-dim vectors, ~9,615 pages/USD, 64.6% MTEB) support dynamic dimension reduction via `dimensions` parameter, enabling trade-offs between performance and cost.

- **API Integration**: Embeddings are generated via `/v1/embeddings` endpoint using input text and model ID; response includes vectorized embeddings (floating-point lists) and metadata (e.g., token usage)

## Use Cases

- API key selection
- Cost/capability profiling
- Provider fallback routing

## Source

Original source URL: https://platform.openai.com/docs/guides/embeddings

## Local Vault File

Path: [vector-embeddings-openai-api.md](../../ai/rag/vector-embeddings-openai-api.md)
