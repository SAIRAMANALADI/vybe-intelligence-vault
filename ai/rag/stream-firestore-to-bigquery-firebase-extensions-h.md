---
title: Stream Firestore to BigQuery | Firebase Extensions Hub
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://extensions.dev/extensions/firebase/firestore-bigquery-export
published_at: '2026-08-06T14:39:38.826019+05:30'
collected_at: '2026-08-06T14:39:38.826033+05:30'
tags:
- dataset
- rag
- reddit
- scripts
- web-crawled
status: active
resource_id: blog:stream-firestore-to-bigquery-firebase-extensions-h
first_seen: '2026-08-06T14:39:38.826033+05:30'
last_seen: '2026-08-06T14:39:38.826033+05:30'
last_checked: '2026-08-06T14:39:38.826033+05:30'
health_score: 100
---

# Stream Firestore to BigQuery | Firebase Extensions Hub

## Summary

- **Real-time Firestore-to-BigQuery Sync**: Extension streams incremental document changes (CREATE/UPDATE/DELETE) from a specified Firestore collection to BigQuery, maintaining a changelog table and a current-state view. Subcollections require separate extension instances or `{wildcard}` path configuration.

- **Materialized View Support**: Generates both regular and materialized views (incremental/non-incremental) for optimized querying, with configurable refresh intervals (`refresh_interval_minutes`, `max_staleness`). Partitioning/clustering is unsupported in materialized views.

- **Cross-Project & Security Configurations**: Supports exporting to a different GCP project via `BIGQUERY_PROJECT_ID` parameter; enables Customer-Managed Encryption Keys (CMEK) via KMS integration (`bq-PROJECT_NUMBER@bigquery-encryption.iam.gserviceaccount.com` role assignment). Requires Blaze plan for streaming insert billing.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-06T14:39:38.826019+05:30

## Related Tags

- dataset
- rag
- reddit
- scripts
- web-crawled

## Source

Original source: https://extensions.dev/extensions/firebase/firestore-bigquery-export
