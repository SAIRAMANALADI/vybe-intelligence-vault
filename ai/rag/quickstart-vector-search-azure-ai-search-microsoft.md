---
title: 'Quickstart: Vector Search - Azure AI Search | Microsoft Learn'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://learn.microsoft.com/azure/search/search-get-started-vector?pivots=typescript
published_at: '2026-07-08T09:26:49.384990+05:30'
collected_at: '2026-07-08T09:26:49.385007+05:30'
tags:
- agents
- hackernews
- rag
- web-crawled
status: active
resource_id: blog:quickstart-vector-search-azure-ai-search-microsoft
first_seen: '2026-07-08T09:26:49.385007+05:30'
last_seen: '2026-07-08T09:26:49.385007+05:30'
last_checked: '2026-07-08T09:26:49.385007+05:30'
health_score: 100
---

# Quickstart: Vector Search - Azure AI Search | Microsoft Learn

## Summary

- **Vector Index Schema**: Defines vector (`DescriptionVector`, 1536 dimensions) and non-vector fields (e.g., `HotelId`, `HotelName`, `Description`) with support for full-text, vector, semantic, faceted, geo-spatial, filtering, and sorting operations; uses HNSW ANN algorithm for vector search.

- **Document Ingestion**: Uploads JSON documents (e.g., `HotelData.json`) via `SearchClient.UploadDocumentsAsync()`, conforming to the index schema; supports CRUD operations (`Upload`, `Merge`, `Delete`).

- **Query Execution**: Executes vector search queries (e.g., single vector search) returning scored results (e.g., `Score: 0.6605852, HotelId: 48`) using the `SearchClient.Search()` method.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-08T09:26:49.384990+05:30

## Related Tags

- agents
- hackernews
- rag
- web-crawled

## Source

Original source: https://learn.microsoft.com/azure/search/search-get-started-vector?pivots=typescript
