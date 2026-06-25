---
title: Vector embeddings | OpenAI API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://platform.openai.com/docs/guides/embeddings
published_at: '2026-06-25T20:48:05.587875+05:30'
collected_at: '2026-06-25T20:48:05.587890+05:30'
tags:
- benchmark
- dataset
- hackernews
- openai
- producthunt
- rag
- web-crawled
- workflows
status: active
resource_id: blog:vector-embeddings-openai-api
first_seen: '2026-06-25T20:48:05.587890+05:30'
last_seen: '2026-06-25T20:48:05.587890+05:30'
last_checked: '2026-06-25T20:48:05.587890+05:30'
health_score: 100
---

# Vector embeddings | OpenAI API

## Summary

- **Model Specifications**: New `text-embedding-3-small` (1536-dim, ~62.5k pages/USD) and `text-embedding-3-large` (3072-dim, ~9.6k pages/USD) embeddings offer lower costs, improved multilingual performance, and configurable dimensionality via the `dimensions` parameter, outperforming `text-embedding-ada-002` (61.0% vs. 62.3%/64.6% on MTEB benchmark).

- **Technical Implementation**: Embeddings are L2-normalized vectors (default 1536/3072 dims) generated via API calls (`/v1/embeddings`) with token-based pricing; dimensionality reduction is supported via truncation/normalization (e.g., reducing to 256 dims while retaining performance).

- **Use Cases & Workflow**: Enables semantic search, clustering, and classification via cosine similarity; supports dynamic dimension adjustment for vector databases (e.g., reducing to 1024 dims for compatibility) and integrates with ML pipelines (e.g., regression) by encoding text into dense vectors for downstream tasks.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-25T20:48:05.587875+05:30

## Related Tags

- benchmark
- dataset
- hackernews
- openai
- producthunt
- rag
- web-crawled
- workflows

## Source

Original source: https://platform.openai.com/docs/guides/embeddings
