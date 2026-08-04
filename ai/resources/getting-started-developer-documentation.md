---
title: Getting Started | Developer Documentation
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://docs.cloud.llamaindex.ai/llamacloud/getting_started
published_at: '2026-08-05T04:03:10.575137+05:30'
collected_at: '2026-08-05T04:03:10.575145+05:30'
tags:
- meta-ai
- models
- web-crawled
status: active
resource_id: blog:getting-started-developer-documentation
first_seen: '2026-08-05T04:03:10.575145+05:30'
last_seen: '2026-08-05T04:03:10.575145+05:30'
last_checked: '2026-08-05T04:03:10.575145+05:30'
health_score: 100
---

# Getting Started | Developer Documentation

## Summary

- **Concurrency & Throughput Scaling**: LlamaParse's maximum processable pages per parse mode and model are directly controlled by concurrency settings (`MAX_CONCURRENT_TASKS`, `WORKER_COUNT`), with higher values enabling parallel processing but requiring proportional CPU/memory resources.

- **Helm Tuning Parameters**: Key Helm chart configurations (`workers.replicaCount`, `resources.requests/limits`, `autoscaling`) must be adjusted to balance throughput and stability, where under-provisioned workers lead to rate-limiting or OOM errors.

- **Rate-Limit Troubleshooting**: Monitor `429 Too Many Requests` errors via logs/metrics; mitigate by reducing concurrency, increasing `WORKER_COUNT`, or adjusting `RATE_LIMIT` thresholds in `llama-parse-config.yaml`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-05T04:03:10.575137+05:30

## Related Tags

- meta-ai
- models
- web-crawled

## Source

Original source: https://docs.cloud.llamaindex.ai/llamacloud/getting_started
