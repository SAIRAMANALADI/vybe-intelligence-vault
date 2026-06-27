---
title: "lianluo-esign/ferrogate"
category: "Orchestrator"
tech_stack: ["Rust", "Cloudflare Pingora", "WASM (Wasmtime)", "MCP (Model Context Protocol)", "OpenAPI 3.1", "Prometheus", "OTLP (OpenTelemetry)", "Docker", "Kubernetes", "Helm", "TOML/YAML", "Redis"]
quality_score: 9
rag_relevance: 10
tags: ["AI Gateway", "RAG Infrastructure", "Agent Orchestration", "Token Accounting", "Policy Enforcement"]
source: "https://github.com/lianluo-esign/ferrogate"
discovered_at: "2026-06-27T20:55:32Z"
evaluated_by: "mistral-small-latest"
---

## Summary
FerroGate is an open-source Rust API gateway and AI traffic infrastructure built on Cloudflare Pingora. It provides a self-hostable control point for AI workloads, including OpenAI-compatible APIs, provider routing, policy enforcement, token accounting, MCP/tool execution, and agent-native operations with WASM sandboxing.

## Key Features
- OpenAI-compatible API gateway with streaming support for Chat Completions and Responses
- Multi-provider routing with fallback mechanisms (OpenAI, Azure, Anthropic, Grok, etc.)
- Governance features: virtual API keys, scopes, rate limits, token budgets, and caching
- Agent-native operations: MCP support, WASM sandboxed execution, and agent run timelines
- Comprehensive observability: Prometheus metrics, OTLP traces, Admin APIs, and dashboards

## Why It Matters for RAG Builders
FerroGate is essential for RAG builders as it provides a unified, self-hostable control plane for managing AI traffic, governance, and agent operations at scale.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloudflare Pingora
Automated review identified **Cloudflare Pingora** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WASM (Wasmtime)
Automated review identified **WASM (Wasmtime)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAPI 3.1
Automated review identified **OpenAPI 3.1** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Prometheus
Automated review identified **Prometheus** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OTLP (OpenTelemetry)
Automated review identified **OTLP (OpenTelemetry)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Kubernetes
Automated review identified **Kubernetes** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Helm
Automated review identified **Helm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TOML/YAML
Automated review identified **TOML/YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Redis
Automated review identified **Redis** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
