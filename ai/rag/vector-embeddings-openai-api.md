---
title: Vector embeddings | OpenAI API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://platform.openai.com/docs/guides/embeddings
published_at: '2026-06-24T22:51:29.696913+05:30'
collected_at: '2026-06-24T22:51:29.696927+05:30'
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
first_seen: '2026-06-24T22:51:29.696927+05:30'
last_seen: '2026-06-24T22:51:29.696927+05:30'
last_checked: '2026-06-24T22:51:29.696927+05:30'
health_score: 100
---

# Vector embeddings | OpenAI API

## Summary

- **New Embedding Models**: `text-embedding-3-small` (1536-dim default, 62.5k pages/$) and `text-embedding-3-large` (3072-dim default, 9.6k pages/$) offer lower costs, improved multilingual performance, and adjustable dimensions via API parameter for performance/cost trade-offs.

- **Embedding Mechanics**: Text strings are converted to floating-point vectors (embeddings) where cosine similarity quantifies semantic relatedness; dimensions can be reduced post-generation (e.g., to 256) while preserving core properties via L2 normalization.

- **API Integration**: Embeddings are retrieved via `/v1/embeddings` endpoint with input token pricing; use cases include semantic search, clustering, recommendations, and ML feature encoding, with dynamic dimension reduction enabling compatibility with constrained vector databases.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-24T22:51:29.696913+05:30

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
