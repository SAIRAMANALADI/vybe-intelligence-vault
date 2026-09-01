---
title: Indexing overview - Pinecone Docs
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.pinecone.io/docs/namespaces
published_at: '2026-09-01T19:14:16.778215+05:30'
collected_at: '2026-09-01T19:14:16.778228+05:30'
tags:
- dataset
- models
- rag
- web-crawled
- youtube
status: active
resource_id: blog:indexing-overview-pinecone-docs
first_seen: '2026-09-01T19:14:16.778228+05:30'
last_seen: '2026-09-01T19:14:16.778228+05:30'
last_checked: '2026-09-01T19:14:16.778228+05:30'
health_score: 100
---

# Indexing overview - Pinecone Docs

## Summary

- **Index Types & Hybrid Search**: Pinecone supports serverless indexes storing documents or records, with hybrid search combining dense/sparse vectors and full-text search (BM25/Lucene) via `score_by`; dense vectors enable semantic search, sparse vectors enable lexical search, and full-text search targets token matching in text fields.

- **Vector Embedding & Data Ingestion**: Embedding can be integrated (Pinecone-hosted models) or BYOV (external models), with upsert/import for data ingestion; sparse vector indexes have strict limits (e.g., 1K non-zero values/vector, 10 upserts/sec/index, 100 queries/sec/index).

- **Metadata Constraints**: Metadata must be flat JSON key-value pairs (no nesting, no `$` prefix), supporting strings, floats, booleans, and string lists; max 40KB metadata/record, with filter operators (`$eq`, `$ne`, `$gt`, `$gte`) for querying.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-09-01T19:14:16.778215+05:30

## Related Tags

- dataset
- models
- rag
- web-crawled
- youtube

## Source

Original source: https://docs.pinecone.io/docs/namespaces
