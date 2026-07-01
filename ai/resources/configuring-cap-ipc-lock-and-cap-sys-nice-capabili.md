---
title: Configuring CAP_IPC_LOCK and CAP_SYS_NICE capabilities in Docker | ClickHouse
  Docs
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://clickhouse.com/docs/knowledgebase/configure_cap_ipc_lock_and_cap_sys_nice_in_docker
published_at: '2026-07-01T10:39:15.540314+05:30'
collected_at: '2026-07-01T10:39:15.540325+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:configuring-cap-ipc-lock-and-cap-sys-nice-capabili
first_seen: '2026-07-01T10:39:15.540325+05:30'
last_seen: '2026-07-01T10:39:15.540325+05:30'
last_checked: '2026-07-01T10:39:15.540325+05:30'
health_score: 100
---

# Configuring CAP_IPC_LOCK and CAP_SYS_NICE capabilities in Docker | ClickHouse Docs

## Summary

- Docker containers require explicit capability assignment; use `--cap-add=IPC_LOCK --cap-add=SYS_NICE` to grant `CAP_IPC_LOCK` and `CAP_SYS_NICE` for ClickHouse.

- Verify assigned capabilities inside the container using `capsh --print` after installing `libcap2-bin`.

- Persist capabilities by running `setcap "cap_ipc_lock=+ep cap_sys_nice=+ep" /usr/bin/clickhouse` and confirm with `getcap -v /usr/bin/clickhouse`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-01T10:39:15.540314+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://clickhouse.com/docs/knowledgebase/configure_cap_ipc_lock_and_cap_sys_nice_in_docker
