---
title: Vector embeddings | OpenAI API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://platform.openai.com/docs/guides/embeddings
published_at: '2026-08-04T22:41:18.964774+05:30'
collected_at: '2026-08-04T22:41:18.964786+05:30'
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
first_seen: '2026-08-04T22:41:18.964786+05:30'
last_seen: '2026-08-04T22:41:18.964786+05:30'
last_checked: '2026-08-04T22:41:18.964786+05:30'
health_score: 100
---

# Vector embeddings | OpenAI API

## Summary

- **New Embedding Models**: `text-embedding-3-small` and `text-embedding-3-large` offer lower costs, improved multilingual performance, and configurable embedding dimensions via the `dimensions` parameter (default: 1536/3072, reducible to 256+ without significant performance loss).

- **Embedding Mechanics**: Text embeddings are high-dimensional vectors (floating-point lists) where cosine similarity between vectors measures semantic relatedness; token-based pricing applies (e.g., ~62.5k pages/$ for `text-embedding-3-small` at ~800 tokens/page).

- **Use Cases & Optimization**: Enables search, clustering, recommendations, and classification; dimension reduction (via `dimensions` parameter) optimizes storage/compute while maintaining performance (e.g., 256D `text-embedding-3-large` outperforms 1536D `ada-002`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-04T22:41:18.964774+05:30

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
