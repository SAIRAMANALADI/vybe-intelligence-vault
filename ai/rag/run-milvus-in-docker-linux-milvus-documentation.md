---
title: Run Milvus in Docker (Linux) | Milvus Documentation
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://milvus.io/docs/install_standalone-docker.md
published_at: '2026-06-28T03:50:35.031889+05:30'
collected_at: '2026-06-28T03:50:35.031904+05:30'
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
first_seen: '2026-06-28T03:50:35.031904+05:30'
last_seen: '2026-06-28T03:50:35.031904+05:30'
last_checked: '2026-06-28T03:50:35.031904+05:30'
health_score: 100
---

# Run Milvus in Docker (Linux) | Milvus Documentation

## Summary

- **Milvus v3.0.x Docker Deployment**: Uses `standalone_embed.sh` script to deploy Milvus in Docker with embedded etcd (port 2379) and Milvus server (port 19530); configurations can be overridden via `user.yaml` and data persists in `volumes/milvus`.

- **Key v3.0.x Features**: Introduces **Streaming Node** for enhanced data processing, **Woodpecker MQ** for optimized message queuing, and an **optimized architecture** consolidating components for improved performance.

- **Management & Upgrade**: Supports in-place upgrades via `standalone_embed.sh upgrade`, preserves data/configs, and provides optional tools like **Milvus WebUI** (port 9091), **Attu** (GUI), and **Backup** for operational tasks.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-28T03:50:35.031889+05:30

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
