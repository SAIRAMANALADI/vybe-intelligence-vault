---
title: Vector embeddings | OpenAI API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://platform.openai.com/docs/guides/embeddings
published_at: '2026-08-03T20:52:20.877155+05:30'
collected_at: '2026-08-03T20:52:20.877167+05:30'
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
first_seen: '2026-08-03T20:52:20.877167+05:30'
last_seen: '2026-08-03T20:52:20.877167+05:30'
last_checked: '2026-08-03T20:52:20.877167+05:30'
health_score: 100
---

# Vector embeddings | OpenAI API

## Summary

- **New Embedding Models**: `text-embedding-3-small` (1536-dim, ~62.5k pages/USD) and `text-embedding-3-large` (3072-dim, ~9.6k pages/USD) offer improved multilingual performance, lower costs, and configurable dimensions via the `dimensions` parameter to trade off accuracy for reduced vector size (e.g., 256-dim `text-embedding-3-large` outperforms 1536-dim `text-embedding-ada-002` on MTEB).

- **Embedding Mechanics**: Text embeddings are 1536/3072-dim float vectors measuring semantic relatedness via vector distance (e.g., cosine similarity). API pricing is token-based (~800 tokens/page), with max input length of 8192 tokens. Embeddings are generated via `/v1/embeddings` endpoint and used for search, clustering, recommendations, anomaly detection, and classification.

- **Dimensionality Reduction & Use Cases**: Embeddings can be dynamically truncated (e.g., to 256/1024-dim) using the `dimensions` parameter or post-generation (with L2 normalization) to optimize storage/compute. Applications include semantic search (cosine similarity ranking), code/function retrieval, recommendation systems, and 2D visualization via t-SNE for data exploration.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-03T20:52:20.877155+05:30

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
