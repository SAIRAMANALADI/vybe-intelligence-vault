---
title: Hybrid search | Weaviate Documentation
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://weaviate.io/developers/weaviate/search/hybrid
published_at: '2026-07-18T01:10:30.560685+05:30'
collected_at: '2026-07-18T01:10:30.560702+05:30'
tags:
- agents
- models
- rag
- web-crawled
- youtube
status: active
resource_id: blog:hybrid-search-weaviate-documentation
first_seen: '2026-07-18T01:10:30.560702+05:30'
last_seen: '2026-07-18T01:10:30.560702+05:30'
last_checked: '2026-07-18T01:10:30.560702+05:30'
health_score: 100
---

# Hybrid search | Weaviate Documentation

## Summary

- **Hybrid Search Mechanism**: Combines vector (semantic) and BM25F (keyword) search results using configurable fusion methods and weights (`alpha` parameter), where `alpha=1` prioritizes vector search and `alpha=0` prioritizes keyword search.
- **Named Vectors Support**: For collections with named vectors, hybrid search requires specifying a `target_vector` to search within a specific vector space, enabling multi-modal or partitioned semantic search.
- **Result Explainability**: Supports `explainScore` metadata to decompose hybrid search rankings, showing contributions from BM25F, vector components, and individual document scores for transparency.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-18T01:10:30.560685+05:30

## Related Tags

- agents
- models
- rag
- web-crawled
- youtube

## Source

Original source: https://weaviate.io/developers/weaviate/search/hybrid
