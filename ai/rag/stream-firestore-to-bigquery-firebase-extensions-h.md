---
title: Stream Firestore to BigQuery | Firebase Extensions Hub
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://extensions.dev/extensions/firebase/firestore-bigquery-export
published_at: '2026-07-18T16:58:48.592369+05:30'
collected_at: '2026-07-18T16:58:48.592376+05:30'
tags:
- dataset
- rag
- reddit
- scripts
- web-crawled
status: active
resource_id: blog:stream-firestore-to-bigquery-firebase-extensions-h
first_seen: '2026-07-18T16:58:48.592376+05:30'
last_seen: '2026-07-18T16:58:48.592376+05:30'
last_checked: '2026-07-18T16:58:48.592376+05:30'
health_score: 100
---

# Stream Firestore to BigQuery | Firebase Extensions Hub

## Summary

- **Real-time Firestore-to-BigQuery Sync**: Extension streams incremental document changes (CREATE/UPDATE/DELETE) from a specified Firestore collection to BigQuery, maintaining a changelog table (`raw_changelog`) and a materialized view (`raw_latest`) reflecting the current state of data.

- **Configurable Data Processing**: Supports pre-export data transformation via HTTP functions, wildcard path references for subcollections, and optional partitioning/clustering of BigQuery tables (with schema constraints for partitioning).

- **Cross-Project & Security Features**: Enables streaming to a separate BigQuery project via `BIGQUERY_PROJECT_ID` parameter, supports Customer-Managed Encryption Keys (CMEK) for BigQuery, and provides scripts for cross-project IAM permissions and data continuity during updates.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-18T16:58:48.592369+05:30

## Related Tags

- dataset
- rag
- reddit
- scripts
- web-crawled

## Source

Original source: https://extensions.dev/extensions/firebase/firestore-bigquery-export
