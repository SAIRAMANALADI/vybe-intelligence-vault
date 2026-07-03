---
title: "r33drichards/mcp-js"
category: "Orchestrator"
tech_stack: ["Rust", "V8 JavaScript Engine", "Model Context Protocol (MCP)", "OPA/Rego", "Deno Core", "TypeScript", "SWC", "Raft", "JWKS", "HTTP/Streamable HTTP/SSE", "Docker"]
quality_score: 9
rag_relevance: 10
tags: ["MCP server", "JavaScript runtime", "AI agent tooling", "V8 sandbox", "stateful execution"]
source: "https://github.com/r33drichards/mcp-js"
discovered_at: "2026-07-03T17:21:31Z"
evaluated_by: "mistral-small-latest"
---

## Summary
mcp-v8 is a Model Context Protocol (MCP) server that enables AI agents to execute JavaScript and TypeScript code in a sandboxed V8 runtime. It provides a single `run_js` tool for unbounded agent capabilities, supports durable state via heap snapshots, and enforces security through OPA/Rego policies.

## Key Features
- Sandboxed V8 JavaScript/TypeScript execution with async/await and timers
- Durable state via content-addressed heap snapshots (local FS, S3, or clustering)
- Policy-gated capabilities (fetch, filesystem, subprocess, WASM, modules) enforced via OPA/Rego
- Multiple transports (stdio, Streamable HTTP, SSE) with REST sidecar and OpenAPI support
- Native MCP tasks support (SEP-1319) for long-running executions

## Why It Matters for RAG Builders
mcp-v8 enables AI agents to dynamically execute arbitrary JavaScript/TypeScript code with persistent state and granular security controls, drastically reducing token usage and tool-call overhead in RAG and agentic workflows.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### V8 JavaScript Engine
Automated review identified **V8 JavaScript Engine** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OPA/Rego
Automated review identified **OPA/Rego** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Deno Core
Automated review identified **Deno Core** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SWC
Automated review identified **SWC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Raft
Automated review identified **Raft** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JWKS
Automated review identified **JWKS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/Streamable HTTP/SSE
Automated review identified **HTTP/Streamable HTTP/SSE** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
