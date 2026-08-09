---
title: Vector embeddings | OpenAI API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://platform.openai.com/docs/guides/embeddings
published_at: '2026-08-09T15:36:00.878587+05:30'
collected_at: '2026-08-09T15:36:00.878601+05:30'
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
first_seen: '2026-08-09T15:36:00.878601+05:30'
last_seen: '2026-08-09T15:36:00.878601+05:30'
last_checked: '2026-08-09T15:36:00.878601+05:30'
health_score: 100
---

# Vector embeddings | OpenAI API

## Summary

- **Model Specifications**: `text-embedding-3-small` (1536-dim vectors, ~62.5k pages/USD) and `text-embedding-3-large` (3072-dim vectors, ~9.6k pages/USD) offer lower costs and improved multilingual performance; both support dynamic dimension reduction via the `dimensions` parameter.
- **Embedding Mechanics**: Vectors represent text relatedness via cosine distance; default dimensions can be truncated (e.g., to 256) without significant loss of semantic fidelity, enabling cost/performance trade-offs.
- **API Integration**: Embeddings are generated via `/v1/embeddings` endpoint with token-based pricing; response includes vector data and metadata (e.g., `prompt_tokens`, `total_tokens`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-09T15:36:00.878587+05:30

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
