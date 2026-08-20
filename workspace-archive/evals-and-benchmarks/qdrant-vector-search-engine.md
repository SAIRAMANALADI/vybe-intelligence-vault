---
title: Qdrant - Vector Search Engine
archive_category: evals-and-benchmarks
source_category: ai/rag
source_url: https://qdrant.tech/
resource_id: blog:qdrant-vector-search-engine
local_vault_path: ai/rag/qdrant-vector-search-engine.md
quality_score: 70
archive_score: 72
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

- Matched archive category: `Evals and Benchmarks`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: benchmark
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Rust-based vector database** with SIMD optimizations and a custom storage engine (Gridstore), supporting asymmetric, scalar, and binary quantization for up to 64x memory reduction while maintaining search quality.
- **Native hybrid search** integrating dense and sparse vectors (BM25, SPLADE++, miniCOIL) with one-stage filtering during HNSW traversal for high recall and low latency.
- **Multi-vector support** per object for enhanced relevance, full-spectrum reranking (e.g., ColBERT, MMR), and

## Use Cases

- Model performance auditing
- Prompt regression tracking
- Hallucination testing

## Source

Original source URL: https://qdrant.tech/

## Local Vault File

Path: [qdrant-vector-search-engine.md](../../ai/rag/qdrant-vector-search-engine.md)
