---
title: Run Milvus in Docker (Linux) | Milvus Documentation
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://milvus.io/docs/install_standalone-docker.md
published_at: '2026-06-25T16:40:05.846788+05:30'
collected_at: '2026-06-25T16:40:05.846795+05:30'
tags:
- anthropic
- openai
- producthunt
- rag
- reddit
- web-crawled
- youtube
status: active
resource_id: blog:run-milvus-in-docker-linux-milvus-documentation
first_seen: '2026-06-25T16:40:05.846795+05:30'
last_seen: '2026-06-25T16:40:05.846795+05:30'
last_checked: '2026-06-25T16:40:05.846795+05:30'
health_score: 100
---

# Run Milvus in Docker (Linux) | Milvus Documentation

## Summary

- **Milvus v3.0.x Docker Deployment**: Uses `standalone_embed.sh` script to deploy Milvus in a single Docker container with embedded etcd (port `2379`) and Milvus (port `19530`), with data persisted in `./volumes/milvus`; WebUI accessible at `http://127.0.0.1:9091/webui/`.

- **Key v3.0 Features**: Introduces **Streaming Node** for enhanced data processing, **Woodpecker MQ** for optimized message queuing, and an **optimized architecture** with consolidated components for improved performance.

- **Upgrade & Config Management**: Supports in-place upgrades via `standalone_embed.sh upgrade`, preserves data/configs, and allows runtime modifications via `user.yaml` with forced restarts; backup recommended via Docker Compose for standalone deployments.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-25T16:40:05.846788+05:30

## Related Tags

- anthropic
- openai
- producthunt
- rag
- reddit
- web-crawled
- youtube

## Source

Original source: https://milvus.io/docs/install_standalone-docker.md
