---
title: Search Firestore with Algolia | Firebase Extensions Hub
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://extensions.dev/extensions/algolia/firestore-algolia-search
published_at: '2026-06-27T14:30:09.976587+05:30'
collected_at: '2026-06-27T14:30:09.976599+05:30'
tags:
- rag
- web-crawled
status: active
resource_id: blog:search-firestore-with-algolia-firebase-extensions
first_seen: '2026-06-27T14:30:09.976599+05:30'
last_seen: '2026-06-27T14:30:09.976599+05:30'
last_checked: '2026-06-27T14:30:09.976599+05:30'
health_score: 100
---

# Search Firestore with Algolia | Firebase Extensions Hub

## Summary

- **Real-time Firestore-to-Algolia synchronization**: Extension listens to Firestore collection changes (add/update/delete) and propagates them to Algolia as indexed records, using Firestore document IDs as Algolia object IDs.

- **Configurable indexing**: Only specified fields in the Firestore collection are indexed in Algolia; initial sync or reconfiguration triggers a full reindexing of the collection.

- **Multi-service billing model**: Requires Firebase Blaze plan; costs include Firestore operations, Cloud Functions execution, and Algolia service usage (pricing tier-dependent).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-27T14:30:09.976587+05:30

## Related Tags

- rag
- web-crawled

## Source

Original source: https://extensions.dev/extensions/algolia/firestore-algolia-search
