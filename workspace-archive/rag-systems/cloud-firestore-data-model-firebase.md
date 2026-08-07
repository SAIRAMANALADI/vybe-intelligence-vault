---
title: Cloud Firestore Data model | Firebase
archive_category: rag-systems
source_category: ai/rag
source_url: https://firebase.google.com/docs/firestore/data-model#documents
resource_id: blog:cloud-firestore-data-model-firebase
local_vault_path: ai/rag/cloud-firestore-data-model-firebase.md
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

# Cloud Firestore Data model | Firebase

## Why This Is In The Archive

- Matched archive category: `RAG Systems`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- Cloud Firestore uses a **document-oriented NoSQL model** where data is stored in **documents** (key-value pairs) within **collections**, with no fixed schema—documents can vary in fields and data types.
- Documents are **lightweight JSON-like records** (with extended data types) limited to **1MB size**, and can contain **nested subcollections/maps** for hierarchical data organization.
- Document references are **uniquely addressable** via language-specific APIs (e.g., `db.collection('users').d

## Use Cases

- Knowledge querying
- Document summarization
- Hybrid retrieval

## Source

Original source URL: https://firebase.google.com/docs/firestore/data-model#documents

## Local Vault File

Path: [cloud-firestore-data-model-firebase.md](../../ai/rag/cloud-firestore-data-model-firebase.md)
