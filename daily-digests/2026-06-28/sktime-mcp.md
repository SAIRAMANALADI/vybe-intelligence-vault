---
title: "sktime/sktime-mcp"
category: "Tooling"
tech_stack: ["Python", "MCP (Model Context Protocol)", "FastAPI", "Docker", "sktime", "uv/uvx"]
quality_score: 9
rag_relevance: 10
tags: ["MCP", "sktime", "time-series", "LLM integration", "automated workflows"]
source: "https://github.com/sktime/sktime-mcp"
discovered_at: "2026-06-28T12:18:13Z"
evaluated_by: "mistral-small-latest"
---

## Summary
sktime-mcp is an MCP (Model Context Protocol) layer that exposes sktime's native registry and semantics to Large Language Models, enabling automated discovery, reasoning, composition, and execution of sktime workflows programmatically.

## Key Features
- Registry-driven semantic engine for sktime estimators, transformers, and metrics
- Enables LLMs to discover, validate, and compose compatible sktime components
- Supports zero-install deployment via uvx and Docker for seamless integration
- Provides real-time execution of sktime workflows with full parameterization
- Offers HTTP/SSE mode for web-based or ChatGPT-compatible MCP server access

## Why It Matters for RAG Builders
It bridges the gap between LLMs and sktime's powerful time-series toolkit, enabling automated, reliable, and semantically-aware AI-driven forecasting and analysis workflows.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### sktime
Automated review identified **sktime** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv/uvx
Automated review identified **uv/uvx** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
