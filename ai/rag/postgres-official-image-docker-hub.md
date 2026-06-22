---
title: postgres - Official Image | Docker Hub
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://hub.docker.com/_/postgres
published_at: '2026-06-22T11:31:07.356556+05:30'
collected_at: '2026-06-22T11:31:07.356568+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:postgres-official-image-docker-hub
first_seen: '2026-06-22T11:31:07.356568+05:30'
last_seen: '2026-06-22T11:31:07.356568+05:30'
last_checked: '2026-06-22T11:31:07.356568+05:30'
health_score: 100
---

# postgres - Official Image | Docker Hub

## Summary

- **Official PostgreSQL Docker Image**: Maintained by the PostgreSQL Docker Community, providing an ORDBMS with ACID compliance, MVCC, and SQL:2011 standard support, available in multiple architectures (`amd64`, `arm64v8`, `ppc64le`, etc.) with official tags for versions 14–19 (e.g., `16.14`, `18.4-alpine3.24`).

- **Key Environment Variables**: Requires `POSTGRES_PASSWORD` for superuser access; optional variables include `POSTGRES_USER` (default: `postgres`), `POSTGRES_DB` (default: same as `POSTGRES_USER`), `POSTGRES_INITDB_ARGS` (e.g., `--data-checksums`), and `POSTGRES_INITDB_WALDIR` for transaction log location.

- **Deployment Methods**: Supports direct `docker run` (e.g., `docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres`), interactive `psql` access, and `docker compose` with shared memory (`shm_size`) and persistent volumes for production use.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-22T11:31:07.356556+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://hub.docker.com/_/postgres
