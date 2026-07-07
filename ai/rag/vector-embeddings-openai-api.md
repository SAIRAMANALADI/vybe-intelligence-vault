---
title: Vector embeddings | OpenAI API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://platform.openai.com/docs/guides/embeddings
published_at: '2026-07-07T15:37:51.151862+05:30'
collected_at: '2026-07-07T15:37:51.151879+05:30'
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
first_seen: '2026-07-07T15:37:51.151879+05:30'
last_seen: '2026-07-07T15:37:51.151879+05:30'
last_checked: '2026-07-07T15:37:51.151879+05:30'
health_score: 100
---

# Vector embeddings | OpenAI API

## Summary

- **New Models & Performance**: `text-embedding-3-small` (1536D, 62.5k pages/$) and `text-embedding-3-large` (3072D, 9.6k pages/$) offer lower costs, higher multilingual performance, and dimensionality control via the `dimensions` parameter, outperforming `text-embedding-ada-002` (61.0% vs 64.6% on MTEB benchmark).

- **Embedding Mechanics**: Text strings are converted to floating-point vectors (default 1536D/3072D) where cosine distance measures semantic relatedness; dimensions can be reduced (e.g., to 256D) without significant performance loss, enabling cost-efficient vector storage and retrieval.

- **API Integration**: Embeddings are generated via the `/v1/embeddings` endpoint (tokenized input, priced per token) and returned as JSON with metadata; use cases include search, clustering, recommendations, anomaly detection, and ML feature encoding.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-07T15:37:51.151862+05:30

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
