---
title: Qdrant - Vector Search Engine
archive_category: rag-systems
source_category: ai/rag
source_url: https://qdrant.tech/
resource_id: blog:qdrant-vector-search-engine
local_vault_path: ai/rag/qdrant-vector-search-engine.md
quality_score: 70
archive_score: 76
archive_tier: useful
resource_kind: benchmark
importance: medium
tags:
- agents
- benchmark
- deepmind
- hackernews
- models
- rag
- reddit
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Qdrant - Vector Search Engine

## Why This Is In The Archive

- Matched archive category: `RAG Systems`
- Quality score: 70 | Archive score: 76 (useful)
- Resource kind: benchmark
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Rust-based vector search engine** with SIMD optimizations and custom Gridstore storage engine, supporting asymmetric, scalar, and binary quantization for up to 64x memory reduction while maintaining search quality.
- **Real-time indexing and one-stage filtering** with HNSW traversal, enabling instant searchability of new vectors and high recall with low latency under complex conditions.
- **Native hybrid search (dense + sparse)** with BM25, SPLADE++, and miniCOIL support, alongside multivect

## Use Cases

- Knowledge querying
- Document summarization
- Hybrid retrieval

## Source

Original source URL: https://qdrant.tech/

## Local Vault File

Path: [qdrant-vector-search-engine.md](../../ai/rag/qdrant-vector-search-engine.md)
