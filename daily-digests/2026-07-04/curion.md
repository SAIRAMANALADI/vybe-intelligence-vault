---
title: "geanatz/curion"
category: "Agent Framework"
tech_stack: ["TypeScript", "Node.js", "SQLite", "Model Context Protocol (MCP)", "OpenAPI-compatible providers", "Anthropic API"]
quality_score: 9
rag_relevance: 8
tags: ["MCP server", "project memory", "persistent storage", "AI agent tools", "local retrieval"]
source: "https://github.com/geanatz/curion"
discovered_at: "2026-07-04T15:08:44Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Curion is a project-local memory layer for AI agents, implemented as an MCP stdio server. It enables persistent, private storage of project-specific knowledge (e.g., design decisions, conventions) within a project's `.curion/` directory, retrievable via `remember` and `recall` tools.

## Key Features
- Project-local memory storage in `.curion/` directory, ensuring privacy and no shared backend exposure.
- Two stable MCP tools (`remember` and `recall`) with strict input schemas and structured output for AI agent integration.
- Pluggable LLM providers (OpenAI-compatible or Anthropic) with fallback support and semantic retrieval options.
- Project isolation via `.curion/config.json` to mark projects as private, preventing cross-project retrieval.
- Trusted publishing with OIDC provenance for secure npm package distribution.

## Why It Matters for RAG Builders
Curion enables AI agents to maintain persistent, project-specific context across sessions, reducing redundant explanations and improving decision-making without relying on external memory services.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAPI-compatible providers
Automated review identified **OpenAPI-compatible providers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Anthropic API
Automated review identified **Anthropic API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
