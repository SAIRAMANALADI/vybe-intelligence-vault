---
title: Vector embeddings | OpenAI API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://platform.openai.com/docs/guides/embeddings
published_at: '2026-08-05T17:07:03.799520+05:30'
collected_at: '2026-08-05T17:07:03.799535+05:30'
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
first_seen: '2026-08-05T17:07:03.799535+05:30'
last_seen: '2026-08-05T17:07:03.799535+05:30'
last_checked: '2026-08-05T17:07:03.799535+05:30'
health_score: 100
---

# Vector embeddings | OpenAI API

## Summary

- **New Embedding Models**: `text-embedding-3-small` and `text-embedding-3-large` offer lower costs, improved multilingual performance, and configurable embedding dimensions (default: 1536/3072) via the `dimensions` parameter, enabling trade-offs between performance and resource usage.

- **Embedding Mechanics**: Text embeddings are vector representations (floating-point lists) where cosine distance measures semantic relatedness; generated via API calls (e.g., `openai.embeddings.create`) and billed per input token.

- **Use Cases & Optimization**: Embeddings enable search, clustering, recommendations, and classification; dimension reduction (e.g., to 256) via `dimensions` or post-processing (with L2 normalization) reduces storage/compute costs without significant performance loss.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-05T17:07:03.799520+05:30

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
