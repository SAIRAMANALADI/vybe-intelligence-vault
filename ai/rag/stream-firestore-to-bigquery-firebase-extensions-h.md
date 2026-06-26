---
title: Stream Firestore to BigQuery | Firebase Extensions Hub
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://extensions.dev/extensions/firebase/firestore-bigquery-export
published_at: '2026-06-26T15:29:15.655307+05:30'
collected_at: '2026-06-26T15:29:15.655323+05:30'
tags:
- dataset
- rag
- reddit
- scripts
- web-crawled
status: active
resource_id: blog:stream-firestore-to-bigquery-firebase-extensions-h
first_seen: '2026-06-26T15:29:15.655323+05:30'
last_seen: '2026-06-26T15:29:15.655323+05:30'
last_checked: '2026-06-26T15:29:15.655323+05:30'
health_score: 100
---

# Stream Firestore to BigQuery | Firebase Extensions Hub

## Summary

- **Real-time Incremental Sync**: Exports real-time, incremental updates from a specified Cloud Firestore collection to BigQuery, maintaining a mirrored dataset with metadata fields (`timestamp`, `document_name`, `operation`) in a raw changelog table and a view for current state.

- **Materialized View Support**: Generates both regular and materialized views in BigQuery (incremental/non-incremental), with configurable refresh intervals and max staleness; SQL definitions cannot be modified post-creation, requiring recreation for changes.

- **Cross-Project & Encryption Options**: Supports streaming to a different BigQuery project via `BIGQUERY_PROJECT_ID` parameter and enables Customer Managed Encryption Keys (CMEK) by granting `cloudkms.cryptoKeyEncrypterDecrypter` role to the BigQuery service account.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-26T15:29:15.655307+05:30

## Related Tags

- dataset
- rag
- reddit
- scripts
- web-crawled

## Source

Original source: https://extensions.dev/extensions/firebase/firestore-bigquery-export
