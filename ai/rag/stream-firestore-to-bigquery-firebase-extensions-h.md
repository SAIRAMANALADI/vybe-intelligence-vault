---
title: Stream Firestore to BigQuery | Firebase Extensions Hub
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://extensions.dev/extensions/firebase/firestore-bigquery-export
published_at: '2026-08-09T13:02:19.467300+05:30'
collected_at: '2026-08-09T13:02:19.467314+05:30'
tags:
- dataset
- rag
- reddit
- scripts
- web-crawled
status: active
resource_id: blog:stream-firestore-to-bigquery-firebase-extensions-h
first_seen: '2026-08-09T13:02:19.467314+05:30'
last_seen: '2026-08-09T13:02:19.467314+05:30'
last_checked: '2026-08-09T13:02:19.467314+05:30'
health_score: 100
---

# Stream Firestore to BigQuery | Firebase Extensions Hub

## Summary

- **Real-time Firestore-to-BigQuery Sync**: Extension streams incremental document changes (CREATE/UPDATE/DELETE) from a specified Firestore collection to BigQuery, maintaining a raw changelog table and a current-state view with metadata fields (`timestamp`, `document_name`, `operation`).

- **Materialized View Support**: Generates both incremental and non-incremental materialized views in BigQuery for optimized query performance, with configurable refresh intervals and staleness limits, though neither supports partitioning/clustering.

- **Cross-Project & CMEK Configurations**: Supports exporting to a different GCP project via `BIGQUERY_PROJECT_ID` parameter and enables customer-managed encryption keys (CMEK) for BigQuery tables by granting KMS CryptoKey Encrypter/Decrypter roles to the service account.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-09T13:02:19.467300+05:30

## Related Tags

- dataset
- rag
- reddit
- scripts
- web-crawled

## Source

Original source: https://extensions.dev/extensions/firebase/firestore-bigquery-export
