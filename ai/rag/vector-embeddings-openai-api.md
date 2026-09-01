---
title: Vector embeddings | OpenAI API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://platform.openai.com/docs/guides/embeddings
published_at: '2026-09-02T04:17:06.347363+05:30'
collected_at: '2026-09-02T04:17:06.347377+05:30'
tags:
- benchmark
- dataset
- hackernews
- models
- openai
- producthunt
- rag
- web-crawled
status: active
resource_id: blog:vector-embeddings-openai-api
first_seen: '2026-09-02T04:17:06.347377+05:30'
last_seen: '2026-09-02T04:17:06.347377+05:30'
last_checked: '2026-09-02T04:17:06.347377+05:30'
health_score: 100
---

# Vector embeddings | OpenAI API

## Summary

- **Model Specifications**: `text-embedding-3-small` (1536-dim, 62.5k pages/USD) and `text-embedding-3-large` (3072-dim, 9.6k pages/USD) offer improved multilingual performance, lower costs, and dynamic dimensionality reduction via the `dimensions` parameter while maintaining concept-representing properties.

- **Embedding Mechanics**: Text strings are converted into floating-point vectors (default 1536/3072 dims) where cosine similarity/distance measures semantic relatedness; dimensionality can be manually reduced (e.g., to 256) with L2 normalization for compatibility with constrained vector stores.

- **API Integration**: Embeddings are generated via `/v1/embeddings` endpoint with token-based pricing; responses include metadata (model, tokens used) and require normalization if post-processing dimensionality reduction is applied.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-09-02T04:17:06.347363+05:30

## Related Tags

- benchmark
- dataset
- hackernews
- models
- openai
- producthunt
- rag
- web-crawled

## Source

Original source: https://platform.openai.com/docs/guides/embeddings
