---
title: Indexing overview - Pinecone Docs
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.pinecone.io/docs/namespaces
published_at: '2026-09-01T11:04:15.056912+05:30'
collected_at: '2026-09-01T11:04:15.056922+05:30'
tags:
- dataset
- models
- rag
- reddit
- web-crawled
- youtube
status: active
resource_id: blog:indexing-overview-pinecone-docs
first_seen: '2026-09-01T11:04:15.056922+05:30'
last_seen: '2026-09-01T11:04:15.056922+05:30'
last_checked: '2026-09-01T11:04:15.056922+05:30'
health_score: 100
---

# Indexing overview - Pinecone Docs

## Summary

- **Index Types & Hybrid Search**: Pinecone supports three index types—full-text search (BM25/Lucene), dense vectors (semantic search), and sparse vectors (lexical search)—with hybrid search combining lexical and dense signals for improved relevance. Metadata filtering is supported across all methods.

- **Vector Embedding & Data Ingestion**: Two embedding approaches exist—integrated (Pinecone-hosted models) and BYOV (external models). Data ingestion scales via `import` (Parquet files) for large datasets (>10M records) or `upsert` (batchable) for smaller, incremental updates.

- **Metadata Constraints**: Metadata is flat JSON (no nesting), limited to 40KB/record, and supports string/integer/float/boolean/list types (no `null`). Filtering uses operators like `$eq`, `$ne`, `$gt`, `$gte` for precise record selection.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-09-01T11:04:15.056912+05:30

## Related Tags

- dataset
- models
- rag
- reddit
- web-crawled
- youtube

## Source

Original source: https://docs.pinecone.io/docs/namespaces
