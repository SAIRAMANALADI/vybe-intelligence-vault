---
title: Introduction to tables | BigQuery | Google Cloud Documentation
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://cloud.google.com/bigquery/docs/tables-intro
published_at: '2026-08-10T21:56:50.751536+05:30'
collected_at: '2026-08-10T21:56:50.751548+05:30'
tags:
- dataset
- rag
- web-crawled
status: active
resource_id: blog:introduction-to-tables-bigquery-google-cloud-docum
first_seen: '2026-08-10T21:56:50.751548+05:30'
last_seen: '2026-08-10T21:56:50.751548+05:30'
last_checked: '2026-08-10T21:56:50.751548+05:30'
health_score: 100
---

# Introduction to tables | BigQuery | Google Cloud Documentation

## Summary

- **Table Structure & Schema**: BigQuery tables consist of rows (records) and columns (fields) with a defined schema (column names, data types) specified at creation or via query/load jobs; fully qualified names follow `projectname.datasetname.tablename` (GoogleSQL) or `projectname:datasetname.tablename` (bq CLI).

- **Table Types**: Supports standard (columnar storage), external (BigLake/Object/Non-BigLake for structured/unstructured data), and views (logical SQL-defined, including materialized precomputed variants).

- **Limitations & Pricing**: Table names must be unique per dataset; exports only support Cloud Storage; quotas apply to load/export/query/copy jobs; storage/query pricing based on data volume and operations, with many operations free but subject to quotas.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-10T21:56:50.751536+05:30

## Related Tags

- dataset
- rag
- web-crawled

## Source

Original source: https://cloud.google.com/bigquery/docs/tables-intro
