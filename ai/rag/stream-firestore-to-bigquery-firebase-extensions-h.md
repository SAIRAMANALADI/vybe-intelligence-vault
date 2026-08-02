---
title: Stream Firestore to BigQuery | Firebase Extensions Hub
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://extensions.dev/extensions/firebase/firestore-bigquery-export
published_at: '2026-08-02T09:36:22.125509+05:30'
collected_at: '2026-08-02T09:36:22.125523+05:30'
tags:
- dataset
- rag
- reddit
- scripts
- web-crawled
status: active
resource_id: blog:stream-firestore-to-bigquery-firebase-extensions-h
first_seen: '2026-08-02T09:36:22.125523+05:30'
last_seen: '2026-08-02T09:36:22.125523+05:30'
last_checked: '2026-08-02T09:36:22.125523+05:30'
health_score: 100
---

# Stream Firestore to BigQuery | Firebase Extensions Hub

## Summary

- **Real-time Firestore-to-BigQuery Sync**: Extension streams incremental document changes (CREATE/UPDATE/DELETE) from a specified Firestore collection to BigQuery, maintaining a changelog table (`_raw_changelog`) and a materialized view (`_raw_latest`) for current state tracking.
- **Configurable Materialized Views**: Supports both incremental (efficient updates) and non-incremental (complex queries) materialized views with configurable refresh intervals (`refresh_interval_minutes`) and staleness (`max_staleness`), but lacks partitioning/clustering support.
- **Cross-Project & CMEK Support**: Enables streaming to a separate BigQuery project via `BIGQUERY_PROJECT_ID` parameter and supports Customer-Managed Encryption Keys (CMEK) by granting `cloudkms.cryptoKeyEncrypterDecrypter` to the BigQuery service account.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-02T09:36:22.125509+05:30

## Related Tags

- dataset
- rag
- reddit
- scripts
- web-crawled

## Source

Original source: https://extensions.dev/extensions/firebase/firestore-bigquery-export
