---
title: Vector embeddings | OpenAI API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://platform.openai.com/docs/guides/embeddings
published_at: '2026-06-28T10:25:10.385475+05:30'
collected_at: '2026-06-28T10:25:10.385487+05:30'
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
first_seen: '2026-06-28T10:25:10.385487+05:30'
last_seen: '2026-06-28T10:25:10.385487+05:30'
last_checked: '2026-06-28T10:25:10.385487+05:30'
health_score: 100
---

# Vector embeddings | OpenAI API

## Summary

- **Model Specifications**: `text-embedding-3-small` (1536D vectors, ~62.5k pages/USD, 62.3% MTEB) and `text-embedding-3-large` (3072D vectors, ~9.6k pages/USD, 64.6% MTEB) support dynamic dimensionality reduction via `dimensions` parameter, reducing vector size without significant performance loss (e.g., 256D `text-embedding-3-large` outperforms 1536D `text-embedding-ada-002`).

- **API Integration**: Embeddings are generated via OpenAI’s API (`POST /v1/embeddings`) with input token pricing; vectors are L2-normalized floating-point arrays used for semantic similarity tasks (cosine distance metric recommended for retrieval).

- **Use Cases**: Enables search, clustering, recommendations, anomaly detection, and classification; supports dynamic dimensionality adjustment for storage/compute efficiency (e.g., truncating to 1024D for vector databases).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-28T10:25:10.385475+05:30

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
