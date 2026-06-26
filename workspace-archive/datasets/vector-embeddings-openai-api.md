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

- Matched archive category: `Datasets`
- Quality score: 70 | Archive score: 74 (useful)
- Resource kind: prompt
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Model Specifications**: `text-embedding-3-small` (1536-dim, 62.5k pages/$) and `text-embedding-3-large` (3072-dim, 9.6k pages/$) offer reduced costs and improved multilingual performance; both support up to 8192 tokens with dynamic dimensionality reduction via the `dimensions` parameter.

- **Embedding Mechanics**: Text strings are converted to floating-point vectors where cosine similarity quantifies semantic relatedness; dimensionality can be manually truncated (e.g., to 256) while preserv

## Use Cases

- Instruction tuning source
- Evals dataset building
- Synthetic dataset creation

## Source

Original source URL: https://platform.openai.com/docs/guides/embeddings

## Local Vault File

Path: [vector-embeddings-openai-api.md](../../ai/rag/vector-embeddings-openai-api.md)
