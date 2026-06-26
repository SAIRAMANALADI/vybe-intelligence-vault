---
title: Vector embeddings | OpenAI API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://platform.openai.com/docs/guides/embeddings
published_at: '2026-06-26T15:26:52.799878+05:30'
collected_at: '2026-06-26T15:26:52.799893+05:30'
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
first_seen: '2026-06-26T15:26:52.799893+05:30'
last_seen: '2026-06-26T15:26:52.799893+05:30'
last_checked: '2026-06-26T15:26:52.799893+05:30'
health_score: 100
---

# Vector embeddings | OpenAI API

## Summary

- **Model Specifications**: `text-embedding-3-small` (1536-dim vectors, ~62,500 pages/USD, 62.3% MTEB) and `text-embedding-3-large` (3072-dim vectors, ~9,615 pages/USD, 64.6% MTEB) support dynamic dimension reduction via `dimensions` parameter, enabling trade-offs between performance and cost.

- **API Integration**: Embeddings are generated via `/v1/embeddings` endpoint using input text and model ID; response includes vectorized embeddings (floating-point lists) and metadata (e.g., token usage), with cosine similarity used for downstream tasks like search/clustering.

- **Use Case Flexibility**: Embeddings enable multilingual semantic search, recommendation systems, anomaly detection, and ML feature encoding; dimensionality can be manually truncated/normalized (e.g., L2 normalization) for compatibility with vector databases or reduced compute costs.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-26T15:26:52.799878+05:30

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
