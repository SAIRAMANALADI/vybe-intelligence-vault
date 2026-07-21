---
title: Docker | Weaviate Documentation
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://weaviate.io/developers/weaviate/installation/docker-compose
published_at: '2026-07-21T09:24:23.044859+05:30'
collected_at: '2026-07-21T09:24:23.044871+05:30'
tags:
- agents
- anthropic
- benchmark
- hackernews
- meta-ai
- models
- openai
- rag
- reddit
- web-crawled
- youtube
status: active
resource_id: blog:docker-weaviate-documentation
first_seen: '2026-07-21T09:24:23.044871+05:30'
last_seen: '2026-07-21T09:24:23.044871+05:30'
last_checked: '2026-07-21T09:24:23.044871+05:30'
health_score: 100
---

# Docker | Weaviate Documentation

## Summary

- Weaviate Docker deployment exposes ports `8080` (HTTP) and `50051` (gRPC) by default, with data persistence configurable via named volumes (`weaviate_data`) or host paths (`/var/lib/weaviate`).

- Authentication is controlled via environment variables: `AUTHENTICATION_ANONYMOUS_ACCESS_ENABLED` (default: `true`), `AUTHENTICATION_APIKEY_ENABLED` (for API-key auth), and `AUTHORIZATION_ENABLE_RBAC` (for role-based access).

- Multi-node clustering requires environment variables like `CLUSTER_GOSSIP_BIND_PORT`, `RAFT_JOIN`, and `RAFT_BOOTSTRAP_EXPECT`, with the founding node configured first and subsequent nodes joining via `CLUSTER_JOIN`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-21T09:24:23.044859+05:30

## Related Tags

- agents
- anthropic
- benchmark
- hackernews
- meta-ai
- models
- openai
- rag
- reddit
- web-crawled
- youtube

## Source

Original source: https://weaviate.io/developers/weaviate/installation/docker-compose
