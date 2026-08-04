---
title: Vector embeddings | OpenAI API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://platform.openai.com/docs/guides/embeddings
published_at: '2026-08-04T17:11:18.032108+05:30'
collected_at: '2026-08-04T17:11:18.032122+05:30'
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
first_seen: '2026-08-04T17:11:18.032122+05:30'
last_seen: '2026-08-04T17:11:18.032122+05:30'
last_checked: '2026-08-04T17:11:18.032122+05:30'
health_score: 100
---

# Vector embeddings | OpenAI API

## Summary

- **New Embedding Models**: `text-embedding-3-small` (1536-dim) and `text-embedding-3-large` (3072-dim) offer lower costs, improved multilingual performance, and adjustable dimensions via API parameter for dimensionality reduction while preserving semantic properties.
- **Embedding Mechanics**: Text strings are converted to floating-point vectors where cosine similarity/distance metrics quantify semantic relatedness; token-based pricing applies to API requests.
- **Dimensionality Control**: The `dimensions` parameter enables dynamic truncation (e.g., reducing 3072-dim to 256) without retraining, optimizing storage/compute trade-offs while maintaining performance (e.g., 256-dim truncated `text-embedding-3-large` outperforms untruncated `text-embedding-ada-002` at 1536-dim).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-04T17:11:18.032108+05:30

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
