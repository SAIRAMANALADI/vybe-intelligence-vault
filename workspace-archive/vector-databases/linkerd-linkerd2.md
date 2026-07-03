---
title: linkerd/linkerd2
archive_category: vector-databases
source_category: ai/rag
source_url: https://github.com/linkerd/linkerd2
resource_id: github:linkerd/linkerd2
local_vault_path: ai/rag/linkerd-linkerd2.md
quality_score: 70
archive_score: 75
archive_tier: useful
resource_kind: product
importance: medium
tags:
- github-repo
- go
- rag
selection_reason:
- Active open-source repository
---

# linkerd/linkerd2

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 75 (useful)
- Resource kind: product
- Selection reasons:
  - Active open-source repository

## Summary

- **Service Mesh Architecture**: Implements a lightweight, security-first service mesh for Kubernetes, leveraging Rust for performance-critical components and Go for core functionality.
- **Control Plane & Data Plane**: Uses a split architecture with the `linkerd2-controller` (Go-based control plane) managing proxies (`linkerd2-proxy`, Rust-based data plane) for low-latency, sidecar-less service communication.
- **Security & Observability**: Enforces mTLS by default, integrates with Kubernetes-n

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://github.com/linkerd/linkerd2

## Local Vault File

Path: [linkerd-linkerd2.md](../../ai/rag/linkerd-linkerd2.md)
