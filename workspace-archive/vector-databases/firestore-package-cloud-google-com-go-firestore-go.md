---
title: firestore package - cloud.google.com/go/firestore - Go Packages
archive_category: vector-databases
source_category: ai/rag
source_url: https://godoc.org/cloud.google.com/go/firestore
resource_id: blog:firestore-package-cloud-google-com-go-firestore-go
local_vault_path: ai/rag/firestore-package-cloud-google-com-go-firestore-go.md
quality_score: 70
archive_score: 70
archive_tier: useful
resource_kind: benchmark
importance: medium
tags:
- agents
- benchmark
- hackernews
- models
- rag
- web-crawled
selection_reason:
- Valuable developer reference
---

# firestore package - cloud.google.com/go/firestore - Go Packages

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: benchmark
- Selection reasons:
  - Valuable developer reference

## Summary

- **Client Initialization**: Firestore client is initialized via `firestore.NewClient(ctx, "projectID")`, requiring a valid Google Cloud project ID and context; incompatible with Cloud Datastore in the same project.

- **Document Operations**: Supports CRUD via `Create`, `Set`, `Update`, and `Delete` on `DocumentRef`, with atomic batch writes via `WriteBatch` and conditional writes using `Preconditions` (e.g., `LastUpdateTime`).

- **Query Capabilities**: Enables SQL-like queries with `Where`, `

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://godoc.org/cloud.google.com/go/firestore

## Local Vault File

Path: [firestore-package-cloud-google-com-go-firestore-go.md](../../ai/rag/firestore-package-cloud-google-com-go-firestore-go.md)
