---
title: Stream Firestore to BigQuery | Firebase Extensions Hub
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://extensions.dev/extensions/firebase/firestore-bigquery-export
published_at: '2026-07-04T21:56:16.644695+05:30'
collected_at: '2026-07-04T21:56:16.644708+05:30'
tags:
- dataset
- rag
- reddit
- scripts
- web-crawled
status: active
resource_id: blog:stream-firestore-to-bigquery-firebase-extensions-h
first_seen: '2026-07-04T21:56:16.644708+05:30'
last_seen: '2026-07-04T21:56:16.644708+05:30'
last_checked: '2026-07-04T21:56:16.644708+05:30'
health_score: 100
---

# Stream Firestore to BigQuery | Firebase Extensions Hub

## Summary

- **Real-time Firestore-to-BigQuery Sync**: Extension streams incremental document changes (CREATE/UPDATE/DELETE) from a specified Firestore collection to BigQuery, maintaining a raw changelog table and a materialized view for current state. Supports wildcard paths for subcollections (e.g., `chats/{chatid}/posts`).

- **Materialized View Support**: Generates both regular and materialized views (incremental/non-incremental) with configurable refresh intervals (`refresh_interval_minutes`, `max_staleness`). Incremental views restrict partitioned/aggregated field filtering; non-incremental views require full recomputation.

- **Cross-Project & Security Configurations**: Enables streaming to a separate BigQuery project via `BIGQUERY_PROJECT_ID` parameter and grants cross-project permissions via provided scripts. Supports Customer-Managed Encryption Keys (CMEK) via KMS integration, requiring explicit key resource naming during setup.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-04T21:56:16.644695+05:30

## Related Tags

- dataset
- rag
- reddit
- scripts
- web-crawled

## Source

Original source: https://extensions.dev/extensions/firebase/firestore-bigquery-export
