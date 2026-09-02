---
title: Vector embeddings | OpenAI API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://platform.openai.com/docs/guides/embeddings
published_at: '2026-09-02T18:27:18.330132+05:30'
collected_at: '2026-09-02T18:27:18.330146+05:30'
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
first_seen: '2026-09-02T18:27:18.330146+05:30'
last_seen: '2026-09-02T18:27:18.330146+05:30'
last_checked: '2026-09-02T18:27:18.330146+05:30'
health_score: 100
---

# Vector embeddings | OpenAI API

## Summary

- **Model Specifications**: `text-embedding-3-small` (1536D vector, 62.5k pages/$) and `text-embedding-3-large` (3072D vector, 9.6k pages/$) offer reduced costs, improved multilingual performance, and configurable dimensionality via the `dimensions` parameter, outperforming `text-embedding-ada-002` (61.0% vs 64.6% on MTEB benchmark).

- **Embedding Mechanics**: Embeddings are floating-point vectors where semantic similarity is measured via vector distance (e.g., cosine similarity). Default dimensions can be truncated (e.g., to 256D) without significant performance loss, requiring L2 normalization post-truncation for consistency.

- **API Integration**: Embeddings are generated via a single API call (`POST /v1/embeddings`) with input text and model specification; token-based pricing applies to input only, with support for batch processing and dynamic dimension reduction for storage/compute efficiency.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-09-02T18:27:18.330132+05:30

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
