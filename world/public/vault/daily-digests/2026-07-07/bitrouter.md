---
title: "bitrouter/bitrouter"
category: "Orchestrator"
tech_stack: ["Rust", "OpenAI API", "Anthropic API", "MCP (Model Context Protocol)", "ACP (Agent Context Protocol)", "Prometheus", "OTLP (OpenTelemetry Protocol)", "CLI", "HTTP/HTTPS", "YAML"]
quality_score: 9
rag_relevance: 10
tags: ["agentic routing", "cost optimization", "LLM gateway", "multi-provider", "self-hosted"]
source: "https://github.com/bitrouter/bitrouter"
discovered_at: "2026-07-07T06:42:33Z"
evaluated_by: "mistral-small-latest"
---

## Summary
BitRouter is an open-source agentic LLM gateway and router designed to cost-optimize production agentic loops by dynamically routing models, tools, and agents to the cheapest viable path without requiring harness changes. It acts as a self-improving loop that observes, evaluates, and adjusts routing policies in real-time.

## Key Features
- Cross-protocol routing for LLM calls (OpenAI, Anthropic, Google, etc.)
- Dynamic routing of models, tools, and agents to minimize costs
- MCP and ACP gateways for tool and sub-agent management
- Self-improving loop with policy-based optimization and telemetry
- Zero-config auto-detection and support for virtual scoped API keys

## Why It Matters for RAG Builders
BitRouter is essential for RAG/AI stack builders because it dynamically optimizes agentic loops by routing to the cheapest viable models, tools, and agents, significantly reducing production costs without sacrificing performance.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI API
Automated review identified **OpenAI API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Anthropic API
Automated review identified **Anthropic API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ACP (Agent Context Protocol)
Automated review identified **ACP (Agent Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Prometheus
Automated review identified **Prometheus** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OTLP (OpenTelemetry Protocol)
Automated review identified **OTLP (OpenTelemetry Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/HTTPS
Automated review identified **HTTP/HTTPS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
