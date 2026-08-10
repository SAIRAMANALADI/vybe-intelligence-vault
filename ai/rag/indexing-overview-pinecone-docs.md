---
title: Indexing overview - Pinecone Docs
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.pinecone.io/docs/namespaces
published_at: '2026-08-10T13:45:32.145528+05:30'
collected_at: '2026-08-10T13:45:32.145538+05:30'
tags:
- dataset
- models
- rag
- web-crawled
- youtube
status: active
resource_id: blog:indexing-overview-pinecone-docs
first_seen: '2026-08-10T13:45:32.145538+05:30'
last_seen: '2026-08-10T13:45:32.145538+05:30'
last_checked: '2026-08-10T13:45:32.145538+05:30'
health_score: 100
---

# Indexing overview - Pinecone Docs

## Summary

- **Index Types & Hybrid Search**: Pinecone supports three index types—document (mixing dense vectors, sparse vectors, and full-text search), dense vector (semantic search), and sparse vector (lexical search)—with hybrid search combining lexical and dense signals for improved relevance.

- **Vector Embedding & Data Ingestion**: Pinecone allows either integrated embedding (automatic vectorization via hosted models) or BYOV (bring-your-own-vectors) via external models; large-scale ingestion is optimized via Parquet-based imports or batched upserts.

- **Metadata Constraints & Filtering**: Metadata is restricted to flat JSON with 40KB per record, supporting strings, numbers, booleans, and lists of strings; filtering uses operators (`$eq`, `$ne`, `$gt`, etc.) for precise record selection.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-10T13:45:32.145528+05:30

## Related Tags

- dataset
- models
- rag
- web-crawled
- youtube

## Source

Original source: https://docs.pinecone.io/docs/namespaces
