---
title: Vector embeddings | OpenAI API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://platform.openai.com/docs/guides/embeddings
published_at: '2026-06-26T04:20:30.000584+05:30'
collected_at: '2026-06-26T04:20:30.000594+05:30'
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
first_seen: '2026-06-26T04:20:30.000594+05:30'
last_seen: '2026-06-26T04:20:30.000594+05:30'
last_checked: '2026-06-26T04:20:30.000594+05:30'
health_score: 100
---

# Vector embeddings | OpenAI API

## Summary

- **Model Specifications**: `text-embedding-3-small` (1536D vectors, ~62.5k pages/USD, 62.3% MTEB) and `text-embedding-3-large` (3072D vectors, ~9.6k pages/USD, 64.6% MTEB) support dynamic dimension reduction via `dimensions` parameter, enabling trade-offs between vector size and performance.

- **API Integration**: Embeddings are generated via API calls (e.g., `POST /v1/embeddings`) with input text tokenized and billed per token; responses include normalized float vectors (default 1536/3072D) and metadata (e.g., `prompt_tokens`).

- **Use Cases & Techniques**: Embeddings enable semantic search (cosine similarity), clustering, recommendation systems, and anomaly detection; dimension reduction (e.g., to 256D) via `dimensions` or manual truncation (with L2 normalization) optimizes storage/compute without significant accuracy loss.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-26T04:20:30.000584+05:30

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
