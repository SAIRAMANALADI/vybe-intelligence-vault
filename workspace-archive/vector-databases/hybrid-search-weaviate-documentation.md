---
title: Hybrid search | Weaviate Documentation
archive_category: vector-databases
source_category: ai/rag
source_url: https://weaviate.io/developers/weaviate/search/hybrid
resource_id: blog:hybrid-search-weaviate-documentation
local_vault_path: ai/rag/hybrid-search-weaviate-documentation.md
quality_score: 70
archive_score: 74
archive_tier: useful
resource_kind: tutorial
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

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 74 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Hybrid Search Mechanism**: Combines vector (semantic) and BM25F (keyword) search results using configurable fusion methods and weights (`alpha` parameter), where `alpha=1` prioritizes vector search and `alpha=0` prioritizes keyword search.
- **Named Vectors Support**: For collections with named vectors, hybrid search requires specifying a `target_vector` to search within a specific vector space, enabling multi-modal or partitioned semantic search.
- **Result Explainability**: Supports `expla

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://weaviate.io/developers/weaviate/search/hybrid

## Local Vault File

Path: [hybrid-search-weaviate-documentation.md](../../ai/rag/hybrid-search-weaviate-documentation.md)
