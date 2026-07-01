---
title: Vector embeddings | OpenAI API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://platform.openai.com/docs/guides/embeddings
published_at: '2026-07-02T01:50:12.246271+05:30'
collected_at: '2026-07-02T01:50:12.246284+05:30'
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
first_seen: '2026-07-02T01:50:12.246284+05:30'
last_seen: '2026-07-02T01:50:12.246284+05:30'
last_checked: '2026-07-02T01:50:12.246284+05:30'
health_score: 100
---

# Vector embeddings | OpenAI API

## Summary

- **Model Specifications**: `text-embedding-3-small` (1536-dim, 62.5k pages/USD) and `text-embedding-3-large` (3072-dim, 9.6k pages/USD) offer reduced costs, improved multilingual performance, and configurable dimensionality via the `dimensions` parameter, with max input token limit of 8192.

- **Embedding Mechanics**: Text strings are converted into dense vector embeddings (floating-point lists) where cosine similarity between vectors quantifies semantic relatedness; dimensionality can be dynamically reduced (e.g., to 256) without significant performance loss using the `dimensions` API parameter.

- **Use Cases & Implementation**: Embeddings enable semantic search, clustering, recommendations, and classification; API integration requires tokenized input (billed per token) and returns normalized vectors for downstream tasks like vector database storage or ML feature extraction.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-02T01:50:12.246271+05:30

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
