---
title: clickhouse/clickhouse-server - Docker Image
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://hub.docker.com/r/clickhouse/clickhouse-server/
published_at: '2026-08-02T21:56:09.071041+05:30'
collected_at: '2026-08-02T21:56:09.071056+05:30'
tags:
- hackernews
- reddit
- web-crawled
status: active
resource_id: blog:clickhouse-clickhouse-server-docker-image
first_seen: '2026-08-02T21:56:09.071056+05:30'
last_seen: '2026-08-02T21:56:09.071056+05:30'
last_checked: '2026-08-02T21:56:09.071056+05:30'
health_score: 100
---

# clickhouse/clickhouse-server - Docker Image

## Summary

- **ClickHouse Server Docker Image**: Official image for ClickHouse, an open-source column-oriented OLAP DBMS optimized for real-time SQL queries, with performance 100-1000x faster than traditional RDBMS, supporting hundreds of millions to billions of rows per second.

- **Versioning & Compatibility**: Uses tags like `latest`, `22.2` (branch), `22.2.3` (full version), and `head` (latest commit). Requires SSE3 for `amd64` and ARMv8.2-A+ for `arm64`; Ubuntu-based images need Docker ≥20.10.10.

- **Deployment & Configuration**: Exposes ports `8123` (HTTP) and `9000` (native client); supports persistent volumes (`/var/lib/clickhouse/`, `/var/log/clickhouse-server/`), custom configs via mounted XML files, and initialization scripts in `/docker-entrypoint-initdb.d/`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-02T21:56:09.071041+05:30

## Related Tags

- hackernews
- reddit
- web-crawled

## Source

Original source: https://hub.docker.com/r/clickhouse/clickhouse-server/
