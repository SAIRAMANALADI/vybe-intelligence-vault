---
title: Vector embeddings | OpenAI API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://platform.openai.com/docs/guides/embeddings
published_at: '2026-09-01T19:10:23.012797+05:30'
collected_at: '2026-09-01T19:10:23.012811+05:30'
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
first_seen: '2026-09-01T19:10:23.012811+05:30'
last_seen: '2026-09-01T19:10:23.012811+05:30'
last_checked: '2026-09-01T19:10:23.012811+05:30'
health_score: 100
---

# Vector embeddings | OpenAI API

## Summary

- **New Embedding Models**: `text-embedding-3-small` (1536-dim, 62.5k pages/$) and `text-embedding-3-large` (3072-dim, 9.6k pages/$) offer lower costs, improved multilingual performance, and adjustable dimensions via API parameter for cost-performance trade-offs.

- **Embedding Mechanics**: Text strings are converted to floating-point vectors (default 1536/3072 dims) where cosine distance measures semantic relatedness; models support dynamic dimension reduction (e.g., to 256) while preserving conceptual integrity via normalization.

- **API Integration**: Embeddings are retrieved via POST requests to `/v1/embeddings` with token-based pricing; responses include vectors and metadata, enabling downstream tasks like search, clustering, or classification in vector databases.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-09-01T19:10:23.012797+05:30

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
