---
title: Vector embeddings | OpenAI API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://platform.openai.com/docs/guides/embeddings
published_at: '2026-06-29T01:20:56.667078+05:30'
collected_at: '2026-06-29T01:20:56.667093+05:30'
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
first_seen: '2026-06-29T01:20:56.667093+05:30'
last_seen: '2026-06-29T01:20:56.667093+05:30'
last_checked: '2026-06-29T01:20:56.667093+05:30'
health_score: 100
---

# Vector embeddings | OpenAI API

## Summary

- **Model Specifications**: New `text-embedding-3-small` (1536-dim, ~62.5k pages/USD) and `text-embedding-3-large` (3072-dim, ~9.6k pages/USD) offer lower costs, improved multilingual performance, and adjustable output dimensions via the `dimensions` parameter, with max input length of 8192 tokens.

- **Embedding Mechanics**: Embeddings are L2-normalized vectors where cosine similarity measures text relatedness; dimensions can be truncated (e.g., to 256) without significant loss of semantic fidelity, enabling cost-efficient storage and retrieval in vector databases.

- **API Integration**: Embeddings are generated via API calls (e.g., `openai.embeddings.create`) with input billed per token; responses include metadata (e.g., `prompt_tokens`) and can be dynamically resized or normalized for downstream tasks like search, clustering, or ML feature encoding.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-29T01:20:56.667078+05:30

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
