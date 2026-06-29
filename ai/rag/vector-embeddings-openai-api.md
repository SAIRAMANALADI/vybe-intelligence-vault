---
title: Vector embeddings | OpenAI API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://platform.openai.com/docs/guides/embeddings
published_at: '2026-06-30T01:50:56.387263+05:30'
collected_at: '2026-06-30T01:50:56.387280+05:30'
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
first_seen: '2026-06-30T01:50:56.387280+05:30'
last_seen: '2026-06-30T01:50:56.387280+05:30'
last_checked: '2026-06-30T01:50:56.387280+05:30'
health_score: 100
---

# Vector embeddings | OpenAI API

## Summary

- **New Models**: `text-embedding-3-small` and `text-embedding-3-large` offer lower costs, improved multilingual performance, and configurable embedding dimensions (default: 1536/3072) via the `dimensions` parameter, enabling trade-offs between performance and vector size.

- **Embedding Mechanics**: Text strings are converted to high-dimensional floating-point vectors (embeddings) where cosine distance measures semantic relatedness; embeddings are billed per input token and can be dynamically truncated (e.g., to 256D) without full retraining.

- **API Integration**: Embeddings are generated via the `/v1/embeddings` endpoint (e.g., `model="text-embedding-3-small"`), returning vectors usable for search, clustering, classification, or as features in ML pipelines, with normalization required for manual dimension reduction.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-30T01:50:56.387263+05:30

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
