---
title: "ops-ping/vector-rules"
category: "Orchestrator"
tech_stack: ["Rust", "RETE network", "WASM", "MCP (Model Context Protocol)", "GitOps", "Embeddings", "Varlink", "WebSocket", "JSON/JSON Schema"]
quality_score: 9
rag_relevance: 8
tags: ["policy-as-code", "LLMOps", "deterministic governance", "embedding reuse", "auditability"]
source: "https://github.com/ops-ping/vector-rules"
discovered_at: "2026-07-02T19:18:31Z"
evaluated_by: "mistral-small-latest"
---

## Summary
vector-rules is a deterministic, GitOps-managed rule engine designed for production operations, replacing opaque prompt-based governance with explicit, version-controlled policy layers. It enables LLMOps with auditable, testable, and portable rule enforcement across the tech stack, including MCP mediation, organizational memory recall, and browser/runtime parity.

## Key Features
- GitOps-managed policy with version-controlled rules and rollback capabilities
- Deterministic rule evaluation via RETE network with forward traces and backward proof
- Portable policy enforcement across wire, edge, browser, and embedded applications
- Organizational memory with canonicalized, content-addressed embeddings for reuse
- Least-privilege MCP mediation and fenced native provider integration

## Why It Matters for RAG Builders
vector-rules provides a critical infrastructure layer for RAG builders by enabling deterministic, auditable, and portable policy enforcement that governs LLM behavior, tool access, and organizational memory without vendor lock-in.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### RETE network
Automated review identified **RETE network** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WASM
Automated review identified **WASM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitOps
Automated review identified **GitOps** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Embeddings
Automated review identified **Embeddings** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Varlink
Automated review identified **Varlink** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebSocket
Automated review identified **WebSocket** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON/JSON Schema
Automated review identified **JSON/JSON Schema** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
