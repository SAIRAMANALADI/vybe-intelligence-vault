---
title: Vector embeddings | OpenAI API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://platform.openai.com/docs/guides/embeddings
published_at: '2026-06-28T15:07:35.606156+05:30'
collected_at: '2026-06-28T15:07:35.606169+05:30'
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
first_seen: '2026-06-28T15:07:35.606169+05:30'
last_seen: '2026-06-28T15:07:35.606169+05:30'
last_checked: '2026-06-28T15:07:35.606169+05:30'
health_score: 100
---

# Vector embeddings | OpenAI API

## Summary

- **Model Specifications**: `text-embedding-3-small` (1536-dim, ~62.5k pages/USD) and `text-embedding-3-large` (3072-dim, ~9.6k pages/USD) offer improved multilingual performance, lower costs, and configurable dimensionality via the `dimensions` parameter, with max input length of 8192 tokens.

- **Embedding Mechanics**: Embeddings are vectorized representations (floating-point lists) where cosine similarity between vectors quantifies semantic relatedness; dimensionality can be reduced (e.g., to 256) without significant loss of conceptual fidelity using the `dimensions` API parameter.

- **Use Cases & Implementation**: Enables tasks like semantic search, clustering, recommendations, and anomaly detection; embeddings are generated via API calls (e.g., `openai.embeddings.create`) and can be stored in vector databases for downstream applications, with dynamic dimensionality adjustment supporting storage/compute optimization.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-28T15:07:35.606156+05:30

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
