---
title: Vector embeddings | OpenAI API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://platform.openai.com/docs/guides/embeddings
published_at: '2026-07-03T15:11:52.343636+05:30'
collected_at: '2026-07-03T15:11:52.343646+05:30'
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
first_seen: '2026-07-03T15:11:52.343646+05:30'
last_seen: '2026-07-03T15:11:52.343646+05:30'
last_checked: '2026-07-03T15:11:52.343646+05:30'
health_score: 100
---

# Vector embeddings | OpenAI API

## Summary

- **Model Specifications**: `text-embedding-3-small` (1536-dim, 62.5k pages/USD, 62.3% MTEB) and `text-embedding-3-large` (3072-dim, 9.6k pages/USD, 64.6% MTEB) support dynamic dimension reduction via `dimensions` parameter, enabling trade-offs between performance and cost (e.g., 256-dim `text-embedding-3-large` outperforms 1536-dim `text-embedding-ada-002`).

- **API Integration**: Embeddings are generated via POST request to `/v1/embeddings` with `input` (text string/array) and `model` parameters; response includes `embedding` vector (float array) and token usage metrics (`prompt_tokens`, `total_tokens`).

- **Use Cases & Workflow**: Embeddings enable semantic search (cosine similarity), clustering, recommendations, and classification; dimension reduction (via `dimensions`) optimizes storage/compute; L2 normalization required for manual dimension truncation (e.g., for vector DBs with 1024-dim limits).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-03T15:11:52.343636+05:30

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
