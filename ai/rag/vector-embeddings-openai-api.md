---
title: Vector embeddings | OpenAI API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://platform.openai.com/docs/guides/embeddings
published_at: '2026-06-24T20:39:58.411369+05:30'
collected_at: '2026-06-24T20:39:58.411383+05:30'
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
first_seen: '2026-06-24T20:39:58.411383+05:30'
last_seen: '2026-06-24T20:39:58.411383+05:30'
last_checked: '2026-06-24T20:39:58.411383+05:30'
health_score: 100
---

# Vector embeddings | OpenAI API

## Summary

- **New embedding models**: `text-embedding-3-small` (1536-dim, ~62.5k pages/USD) and `text-embedding-3-large` (3072-dim, ~9.6k pages/USD) offer lower cost, improved multilingual performance, and adjustable dimensions via API parameter for dimensionality reduction while maintaining concept-representation.

- **Embedding mechanics**: Text strings are converted to dense vector embeddings (floating-point lists) where cosine similarity between vectors quantifies semantic relatedness; default dimensions are 1536/3072, but can be reduced dynamically (e.g., to 256) without significant performance loss, enabling cost/storage efficiency.

- **API integration**: Embeddings are generated via REST API (`POST /v1/embeddings`) with token-based pricing; responses include vectors and metadata (e.g., `prompt_tokens`), and can be normalized (`L2 norm`) or truncated for downstream tasks like search, clustering, or ML feature extraction.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-24T20:39:58.411369+05:30

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
