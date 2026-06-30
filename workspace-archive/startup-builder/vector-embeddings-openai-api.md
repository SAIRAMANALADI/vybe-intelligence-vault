---
title: Vector embeddings | OpenAI API
archive_category: startup-builder
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

- Matched archive category: `Startup Builder`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: dataset
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Model Specifications**: `text-embedding-3-small` (1536D, 62.5k pages/$, 62.3% MTEB) and `text-embedding-3-large` (3072D, 9.6k pages/$, 64.6% MTEB) support dynamic dimension reduction via `dimensions` parameter, enabling trade-offs between vector size and performance.

- **API Integration**: Embeddings are generated via OpenAI’s `/v1/embeddings` endpoint, returning normalized float vectors (default 1536D/3072D) with token-based pricing; cosine similarity is used for relatedness measurement in

## Use Cases

- SaaS boilerplate launching
- Landing page design
- MVP feature validation

## Source

Original source URL: https://platform.openai.com/docs/guides/embeddings

## Local Vault File

Path: [vector-embeddings-openai-api.md](../../ai/rag/vector-embeddings-openai-api.md)
