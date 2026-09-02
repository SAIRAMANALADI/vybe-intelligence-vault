---
title: Vector embeddings | OpenAI API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://platform.openai.com/docs/guides/embeddings
published_at: '2026-09-02T10:21:57.283341+05:30'
collected_at: '2026-09-02T10:21:57.283359+05:30'
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
first_seen: '2026-09-02T10:21:57.283359+05:30'
last_seen: '2026-09-02T10:21:57.283359+05:30'
last_checked: '2026-09-02T10:21:57.283359+05:30'
health_score: 100
---

# Vector embeddings | OpenAI API

## Summary

- **Model Specifications**: `text-embedding-3-small` (1536D default, 62.5k pages/USD) and `text-embedding-3-large` (3072D default, 9.6k pages/USD) offer improved multilingual performance, lower costs, and configurable dimensionality via the `dimensions` parameter for efficiency trade-offs.

- **Embedding Mechanics**: Embeddings are L2-normalized float vectors where cosine similarity quantifies text relatedness; dimensionality can be reduced post-generation (e.g., truncating to 256D) while preserving semantic properties via L2 normalization.

- **API Integration**: Embeddings are generated via a single API call (e.g., `POST /v1/embeddings`) with input tokenization-based billing; outputs include vectors (default 1536/3072D) and metadata, usable in vector databases for tasks like search, clustering, or classification.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-09-02T10:21:57.283341+05:30

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
