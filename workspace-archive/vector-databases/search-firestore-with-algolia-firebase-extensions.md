---
title: Search Firestore with Algolia | Firebase Extensions Hub
archive_category: vector-databases
source_category: ai/rag
source_url: https://extensions.dev/extensions/algolia/firestore-algolia-search
resource_id: blog:search-firestore-with-algolia-firebase-extensions
local_vault_path: ai/rag/search-firestore-with-algolia-firebase-extensions.md
quality_score: 70
archive_score: 70
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- rag
- web-crawled
selection_reason:
- Valuable developer reference
---

# Search Firestore with Algolia | Firebase Extensions Hub

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Valuable developer reference

## Summary

- **Real-time Firestore-to-Algolia synchronization**: Extension listens to Firestore collection changes (add/update/delete) and propagates them to Algolia as records, using Firestore document IDs as Algolia object IDs.

- **Configurable indexing**: Only specified fields from Firestore documents are indexed in Algolia; initial sync occurs on installation/configuration changes.

- **Multi-service billing**: Requires Firebase Blaze plan; costs include Firestore, Cloud Functions, and Algolia usage (

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://extensions.dev/extensions/algolia/firestore-algolia-search

## Local Vault File

Path: [search-firestore-with-algolia-firebase-extensions.md](../../ai/rag/search-firestore-with-algolia-firebase-extensions.md)
