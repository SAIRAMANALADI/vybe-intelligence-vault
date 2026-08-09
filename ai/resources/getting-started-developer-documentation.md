---
title: Getting Started | Developer Documentation
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://docs.cloud.llamaindex.ai/llamacloud/getting_started
published_at: '2026-08-09T08:13:17.343207+05:30'
collected_at: '2026-08-09T08:13:17.343223+05:30'
tags:
- meta-ai
- models
- web-crawled
status: active
resource_id: blog:getting-started-developer-documentation
first_seen: '2026-08-09T08:13:17.343223+05:30'
last_seen: '2026-08-09T08:13:17.343223+05:30'
last_checked: '2026-08-09T08:13:17.343223+05:30'
health_score: 100
---

# Getting Started | Developer Documentation

## Summary

- **Concurrency Settings Impact**: LlamaParse's throughput scales with configured concurrency (`MAX_CONCURRENCY`, `WORKER_THREADS`) and parse mode/model, directly affecting maximum processable pages per second (e.g., `FAST` vs. `ACCURATE` modes).

- **Helm Tuning Parameters**: Adjust `resources.limits.cpu/memory`, `replicaCount`, and `horizontalPodAutoscaler` in Helm charts to balance CPU-bound parsing workloads and avoid throttling under high load.

- **Rate-Limit Troubleshooting**: Monitor `429 Too Many Requests` errors; tune `RATE_LIMIT` (env var) or implement backpressure via `queue_size` and `batch_delay` to align with API/model constraints.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-09T08:13:17.343207+05:30

## Related Tags

- meta-ai
- models
- web-crawled

## Source

Original source: https://docs.cloud.llamaindex.ai/llamacloud/getting_started
