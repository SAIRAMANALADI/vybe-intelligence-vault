---
title: Vector embeddings | OpenAI API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://platform.openai.com/docs/guides/embeddings
published_at: '2026-07-14T19:51:33.441755+05:30'
collected_at: '2026-07-14T19:51:33.441769+05:30'
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
first_seen: '2026-07-14T19:51:33.441769+05:30'
last_seen: '2026-07-14T19:51:33.441769+05:30'
last_checked: '2026-07-14T19:51:33.441769+05:30'
health_score: 100
---

# Vector embeddings | OpenAI API

## Summary

- **Model Specifications**: `text-embedding-3-small` (1536-dim vectors, 62.5k pages/$) and `text-embedding-3-large` (3072-dim vectors, 9.6k pages/$) support up to 8192 tokens, with performance gains of 1.3% and 3.6% respectively on MTEB vs. `text-embedding-ada-002`.

- **Dimensionality Control**: New `dimensions` parameter enables reducing embedding size (e.g., 256-dim `text-embedding-3-large` outperforms 1536-dim `ada-002`) while preserving semantic relevance, optimizing storage/compute costs.

- **API Integration**: Embeddings generated via `/v1/embeddings` endpoint return L2-normalized float vectors (default 1536/3072 dims) with cosine similarity used for downstream tasks (search, clustering, recommendations).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-14T19:51:33.441755+05:30

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
