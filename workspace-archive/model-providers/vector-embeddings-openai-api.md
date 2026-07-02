---
title: Vector embeddings | OpenAI API
archive_category: model-providers
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

- Matched archive category: `Model Providers`
- Quality score: 70 | Archive score: 74 (useful)
- Resource kind: dataset
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Model Specifications**: New `text-embedding-3-small` (1536-dim) and `text-embedding-3-large` (3072-dim) models offer lower costs, improved multilingual performance, and configurable dimensionality via the `dimensions` parameter, enabling trade-offs between vector size and accuracy.

- **Embedding Generation**: Embeddings are generated via API calls to `/v1/embeddings` with input text, returning a vector of floating-point numbers; token-based pricing applies (e.g., ~62.5k pages per dollar for

## Use Cases

- API key selection
- Cost/capability profiling
- Provider fallback routing

## Source

Original source URL: https://platform.openai.com/docs/guides/embeddings

## Local Vault File

Path: [vector-embeddings-openai-api.md](../../ai/rag/vector-embeddings-openai-api.md)
