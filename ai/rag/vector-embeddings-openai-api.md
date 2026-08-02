---
title: Vector embeddings | OpenAI API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://platform.openai.com/docs/guides/embeddings
published_at: '2026-08-03T01:09:26.854324+05:30'
collected_at: '2026-08-03T01:09:26.854336+05:30'
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
first_seen: '2026-08-03T01:09:26.854336+05:30'
last_seen: '2026-08-03T01:09:26.854336+05:30'
last_checked: '2026-08-03T01:09:26.854336+05:30'
health_score: 100
---

# Vector embeddings | OpenAI API

## Summary

- **Model Specifications**: `text-embedding-3-small` (1536D vector, 62.5K pages/USD) and `text-embedding-3-large` (3072D vector, 9.6K pages/USD) offer reduced costs, improved multilingual performance, and adjustable dimensions via API parameter for performance-cost trade-offs.

- **Embedding Mechanics**: Text embeddings are floating-point vectors measuring semantic relatedness; cosine distance between vectors determines similarity, enabling applications in search, clustering, recommendations, anomaly detection, and classification.

- **Dimensionality Control**: Embedding vectors can be truncated (e.g., to 256D) without losing core semantics by setting the `dimensions` parameter, optimizing storage/compute costs while maintaining performance (e.g., 256D `text-embedding-3-large` outperforms 1536D `text-embedding-ada-002` on MTEB).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-03T01:09:26.854324+05:30

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
