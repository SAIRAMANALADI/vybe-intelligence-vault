---
title: A tale of two ports | Cockroach Labs
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://www.cockroachlabs.com/blog/a-tale-of-two-ports/
published_at: '2026-07-02T04:21:27.430716+05:30'
collected_at: '2026-07-02T04:21:27.430724+05:30'
tags:
- rag
- web-crawled
status: active
resource_id: blog:a-tale-of-two-ports-cockroach-labs
first_seen: '2026-07-02T04:21:27.430724+05:30'
last_seen: '2026-07-02T04:21:27.430724+05:30'
last_checked: '2026-07-02T04:21:27.430724+05:30'
health_score: 100
---

# A tale of two ports | Cockroach Labs

## Summary

- **Protocol Multiplexing Evolution**: CockroachDB initially multiplexed RPC and admin UI traffic on a single port using `net/rpc` over HTTP, but transitioned to separate ports for PostgreSQL wire protocol (PGWire) and HTTP/RPC due to protocol incompatibilities (PGWire lacks HTTP handshake support).

- **gRPC Integration & Performance Issues**: Switched RPC to gRPC (leveraging HTTP/2) for features like streaming RPCs, but faced performance degradation due to `grpc.(*Server).ServeHTTP` inefficiencies, requiring cmux-based protocol sniffing to route to `grpc.(*Server).Serve`.

- **Current Port Architecture**: Due to TLS-related gRPC client behavior (header pre-send), CockroachDB now uses separate ports: one for gRPC+PGWire (multiplexed via cmux) and a dedicated port for the admin UI, with plans to revert to a single port pending gRPC performance fixes.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-02T04:21:27.430716+05:30

## Related Tags

- rag
- web-crawled

## Source

Original source: https://www.cockroachlabs.com/blog/a-tale-of-two-ports/
