---
title: Create and manage databases | Firestore in Native mode | Google Cloud Documentation
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://cloud.google.com/firestore/docs/manage-databases
published_at: '2026-07-08T01:58:03.116565+05:30'
collected_at: '2026-07-08T01:58:03.116579+05:30'
tags:
- web-crawled
status: active
resource_id: blog:create-and-manage-databases-firestore-in-native-mo
first_seen: '2026-07-08T01:58:03.116579+05:30'
last_seen: '2026-07-08T01:58:03.116579+05:30'
last_checked: '2026-07-08T01:58:03.116579+05:30'
health_score: 100
---

# Create and manage databases | Firestore in Native mode | Google Cloud Documentation

## Summary

- **IAM Permissions & Roles**: Requires `roles/datastore.owner` (Cloud Datastore Owner) with permissions: `datastore.databases.create`, `datastore.databases.getMetadata`, `datastore.databases.update`, `datastore.databases.delete`, `datastore.databases.clone`.

- **Database Creation Methods**: Supports creation via Google Cloud Console, `gcloud` CLI, Firebase CLI, or Terraform; includes options for Firestore Native/Standard editions, data access modes, and delete protection (`--delete-protection` flag).

- **Database Cloning**: Enabled via `datastore.databases.clone` permission; clones use point-in-time recovery (PITR) data (1-minute granularity) with configurable encryption (default or CMEK) and location inheritance from the source database.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-08T01:58:03.116565+05:30

## Related Tags

- web-crawled

## Source

Original source: https://cloud.google.com/firestore/docs/manage-databases
