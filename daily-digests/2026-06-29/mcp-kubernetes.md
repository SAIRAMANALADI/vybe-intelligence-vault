---
title: "giantswarm/mcp-kubernetes"
category: "Tooling"
tech_stack: ["Go", "Model Context Protocol (MCP)", "Kubernetes API", "OAuth 2.1", "OpenTelemetry", "Prometheus", "Dex OIDC", "Cluster API (CAPI)", "Helm"]
quality_score: 9
rag_relevance: 8
tags: ["Kubernetes", "MCP", "DevOps", "Authentication", "Observability"]
source: "https://github.com/giantswarm/mcp-kubernetes"
discovered_at: "2026-06-29T07:31:09Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server that provides tools for interacting with Kubernetes clusters, enabling resource management, pod operations, and multi-cluster authentication with production-grade observability.

## Key Features
- Comprehensive Kubernetes resource management (get, list, create, apply, delete, patch)
- Multi-cluster support with OAuth 2.1 and Cluster API (CAPI) federation
- Multiple authentication modes (kubeconfig, in-cluster, OAuth 2.1, federated)
- Production-grade observability with OpenTelemetry, Prometheus metrics, and distributed tracing
- Safety features including non-destructive mode, dry-run, and operation restrictions

## Why It Matters for RAG Builders
It provides a standardized MCP interface for Kubernetes operations, simplifying integration with AI agents and enabling secure, multi-cluster management for RAG pipelines.

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

### Dex OIDC
Automated review identified **Dex OIDC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cluster API (CAPI)
Automated review identified **Cluster API (CAPI)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Helm
Automated review identified **Helm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
