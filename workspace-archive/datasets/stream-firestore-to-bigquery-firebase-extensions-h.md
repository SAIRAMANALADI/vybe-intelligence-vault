---
title: Stream Firestore to BigQuery | Firebase Extensions Hub
archive_category: datasets
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

- Matched archive category: `Datasets`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: dataset
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Real-time Sync**: Streams incremental updates from a specified Firestore collection to BigQuery, maintaining a mirrored dataset with metadata fields (`timestamp`, `document_name`, `operation`) for change tracking.
- **Materialized Views Support**: Generates both regular and materialized BigQuery views (incremental/non-incremental) with configurable refresh intervals, enabling optimized query performance at the cost of additional storage.
- **Cross-Project & CMEK Support**: Allows exporting t

## Use Cases

- Instruction tuning source
- Evals dataset building
- Synthetic dataset creation

## Source

Original source URL: https://extensions.dev/extensions/firebase/firestore-bigquery-export

## Local Vault File

Path: [stream-firestore-to-bigquery-firebase-extensions-h.md](../../ai/rag/stream-firestore-to-bigquery-firebase-extensions-h.md)
