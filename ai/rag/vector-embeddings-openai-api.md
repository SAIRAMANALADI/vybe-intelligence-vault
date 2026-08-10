---
title: Vector embeddings | OpenAI API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://platform.openai.com/docs/guides/embeddings
published_at: '2026-08-10T13:44:54.520018+05:30'
collected_at: '2026-08-10T13:44:54.520029+05:30'
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
first_seen: '2026-08-10T13:44:54.520029+05:30'
last_seen: '2026-08-10T13:44:54.520029+05:30'
last_checked: '2026-08-10T13:44:54.520029+05:30'
health_score: 100
---

# Vector embeddings | OpenAI API

## Summary

- **Model Specifications**:
  - `text-embedding-3-small` (1536-dim vectors, ~62.5k pages/USD, 62.3% MTEB score) and `text-embedding-3-large` (3072-dim vectors, ~9.6k pages/USD, 64.6% MTEB score) support dynamic dimensionality reduction via `dimensions` parameter, enabling trade-offs between performance and cost.

- **API Integration**:
  - Embeddings generated via `/v1/embeddings` endpoint with input token pricing; default dimensions are 1536/3072 but can be reduced (e.g., to 256) without significant performance loss, with vectors requiring L2 normalization if manually truncated.

- **Use Cases**:
  - Enables semantic search (cosine similarity), clustering, recommendations, and anomaly detection; demonstrated in code examples for text search, code search, and 2D visualization via t-SNE.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-10T13:44:54.520018+05:30

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
