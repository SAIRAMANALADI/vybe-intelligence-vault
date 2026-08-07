---
title: Hybrid search | Weaviate Documentation
archive_category: evals-and-benchmarks
source_category: ai/rag
source_url: https://docs.weaviate.io/weaviate/search/hybrid
resource_id: blog:hybrid-search-weaviate-documentation
local_vault_path: ai/rag/hybrid-search-weaviate-documentation.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: benchmark
importance: medium
tags:
- agents
- models
- rag
- web-crawled
- youtube
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Hybrid search | Weaviate Documentation

## Why This Is In The Archive

- Matched archive category: `Evals and Benchmarks`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: benchmark
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Hybrid Search Mechanism**: Combines vector (semantic) and BM25F (keyword) search results via configurable fusion methods and relative weights (`alpha` parameter), enabling balanced or prioritized retrieval.
- **Named Vector Support**: Requires explicit `target_vector` specification for collections with named vectors, ensuring query vectors align with the intended vector space for accurate hybrid search.
- **Explainability & Tuning**: Supports `explain_score` metadata to dissect ranking contr

## Use Cases

- Model performance auditing
- Prompt regression tracking
- Hallucination testing

## Source

Original source URL: https://docs.weaviate.io/weaviate/search/hybrid

## Local Vault File

Path: [hybrid-search-weaviate-documentation.md](../../ai/rag/hybrid-search-weaviate-documentation.md)
