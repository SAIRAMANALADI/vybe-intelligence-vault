---
title: Host network driver | Docker Docs
archive_category: vector-databases
source_category: ai/rag
source_url: https://docs.docker.com/network/host/
resource_id: blog:host-network-driver-docker-docs
local_vault_path: ai/rag/host-network-driver-docker-docs.md
quality_score: 70
archive_score: 70
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- rag
- web-crawled
selection_reason:
- Valuable developer reference
---

# Host network driver | Docker Docs

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Valuable developer reference

## Summary

- **Network Isolation**: Host network driver disables network namespace isolation, causing containers to share the host's network stack and IP address, bypassing Docker's NAT and port mapping mechanisms.

- **Platform Support**: Supported on Docker Engine (Linux) and Docker Desktop (v4.34+ with manual enablement), with limitations on Windows containers and Enhanced Container Isolation modes.

- **Use Cases & Limitations**: Optimized for high-performance scenarios (e.g., large port ranges) due to

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://docs.docker.com/network/host/

## Local Vault File

Path: [host-network-driver-docker-docs.md](../../ai/rag/host-network-driver-docker-docs.md)
