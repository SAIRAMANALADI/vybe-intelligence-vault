---
title: Quickstart - Pinecone Docs
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.pinecone.io/guides/get-started/quickstart
published_at: '2026-08-06T01:37:55.294632+05:30'
collected_at: '2026-08-06T01:37:55.294648+05:30'
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
first_seen: '2026-08-06T01:37:55.294648+05:30'
last_seen: '2026-08-06T01:37:55.294648+05:30'
last_checked: '2026-08-06T01:37:55.294648+05:30'
health_score: 100
---

# Quickstart - Pinecone Docs

## Summary

- Pinecone supports two data modeling approaches: **records** (dense/sparse vectors) via `create_index_for_model` + `upsert_records` + `search`, or **documents** (full-text search with BM25) for keyword/phrase matching.
- SDK v9+ requires explicit keyword arguments for operations like `upsert_records` and `search`, with `_id` + mapped fields (e.g., `content`) for vector embedding.
- Integrated embedding uses models like `llama-text-embed-v2` with field mapping (e.g., `{"text": "content"}`), while reranking supports models like `bge-reranker-v2-m3` for hybrid retrieval.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-06T01:37:55.294632+05:30

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

Original source: https://docs.pinecone.io/guides/get-started/quickstart
