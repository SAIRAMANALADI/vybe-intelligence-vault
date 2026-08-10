---
title: extensions/firestore-bigquery-export/guides/GENERATE_SCHEMA_VIEWS.md at master
  · firebase/extensions · GitHub
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://github.com/firebase/extensions/blob/master/firestore-bigquery-export/guides/GENERATE_SCHEMA_VIEWS.md
published_at: '2026-08-10T08:20:39.257225+05:30'
collected_at: '2026-08-10T08:20:39.257238+05:30'
tags:
- dataset
- reddit
- web-crawled
status: active
resource_id: github:firebase/extensions
first_seen: '2026-08-10T08:20:39.257238+05:30'
last_seen: '2026-08-10T08:20:39.257238+05:30'
last_checked: '2026-08-10T08:20:39.257238+05:30'
health_score: 100
---

# extensions/firestore-bigquery-export/guides/GENERATE_SCHEMA_VIEWS.md at master · firebase/extensions · GitHub

## Summary

- **Schema Enrichment**: The `fs-bq-schema-views` script generates structured BigQuery views from raw Firestore changelog data, applying explicit data types (e.g., `STRING`, `NUMERIC`, `GEOGRAPHY`) to improve queryability while preserving raw data integrity.

- **AI-Powered Schema Generation**: Utilizes Google’s Genkit SDK and Gemini AI to automatically infer and generate schema definitions from Firestore collections, supporting complex types (arrays, maps, geopoints) and resolving SQL reserved keywords via `column_name` aliases.

- **Dual-View Output**: Creates two BigQuery views per schema file—`changelog` (historical changes) and `latest` (current document state)—with type-safe columns mapped from Firestore (e.g., `geopoint` → `GEOGRAPHY`, arrays → unnested `_member`/`_index` columns).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-10T08:20:39.257225+05:30

## Related Tags

- dataset
- reddit
- web-crawled

## Source

Original source: https://github.com/firebase/extensions/blob/master/firestore-bigquery-export/guides/GENERATE_SCHEMA_VIEWS.md
