---
title: Deploy Dify with Docker Compose - Dify Docs
archive_category: vector-databases
source_category: ai/resources
source_url: https://docs.dify.ai/getting-started/install-self-hosted
resource_id: blog:deploy-dify-with-docker-compose-dify-docs
local_vault_path: ai/resources/deploy-dify-with-docker-compose-dify-docs.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- hackernews
- reddit
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Deploy Dify with Docker Compose - Dify Docs

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **System Requirements**: Minimum 2-core CPU, 4 GiB RAM; Docker Compose 2.24.0+ required. macOS/Linux/Windows (WSL2) supported with Docker Engine 19.03+.
- **Deployment Steps**: Clone repo (`git clone --branch <latest_tag> https://github.com/langgenius/dify.git`), configure `.env`, then run `docker compose up -d` to start 5 core services (`api`, `worker`, `worker_beat`, `web`, `plugin_daemon`) and 6 dependent components (`weaviate`, `db_postgres`, `redis`, `nginx`, `ssrf_proxy`, `sandbox`).
- *

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://docs.dify.ai/getting-started/install-self-hosted

## Local Vault File

Path: [deploy-dify-with-docker-compose-dify-docs.md](../../ai/resources/deploy-dify-with-docker-compose-dify-docs.md)
