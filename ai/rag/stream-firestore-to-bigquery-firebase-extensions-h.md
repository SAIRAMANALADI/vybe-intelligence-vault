---
title: Stream Firestore to BigQuery | Firebase Extensions Hub
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://extensions.dev/extensions/firebase/firestore-bigquery-export
published_at: '2026-08-04T20:21:48.917106+05:30'
collected_at: '2026-08-04T20:21:48.917120+05:30'
tags:
- dataset
- rag
- reddit
- scripts
- web-crawled
status: active
resource_id: blog:stream-firestore-to-bigquery-firebase-extensions-h
first_seen: '2026-08-04T20:21:48.917120+05:30'
last_seen: '2026-08-04T20:21:48.917120+05:30'
last_checked: '2026-08-04T20:21:48.917120+05:30'
health_score: 100
---

# Stream Firestore to BigQuery | Firebase Extensions Hub

## Summary

- **Real-time Firestore-to-BigQuery Sync**: Extension streams incremental document changes (CREATE/UPDATE/DELETE) from a specified Firestore collection to BigQuery, maintaining a raw changelog table and a current-state view with metadata fields (`timestamp`, `document_name`, `operation`).
- **Materialized View Support**: Enables creation of incremental or non-incremental BigQuery materialized views for optimized querying, with configurable refresh intervals but no partitioning/clustering support.
- **Cross-Project & CMEK Integration**: Supports exporting to a different GCP project via `BIGQUERY_PROJECT_ID` parameter and allows customer-managed encryption keys (CMEK) for BigQuery tables using Cloud KMS.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-04T20:21:48.917106+05:30

## Related Tags

- dataset
- rag
- reddit
- scripts
- web-crawled

## Source

Original source: https://extensions.dev/extensions/firebase/firestore-bigquery-export
