---
title: extensions/firestore-bigquery-export at master · firebase/extensions · GitHub
archive_category: vector-databases
source_category: ai/rag
source_url: https://github.com/firebase/extensions/tree/master/firestore-bigquery-export#export-collections-to-bigquery
resource_id: github:firebase/extensions
local_vault_path: ai/rag/firebase-extensions.md
quality_score: 70
archive_score: 75
archive_tier: useful
resource_kind: dataset
importance: medium
tags:
- dataset
- rag
- reddit
- scripts
- web-crawled
selection_reason:
- Active open-source repository
---

# extensions/firestore-bigquery-export at master · firebase/extensions · GitHub

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 75 (useful)
- Resource kind: dataset
- Selection reasons:
  - Active open-source repository

## Summary

- **Real-time Incremental Sync**: The extension mirrors Firestore document changes (CREATE/UPDATE/DELETE) to BigQuery in real-time, storing full change history in a raw table with metadata fields (`timestamp`, `document_name`, `operation`) and providing a view for current state.

- **Materialized View Support**: Supports both regular and materialized views in BigQuery, with options for incremental (efficient updates, query restrictions) or non-incremental (complex queries, full recomputation) co

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://github.com/firebase/extensions/tree/master/firestore-bigquery-export#export-collections-to-bigquery

## Local Vault File

Path: [firebase-extensions.md](../../ai/rag/firebase-extensions.md)
