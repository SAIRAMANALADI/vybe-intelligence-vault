---
title: Indexing overview - Pinecone Docs
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.pinecone.io/docs/namespaces
published_at: '2026-08-03T03:48:18.522005+05:30'
collected_at: '2026-08-03T03:48:18.522017+05:30'
tags:
- dataset
- models
- rag
- web-crawled
- youtube
status: active
resource_id: blog:indexing-overview-pinecone-docs
first_seen: '2026-08-03T03:48:18.522017+05:30'
last_seen: '2026-08-03T03:48:18.522017+05:30'
last_checked: '2026-08-03T03:48:18.522017+05:30'
health_score: 100
---

# Indexing overview - Pinecone Docs

## Summary

- **Index Types & Hybrid Search**: Pinecone supports three index types—full-text (BM25/Lucene), dense vectors (semantic search), and sparse vectors (lexical search)—with hybrid search combining lexical and dense signals for improved relevance; metadata filtering is supported across all types.

- **Vector Embedding & Data Ingestion**: Dense/sparse vectors are generated via integrated Pinecone models or external embedders; data ingestion supports upsert (for smaller datasets) and import (for large-scale datasets via Parquet files in object storage).

- **Metadata Constraints**: Metadata is flat JSON (40KB/record limit), supporting strings, numbers, booleans, and string lists; filters use operators (`$eq`, `$ne`, `$gt`, etc.) for Boolean, numeric, and string comparisons.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-03T03:48:18.522005+05:30

## Related Tags

- dataset
- models
- rag
- web-crawled
- youtube

## Source

Original source: https://docs.pinecone.io/docs/namespaces
