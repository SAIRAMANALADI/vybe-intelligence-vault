---
title: Filtering - Qdrant
archive_category: evals-and-benchmarks
source_category: ai/rag
source_url: https://qdrant.tech/documentation/search/filtering/#slice
resource_id: blog:filtering-qdrant
local_vault_path: ai/rag/filtering-qdrant.md
quality_score: 70
archive_score: 74
archive_tier: useful
resource_kind: benchmark
importance: medium
tags:
- benchmark
- rag
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Filtering - Qdrant

## Why This Is In The Archive

- Matched archive category: `Evals and Benchmarks`
- Quality score: 70 | Archive score: 74 (useful)
- Resource kind: benchmark
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Filtering in Qdrant** supports payload and `id` conditions to handle non-embedding features (e.g., stock availability, user location) for precise retrieval.

- **Logical Clauses** (`must`/`AND`, `should`/`OR`, `must_not`/`NOT`) enable recursive boolean expressions for complex filtering, with performance optimized via payload indexes on filtered fields.

- **Clause Combinations** allow nested conditions (e.g., `must_not` containing a `must` clause) to express arbitrary boolean logic, combined

## Use Cases

- Model performance auditing
- Prompt regression tracking
- Hallucination testing

## Source

Original source URL: https://qdrant.tech/documentation/search/filtering/#slice

## Local Vault File

Path: [filtering-qdrant.md](../../ai/rag/filtering-qdrant.md)
