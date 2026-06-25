---
title: Self-host LangSmith on Kubernetes - Docs by LangChain
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.smith.langchain.com/self_hosting/kubernetes
published_at: '2026-06-23T10:02:20.216454+05:30'
collected_at: '2026-06-23T10:02:20.216461+05:30'
tags:
- agents
- anthropic
- benchmark
- rag
- web-crawled
status: active
resource_id: blog:self-host-langsmith-on-kubernetes-docs-by-langchai
first_seen: '2026-06-23T10:02:20.216461+05:30'
last_seen: '2026-06-23T10:02:20.216461+05:30'
last_checked: '2026-06-23T10:02:20.216461+05:30'
health_score: 100
---

# Self-host LangSmith on Kubernetes - Docs by LangChain

## Summary

- **Prerequisites**: Requires LangSmith License Key, `apiKeySalt` (32-byte base64-encoded random string), and optionally `JWT Secret` (32-byte base64-encoded random string) for basic auth; external managed PostgreSQL, Redis, and ClickHouse recommended over in-cluster deployments.

- **Kubernetes Cluster Requirements**: Minimum 16 vCPUs/64GB RAM (adjustable via Helm values), dynamic PV provisioner with SSD-backed storage (7000 IOPS/1000 MiB/s throughput), Helm 3+, egress to `https://beacon.langchain.com`, and metrics server for autoscaling.

- **Deployment Process**: Helm chart (`langchain/langsmith`) deployed with `langsmith_config.yaml` specifying auth, license, and external DB endpoints; validate via `kubectl get pods/services` post-deployment, ensuring all components (PostgreSQL, Redis, ClickHouse, frontend/backend) are `Running`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-23T10:02:20.216454+05:30

## Related Tags

- agents
- anthropic
- benchmark
- rag
- web-crawled

## Source

Original source: https://docs.smith.langchain.com/self_hosting/kubernetes
