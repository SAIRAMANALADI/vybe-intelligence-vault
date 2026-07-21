---
title: Vector embeddings | OpenAI API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://platform.openai.com/docs/guides/embeddings
published_at: '2026-07-21T09:19:26.395716+05:30'
collected_at: '2026-07-21T09:19:26.395724+05:30'
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
first_seen: '2026-07-21T09:19:26.395724+05:30'
last_seen: '2026-07-21T09:19:26.395724+05:30'
last_checked: '2026-07-21T09:19:26.395724+05:30'
health_score: 100
---

# Vector embeddings | OpenAI API

## Summary

- **Model Specifications**:
  - `text-embedding-3-small` (1536-dim vector, ~62.5k pages/USD, 62.3% MTEB score) and `text-embedding-3-large` (3072-dim vector, ~9.6k pages/USD, 64.6% MTEB score) offer reduced costs and improved multilingual performance via dynamic dimension reduction (`dimensions` parameter) while maintaining concept-representing properties.

- **API Integration**:
  - Embeddings are generated via API calls (e.g., `POST /v1/embeddings`) with input text tokenized and billed per token; response includes a normalized float vector (default 1536/3072 dims) and metadata (e.g., `prompt_tokens`, `model`).

- **Use Case Mechanics**:
  - Vector similarity (cosine distance) drives applications (search, clustering, recommendations); dimension reduction (e.g., to 256) enables trade-offs between performance and storage/compute efficiency, with L2 normalization required for manual truncation.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-21T09:19:26.395716+05:30

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
