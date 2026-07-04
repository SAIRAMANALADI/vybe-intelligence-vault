---
title: Vector embeddings | OpenAI API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://platform.openai.com/docs/guides/embeddings
published_at: '2026-07-04T21:51:14.180544+05:30'
collected_at: '2026-07-04T21:51:14.180559+05:30'
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
first_seen: '2026-07-04T21:51:14.180559+05:30'
last_seen: '2026-07-04T21:51:14.180559+05:30'
last_checked: '2026-07-04T21:51:14.180559+05:30'
health_score: 100
---

# Vector embeddings | OpenAI API

## Summary

- **New Embedding Models**: `text-embedding-3-small` and `text-embedding-3-large` offer lower costs, improved multilingual performance, and configurable embedding dimensions (default: 1536/3072) via the `dimensions` parameter, enabling trade-offs between performance and resource usage.

- **Embedding Mechanics**: Text embeddings are high-dimensional vectors (floating-point lists) where semantic relatedness is measured via vector distance (e.g., cosine similarity); tokens are billed per API request, with pricing tiered by model (e.g., ~62.5k pages/$ for `text-embedding-3-small`).

- **Dimensionality Reduction**: Embeddings can be truncated (e.g., to 256D) without significant loss of semantic fidelity using the `dimensions` parameter, optimizing storage/compute while outperforming older models (e.g., `text-embedding-ada-002` at 1536D).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-04T21:51:14.180544+05:30

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
