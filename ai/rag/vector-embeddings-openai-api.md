---
title: Vector embeddings | OpenAI API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://platform.openai.com/docs/guides/embeddings
published_at: '2026-07-18T16:54:20.307284+05:30'
collected_at: '2026-07-18T16:54:20.307291+05:30'
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
first_seen: '2026-07-18T16:54:20.307291+05:30'
last_seen: '2026-07-18T16:54:20.307291+05:30'
last_checked: '2026-07-18T16:54:20.307291+05:30'
health_score: 100
---

# Vector embeddings | OpenAI API

## Summary

- **Model Specifications**: `text-embedding-3-small` (1536D vectors, 62.5K pages/$) and `text-embedding-3-large` (3072D vectors, 9.6K pages/$, 64.6% MTEB score) support up to 8192 tokens, with dimensionality reduction via `dimensions` parameter (e.g., 256D for `text-embedding-3-large` retains performance vs. 1536D `ada-002`).

- **API Integration**: Embeddings are generated via `/v1/embeddings` endpoint, returning L2-normalized float vectors; cosine similarity is default for relatedness measurement; token-based pricing applies to input text.

- **Use Cases**: Enables semantic search, clustering, classification, and anomaly detection; supports dynamic dimensionality reduction (e.g., 3072D → 1024D) for vector storage efficiency; demonstrated in code/text search, recommendations, and 2D visualization via t-SNE.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-18T16:54:20.307284+05:30

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
