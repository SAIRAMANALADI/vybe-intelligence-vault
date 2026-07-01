---
title: Vector embeddings | OpenAI API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://platform.openai.com/docs/guides/embeddings
published_at: '2026-07-01T15:49:15.706775+05:30'
collected_at: '2026-07-01T15:49:15.706789+05:30'
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
first_seen: '2026-07-01T15:49:15.706789+05:30'
last_seen: '2026-07-01T15:49:15.706789+05:30'
last_checked: '2026-07-01T15:49:15.706789+05:30'
health_score: 100
---

# Vector embeddings | OpenAI API

## Summary

- **Model Specifications**:
  - New `text-embedding-3-small` (1536-dim) and `text-embedding-3-large` (3072-dim) models offer lower costs, improved multilingual performance, and configurable dimensionality via the `dimensions` parameter.
  - Performance metrics (MTEB eval): `text-embedding-3-small` (62.3%), `text-embedding-3-large` (64.6%), with max input token limit of 8192.

- **Technical Implementation**:
  - Embeddings are L2-normalized vectors generated via API (`/v1/embeddings`) with pricing based on input token count (~800 tokens/page).
  - Dimensionality reduction is supported natively (e.g., truncating `text-embedding-3-large` to 256-dim while outperforming `ada-002`'s 1536-dim).

- **Use Cases & Workflow**:
  - Enables semantic search, clustering, and classification via cosine similarity between query/document embeddings.
  - Post-processing requires normalization for manual dimension adjustments (e.g., truncation + L2 normalization for vector stores).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-01T15:49:15.706775+05:30

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
