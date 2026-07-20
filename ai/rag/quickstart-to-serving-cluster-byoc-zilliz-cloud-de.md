---
title: Quickstart to Serving Cluster | BYOC | Zilliz Cloud Developer Hub
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.zilliz.com/docs/on-zilliz-cloud-console#free-cluster-details
published_at: '2026-07-20T15:11:10.634753+05:30'
collected_at: '2026-07-20T15:11:10.634764+05:30'
tags:
- hackernews
- rag
- web-crawled
status: active
resource_id: blog:quickstart-to-serving-cluster-byoc-zilliz-cloud-de
first_seen: '2026-07-20T15:11:10.634764+05:30'
last_seen: '2026-07-20T15:11:10.634764+05:30'
last_checked: '2026-07-20T15:11:10.634764+05:30'
health_score: 100
---

# Quickstart to Serving Cluster | BYOC | Zilliz Cloud Developer Hub

## Summary

- **BYOC Deployment**: Zilliz Cloud's Bring-Your-Own-Cloud (BYOC) solution enables hosting vector databases in user-owned cloud accounts (AWS/GCP/Azure) via VPC deployment, requiring prior sales contact and infrastructure setup per [BYOC docs](https://docs.zilliz.com/docs/byoc/byoc-intro).

- **Cluster Operations**: Serving clusters combine compute/storage for real-time vector search; setup involves authentication (API key), optional database creation, schema definition (e.g., `Int64`/`FloatVector` fields), indexing (e.g., `AUTOINDEX` for `COSINE` similarity), and in-memory collection loading.

- **Data Ingestion**: Bulk data import from external storage (e.g., S3) uses signed URLs with `bulk_import()` (Python) or REST API calls, returning job IDs for progress monitoring via `get_import_progress()`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-20T15:11:10.634753+05:30

## Related Tags

- hackernews
- rag
- web-crawled

## Source

Original source: https://docs.zilliz.com/docs/on-zilliz-cloud-console#free-cluster-details
