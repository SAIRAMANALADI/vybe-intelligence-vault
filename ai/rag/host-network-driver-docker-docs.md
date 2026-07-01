---
title: Host network driver | Docker Docs
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.docker.com/network/host/
published_at: '2026-07-01T10:38:20.273782+05:30'
collected_at: '2026-07-01T10:38:20.273796+05:30'
tags:
- rag
- web-crawled
status: active
resource_id: blog:host-network-driver-docker-docs
first_seen: '2026-07-01T10:38:20.273796+05:30'
last_seen: '2026-07-01T10:38:20.273796+05:30'
last_checked: '2026-07-01T10:38:20.273796+05:30'
health_score: 100
---

# Host network driver | Docker Docs

## Summary

- **Network Isolation**: Host network driver disables network namespace isolation, causing containers to share the host's network stack and IP address, bypassing Docker's NAT and port mapping mechanisms.

- **Platform Support**: Supported on Docker Engine (Linux) and Docker Desktop (v4.34+ with manual enablement), with limitations on Windows containers and Enhanced Container Isolation modes.

- **Use Cases & Limitations**: Optimized for high-performance scenarios (e.g., large port ranges) due to reduced overhead, but restricts port mapping, host IP binding, and lacks support for non-TCP/UDP protocols on Docker Desktop.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-01T10:38:20.273782+05:30

## Related Tags

- rag
- web-crawled

## Source

Original source: https://docs.docker.com/network/host/
