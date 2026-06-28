---
title: Vector embeddings | OpenAI API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://platform.openai.com/docs/guides/embeddings
published_at: '2026-06-29T03:49:21.780755+05:30'
collected_at: '2026-06-29T03:49:21.780770+05:30'
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
first_seen: '2026-06-29T03:49:21.780770+05:30'
last_seen: '2026-06-29T03:49:21.780770+05:30'
last_checked: '2026-06-29T03:49:21.780770+05:30'
health_score: 100
---

# Vector embeddings | OpenAI API

## Summary

- **New Embedding Models**: `text-embedding-3-small` and `text-embedding-3-large` offer lower costs, improved multilingual performance, and configurable output dimensions (default: 1536/3072) via the `dimensions` parameter for dimensionality reduction while preserving semantic properties.

- **Embedding Mechanics**: Text embeddings are floating-point vectors where cosine distance measures semantic relatedness; applications include search, clustering, recommendations, anomaly detection, and classification, with pricing based on input token count (~800 tokens/page).

- **API Integration**: Embeddings are generated via API calls (e.g., `openai.embeddings.create`) with support for dynamic dimension truncation (e.g., reducing 3072D `text-embedding-3-large` to 256D) and normalization for downstream tasks like vector search or ML feature encoding.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-29T03:49:21.780755+05:30

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
