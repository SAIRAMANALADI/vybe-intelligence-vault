---
title: Vector embeddings | OpenAI API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://platform.openai.com/docs/guides/embeddings
published_at: '2026-07-20T15:10:03.066926+05:30'
collected_at: '2026-07-20T15:10:03.066939+05:30'
tags:
- benchmark
- dataset
- hackernews
- openai
- producthunt
- rag
- web-crawled
- workflows
status: active
resource_id: blog:vector-embeddings-openai-api
first_seen: '2026-07-20T15:10:03.066939+05:30'
last_seen: '2026-07-20T15:10:03.066939+05:30'
last_checked: '2026-07-20T15:10:03.066939+05:30'
health_score: 100
---

# Vector embeddings | OpenAI API

## Summary

- **Model Specifications**:
  - `text-embedding-3-small` (1536-dim vector, ~62.5k pages/USD, 62.3% MTEB score) and `text-embedding-3-large` (3072-dim vector, ~9.6k pages/USD, 64.6% MTEB score) support max 8192 tokens, with configurable dimensionality via `dimensions` parameter for cost-performance trade-offs.

- **Embedding Mechanics**:
  - Text strings are converted to floating-point vectors where cosine distance quantifies semantic relatedness; embeddings are billed per input token and can be normalized (L2) or truncated (via `dimensions`) to reduce storage/compute overhead without significant loss of conceptual fidelity.

- **API Integration**:
  - Embeddings are retrieved via `/v1/embeddings` endpoint (e.g., `model: "text-embedding-3-small"`), returning a JSON response with vector data and token usage; vectors are usable in vector databases for search, clustering, classification, or anomaly detection workflows.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-20T15:10:03.066926+05:30

## Related Tags

- benchmark
- dataset
- hackernews
- openai
- producthunt
- rag
- web-crawled
- workflows

## Source

Original source: https://platform.openai.com/docs/guides/embeddings
