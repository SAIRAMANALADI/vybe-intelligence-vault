---
title: Vector embeddings | OpenAI API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://platform.openai.com/docs/guides/embeddings
published_at: '2026-06-24T10:12:12.298126+05:30'
collected_at: '2026-06-24T10:12:12.298142+05:30'
tags:
- benchmark
- dataset
- hackernews
- openai
- producthunt
- rag
- web-crawled
status: active
resource_id: blog:vector-embeddings-openai-api
first_seen: '2026-06-24T10:12:12.298142+05:30'
last_seen: '2026-06-24T10:12:12.298142+05:30'
last_checked: '2026-06-24T10:12:12.298142+05:30'
health_score: 100
---

# Vector embeddings | OpenAI API

## Summary

- **Model Specifications**: `text-embedding-3-small` (1536-dim, ~62.5k pages/USD, 62.3% MTEB) and `text-embedding-3-large` (3072-dim, ~9.6k pages/USD, 64.6% MTEB) support dynamic dimension reduction via `dimensions` parameter (e.g., 256-dim embeddings outperform unshortened `text-embedding-ada-002` at 1536-dim).

- **API Integration**: Embeddings are generated via `/v1/embeddings` endpoint with input token pricing; vectors are L2-normalized floating-point lists used for semantic search, clustering, and classification via cosine similarity or Euclidean distance.

- **Use Case Flexibility**: Embeddings enable downstream tasks (e.g., code search, recommendations) by encoding text into fixed-size vectors; dimensionality can be manually truncated post-generation (with L2 normalization) to optimize storage/compute trade-offs.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-24T10:12:12.298126+05:30

## Related Tags

- benchmark
- dataset
- hackernews
- openai
- producthunt
- rag
- web-crawled

## Source

Original source: https://platform.openai.com/docs/guides/embeddings
