---
title: Search Firestore with Algolia | Firebase Extensions Hub
archive_category: rag-systems
source_category: ai/rag
source_url: https://extensions.dev/extensions/algolia/firestore-algolia-search
resource_id: blog:search-firestore-with-algolia-firebase-extensions
local_vault_path: ai/rag/search-firestore-with-algolia-firebase-extensions.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- rag
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Search Firestore with Algolia | Firebase Extensions Hub

## Why This Is In The Archive

- Matched archive category: `RAG Systems`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Real-time Sync**: Indexes Firestore documents to Algolia in real-time, propagating changes (adds/updates/deletes) to corresponding Algolia records via Cloud Functions.
- **Configurable Indexing**: Only indexes specified fields from Firestore collections, using document IDs as Algolia object IDs; supports semantic, vector, and text search.
- **Billing & Setup**: Requires Firebase Blaze plan; billed for Cloud Functions, Firestore, and Algolia usage; requires pre-configured Firestore and Algoli

## Use Cases

- Knowledge querying
- Document summarization
- Hybrid retrieval

## Source

Original source URL: https://extensions.dev/extensions/algolia/firestore-algolia-search

## Local Vault File

Path: [search-firestore-with-algolia-firebase-extensions.md](../../ai/rag/search-firestore-with-algolia-firebase-extensions.md)
