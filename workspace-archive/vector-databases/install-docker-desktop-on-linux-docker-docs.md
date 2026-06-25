---
title: Install Docker Desktop on Linux | Docker Docs
archive_category: vector-databases
source_category: ai/rag
source_url: https://docs.docker.com/desktop/linux/install
resource_id: blog:install-docker-desktop-on-linux-docker-docs
local_vault_path: ai/rag/install-docker-desktop-on-linux-docker-docs.md
quality_score: 70
archive_score: 70
archive_tier: useful
resource_kind: framework
importance: medium
tags:
- hackernews
- rag
- reddit
- web-crawled
selection_reason:
- Useful for project building
---

# Install Docker Desktop on Linux | Docker Docs

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: framework
- Selection reasons:
  - Useful for project building

## Summary

- **Installation & Context Isolation**: Docker Desktop for Linux runs in a VM with an isolated `desktop-linux` context, requiring manual switching via `docker context use`; conflicts arise if Docker Engine is running concurrently due to port/resource contention.

- **System Requirements**: Requires 64-bit CPU with virtualization support, KVM-enabled kernel modules (`kvm_intel`/`kvm_amd`), QEMU ≥5.2, systemd, ≥4GB RAM, and user permissions configured via `sudo usermod -aG kvm $USER`.

- **SDK Con

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://docs.docker.com/desktop/linux/install

## Local Vault File

Path: [install-docker-desktop-on-linux-docker-docs.md](../../ai/rag/install-docker-desktop-on-linux-docker-docs.md)
