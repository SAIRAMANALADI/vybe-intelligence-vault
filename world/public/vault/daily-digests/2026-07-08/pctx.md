---
title: "portofcontext/pctx"
category: "Orchestrator"
tech_stack: ["Rust", "Python", "TypeScript", "Deno", "Model Context Protocol (MCP)", "HTTP", "CLI"]
quality_score: 9
rag_relevance: 9
tags: ["Code Mode", "MCP Server", "Agent Tools", "Token Efficiency", "Sandbox Execution"]
source: "https://github.com/portofcontext/pctx"
discovered_at: "2026-07-08T17:27:33Z"
evaluated_by: "mistral-small-latest"
---

## Summary
pctx is an open-source framework that bridges AI agents and tools or MCP servers using Code Mode, enabling efficient code execution for tool interactions instead of sequential tool calls. It aggregates upstream MCP servers, handles authentication, and exposes tools through a unified interface.

## Key Features
- Code Mode interface for efficient agent-tool interaction, reducing token usage by up to 98.7%
- Aggregation of multiple upstream MCP servers with persistent authentication sessions
- Secure Deno sandbox for LLM-generated code execution with restricted network access
- Unified CLI for configuration, initialization, and management of MCP servers and tools
- Support for both stateless HTTP servers and unified MCP server modes

## Why It Matters for RAG Builders
pctx enables RAG/AI stacks to execute complex tool interactions via code in secure sandboxes, drastically reducing token usage and simplifying agent-tool integration.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Deno
Automated review identified **Deno** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP
Automated review identified **HTTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
