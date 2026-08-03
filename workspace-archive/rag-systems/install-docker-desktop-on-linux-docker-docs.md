---
title: Install Docker Desktop on Linux | Docker Docs
archive_category: rag-systems
source_category: ai/rag
source_url: https://docs.docker.com/desktop/linux/install/
resource_id: blog:install-docker-desktop-on-linux-docker-docs
local_vault_path: ai/rag/install-docker-desktop-on-linux-docker-docs.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- hackernews
- rag
- reddit
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Install Docker Desktop on Linux | Docker Docs

## Why This Is In The Archive

- Matched archive category: `RAG Systems`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Docker Desktop for Linux** runs in a VM, creating a dedicated `desktop-linux` context, isolating its containers/images from the host's Docker Engine (pre-installation).
- **System Requirements**: 64-bit CPU with KVM virtualization support, QEMU ≥5.2, systemd init system, ≥4GB RAM, and user permissions configured for `/dev/kvm`.
- **Context Switching**: Docker CLI commands target `desktop-linux` context when Docker Desktop is active; use `docker context use` to switch between Docker Engine (`

## Use Cases

- Knowledge querying
- Document summarization
- Hybrid retrieval

## Source

Original source URL: https://docs.docker.com/desktop/linux/install/

## Local Vault File

Path: [install-docker-desktop-on-linux-docker-docs.md](../../ai/rag/install-docker-desktop-on-linux-docker-docs.md)
