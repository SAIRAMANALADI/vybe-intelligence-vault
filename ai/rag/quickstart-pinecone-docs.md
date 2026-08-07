---
title: Quickstart - Pinecone Docs
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.pinecone.io/guides/get-started/quickstart
published_at: '2026-08-07T05:57:07.577863+05:30'
collected_at: '2026-08-07T05:57:07.577876+05:30'
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
first_seen: '2026-08-07T05:57:07.577876+05:30'
last_seen: '2026-08-07T05:57:07.577876+05:30'
last_checked: '2026-08-07T05:57:07.577876+05:30'
health_score: 100
---

# Quickstart - Pinecone Docs

## Summary

- **Index Creation**: Use `create_index_for_model` with integrated embedding (e.g., `llama-text-embed-v2`) for serverless vector search, specifying cloud provider (`aws`) and region (`us-east-1`).

- **Data Ingestion**: Insert records via `upsert_records` with structured fields (`_id`, `content`, `category`) into a namespace (`docs`), ensuring vector embeddings are auto-generated.

- **Query & Reranking**: Execute semantic search using `search(query={"inputs": {"text": "query"}}, rerank={"model": "bge-reranker-v2-m3"})` to retrieve and reorder top-k results based on relevance.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-07T05:57:07.577863+05:30

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
