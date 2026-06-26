---
title: Vector embeddings | OpenAI API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://platform.openai.com/docs/guides/embeddings
published_at: '2026-06-26T20:22:11.446720+05:30'
collected_at: '2026-06-26T20:22:11.446734+05:30'
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
first_seen: '2026-06-26T20:22:11.446734+05:30'
last_seen: '2026-06-26T20:22:11.446734+05:30'
last_checked: '2026-06-26T20:22:11.446734+05:30'
health_score: 100
---

# Vector embeddings | OpenAI API

## Summary

- **Model Specifications**: `text-embedding-3-small` (1536-dim, 62.5k pages/$) and `text-embedding-3-large` (3072-dim, 9.6k pages/$) offer reduced costs and improved multilingual performance; both support up to 8192 tokens with dynamic dimensionality reduction via the `dimensions` parameter.

- **Embedding Mechanics**: Text strings are converted to floating-point vectors where cosine similarity quantifies semantic relatedness; dimensionality can be manually truncated (e.g., to 256) while preserving core semantic properties, enabling efficient storage and retrieval in vector databases.

- **API Integration**: Embeddings are generated via a REST API call (e.g., `POST /v1/embeddings`) with input tokenization billed per request; Python/JavaScript/cURL examples demonstrate retrieval, with responses containing the embedding vector and metadata (e.g., `prompt_tokens`, `total_tokens`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-26T20:22:11.446720+05:30

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
