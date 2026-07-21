---
title: Vector embeddings | OpenAI API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://platform.openai.com/docs/guides/embeddings
published_at: '2026-07-21T22:17:46.570074+05:30'
collected_at: '2026-07-21T22:17:46.570093+05:30'
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
first_seen: '2026-07-21T22:17:46.570093+05:30'
last_seen: '2026-07-21T22:17:46.570093+05:30'
last_checked: '2026-07-21T22:17:46.570093+05:30'
health_score: 100
---

# Vector embeddings | OpenAI API

## Summary

- **Model Specifications**: `text-embedding-3-small` (1536-dim, ~62.5k pages/USD) and `text-embedding-3-large` (3072-dim, ~9.6k pages/USD) offer reduced costs and improved multilingual performance; both support dynamic dimensionality reduction via the `dimensions` parameter (e.g., `text-embedding-3-large` can be truncated to 256-dim while outperforming `text-embedding-ada-002` at 1536-dim).

- **Embedding Mechanics**: Embeddings are L2-normalized vectors representing text relatedness; cosine similarity between query and document embeddings enables retrieval tasks (e.g., search, clustering, recommendations), with performance benchmarked at 62.3% (`small`) and 64.6% (`large`) on MTEB.

- **API Integration**: Embeddings are generated via OpenAI’s API (e.g., `POST /v1/embeddings`) with token-based pricing; optional `dimensions` parameter allows post-generation truncation (e.g., 256-dim) for efficiency, while normalization ensures compatibility with downstream tasks like ML feature encoding or vector database storage.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-21T22:17:46.570074+05:30

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
