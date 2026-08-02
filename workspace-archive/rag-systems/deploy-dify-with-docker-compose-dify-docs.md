---
title: Deploy Dify with Docker Compose - Dify Docs
archive_category: rag-systems
source_category: ai/rag
source_url: https://docs.dify.ai/getting-started/install-self-hosted
resource_id: blog:deploy-dify-with-docker-compose-dify-docs
local_vault_path: ai/rag/deploy-dify-with-docker-compose-dify-docs.md
quality_score: 70
archive_score: 82
archive_tier: useful
resource_kind: tutorial
importance: high
tags:
- agents
- rag
- reddit
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Deploy Dify with Docker Compose - Dify Docs

## Why This Is In The Archive

- Matched archive category: `RAG Systems`
- Quality score: 70 | Archive score: 82 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **System Requirements**: Minimum 2-core CPU, 4 GiB RAM; Docker Engine 19.03+ and Docker Compose 2.24.0+ required across macOS/Linux/Windows (WSL 2).
- **Deployment Steps**: Clone Dify repo (`git clone` with latest release tag), configure `.env` from `.env.example`, and deploy 7 core services + 8 dependent components via `docker compose up -d`.
- **Customization & Upgrade**: Modify `docker/.env` for essential settings or `docker/envs/*.env` for provider-specific configs; restart with `docker co

## Use Cases

- Knowledge querying
- Document summarization
- Hybrid retrieval

## Source

Original source URL: https://docs.dify.ai/getting-started/install-self-hosted

## Local Vault File

Path: [deploy-dify-with-docker-compose-dify-docs.md](../../ai/rag/deploy-dify-with-docker-compose-dify-docs.md)
