---
title: Vector embeddings | OpenAI API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://platform.openai.com/docs/guides/embeddings
published_at: '2026-06-30T20:18:29.126048+05:30'
collected_at: '2026-06-30T20:18:29.126067+05:30'
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
first_seen: '2026-06-30T20:18:29.126067+05:30'
last_seen: '2026-06-30T20:18:29.126067+05:30'
last_checked: '2026-06-30T20:18:29.126067+05:30'
health_score: 100
---

# Vector embeddings | OpenAI API

## Summary

- **Model Specifications**: `text-embedding-3-small` (1536-dim, ~62.5k pages/USD, 62.3% MTEB) and `text-embedding-3-large` (3072-dim, ~9.6k pages/USD, 64.6% MTEB) offer reduced costs, improved multilingual performance, and configurable embedding dimensions via API parameter.

- **Embedding Mechanics**: Embeddings are normalized L2 vectors (default 1536/3072 dims) where cosine distance measures semantic relatedness; dimensionality can be reduced post-generation (e.g., to 256) without significant loss of conceptual fidelity using the `dimensions` parameter.

- **Use Cases & Implementation**: Enables search, clustering, recommendations, and classification via vector similarity; API supports dynamic dimension adjustment (e.g., truncating to 1024 for storage constraints) and integrates with ML pipelines (e.g., t-SNE for 2D visualization).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-30T20:18:29.126048+05:30

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
