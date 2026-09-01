---
title: Vector embeddings | OpenAI API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://platform.openai.com/docs/guides/embeddings
published_at: '2026-09-01T10:59:02.426075+05:30'
collected_at: '2026-09-01T10:59:02.426084+05:30'
tags:
- benchmark
- dataset
- hackernews
- models
- openai
- producthunt
- rag
- web-crawled
status: active
resource_id: blog:vector-embeddings-openai-api
first_seen: '2026-09-01T10:59:02.426084+05:30'
last_seen: '2026-09-01T10:59:02.426084+05:30'
last_checked: '2026-09-01T10:59:02.426084+05:30'
health_score: 100
---

# Vector embeddings | OpenAI API

## Summary

- **Model Specifications**: `text-embedding-3-small` (1536-dim, ~62.5k pages/$) and `text-embedding-3-large` (3072-dim, ~9.6k pages/$) offer improved multilingual performance, lower costs, and dynamic dimensionality reduction via the `dimensions` parameter (e.g., 256-dim embeddings retain concept-representing properties while outperforming fixed 1536-dim `ada-002` embeddings).

- **API Integration**: Embeddings are generated via a REST API call to `/v1/embeddings` with input text and model selection; responses include a 1536/3072-dim float vector (default) or reduced-dimension vector (if `dimensions` parameter is specified), billed per input token (~800 tokens/page).

- **Use Cases & Post-Processing**: Embeddings enable semantic search, clustering, classification, and anomaly detection; dimensionality can be manually reduced/normalized (L2 norm) post-generation for compatibility with constrained vector databases (e.g., truncating to 1024-dim).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-09-01T10:59:02.426075+05:30

## Related Tags

- benchmark
- dataset
- hackernews
- models
- openai
- producthunt
- rag
- web-crawled

## Source

Original source: https://platform.openai.com/docs/guides/embeddings
