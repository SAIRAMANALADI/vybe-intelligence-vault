---
title: "leolilley/ryeos"
category: "Orchestrator"
tech_stack: ["Rust", "CAS (Content-Addressable Storage)", "SQLite", "HTTP", "MCP (Model Context Protocol)", "YAML", "Docker", "Cryptographic Signing"]
quality_score: 9
rag_relevance: 8
tags: ["execution-orchestration", "signed-workflows", "content-addressed-state", "resumable-ai-tasks", "trustless-remotes"]
source: "https://github.com/leolilley/ryeos"
discovered_at: "2026-07-04T09:18:26Z"
evaluated_by: "mistral-small-latest"
---

## Summary
RyeOS is a portable, verified execution environment where all work is represented as signed, content-addressed data. It enables resumable, auditable, and transferable workflows across nodes, making it ideal for AI agent orchestration and LLM-driven tasks.

## Key Features
- Signed and content-addressed execution units (tools, directives, graphs) ensuring verifiable behavior
- Durable event logs (threads) for resumable, auditable, and replayable workflows
- Content-addressed state (CAS) as the single source of truth, enabling rebuildable projections
- Scoped remote execution with signed requests and trust delegation across nodes
- MCP bridge for seamless integration with AI clients and LLM runtimes

## Why It Matters for RAG Builders
RyeOS provides a cryptographically verifiable, resumable, and portable execution substrate that eliminates ambient trust assumptions, making it essential for building secure, auditable, and scalable AI agent systems.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CAS (Content-Addressable Storage)
Automated review identified **CAS (Content-Addressable Storage)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP
Automated review identified **HTTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cryptographic Signing
Automated review identified **Cryptographic Signing** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
