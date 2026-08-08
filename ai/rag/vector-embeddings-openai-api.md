---
title: Vector embeddings | OpenAI API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://platform.openai.com/docs/guides/embeddings
published_at: '2026-08-08T15:33:07.980657+05:30'
collected_at: '2026-08-08T15:33:07.980669+05:30'
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
first_seen: '2026-08-08T15:33:07.980669+05:30'
last_seen: '2026-08-08T15:33:07.980669+05:30'
last_checked: '2026-08-08T15:33:07.980669+05:30'
health_score: 100
---

# Vector embeddings | OpenAI API

## Summary

- **New Embedding Models**: `text-embedding-3-small` and `text-embedding-3-large` offer improved multilingual performance, lower costs, and configurable embedding dimensions (default: 1536/3072) with support for dynamic dimensionality reduction via API parameter.
- **Embedding Mechanics**: Text embeddings are floating-point vectors measuring semantic relatedness via vector distance (e.g., cosine similarity), enabling applications like search, clustering, and anomaly detection; token-based pricing applies.
- **Dimensionality Optimization**: Embedding vectors can be truncated (e.g., to 256D) using the `dimensions` parameter without significant loss of semantic fidelity, reducing storage/compute overhead while maintaining performance (e.g., `text-embedding-3-large` at 256D outperforms untruncated `text-embedding-ada-002` at 1536D).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-08T15:33:07.980657+05:30

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
