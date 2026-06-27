---
title: extensions/firestore-bigquery-export at master · firebase/extensions · GitHub
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://github.com/firebase/extensions/tree/master/firestore-bigquery-export#export-collections-to-bigquery
published_at: '2026-06-27T14:30:52.097001+05:30'
collected_at: '2026-06-27T14:30:52.097014+05:30'
tags:
- dataset
- rag
- reddit
- scripts
- web-crawled
status: active
resource_id: github:firebase/extensions
first_seen: '2026-06-27T14:30:52.097014+05:30'
last_seen: '2026-06-27T14:30:52.097014+05:30'
last_checked: '2026-06-27T14:30:52.097014+05:30'
health_score: 100
---

# extensions/firestore-bigquery-export at master · firebase/extensions · GitHub

## Summary

- **Real-time Incremental Sync**: The extension mirrors Firestore document changes (CREATE/UPDATE/DELETE) to BigQuery in real-time, storing full change history in a raw table with metadata fields (`timestamp`, `document_name`, `operation`) and providing a view for current state.

- **Materialized View Support**: Supports both regular and materialized views in BigQuery, with options for incremental (efficient updates, query restrictions) or non-incremental (complex queries, full recomputation) configurations, configurable via extension parameters.

- **Cross-Project & Encryption Options**: Enables streaming to a different GCP project via `BIGQUERY_PROJECT_ID` parameter and supports customer-managed encryption keys (CMEK) for BigQuery tables, requiring KMS keyring/key setup with matching regional constraints.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-27T14:30:52.097001+05:30

## Related Tags

- dataset
- rag
- reddit
- scripts
- web-crawled

## Source

Original source: https://github.com/firebase/extensions/tree/master/firestore-bigquery-export#export-collections-to-bigquery
