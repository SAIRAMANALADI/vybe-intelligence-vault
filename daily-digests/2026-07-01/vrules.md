---
title: "ops-ping/vrules"
category: "Orchestrator"
tech_stack: ["Rust", "RETE algorithm", "WASM", "MCP (Model Context Protocol)", "Varlink", "GitOps", "Embeddings", "Vector databases", "JSON/JSON Schema", "Unix sockets"]
quality_score: 8
rag_relevance: 9
tags: ["policy-as-code", "agent governance", "deterministic reasoning", "MCP proxy", "organizational memory"]
source: "https://github.com/ops-ping/vrules"
discovered_at: "2026-07-01T21:25:55Z"
evaluated_by: "mistral-small-latest"
---

## Summary
vrules is a deterministic, RETE-based reasoning platform for production systems that integrates rules with embeddings and canonicalization. It enables policy-as-code governance for AI/ML workflows, MCP mediation, and organizational memory recall while ensuring auditability, portability, and local-first deployment.

## Key Features
- Deterministic RETE-based rule evaluation with forward traces and backward proof for explainability
- Semantic predicates (v:) and canonicalization (c:) for embedding-aware rule logic
- Git-managed policy with versioned, auditable decisions and rollback capabilities
- Local-first and embeddable architecture supporting WASM, proxy, and kernel components
- MCP mediation with least-privilege tool exposure and fenced provider integrations

## Why It Matters for RAG Builders
vrules provides a vendor-neutral, rules-first framework to govern AI/ML workflows, ensuring deterministic, auditable, and portable policy enforcement across MCP, browser, and embedded environments.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### RETE algorithm
Automated review identified **RETE algorithm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WASM
Automated review identified **WASM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Varlink
Automated review identified **Varlink** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitOps
Automated review identified **GitOps** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Embeddings
Automated review identified **Embeddings** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vector databases
Automated review identified **Vector databases** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON/JSON Schema
Automated review identified **JSON/JSON Schema** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Unix sockets
Automated review identified **Unix sockets** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
