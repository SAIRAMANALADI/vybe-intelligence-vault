---
title: Vector embeddings | OpenAI API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://platform.openai.com/docs/guides/embeddings
published_at: '2026-07-09T21:10:45.473741+05:30'
collected_at: '2026-07-09T21:10:45.473754+05:30'
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
first_seen: '2026-07-09T21:10:45.473754+05:30'
last_seen: '2026-07-09T21:10:45.473754+05:30'
last_checked: '2026-07-09T21:10:45.473754+05:30'
health_score: 100
---

# Vector embeddings | OpenAI API

## Summary

- **New Embedding Models**: `text-embedding-3-small` and `text-embedding-3-large` offer lower costs, improved multilingual performance, and configurable embedding dimensions (default: 1536/3072) via the `dimensions` parameter, enabling trade-offs between performance and resource usage.

- **Embedding Mechanics**: Text embeddings are floating-point vectors where semantic relatedness is measured by vector distance (e.g., cosine similarity); OpenAI’s API generates embeddings via a dedicated endpoint, billed per input token, with pricing at ~62,500 pages/$ for `text-embedding-3-small` and ~9,615 pages/$ for `text-embedding-3-large`.

- **Dimensionality Reduction**: Embeddings can be truncated (e.g., to 256D) without significant loss of semantic fidelity using the `dimensions` parameter, enabling efficient storage/processing in vector databases while outperforming older models (e.g., `text-embedding-ada-002`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-09T21:10:45.473741+05:30

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
