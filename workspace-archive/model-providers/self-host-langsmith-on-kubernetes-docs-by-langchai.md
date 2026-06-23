---
title: Self-host LangSmith on Kubernetes - Docs by LangChain
archive_category: model-providers
source_category: ai/rag
source_url: https://docs.smith.langchain.com/self_hosting/kubernetes
resource_id: blog:self-host-langsmith-on-kubernetes-docs-by-langchai
local_vault_path: ai/rag/self-host-langsmith-on-kubernetes-docs-by-langchai.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: benchmark
importance: medium
tags:
- agents
- anthropic
- benchmark
- rag
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Self-host LangSmith on Kubernetes - Docs by LangChain

## Why This Is In The Archive

- Matched archive category: `Model Providers`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: benchmark
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Prerequisites**: Requires LangSmith License Key, `apiKeySalt` (32-byte base64-encoded random string), and optionally `JWT Secret` (32-byte base64-encoded random string) for basic auth; external managed PostgreSQL, Redis, and ClickHouse recommended over in-cluster deployments.

- **Kubernetes Cluster Requirements**: Minimum 16 vCPUs/64GB RAM (adjustable via Helm values), dynamic PV provisioner with SSD-backed storage (7000 IOPS/1000 MiB/s throughput), Helm 3+, egress to `https://beacon.langch

## Use Cases

- API key selection
- Cost/capability profiling
- Provider fallback routing

## Source

Original source URL: https://docs.smith.langchain.com/self_hosting/kubernetes

## Local Vault File

Path: [self-host-langsmith-on-kubernetes-docs-by-langchai.md](../../ai/rag/self-host-langsmith-on-kubernetes-docs-by-langchai.md)
