---
title: Stream Firestore to BigQuery | Firebase Extensions Hub
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://extensions.dev/extensions/firebase/firestore-bigquery-export
published_at: '2026-07-02T10:00:21.244758+05:30'
collected_at: '2026-07-02T10:00:21.244776+05:30'
tags:
- dataset
- rag
- reddit
- scripts
- web-crawled
status: active
resource_id: blog:stream-firestore-to-bigquery-firebase-extensions-h
first_seen: '2026-07-02T10:00:21.244776+05:30'
last_seen: '2026-07-02T10:00:21.244776+05:30'
last_checked: '2026-07-02T10:00:21.244776+05:30'
health_score: 100
---

# Stream Firestore to BigQuery | Firebase Extensions Hub

## Summary

- **Real-time Incremental Sync**: Streams document changes (CREATE/UPDATE/DELETE) from a specified Firestore collection to BigQuery in real-time, maintaining a changelog table (`raw`) and a current-state view (`latest`), with metadata fields (`timestamp`, `document_name`, `operation`).

- **Materialized View Support**: Generates both incremental and non-incremental BigQuery materialized views for optimized querying, with configurable refresh intervals (`refresh_interval_minutes`) and staleness limits (`max_staleness`), though partitioning/clustering is unsupported.

- **Cross-Project & Encryption Options**: Supports exporting to a separate BigQuery project via `BIGQUERY_PROJECT_ID` parameter and enables Customer-Managed Encryption Keys (CMEK) by granting `cloudkms.cryptoKeyEncrypterDecrypter` to the BigQuery service account (`bq-PROJECT_NUMBER@bigquery-encryption.iam.gserviceaccount.com`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-02T10:00:21.244758+05:30

## Related Tags

- dataset
- rag
- reddit
- scripts
- web-crawled

## Source

Original source: https://extensions.dev/extensions/firebase/firestore-bigquery-export
