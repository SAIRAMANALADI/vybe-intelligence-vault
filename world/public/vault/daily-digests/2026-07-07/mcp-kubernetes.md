---
title: giantswarm/mcp-kubernetes
category: world/public/vault/daily-digests/2026-07-07
tech_stack:
- Go
- Model Context Protocol (MCP)
- Kubernetes API
- OAuth 2.1
- OpenTelemetry
- Prometheus
- Helm
- Dex OIDC
quality_score: 9
rag_relevance: 9
tags:
- Kubernetes
- MCP
- Multi-Cluster
- OAuth
- Observability
source: https://github.com/giantswarm/mcp-kubernetes
discovered_at: '2026-07-07T16:26:39Z'
evaluated_by: mistral-small-latest
---

## Summary
A Model Context Protocol (MCP) server that provides tools for interacting with Kubernetes clusters, enabling secure multi-cluster management, resource operations, and OAuth-based authentication for AI-driven workflows.

## Key Features
- Comprehensive Kubernetes resource management (get, list, create, delete, patch, scale)
- Multi-cluster support with Cluster API (CAPI) federation and OAuth 2.1 authentication
- Production-grade observability with OpenTelemetry metrics, tracing, and Prometheus integration
- Multiple authentication modes (kubeconfig, in-cluster, OAuth 2.1, federated multi-cluster)
- Safety features including non-destructive mode, dry-run, and operation restrictions

## Why It Matters for RAG Builders
It bridges AI workflows with Kubernetes operations, enabling secure, scalable, and observable multi-cluster management for RAG and agent systems.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Kubernetes API
Automated review identified **Kubernetes API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth 2.1
Automated review identified **OAuth 2.1** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenTelemetry
Automated review identified **OpenTelemetry** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Prometheus
Automated review identified **Prometheus** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Helm
Automated review identified **Helm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Dex OIDC
Automated review identified **Dex OIDC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
