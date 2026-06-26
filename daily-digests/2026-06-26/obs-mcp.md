---
title: "rhobs/obs-mcp"
category: "Agent Framework"
tech_stack: ["Go", "Model Context Protocol (MCP)", "Prometheus", "Thanos", "Alertmanager", "Loki", "Grafana Tempo", "OpenTelemetry", "Kubernetes", "JSON-RPC"]
quality_score: 9
rag_relevance: 8
tags: ["MCP server", "observability", "Kubernetes monitoring", "LLM integration", "metrics and logs"]
source: "https://github.com/rhobs/obs-mcp"
discovered_at: "2026-06-26T16:15:29Z"
evaluated_by: "mistral-small-latest"
---

## Summary
obs-mcp is an MCP (Model Context Protocol) server that enables LLMs to query Prometheus, Thanos, Alertmanager, Loki, and Tempo in Kubernetes environments. It provides toolsets for metrics, logs, traces, and OpenTelemetry Collector configuration, facilitating AI-driven observability and monitoring tasks.

## Key Features
- Enables LLMs to query Prometheus, Thanos, Alertmanager, Loki, and Tempo via MCP
- Supports multiple authentication modes (kubeconfig, header, serviceaccount)
- Provides toolsets for metrics, logs, traces, and OpenTelemetry Collector configuration
- Offers guardrails and TSDB stats for metrics queries
- Includes comprehensive testing and deployment documentation

## Why It Matters for RAG Builders
It bridges AI models with real-time observability data in Kubernetes, enabling LLMs to perform advanced monitoring and debugging tasks autonomously.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Prometheus
Automated review identified **Prometheus** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Thanos
Automated review identified **Thanos** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Alertmanager
Automated review identified **Alertmanager** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Loki
Automated review identified **Loki** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Grafana Tempo
Automated review identified **Grafana Tempo** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenTelemetry
Automated review identified **OpenTelemetry** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Kubernetes
Automated review identified **Kubernetes** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-RPC
Automated review identified **JSON-RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
