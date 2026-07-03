---
title: Install Docker Desktop on Linux | Docker Docs
archive_category: vector-databases
source_category: ai/rag
source_url: https://docs.docker.com/desktop/linux/install/
resource_id: blog:install-docker-desktop-on-linux-docker-docs
local_vault_path: ai/rag/install-docker-desktop-on-linux-docker-docs.md
quality_score: 70
archive_score: 70
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- hackernews
- rag
- reddit
- web-crawled
selection_reason:
- Valuable developer reference
---

# Install Docker Desktop on Linux | Docker Docs

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Valuable developer reference

## Summary

- **Docker Desktop for Linux** runs in a VM, creating a dedicated `desktop-linux` context, isolating its containers/images from the host's Docker Engine (pre-installation).
- **Requirements**: 64-bit CPU with KVM virtualization support, QEMU ≥5.2, systemd, ≥4GB RAM, and user permissions configured for `/dev/kvm` (e.g., `sudo usermod -aG kvm $USER`).
- **Dual Installation**: Docker Desktop and Docker Engine can coexist but require context switching (`docker context use`) to avoid port conflicts;

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://docs.docker.com/desktop/linux/install/

## Local Vault File

Path: [install-docker-desktop-on-linux-docker-docs.md](../../ai/rag/install-docker-desktop-on-linux-docker-docs.md)
