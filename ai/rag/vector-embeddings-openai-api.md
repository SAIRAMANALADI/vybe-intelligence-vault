---
title: Vector embeddings | OpenAI API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://platform.openai.com/docs/guides/embeddings
published_at: '2026-07-02T20:04:16.878166+05:30'
collected_at: '2026-07-02T20:04:16.878183+05:30'
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
first_seen: '2026-07-02T20:04:16.878183+05:30'
last_seen: '2026-07-02T20:04:16.878183+05:30'
last_checked: '2026-07-02T20:04:16.878183+05:30'
health_score: 100
---

# Vector embeddings | OpenAI API

## Summary

- **Model Specifications**: New `text-embedding-3-small` (1536-dim) and `text-embedding-3-large` (3072-dim) models offer lower costs, improved multilingual performance, and configurable dimensionality via the `dimensions` parameter, enabling trade-offs between vector size and accuracy.

- **Embedding Generation**: Embeddings are generated via API calls to `/v1/embeddings` with input text, returning a vector of floating-point numbers; token-based pricing applies (e.g., ~62.5k pages per dollar for `text-embedding-3-small`).

- **Use Cases & Optimization**: Embeddings enable semantic search, clustering, and classification; dimensionality reduction (e.g., to 256) is supported while maintaining performance, and cosine similarity is used for relevance scoring in retrieval tasks.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-02T20:04:16.878166+05:30

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
