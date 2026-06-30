---
title: Vector embeddings | OpenAI API
archive_category: evals-and-benchmarks
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

- Matched archive category: `Evals and Benchmarks`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: dataset
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Model Specifications**: `text-embedding-3-small` (1536-dim, ~62.5k pages/USD, 62.3% MTEB) and `text-embedding-3-large` (3072-dim, ~9.6k pages/USD, 64.6% MTEB) offer reduced costs, improved multilingual performance, and configurable embedding dimensions via API parameter.

- **Embedding Mechanics**: Embeddings are normalized L2 vectors (default 1536/3072 dims) where cosine distance measures semantic relatedness; dimensionality can be reduced post-generation (e.g., to 256) without significant

## Use Cases

- Model performance auditing
- Prompt regression tracking
- Hallucination testing

## Source

Original source URL: https://platform.openai.com/docs/guides/embeddings

## Local Vault File

Path: [vector-embeddings-openai-api.md](../../ai/rag/vector-embeddings-openai-api.md)
