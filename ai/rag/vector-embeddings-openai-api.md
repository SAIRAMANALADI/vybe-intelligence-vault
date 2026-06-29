---
title: Vector embeddings | OpenAI API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://platform.openai.com/docs/guides/embeddings
published_at: '2026-06-29T21:46:37.040032+05:30'
collected_at: '2026-06-29T21:46:37.040048+05:30'
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
first_seen: '2026-06-29T21:46:37.040048+05:30'
last_seen: '2026-06-29T21:46:37.040048+05:30'
last_checked: '2026-06-29T21:46:37.040048+05:30'
health_score: 100
---

# Vector embeddings | OpenAI API

## Summary

- **Model Specifications**: `text-embedding-3-small` (1536-dim, 62.5k pages/USD, 62.3% MTEB) and `text-embedding-3-large` (3072-dim, 9.6k pages/USD, 64.6% MTEB) support dynamic dimensionality reduction via `dimensions` parameter, reducing vector size without significant performance loss (e.g., 256-dim `text-embedding-3-large` outperforms 1536-dim `text-embedding-ada-002`).

- **API Integration**: Embeddings are generated via API calls to `/v1/embeddings` with input text and model specification; response includes a vector of floats (default 1536/3072 dimensions) and token usage metrics (`prompt_tokens`, `total_tokens`).

- **Use Cases & Optimization**: Embeddings enable semantic search, clustering, recommendations, and classification via cosine similarity; dimensionality reduction (`dimensions` parameter) optimizes storage/compute costs while maintaining performance, with normalization required for manual dimension truncation.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-29T21:46:37.040032+05:30

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
