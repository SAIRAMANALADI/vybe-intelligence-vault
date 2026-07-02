---
title: "iampantherr/SecureContext"
category: "Tooling"
tech_stack: ["TypeScript", "PostgreSQL", "Node.js", "Docker", "HMAC", "AST (Abstract Syntax Tree)", "MCP (Model Context Protocol)", "Ollama", "OTLP (OpenTelemetry Protocol)"]
quality_score: 9
rag_relevance: 7
tags: ["memory persistence", "audit trail", "skill admission", "tamper-evident", "Claude Code"]
source: "https://github.com/iampantherr/SecureContext"
discovered_at: "2026-07-02T15:17:17Z"
evaluated_by: "mistral-small-latest"
---

## Summary
SecureContext is an MCP plugin for Claude Code that provides persistent memory, cryptographic audit trails, and HMAC-verified skill admission gates. It runs locally on PostgreSQL, ensuring zero cloud sync and tamper-evident logging for every tool call and skill execution.

## Key Features
- Persistent memory layer that survives Claude Code restarts with semantic compression (~87% token reduction)
- Cryptographic HMAC audit trail for every tool call and skill execution with per-agent identity isolation
- HMAC-verified skill admission gate with AST-based security scanning and quarantine for compromised scripts
- Atomic work-stealing queue for parallel agent sessions with FOR UPDATE SKIP LOCKED to prevent double-claims
- Tamper-evident HMAC-chained logs and independently verifiable audit chains via API endpoints

## Why It Matters for RAG Builders
It provides essential security, auditability, and persistent memory for RAG/AI stacks built on Claude Code, ensuring verifiable tool execution and preventing tampering without relying on cloud services.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HMAC
Automated review identified **HMAC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AST (Abstract Syntax Tree)
Automated review identified **AST (Abstract Syntax Tree)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OTLP (OpenTelemetry Protocol)
Automated review identified **OTLP (OpenTelemetry Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
