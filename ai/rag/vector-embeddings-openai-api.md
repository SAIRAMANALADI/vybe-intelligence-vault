---
title: Vector embeddings | OpenAI API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://platform.openai.com/docs/guides/embeddings
published_at: '2026-06-27T01:44:01.337359+05:30'
collected_at: '2026-06-27T01:44:01.337374+05:30'
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
first_seen: '2026-06-27T01:44:01.337374+05:30'
last_seen: '2026-06-27T01:44:01.337374+05:30'
last_checked: '2026-06-27T01:44:01.337374+05:30'
health_score: 100
---

# Vector embeddings | OpenAI API

## Summary

- **Model Specifications**: `text-embedding-3-small` (1536D vectors, 62.5k pages/USD, 62.3% MTEB) and `text-embedding-3-large` (3072D vectors, 9.6k pages/USD, 64.6% MTEB) support dynamic dimensionality reduction via `dimensions` parameter, with max input length of 8192 tokens.

- **API Integration**: Embeddings generated via `/v1/embeddings` endpoint; vectors are L2-normalized floating-point lists used for semantic search, clustering, classification, and anomaly detection, billed per input token.

- **Dimensionality Control**: Embedding size can be reduced post-generation (e.g., 3072D → 256D) while preserving conceptual relevance, enabling cost/performance trade-offs for vector databases and downstream ML tasks.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-27T01:44:01.337359+05:30

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
