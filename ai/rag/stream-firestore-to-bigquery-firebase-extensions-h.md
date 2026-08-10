---
title: Stream Firestore to BigQuery | Firebase Extensions Hub
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://extensions.dev/extensions/firebase/firestore-bigquery-export
published_at: '2026-08-10T21:54:36.178554+05:30'
collected_at: '2026-08-10T21:54:36.178561+05:30'
tags:
- dataset
- rag
- reddit
- scripts
- web-crawled
status: active
resource_id: blog:stream-firestore-to-bigquery-firebase-extensions-h
first_seen: '2026-08-10T21:54:36.178561+05:30'
last_seen: '2026-08-10T21:54:36.178561+05:30'
last_checked: '2026-08-10T21:54:36.178561+05:30'
health_score: 100
---

# Stream Firestore to BigQuery | Firebase Extensions Hub

## Summary

- **Real-time Incremental Sync**: Exports real-time, incremental updates from a specified Firestore collection to BigQuery, maintaining a mirrored dataset with metadata fields (`timestamp`, `document_name`, `operation`) for tracking document changes (`CREATE`, `UPDATE`, `DELETE`, `IMPORT`).

- **Dual BigQuery Resources**: Creates a raw changelog table (full change history) and a view (current state) per collection; supports materialized views (incremental/non-incremental), partitioning/clustering (with schema constraints), and optional CMEK encryption via KMS integration.

- **Cross-Project & Mitigation Strategies**: Supports exporting to a different GCP project via `BIGQUERY_PROJECT_ID` with IAM scripts; mitigates update downtime via post-update import or parallel instance methods to ensure data continuity.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-10T21:54:36.178554+05:30

## Related Tags

- dataset
- rag
- reddit
- scripts
- web-crawled

## Source

Original source: https://extensions.dev/extensions/firebase/firestore-bigquery-export
