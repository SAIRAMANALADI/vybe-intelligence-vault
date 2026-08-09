---
title: Getting Started | Developer Documentation
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://docs.cloud.llamaindex.ai/llamacloud/getting_started
published_at: '2026-08-09T18:58:25.727166+05:30'
collected_at: '2026-08-09T18:58:25.727178+05:30'
tags:
- meta-ai
- models
- web-crawled
status: active
resource_id: blog:getting-started-developer-documentation
first_seen: '2026-08-09T18:58:25.727178+05:30'
last_seen: '2026-08-09T18:58:25.727178+05:30'
last_checked: '2026-08-09T18:58:25.727178+05:30'
health_score: 100
---

# Getting Started | Developer Documentation

## Summary

- **Concurrency Scaling**: LlamaParse's throughput scales with concurrency settings (`MAX_CONCURRENCY`, `MAX_PARALLEL_PARSERS`) in self-hosted LlamaCloud, directly impacting pages/minute per parse mode (e.g., high/low) and model (e.g., Llama3-8B vs. Llama3-70B).

- **Helm Tuning Parameters**: Key Helm chart values (`parser.replicaCount`, `parser.resources.limits`, `parser.env.MAX_CONCURRENCY`) must be optimized for GPU/CPU constraints; misconfiguration leads to GPU OOM errors or CPU throttling, reducing parse throughput.

- **Rate-Limit Mitigation**: Throttling occurs at API/ingress layers (e.g., `NGINX_RATE_LIMIT`, `PARSER_QPS_LIMIT`); adjust `parser.env.MAX_PARALLEL_REQUESTS` and `ingress.annotations` to balance load, avoiding 429/503 errors during high-volume parsing.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-09T18:58:25.727166+05:30

## Related Tags

- meta-ai
- models
- web-crawled

## Source

Original source: https://docs.cloud.llamaindex.ai/llamacloud/getting_started
