---
title: clickhouse/clickhouse-server - Docker Image
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://hub.docker.com/r/clickhouse/clickhouse-server/
published_at: '2026-07-07T04:22:12.318680+05:30'
collected_at: '2026-07-07T04:22:12.318689+05:30'
tags:
- hackernews
- reddit
- web-crawled
status: active
resource_id: blog:clickhouse-clickhouse-server-docker-image
first_seen: '2026-07-07T04:22:12.318689+05:30'
last_seen: '2026-07-07T04:22:12.318689+05:30'
last_checked: '2026-07-07T04:22:12.318689+05:30'
health_score: 100
---

# clickhouse/clickhouse-server - Docker Image

## Summary

- **ClickHouse Server Docker Image**: Official Docker image for ClickHouse, an open-source column-oriented OLAP DBMS optimized for real-time SQL analytical queries, with performance 100-1000x faster than traditional RDBMS, supporting hundreds of millions to billions of rows per second.

- **Compatibility & Versions**: Supports `amd64` (requires SSE3) and `arm64` (requires ARMv8.2-A+); version tags include `latest`, branch-specific (e.g., `22.2`), full versions (e.g., `22.2.3`), and `-alpine` variants; Ubuntu-based images require Docker ≥20.10.10.

- **Deployment & Configuration**: Default ports `8123` (HTTP) and `9000` (native client); persistent volumes recommended for `/var/lib/clickhouse/` (data) and `/var/log/clickhouse-server/` (logs); supports custom configs via mounted XML files and initialization scripts in `/docker-entrypoint-initdb.d/`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-07T04:22:12.318680+05:30

## Related Tags

- hackernews
- reddit
- web-crawled

## Source

Original source: https://hub.docker.com/r/clickhouse/clickhouse-server/
