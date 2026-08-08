---
title: Vector embeddings | OpenAI API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://platform.openai.com/docs/guides/embeddings
published_at: '2026-08-08T18:51:01.229640+05:30'
collected_at: '2026-08-08T18:51:01.229657+05:30'
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
first_seen: '2026-08-08T18:51:01.229657+05:30'
last_seen: '2026-08-08T18:51:01.229657+05:30'
last_checked: '2026-08-08T18:51:01.229657+05:30'
health_score: 100
---

# Vector embeddings | OpenAI API

## Summary

- **Model Specifications**:
  - `text-embedding-3-small` (1536-dim) and `text-embedding-3-large` (3072-dim) offer lower costs and improved multilingual performance.
  - Supports dynamic dimension reduction via API parameter (`dimensions`) to trade accuracy for efficiency (e.g., 256-dim `text-embedding-3-large` outperforms unshortened `text-embedding-ada-002`).

- **Embedding Mechanics**:
  - Text embeddings are vectorized representations (floating-point lists) where cosine distance measures relatedness.
  - Priced per input token (~62.5k pages/$ for `text-embedding-3-small`, ~9.6k pages/$ for `text-embedding-3-large` on MTEB benchmark).

- **Use Cases & Workflow**:
  - Enables search, clustering, recommendations, anomaly detection, and classification via vector similarity.
  - API accepts text input (max 8192 tokens) and returns embeddings; normalization required for manual dimension reduction.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-08T18:51:01.229640+05:30

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
