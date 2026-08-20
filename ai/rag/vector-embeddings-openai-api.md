---
title: Vector embeddings | OpenAI API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://platform.openai.com/docs/guides/embeddings
published_at: '2026-08-10T21:51:53.564936+05:30'
collected_at: '2026-08-10T21:51:53.564946+05:30'
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
first_seen: '2026-08-10T21:51:53.564946+05:30'
last_seen: '2026-08-10T21:51:53.564946+05:30'
last_checked: '2026-08-10T21:51:53.564946+05:30'
health_score: 100
---

# Vector embeddings | OpenAI API

## Summary

- **Model Specifications**:
  - `text-embedding-3-small` (1536D) and `text-embedding-3-large` (3072D) are third-gen OpenAI embedding models with reduced cost, improved multilingual performance, and configurable dimensionality via the `dimensions` parameter.
  - Performance on MTEB eval: 62.3% (`small`), 64.6% (`large`), outperforming `text-embedding-ada-002` (61.0%) at higher token efficiency.

- **API Integration**:
  - Embeddings are generated via `/v1/embeddings` endpoint with input text tokenized and billed per token (e.g., ~800 tokens/page).
  - Response includes a vector of floats (default 1536D/`small` or 3072D/`large`) and metadata (`usage`, `model`).

- **Dimensionality Control**:
  - Embedding size can be reduced post-generation (e.g., truncating to 256D) without significant performance loss, enabling cost/accuracy trade-offs.
  - Requires L2 normalization if dimensions are manually adjusted for downstream tasks (e.g., vector databases).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-10T21:51:53.564936+05:30

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
