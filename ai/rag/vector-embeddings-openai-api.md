---
title: Vector embeddings | OpenAI API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://platform.openai.com/docs/guides/embeddings
published_at: '2026-07-10T13:23:09.658249+05:30'
collected_at: '2026-07-10T13:23:09.658262+05:30'
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
first_seen: '2026-07-10T13:23:09.658262+05:30'
last_seen: '2026-07-10T13:23:09.658262+05:30'
last_checked: '2026-07-10T13:23:09.658262+05:30'
health_score: 100
---

# Vector embeddings | OpenAI API

## Summary

- **Model Specifications**: `text-embedding-3-small` (1536-dim vectors, ~62.5k pages/USD, 62.3% MTEB score) and `text-embedding-3-large` (3072-dim vectors, ~9.6k pages/USD, 64.6% MTEB score) support dynamic dimensionality reduction via `dimensions` parameter, enabling trade-offs between performance and cost.

- **Embedding Mechanics**: Vectors represent text relatedness via cosine similarity; input tokens determine pricing (~800 tokens/page). Default dimensions can be reduced post-generation (e.g., 256-dim `text-embedding-3-large` outperforms 1536-dim `ada-002`).

- **Use Cases**: Enables search, clustering, recommendations, anomaly detection, and classification; supports L2 normalization for dimension reduction and cosine similarity for retrieval (e.g., code/function search via embeddings).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-10T13:23:09.658249+05:30

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
