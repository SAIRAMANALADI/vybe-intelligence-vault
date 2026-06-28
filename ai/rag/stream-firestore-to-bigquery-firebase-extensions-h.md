---
title: Stream Firestore to BigQuery | Firebase Extensions Hub
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://extensions.dev/extensions/firebase/firestore-bigquery-export
published_at: '2026-06-28T19:53:16.838798+05:30'
collected_at: '2026-06-28T19:53:16.838812+05:30'
tags:
- dataset
- rag
- reddit
- scripts
- web-crawled
status: active
resource_id: blog:stream-firestore-to-bigquery-firebase-extensions-h
first_seen: '2026-06-28T19:53:16.838812+05:30'
last_seen: '2026-06-28T19:53:16.838812+05:30'
last_checked: '2026-06-28T19:53:16.838812+05:30'
health_score: 100
---

# Stream Firestore to BigQuery | Firebase Extensions Hub

## Summary

- **Real-time Incremental Sync**: Streams realtime, incremental updates from a specified Cloud Firestore collection to BigQuery, maintaining a mirrored dataset with metadata fields (`timestamp`, `document_name`, `operation`) for change tracking.
- **Dual BigQuery Resources**: Automatically generates a raw changelog table (full history) and a view (current state) for the mirrored collection, with support for materialized views (incremental/non-incremental) and optional partitioning/clustering.
- **Cross-Project & CMEK Support**: Enables streaming to a different BigQuery project via `BIGQUERY_PROJECT_ID` and supports Customer-Managed Encryption Keys (CMEK) for BigQuery tables.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-28T19:53:16.838798+05:30

## Related Tags

- dataset
- rag
- reddit
- scripts
- web-crawled

## Source

Original source: https://extensions.dev/extensions/firebase/firestore-bigquery-export
