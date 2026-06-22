---
title: Run Milvus in Docker (Linux) | Milvus Documentation
archive_category: model-providers
source_category: ai/rag
source_url: https://milvus.io/docs/install_standalone-docker.md
resource_id: blog:run-milvus-in-docker-linux-milvus-documentation
local_vault_path: ai/rag/run-milvus-in-docker-linux-milvus-documentation.md
quality_score: 70
archive_score: 74
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- anthropic
- openai
- producthunt
- rag
- reddit
- web-crawled
- youtube
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Run Milvus in Docker (Linux) | Milvus Documentation

## Why This Is In The Archive

- Matched archive category: `Model Providers`
- Quality score: 70 | Archive score: 74 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Milvus v3.0.x** introduces **Streaming Node** for enhanced data processing, **Woodpecker MQ** for optimized message queuing, and a **consolidated architecture** for improved performance in standalone Docker deployments.

- **Standalone Docker deployment** uses an embedded etcd (port `2379`) and Milvus server (port `19530`), with data stored in a mapped volume (`volumes/milvus`), configurable via `user.yaml` for custom settings.

- **Upgrade/downgrade** is managed via `standalone_embed.sh` (e

## Use Cases

- API key selection
- Cost/capability profiling
- Provider fallback routing

## Source

Original source URL: https://milvus.io/docs/install_standalone-docker.md

## Local Vault File

Path: [run-milvus-in-docker-linux-milvus-documentation.md](../../ai/rag/run-milvus-in-docker-linux-milvus-documentation.md)
