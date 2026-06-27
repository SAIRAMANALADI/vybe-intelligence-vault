---
title: pgvector/pgvector
archive_category: vector-databases
source_category: ai/rag
source_url: https://github.com/pgvector/pgvector
resource_id: github:pgvector/pgvector
local_vault_path: ai/rag/pgvector-pgvector.md
quality_score: 70
archive_score: 75
archive_tier: useful
resource_kind: framework
importance: medium
tags:
- c
- github-repo
- hackernews
- rag
- reddit
selection_reason:
- Useful for project building
---

# pgvector/pgvector

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 75 (useful)
- Resource kind: framework
- Selection reasons:
  - Useful for project building

## Summary

- **Purpose**: Extends PostgreSQL with vector similarity search capabilities, enabling efficient approximate nearest neighbor (ANN) queries for high-dimensional vectors.
- **Implementation**: Written in C, integrates as a PostgreSQL extension, supporting L2 distance, inner product, and cosine distance metrics with optimized indexing (e.g., HNSW, IVFFlat).
- **Features**: Supports exact and approximate search modes, vector storage up to 2^31 dimensions, and compatibility with PostgreSQL’s existin

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://github.com/pgvector/pgvector

## Local Vault File

Path: [pgvector-pgvector.md](../../ai/rag/pgvector-pgvector.md)
