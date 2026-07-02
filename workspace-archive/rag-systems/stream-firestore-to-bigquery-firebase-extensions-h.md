---
title: Stream Firestore to BigQuery | Firebase Extensions Hub
archive_category: rag-systems
source_category: ai/rag
source_url: https://extensions.dev/extensions/firebase/firestore-bigquery-export
resource_id: blog:stream-firestore-to-bigquery-firebase-extensions-h
local_vault_path: ai/rag/stream-firestore-to-bigquery-firebase-extensions-h.md
quality_score: 70
archive_score: 72
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
- Strong keyword match
- Valuable developer reference
---

# Stream Firestore to BigQuery | Firebase Extensions Hub

## Why This Is In The Archive

- Matched archive category: `RAG Systems`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: dataset
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Real-time Incremental Sync**: Streams document changes (CREATE/UPDATE/DELETE) from a specified Firestore collection to BigQuery in real-time, maintaining a changelog table (`raw`) and a current-state view (`latest`), with metadata fields (`timestamp`, `document_name`, `operation`).

- **Materialized View Support**: Generates both incremental and non-incremental BigQuery materialized views for optimized querying, with configurable refresh intervals (`refresh_interval_minutes`) and staleness l

## Use Cases

- Knowledge querying
- Document summarization
- Hybrid retrieval

## Source

Original source URL: https://extensions.dev/extensions/firebase/firestore-bigquery-export

## Local Vault File

Path: [stream-firestore-to-bigquery-firebase-extensions-h.md](../../ai/rag/stream-firestore-to-bigquery-firebase-extensions-h.md)
