---
title: extensions/firestore-bigquery-export/guides/IMPORT_EXISTING_DOCUMENTS.md at
  master · firebase/extensions · GitHub
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://github.com/firebase/extensions/blob/master/firestore-bigquery-export/guides/IMPORT_EXISTING_DOCUMENTS.md
published_at: '2026-08-10T21:56:55.011971+05:30'
collected_at: '2026-08-10T21:56:55.011981+05:30'
tags:
- dataset
- reddit
- web-crawled
status: active
resource_id: github:firebase/extensions
first_seen: '2026-08-10T21:56:55.011981+05:30'
last_seen: '2026-08-10T21:56:55.011981+05:30'
last_checked: '2026-08-10T21:56:55.011981+05:30'
health_score: 100
---

# extensions/firestore-bigquery-export/guides/IMPORT_EXISTING_DOCUMENTS.md at master · firebase/extensions · GitHub

## Summary

- **Purpose & Operation**: The `fs-bq-import-collection` script imports existing Firestore documents into the raw changelog table of the *Stream Firestore to BigQuery* extension, marking imports with `operation: "IMPORT"` and epoch timestamps to ensure subsequent changes supersede the import record.

- **Query Support & Execution**: Supports both collection paths and `collectionGroup` queries (via `${COLLECTION_GROUP_QUERY}=true`), with execution via `npx @firebaseextensions/fs-bq-import-collection` and optional flags for non-interactive mode (`--non-interactive`) and transform functions (`--transform-function-url`).

- **Error Handling & Post-Import Steps**: Failed batches can be logged to a file (`-f, --failed-batch-output`) for retry, and schema views should be generated post-import using the `fs-bq-schema-views` tool to convert raw JSON strings into properly typed BigQuery columns.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-10T21:56:55.011971+05:30

## Related Tags

- dataset
- reddit
- web-crawled

## Source

Original source: https://github.com/firebase/extensions/blob/master/firestore-bigquery-export/guides/IMPORT_EXISTING_DOCUMENTS.md
