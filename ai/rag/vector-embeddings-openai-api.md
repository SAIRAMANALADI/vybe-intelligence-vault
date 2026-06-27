---
title: Vector embeddings | OpenAI API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://platform.openai.com/docs/guides/embeddings
published_at: '2026-06-28T03:50:40.671417+05:30'
collected_at: '2026-06-28T03:50:40.671433+05:30'
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
first_seen: '2026-06-28T03:50:40.671433+05:30'
last_seen: '2026-06-28T03:50:40.671433+05:30'
last_checked: '2026-06-28T03:50:40.671433+05:30'
health_score: 100
---

# Vector embeddings | OpenAI API

## Summary

- **Model Specifications**: `text-embedding-3-small` (1536-dim, ~62.5k pages/USD, 62.3% MTEB) and `text-embedding-3-large` (3072-dim, ~9.6k pages/USD, 64.6% MTEB) support dynamic dimension reduction via `dimensions` parameter, enabling trade-offs between performance and cost while maintaining concept-representing properties.

- **API Integration**: Embeddings are generated via OpenAI’s embeddings API (`POST /v1/embeddings`) with input text tokenized to floating-point vectors; pricing is per token, and outputs include metadata (e.g., `prompt_tokens`, `total_tokens`) and normalized L2 embeddings for cosine similarity applications.

- **Use Cases & Optimization**: Embeddings enable semantic search, clustering, and recommendation systems via cosine similarity; dimension reduction (e.g., to 256D) via `dimensions` parameter reduces storage/compute costs without significant performance loss, with normalization critical for accurate similarity comparisons.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-28T03:50:40.671417+05:30

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
