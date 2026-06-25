---
title: clickhouse/clickhouse-server - Docker Image
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://hub.docker.com/r/clickhouse/clickhouse-server
published_at: '2026-06-24T20:52:23.795458+05:30'
collected_at: '2026-06-24T20:52:23.795473+05:30'
tags:
- hackernews
- reddit
- web-crawled
status: active
resource_id: blog:clickhouse-clickhouse-server-docker-image
first_seen: '2026-06-24T20:52:23.795473+05:30'
last_seen: '2026-06-24T20:52:23.795473+05:30'
last_checked: '2026-06-24T20:52:23.795473+05:30'
health_score: 100
---

# clickhouse/clickhouse-server - Docker Image

## Summary

- **ClickHouse Server Docker Image**: Official image for ClickHouse, an open-source column-oriented OLAP DBMS optimized for real-time SQL query processing, with performance 100-1000x faster than traditional RDBMS, handling billions of rows/sec.

- **Versioning & Compatibility**: Supports `latest`, branch (`22.2`), and full version tags (`22.2.3`), with optional `-alpine` variants; requires SSE3 (x86) or ARMv8.2-A+ (Graviton ≥2) CPU support; Ubuntu-based images need Docker ≥20.10.10.

- **Deployment & Configuration**: Exposes ports `8123` (HTTP) and `9000` (native); supports persistent volumes (`/var/lib/clickhouse`, `/var/log/clickhouse-server`), custom configs via mounted XML files, and initialization scripts (`/docker-entrypoint-initdb.d`); requires `--cap-add` for advanced features (e.g., `SYS_NICE`, `IPC_LOCK`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-24T20:52:23.795458+05:30

## Related Tags

- hackernews
- reddit
- web-crawled

## Source

Original source: https://hub.docker.com/r/clickhouse/clickhouse-server
