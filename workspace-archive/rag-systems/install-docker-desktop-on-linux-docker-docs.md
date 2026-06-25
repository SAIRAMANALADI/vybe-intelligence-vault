---
title: Install Docker Desktop on Linux | Docker Docs
archive_category: rag-systems
source_category: ai/rag
source_url: https://docs.docker.com/desktop/linux/install
resource_id: blog:install-docker-desktop-on-linux-docker-docs
local_vault_path: ai/rag/install-docker-desktop-on-linux-docker-docs.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: framework
importance: medium
tags:
- hackernews
- rag
- reddit
- web-crawled
selection_reason:
- Strong keyword match
- Useful for project building
---

# Install Docker Desktop on Linux | Docker Docs

## Why This Is In The Archive

- Matched archive category: `RAG Systems`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: framework
- Selection reasons:
  - Strong keyword match
  - Useful for project building

## Summary

- **Installation & Context Isolation**: Docker Desktop for Linux runs in a VM with an isolated `desktop-linux` context, requiring manual switching via `docker context use`; conflicts arise if Docker Engine is running concurrently due to port/resource contention.

- **System Requirements**: Requires 64-bit CPU with virtualization support, KVM-enabled kernel modules (`kvm_intel`/`kvm_amd`), QEMU ≥5.2, systemd, ≥4GB RAM, and user permissions configured via `sudo usermod -aG kvm $USER`.

- **SDK Con

## Use Cases

- Knowledge querying
- Document summarization
- Hybrid retrieval

## Source

Original source URL: https://docs.docker.com/desktop/linux/install

## Local Vault File

Path: [install-docker-desktop-on-linux-docker-docs.md](../../ai/rag/install-docker-desktop-on-linux-docker-docs.md)
