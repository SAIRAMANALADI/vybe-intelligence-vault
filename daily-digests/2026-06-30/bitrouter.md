---
title: "bitrouter/bitrouter"
category: "Orchestrator"
tech_stack: ["Rust", "OpenAPI", "MCP (Model Context Protocol)", "ACP (Agent Context Protocol)", "Prometheus", "OTLP", "Telemetry", "CLI", "OAuth"]
quality_score: 9
rag_relevance: 10
tags: ["cost optimization", "agent routing", "LLM gateway", "multi-provider", "self-hosted"]
source: "https://github.com/bitrouter/bitrouter"
discovered_at: "2026-06-30T18:57:32Z"
evaluated_by: "mistral-small-latest"
---

## Summary
BitRouter is an open-source agentic LLM gateway and router designed to cost-optimize production agentic workflows by dynamically routing models, tools, and agents to the most cost-effective paths while maintaining performance. It acts as a zero-harness-change proxy between agentic systems and LLM providers.

## Key Features
- Cross-protocol routing for models, tools, and agents
- Dynamic cost optimization with observe-evaluate-act feedback loop
- MCP and ACP gateway support for tool and sub-agent routing
- Multi-account failover and load balancing
- Per-request cost and latency attribution with telemetry export

## Why It Matters for RAG Builders
BitRouter is essential for RAG/AI stack builders because it reduces production costs by intelligently routing every component of an agentic loop to the cheapest viable path without sacrificing performance or requiring harness changes.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAPI
Automated review identified **OpenAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ACP (Agent Context Protocol)
Automated review identified **ACP (Agent Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Prometheus
Automated review identified **Prometheus** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OTLP
Automated review identified **OTLP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Telemetry
Automated review identified **Telemetry** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth
Automated review identified **OAuth** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
