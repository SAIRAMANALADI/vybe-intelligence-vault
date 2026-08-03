---
title: extensions/firestore-bigquery-export/guides/IMPORT_EXISTING_DOCUMENTS.md at
  master · firebase/extensions · GitHub
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://github.com/firebase/extensions/blob/master/firestore-bigquery-export/guides/IMPORT_EXISTING_DOCUMENTS.md
published_at: '2026-08-04T04:00:15.695095+05:30'
collected_at: '2026-08-04T04:00:15.695106+05:30'
tags:
- dataset
- reddit
- web-crawled
status: active
resource_id: github:firebase/extensions
first_seen: '2026-08-04T04:00:15.695106+05:30'
last_seen: '2026-08-04T04:00:15.695106+05:30'
last_checked: '2026-08-04T04:00:15.695106+05:30'
health_score: 100
---

# extensions/firestore-bigquery-export/guides/IMPORT_EXISTING_DOCUMENTS.md at master · firebase/extensions · GitHub

## Summary

- **Purpose & Operation**: The `fs-bq-import-collection` script imports existing Firestore documents into BigQuery's raw changelog table (created by the *Stream Firestore to BigQuery* extension) with an `IMPORT` operation and epoch timestamp, ensuring subsequent operations override import records. Supports pausing/resuming via cursor files and handles large collections via wildcard (`${users/{uid}/pets}`) or `collectionGroup` queries (set `${COLLECTION_GROUP_QUERY}=true`).

- **Execution & Requirements**: Requires `${PROJECT_ID}`, `${BIGQUERY_PROJECT_ID}`, `${COLLECTION_PATH}`, `${DATASET_ID}`, and `${COLLECTION_GROUP_QUERY}` (optional). Runs via `npx @firebaseextensions/fs-bq-import-collection` with Application Default Credentials (or service account). Failed batches can be logged to a file (`-f, --failed-batch-output`) for retry.

- **Post-Import & Schema Handling**: After import, use the `fs-bq-schema-views` tool to generate typed schema views (converting JSON strings to proper BigQuery columns) or optionally apply a transform function (`--transform-function-url`) to preprocess document data before BigQuery ingestion.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-04T04:00:15.695095+05:30

## Related Tags

- dataset
- reddit
- web-crawled

## Source

Original source: https://github.com/firebase/extensions/blob/master/firestore-bigquery-export/guides/IMPORT_EXISTING_DOCUMENTS.md
