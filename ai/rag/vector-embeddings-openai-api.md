---
title: Vector embeddings | OpenAI API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://platform.openai.com/docs/guides/embeddings
published_at: '2026-08-09T08:08:12.285589+05:30'
collected_at: '2026-08-09T08:08:12.285605+05:30'
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
first_seen: '2026-08-09T08:08:12.285605+05:30'
last_seen: '2026-08-09T08:08:12.285605+05:30'
last_checked: '2026-08-09T08:08:12.285605+05:30'
health_score: 100
---

# Vector embeddings | OpenAI API

## Summary

- **Model Specifications**: `text-embedding-3-small` (1536-dim vector, 62.5k pages/$) and `text-embedding-3-large` (3072-dim vector, 9.6k pages/$) offer reduced costs and improved multilingual performance; both support max 8192 tokens and dimensionality reduction via `dimensions` parameter.
- **Embedding Mechanics**: Outputs are floating-point vectors where cosine similarity/distance metrics quantify text relatedness; dimensionality can be manually truncated (e.g., to 256) with L2 normalization for compatibility with constrained vector stores.
- **API Integration**: Embeddings generated via `/v1/embeddings` endpoint; pricing is token-based; use cases include semantic search, clustering, recommendations, and classification, with Python/JS/Go/cURL examples provided for implementation.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-09T08:08:12.285589+05:30

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
