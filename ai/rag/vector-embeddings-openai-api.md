---
title: Vector embeddings | OpenAI API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://platform.openai.com/docs/guides/embeddings
published_at: '2026-08-09T12:55:37.607992+05:30'
collected_at: '2026-08-09T12:55:37.608007+05:30'
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
first_seen: '2026-08-09T12:55:37.608007+05:30'
last_seen: '2026-08-09T12:55:37.608007+05:30'
last_checked: '2026-08-09T12:55:37.608007+05:30'
health_score: 100
---

# Vector embeddings | OpenAI API

## Summary

- **Model Specifications**: `text-embedding-3-small` (1536-dim vectors, ~62.5k pages/$) and `text-embedding-3-large` (3072-dim vectors, ~9.6k pages/$) offer lower costs and improved multilingual performance; both support max 8192-token inputs and dynamic dimensionality reduction via the `dimensions` parameter.

- **Embedding Mechanics**: Embeddings are float vectors where cosine distance measures semantic relatedness; dimensionality can be reduced (e.g., to 256) without significant performance loss, enabling efficient storage and retrieval in vector databases.

- **Use Cases**: Embeddings enable search, clustering, recommendations, anomaly detection, and classification; cosine similarity ranks relevance, and t-SNE visualizes high-dimensional embeddings (e.g., Amazon reviews colored by star rating).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-09T12:55:37.607992+05:30

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
