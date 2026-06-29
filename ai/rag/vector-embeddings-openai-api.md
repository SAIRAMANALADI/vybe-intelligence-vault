---
title: Vector embeddings | OpenAI API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://platform.openai.com/docs/guides/embeddings
published_at: '2026-06-29T16:59:08.173610+05:30'
collected_at: '2026-06-29T16:59:08.173617+05:30'
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
first_seen: '2026-06-29T16:59:08.173617+05:30'
last_seen: '2026-06-29T16:59:08.173617+05:30'
last_checked: '2026-06-29T16:59:08.173617+05:30'
health_score: 100
---

# Vector embeddings | OpenAI API

## Summary

- **New Models & Performance**: `text-embedding-3-small` (1536-dim, 62.3% MTEB) and `text-embedding-3-large` (3072-dim, 64.6% MTEB) offer lower cost, improved multilingual performance, and configurable output dimensions via the `dimensions` parameter.

- **Embedding Mechanics**: Text embeddings are floating-point vectors where cosine similarity between vectors measures semantic relatedness; default dimensions can be reduced (e.g., to 256) without significant performance loss using the `dimensions` API parameter.

- **Use Cases & API Integration**: Embeddings enable search, clustering, recommendations, and classification; API calls require input text and model selection (e.g., `text-embedding-3-small`), with responses containing vectors and metadata (e.g., token usage).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-29T16:59:08.173610+05:30

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
