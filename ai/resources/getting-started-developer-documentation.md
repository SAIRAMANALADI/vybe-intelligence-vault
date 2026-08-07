---
title: Getting Started | Developer Documentation
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://docs.cloud.llamaindex.ai/llamacloud/getting_started
published_at: '2026-08-06T14:35:18.157656+05:30'
collected_at: '2026-08-06T14:35:18.157668+05:30'
tags:
- meta-ai
- models
- web-crawled
status: active
resource_id: blog:getting-started-developer-documentation
first_seen: '2026-08-06T14:35:18.157668+05:30'
last_seen: '2026-08-06T14:35:18.157668+05:30'
last_checked: '2026-08-06T14:35:18.157668+05:30'
health_score: 100
---

# Getting Started | Developer Documentation

## Summary

- **Concurrency Settings Impact**: LlamaParse's maximum processable pages per parse mode and model in self-hosted LlamaCloud are directly determined by concurrency settings, which must be tuned in alignment with available system resources and model capabilities.

- **Helm Configuration Tuning**: Helm charts enable granular control over concurrency parameters (e.g., `workerCount`, `batchSize`) to optimize throughput, requiring adjustments based on workload demands and infrastructure constraints.

- **Rate-Limit Troubleshooting**: Throughput bottlenecks often stem from API rate limits or resource contention; monitoring tools (e.g., Prometheus, Grafana) and Helm-based scaling (e.g., `autoscaling`) are critical for diagnosing and resolving performance degradation.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-06T14:35:18.157656+05:30

## Related Tags

- meta-ai
- models
- web-crawled

## Source

Original source: https://docs.cloud.llamaindex.ai/llamacloud/getting_started
