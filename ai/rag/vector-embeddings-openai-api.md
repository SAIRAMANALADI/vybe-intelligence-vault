---
title: Vector embeddings | OpenAI API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://platform.openai.com/docs/guides/embeddings
published_at: '2026-06-30T10:10:43.776632+05:30'
collected_at: '2026-06-30T10:10:43.776647+05:30'
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
first_seen: '2026-06-30T10:10:43.776647+05:30'
last_seen: '2026-06-30T10:10:43.776647+05:30'
last_checked: '2026-06-30T10:10:43.776647+05:30'
health_score: 100
---

# Vector embeddings | OpenAI API

## Summary

- **New Embedding Models**: `text-embedding-3-small` and `text-embedding-3-large` offer lower costs, improved multilingual performance, and configurable embedding dimensions (default: 1536/3072) via the `dimensions` parameter, enabling trade-offs between performance and vector size.

- **Embedding Mechanics**: Text strings are converted into floating-point vectors where cosine distance measures semantic relatedness; embeddings support use cases like search, clustering, classification, and anomaly detection, with pricing based on input tokens (~800 tokens/page).

- **Dynamic Dimension Reduction**: Embeddings can be truncated (e.g., to 256D) without losing core semantic properties, allowing compatibility with storage/compute constraints (e.g., vector DBs limited to 1024D) while outperforming older models like `text-embedding-ada-002`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-30T10:10:43.776632+05:30

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
