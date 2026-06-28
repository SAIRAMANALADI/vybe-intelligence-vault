---
title: On the Size Bias of Text Embeddings and Its Impact in Search
archive_category: vector-databases
source_category: ai/rag
source_url: https://jina.ai/news/on-the-size-bias-of-text-embeddings-and-its-impact-in-search
resource_id: blog:on-the-size-bias-of-text-embeddings-and-its-impact
local_vault_path: ai/rag/on-the-size-bias-of-text-embeddings-and-its-impact.md
quality_score: 70
archive_score: 70
archive_tier: useful
resource_kind: dataset
importance: medium
tags:
- benchmark
- dataset
- hackernews
- rag
- reddit
- web-crawled
selection_reason:
- Valuable developer reference
---

# On the Size Bias of Text Embeddings and Its Impact in Search

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: dataset
- Selection reasons:
  - Valuable developer reference

## Summary

- **Length-dependent cosine bias**: Longer texts produce higher cosine similarity scores regardless of semantic content, due to increased embedding vector dispersion across semantic space, making relevance assessment unreliable without normalization.

- **Empirical validation**: Experiments on the CISI dataset show average cosine similarity increases from 0.254 (sentences) to 0.343 (documents) to 0.658 (concatenated long documents), demonstrating a direct correlation between text length and simi

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://jina.ai/news/on-the-size-bias-of-text-embeddings-and-its-impact-in-search

## Local Vault File

Path: [on-the-size-bias-of-text-embeddings-and-its-impact.md](../../ai/rag/on-the-size-bias-of-text-embeddings-and-its-impact.md)
