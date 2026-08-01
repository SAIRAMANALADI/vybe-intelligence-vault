---
title: Docker | Weaviate Documentation
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://weaviate.io/developers/weaviate/installation/docker-compose
published_at: '2026-08-01T14:15:10.307636+05:30'
collected_at: '2026-08-01T14:15:10.307650+05:30'
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
first_seen: '2026-08-01T14:15:10.307650+05:30'
last_seen: '2026-08-01T14:15:10.307650+05:30'
last_checked: '2026-08-01T14:15:10.307650+05:30'
health_score: 100
---

# Docker | Weaviate Documentation

## Summary

- Weaviate Docker deployment supports default settings via `docker run` with ports `8080` (HTTP) and `50051` (gRPC) exposed, using image `cr.weaviate.io/semitechnologies/weaviate:1.38.8` and default env vars: `PERSISTENCE_DATA_PATH=./data`, `AUTHENTICATION_ANONYMOUS_ACCESS_ENABLED=true`, `QUERY_DEFAULTS_LIMIT=10`.

- Custom configurations are enabled via `docker-compose.yml`, supporting persistent volumes (named or host-bound), API-key authentication (`AUTHENTICATION_APIKEY_ENABLED=true`), RBAC (`AUTHORIZATION_ENABLE_RBAC=true`), and optional model integrations (e.g., `text2vec-transformers` with GPU acceleration via `ENABLE_CUDA=1`).

- Multi-node clustering requires environment variables like `CLUSTER_JOIN`, `RAFT_JOIN`, `RAFT_BOOTSTRAP_EXPECT`, and port bindings (`CLUSTER_GOSSIP_BIND_PORT`, `CLUSTER_DATA_BIND_PORT`) for horizontal replication, with founding nodes initiating the cluster and subsequent nodes joining via service discovery.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-01T14:15:10.307636+05:30

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
