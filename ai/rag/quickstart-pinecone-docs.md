---
title: Quickstart - Pinecone Docs
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.pinecone.io/docs/quickstart
published_at: '2026-09-01T11:00:20.965610+05:30'
collected_at: '2026-09-01T11:00:20.965619+05:30'
tags:
- agents
- anthropic
- hackernews
- meta-ai
- models
- openai
- rag
- reddit
- web-crawled
- workflows
- youtube
status: active
resource_id: blog:quickstart-pinecone-docs
first_seen: '2026-09-01T11:00:20.965619+05:30'
last_seen: '2026-09-01T11:00:20.965619+05:30'
last_checked: '2026-09-01T11:00:20.965619+05:30'
health_score: 100
---

# Quickstart - Pinecone Docs

## Summary

- Pinecone supports two data modeling approaches: **records** (dense/sparse vectors) and **documents** (full-text search with BM25), selected during index creation via `create_index_for_model` or document schema.

- SDK v9+ requires explicit keyword args for operations like `upsert_records` and `search`, with integrated embedding models (e.g., `llama-text-embed-v2`) and field mapping (e.g., `{"text": "content"}`).

- Reranking in Pinecone uses models like `bge-reranker-v2-m3` with configurable `top_n` and `rank_fields` to refine search results post-vector retrieval.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-09-01T11:00:20.965610+05:30

## Related Tags

- agents
- anthropic
- hackernews
- meta-ai
- models
- openai
- rag
- reddit
- web-crawled
- workflows
- youtube

## Source

Original source: https://docs.pinecone.io/docs/quickstart
