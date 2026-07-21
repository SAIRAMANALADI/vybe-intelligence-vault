---
title: Docker | Weaviate Documentation
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://weaviate.io/developers/weaviate/installation/docker-compose
published_at: '2026-07-21T14:25:11.717502+05:30'
collected_at: '2026-07-21T14:25:11.717519+05:30'
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
first_seen: '2026-07-21T14:25:11.717519+05:30'
last_seen: '2026-07-21T14:25:11.717519+05:30'
last_checked: '2026-07-21T14:25:11.717519+05:30'
health_score: 100
---

# Docker | Weaviate Documentation

## Summary

- **Default Docker Deployment**: Weaviate can be deployed via Docker using `docker run -p 8080:8080 -p 50051:50051 cr.weaviate.io/semitechnologies/weaviate:1.38.3`, exposing HTTP (8080) and gRPC (50051) ports with default env vars: `PERSISTENCE_DATA_PATH=./data`, `AUTHENTICATION_ANONYMOUS_ACCESS_ENABLED=true`, and `QUERY_DEFAULTS_LIMIT=10`.

- **Custom Configuration via `docker-compose.yml`**: Supports persistent volumes (named or host-bound), API-key authentication (`AUTHENTICATION_APIKEY_ENABLED=true`), RBAC (`AUTHORIZATION_ENABLE_RBAC=true`), and module integrations (e.g., `text2vec-transformers` with GPU acceleration via `ENABLE_CUDA=1`).

- **Multi-Node Cluster Setup**: Requires `CLUSTER_JOIN`, `RAFT_JOIN`, and `RAFT_BOOTSTRAP_EXPECT` env vars for horizontal scaling; founding node configures `CLUSTER_GOSSIP_BIND_PORT`/`CLUSTER_DATA_BIND_PORT`, while additional nodes reference the founding node’s service name for cluster formation.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-21T14:25:11.717502+05:30

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
