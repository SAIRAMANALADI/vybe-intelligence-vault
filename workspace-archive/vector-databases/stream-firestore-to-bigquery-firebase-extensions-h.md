---
title: Stream Firestore to BigQuery | Firebase Extensions Hub
archive_category: vector-databases
source_category: ai/rag
source_url: https://extensions.dev/extensions/firebase/firestore-bigquery-export
resource_id: blog:stream-firestore-to-bigquery-firebase-extensions-h
local_vault_path: ai/rag/stream-firestore-to-bigquery-firebase-extensions-h.md
quality_score: 70
archive_score: 70
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
- Valuable developer reference
---

# Stream Firestore to BigQuery | Firebase Extensions Hub

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: dataset
- Selection reasons:
  - Valuable developer reference

## Summary

- **Real-time Incremental Sync**: Streams real-time, incremental updates from a specified Cloud Firestore collection to BigQuery, maintaining a mirrored dataset with metadata fields (`timestamp`, `document_name`, `operation`) for tracking document changes (`CREATE`, `UPDATE`, `IMPORT`, `DELETE`).

- **Dual BigQuery Resources**: Generates a raw changelog table (full history) and a view (current state) per collection; supports materialized views (incremental/non-incremental) with configurable refr

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://extensions.dev/extensions/firebase/firestore-bigquery-export

## Local Vault File

Path: [stream-firestore-to-bigquery-firebase-extensions-h.md](../../ai/rag/stream-firestore-to-bigquery-firebase-extensions-h.md)
