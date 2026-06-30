---
title: Vector embeddings | OpenAI API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://platform.openai.com/docs/guides/embeddings
published_at: '2026-06-30T22:52:33.630047+05:30'
collected_at: '2026-06-30T22:52:33.630061+05:30'
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
first_seen: '2026-06-30T22:52:33.630061+05:30'
last_seen: '2026-06-30T22:52:33.630061+05:30'
last_checked: '2026-06-30T22:52:33.630061+05:30'
health_score: 100
---

# Vector embeddings | OpenAI API

## Summary

- **Model Specifications**: `text-embedding-3-small` (1536D, 62.5k pages/$, 62.3% MTEB) and `text-embedding-3-large` (3072D, 9.6k pages/$, 64.6% MTEB) support dynamic dimension reduction via `dimensions` parameter, enabling trade-offs between vector size and performance.

- **API Integration**: Embeddings are generated via OpenAI’s `/v1/embeddings` endpoint, returning normalized float vectors (default 1536D/3072D) with token-based pricing; cosine similarity is used for relatedness measurement in downstream tasks.

- **Use Cases**: Embeddings enable semantic search, clustering, recommendation, anomaly detection, and classification; dimension reduction (e.g., to 256D) maintains performance while optimizing storage/compute costs.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-30T22:52:33.630047+05:30

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
