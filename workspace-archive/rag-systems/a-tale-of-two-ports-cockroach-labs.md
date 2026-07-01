---
title: A tale of two ports | Cockroach Labs
archive_category: rag-systems
source_category: ai/rag
source_url: https://www.cockroachlabs.com/blog/a-tale-of-two-ports/
resource_id: blog:a-tale-of-two-ports-cockroach-labs
local_vault_path: ai/rag/a-tale-of-two-ports-cockroach-labs.md
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

# A tale of two ports | Cockroach Labs

## Why This Is In The Archive

- Matched archive category: `RAG Systems`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Protocol Multiplexing Evolution**: CockroachDB initially multiplexed RPC and admin UI traffic on a single port using `net/rpc` over HTTP, but transitioned to separate ports for PostgreSQL wire protocol (PGWire) and HTTP/RPC due to protocol incompatibilities (PGWire lacks HTTP handshake support).

- **gRPC Integration & Performance Issues**: Switched RPC to gRPC (leveraging HTTP/2) for features like streaming RPCs, but faced performance degradation due to `grpc.(*Server).ServeHTTP` inefficien

## Use Cases

- Knowledge querying
- Document summarization
- Hybrid retrieval

## Source

Original source URL: https://www.cockroachlabs.com/blog/a-tale-of-two-ports/

## Local Vault File

Path: [a-tale-of-two-ports-cockroach-labs.md](../../ai/rag/a-tale-of-two-ports-cockroach-labs.md)
