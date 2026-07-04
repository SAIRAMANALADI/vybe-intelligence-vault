---
title: Stream Firestore to BigQuery | Firebase Extensions Hub
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://extensions.dev/extensions/firebase/firestore-bigquery-export
published_at: '2026-07-04T16:38:15.133640+05:30'
collected_at: '2026-07-04T16:38:15.133653+05:30'
tags:
- dataset
- rag
- reddit
- scripts
- web-crawled
status: active
resource_id: blog:stream-firestore-to-bigquery-firebase-extensions-h
first_seen: '2026-07-04T16:38:15.133653+05:30'
last_seen: '2026-07-04T16:38:15.133653+05:30'
last_checked: '2026-07-04T16:38:15.133653+05:30'
health_score: 100
---

# Stream Firestore to BigQuery | Firebase Extensions Hub

## Summary

- **Real-time Incremental Sync**: Streams real-time, incremental updates from a specified Cloud Firestore collection to BigQuery, creating a mirrored dataset with metadata fields (`timestamp`, `document_name`, `operation`) for tracking document changes (`CREATE`, `UPDATE`, `IMPORT`).
- **Dual BigQuery Resources**: Generates a raw changelog table (full history) and a view (current state) per collection; supports materialized views (incremental/non-incremental) with configurable refresh intervals and max staleness, but excludes partitioning/clustering.
- **Cross-Project & Security Configs**: Enables cross-project BigQuery streaming via `BIGQUERY_PROJECT_ID` parameter and supports Customer-Managed Encryption Keys (CMEK) via KMS integration; requires manual import script for existing documents post-installation.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-04T16:38:15.133640+05:30

## Related Tags

- dataset
- rag
- reddit
- scripts
- web-crawled

## Source

Original source: https://extensions.dev/extensions/firebase/firestore-bigquery-export
