---
title: Run Milvus in Docker (Linux) | Milvus Documentation
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://milvus.io/docs/install_standalone-docker.md
published_at: '2026-08-01T09:25:00.675064+05:30'
collected_at: '2026-08-01T09:25:00.675074+05:30'
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
first_seen: '2026-08-01T09:25:00.675074+05:30'
last_seen: '2026-08-01T09:25:00.675074+05:30'
last_checked: '2026-08-01T09:25:00.675074+05:30'
health_score: 100
---

# Run Milvus in Docker (Linux) | Milvus Documentation

## Summary

- **Milvus v3.0.0 Docker Deployment**: Introduces **Streaming Node** for enhanced data processing, **Woodpecker MQ** (default) with local filesystem WAL backend, and an optimized architecture consolidating components for improved performance.

- **Standalone Docker Setup**: Uses `standalone_embed.sh` script to deploy Milvus in a single container with embedded etcd (port `2379`) and Milvus (port `19530`), mapping data volume to `./volumes/milvus` and allowing config overrides via `user.yaml`.

- **Upgrade & Optional Dependencies**: Supports seamless upgrades via `standalone_embed.sh upgrade`, preserving data/configs; optional dependencies include alternative message queues (Pulsar/Kafka/RocksMQ), object storage (MinIO/S3/Azure/GCP), and metadata stores (etcd).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-01T09:25:00.675064+05:30

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
