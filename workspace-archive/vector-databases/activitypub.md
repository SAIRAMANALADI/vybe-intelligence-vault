---
title: ActivityPub
archive_category: vector-databases
source_category: ai/rag
source_url: https://w3c.github.io/activitypub
resource_id: blog:activitypub
local_vault_path: ai/rag/activitypub.md
quality_score: 70
archive_score: 70
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- agents
- hackernews
- paper
- rag
- reddit
- web-crawled
- youtube
selection_reason:
- Valuable developer reference
---

# ActivityPub

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Valuable developer reference

## Summary

- **Protocol Layers**: ActivityPub defines two core layers—**client-to-server** (Social API) for user-agent interactions (e.g., mobile apps) and **server-to-server** (Federation Protocol) for decentralized content distribution between servers, with conformance classes for each.

- **Actor Model & Endpoints**: Users are represented as **Actors** with `inbox` (receives messages) and `outbox` (sends messages) endpoints; objects (e.g., `Note`, `Create`) are exchanged via HTTP POST/GET, with server-t

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://w3c.github.io/activitypub

## Local Vault File

Path: [activitypub.md](../../ai/rag/activitypub.md)
