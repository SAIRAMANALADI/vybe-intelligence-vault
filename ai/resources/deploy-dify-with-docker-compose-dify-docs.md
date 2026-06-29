---
title: Deploy Dify with Docker Compose - Dify Docs
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://docs.dify.ai/getting-started/install-self-hosted
published_at: '2026-06-29T10:35:48.194045+05:30'
collected_at: '2026-06-29T10:35:48.194059+05:30'
tags:
- hackernews
- reddit
- web-crawled
status: active
resource_id: blog:deploy-dify-with-docker-compose-dify-docs
first_seen: '2026-06-29T10:35:48.194059+05:30'
last_seen: '2026-06-29T10:35:48.194059+05:30'
last_checked: '2026-06-29T10:35:48.194059+05:30'
health_score: 100
---

# Deploy Dify with Docker Compose - Dify Docs

## Summary

- **System Requirements**: Minimum 2-core CPU, 4 GiB RAM; Docker Compose 2.24.0+ required. macOS/Linux/Windows (WSL2) supported with Docker Engine 19.03+.
- **Deployment Steps**: Clone repo (`git clone --branch <latest_tag> https://github.com/langgenius/dify.git`), configure `.env`, then run `docker compose up -d` to start 5 core services (`api`, `worker`, `worker_beat`, `web`, `plugin_daemon`) and 6 dependent components (`weaviate`, `db_postgres`, `redis`, `nginx`, `ssrf_proxy`, `sandbox`).
- **Customization/Upgrade**: Override env vars in `docker/.env` or `docker/envs/*.env`; restart via `docker compose down && docker compose up -d`. Upgrade requires comparing `.env.example` with `.env` for changes.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-29T10:35:48.194045+05:30

## Related Tags

- hackernews
- reddit
- web-crawled

## Source

Original source: https://docs.dify.ai/getting-started/install-self-hosted
