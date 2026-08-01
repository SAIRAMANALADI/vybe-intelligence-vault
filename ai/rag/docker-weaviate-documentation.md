---
title: Docker | Weaviate Documentation
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://weaviate.io/developers/weaviate/installation/docker-compose
published_at: '2026-08-02T03:50:20.743579+05:30'
collected_at: '2026-08-02T03:50:20.743594+05:30'
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
first_seen: '2026-08-02T03:50:20.743594+05:30'
last_seen: '2026-08-02T03:50:20.743594+05:30'
last_checked: '2026-08-02T03:50:20.743594+05:30'
health_score: 100
---

# Docker | Weaviate Documentation

## Summary

- **Default Docker Deployment**: Weaviate can be deployed via Docker using `docker run -p 8080:8080 -p 50051:50051 cr.weaviate.io/semitechnologies/weaviate:1.38.8`, exposing HTTP (`8080`) and gRPC (`50051`) ports with default env vars: `PERSISTENCE_DATA_PATH=./data`, `AUTHENTICATION_ANONYMOUS_ACCESS_ENABLED=true`, and `QUERY_DEFAULTS_LIMIT=10`.

- **Customizable Auth & RBAC**: Docker Compose supports anonymous (`AUTHENTICATION_ANONYMOUS_ACCESS_ENABLED=true`) or API-key-based auth (`AUTHENTICATION_APIKEY_ENABLED=true`) with RBAC (`AUTHORIZATION_ENABLE_RBAC=true`), defining users/keys (e.g., `AUTHENTICATION_APIKEY_ALLOWED_KEYS=user-a-key,user-b-key`) and root admin roles (`AUTHORIZATION_RBAC_ROOT_USERS=user-a`).

- **Multi-Node & Module Integration**: Supports horizontal scaling via Raft (`RAFT_JOIN`, `RAFT_BOOTSTRAP_EXPECT`) with persistent volumes (`weaviate_data:/var/lib/weaviate`) and integrates modules like `text2vec-transformers` (requires `ENABLE_MODULES=text2vec-transformers` and inference API endpoint).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-02T03:50:20.743579+05:30

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
