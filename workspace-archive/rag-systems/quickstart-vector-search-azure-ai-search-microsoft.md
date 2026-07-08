---
title: 'Quickstart: Vector Search - Azure AI Search | Microsoft Learn'
archive_category: rag-systems
source_category: ai/rag
source_url: https://learn.microsoft.com/azure/search/search-get-started-vector?pivots=typescript
resource_id: blog:quickstart-vector-search-azure-ai-search-microsoft
local_vault_path: ai/rag/quickstart-vector-search-azure-ai-search-microsoft.md
quality_score: 70
archive_score: 74
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- agents
- hackernews
- rag
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Quickstart: Vector Search - Azure AI Search | Microsoft Learn

## Why This Is In The Archive

- Matched archive category: `RAG Systems`
- Quality score: 70 | Archive score: 74 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Vector Index Schema**: Defines vector (`DescriptionVector`, 1536 dimensions) and non-vector fields (e.g., `HotelId`, `HotelName`, `Description`) with support for full-text, vector, semantic, faceted, geo-spatial, filtering, and sorting operations; uses HNSW ANN algorithm for vector search.

- **Document Ingestion**: Uploads JSON documents (e.g., `HotelData.json`) via `SearchClient.UploadDocumentsAsync()`, conforming to the index schema; supports CRUD operations (`Upload`, `Merge`, `Delete`).

## Use Cases

- Knowledge querying
- Document summarization
- Hybrid retrieval

## Source

Original source URL: https://learn.microsoft.com/azure/search/search-get-started-vector?pivots=typescript

## Local Vault File

Path: [quickstart-vector-search-azure-ai-search-microsoft.md](../../ai/rag/quickstart-vector-search-azure-ai-search-microsoft.md)
