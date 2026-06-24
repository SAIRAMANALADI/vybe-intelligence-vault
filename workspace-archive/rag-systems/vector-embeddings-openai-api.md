---
title: Vector embeddings | OpenAI API
archive_category: rag-systems
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

- Matched archive category: `RAG Systems`
- Quality score: 70 | Archive score: 74 (useful)
- Resource kind: dataset
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **New Embedding Models**: `text-embedding-3-small` (1536-dim default, 62.5k pages/$) and `text-embedding-3-large` (3072-dim default, 9.6k pages/$) offer lower costs, improved multilingual performance, and adjustable dimensions via API parameter for performance/cost trade-offs.

- **Embedding Mechanics**: Text strings are converted to floating-point vectors (embeddings) where cosine similarity quantifies semantic relatedness; dimensions can be reduced post-generation (e.g., to 256) while preser

## Use Cases

- Knowledge querying
- Document summarization
- Hybrid retrieval

## Source

Original source URL: https://platform.openai.com/docs/guides/embeddings

## Local Vault File

Path: [vector-embeddings-openai-api.md](../../ai/rag/vector-embeddings-openai-api.md)
