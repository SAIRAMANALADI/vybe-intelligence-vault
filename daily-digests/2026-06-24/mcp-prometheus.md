---
title: "giantswarm/mcp-prometheus"
category: "Orchestrator"
tech_stack: ["Go", "Prometheus", "Mimir", "OAuth 2.1", "Dex OIDC", "Kubernetes", "Helm", "Valkey/Redis", "OpenTelemetry"]
quality_score: 9
rag_relevance: 9
tags: ["MCP server", "Prometheus integration", "multi-tenancy", "OAuth 2.1", "metrics access"]
source: "https://github.com/giantswarm/mcp-prometheus"
discovered_at: "2026-06-24T10:26:57Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An MCP (Model Context Protocol) server for Prometheus and Mimir that provides authenticated, multi-tenant access to metrics infrastructure. It exposes 18 read-only MCP tools for PromQL queries, metric discovery, and alerting, with OAuth 2.1 authentication and tenant resolution for secure AI assistant interactions.

## Key Features
- 18 read-only MCP tools for PromQL queries, metric discovery, and alerting
- OAuth 2.1 authentication with Dex OIDC integration for secure access
- Multi-tenant support via GrafanaOrganization CRDs or static tenant mapping
- SSO token forwarding for upstream MCP aggregators
- Kubernetes-native deployment with Helm charts for in-cluster use

## Why It Matters for RAG Builders
It enables AI assistants to securely query Prometheus metrics with multi-tenant isolation, bridging the gap between AI workflows and observability data.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Prometheus
Automated review identified **Prometheus** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Mimir
Automated review identified **Mimir** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth 2.1
Automated review identified **OAuth 2.1** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Dex OIDC
Automated review identified **Dex OIDC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Kubernetes
Automated review identified **Kubernetes** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Helm
Automated review identified **Helm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Valkey/Redis
Automated review identified **Valkey/Redis** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenTelemetry
Automated review identified **OpenTelemetry** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
