---
title: Vector embeddings | OpenAI API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://platform.openai.com/docs/guides/embeddings
published_at: '2026-07-20T03:46:24.049691+05:30'
collected_at: '2026-07-20T03:46:24.049710+05:30'
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
first_seen: '2026-07-20T03:46:24.049710+05:30'
last_seen: '2026-07-20T03:46:24.049710+05:30'
last_checked: '2026-07-20T03:46:24.049710+05:30'
health_score: 100
---

# Vector embeddings | OpenAI API

## Summary

- **New Embedding Models**: `text-embedding-3-small` (1536-dim, ~62.5k pages/USD, 62.3% MTEB) and `text-embedding-3-large` (3072-dim, ~9.6k pages/USD, 64.6% MTEB) offer lower cost, improved multilingual performance, and configurable output dimensions via the `dimensions` parameter.

- **Embedding Mechanics**: Text embeddings are vector representations (floating-point lists) where cosine distance measures semantic relatedness; default dimensions are 1536/3072 but can be reduced (e.g., to 256) without significant performance loss using the `dimensions` API parameter.

- **Use Cases & Implementation**: Embeddings enable search, clustering, recommendations, anomaly detection, and classification; API usage is billed per token, and embeddings can be normalized/dimensionally reduced post-generation for efficiency in vector databases.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-20T03:46:24.049691+05:30

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
