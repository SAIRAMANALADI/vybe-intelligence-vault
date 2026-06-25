---
title: Vector embeddings | OpenAI API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://platform.openai.com/docs/guides/embeddings
published_at: '2026-06-25T22:58:24.030393+05:30'
collected_at: '2026-06-25T22:58:24.030405+05:30'
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
first_seen: '2026-06-25T22:58:24.030405+05:30'
last_seen: '2026-06-25T22:58:24.030405+05:30'
last_checked: '2026-06-25T22:58:24.030405+05:30'
health_score: 100
---

# Vector embeddings | OpenAI API

## Summary

- **Model Specifications**: `text-embedding-3-small` (1536-dim, 62.5k pages/$) and `text-embedding-3-large` (3072-dim, 9.6k pages/$) offer reduced costs, improved multilingual performance, and adjustable dimensionality via the `dimensions` parameter, outperforming `text-embedding-ada-002` (61.0% vs. 62.3%/64.6% on MTEB benchmark).

- **Embedding Mechanics**: Embeddings are floating-point vectors where cosine similarity/distance quantifies text relatedness; default dimensions (1536/3072) can be truncated (e.g., to 256) without significant performance loss, enabling cost-efficient storage and retrieval in vector databases.

- **API Usage**: Embeddings are generated via `/v1/embeddings` endpoint with input token pricing; outputs include vectors (e.g., `[-0.0069, -0.0053, ...]`) and metadata (e.g., `prompt_tokens`), with normalization required for manual dimension reduction.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-25T22:58:24.030393+05:30

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
