---
title: "mirnoorata/codexa"
category: "Orchestrator"
tech_stack: ["TypeScript", "Node.js", "MCP (Model Context Protocol)", "POSIX-shell parsing", "Graph theory", "Deterministic indexing"]
quality_score: 9
rag_relevance: 10
tags: ["AI governance", "codebase context", "drift detection", "verification ledger", "MCP server"]
source: "https://github.com/mirnoorata/codexa"
discovered_at: "2026-06-28T23:09:38Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Codexa is a local, deterministic governance layer for AI coding agents that provides edit-lifecycle oversight, including plan conformance, drift review, and verification crediting. It acts as a proof layer for agents like Codex or Claude Code by tracking codebase context, changes, and verification outcomes.

## Key Features
- Drift loop with plan conformance and post-edit review for rename-aware change tracking
- Verification ledger that validates reported commands against a POSIX-shell subset for structural integrity
- Graph-aware relational packets for bounded process context and module clusters
- Fail-closed evaluation harness for baseline comparisons and scenario validation
- Local-first, zero API keys, and model-agnostic MCP server for integration with any MCP-compatible agent host

## Why It Matters for RAG Builders
Codexa provides essential governance and verification capabilities for RAG/AI stack builders by ensuring agent edits are tracked, validated, and aligned with planned changes, reducing drift and improving reliability in automated coding workflows.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### POSIX-shell parsing
Automated review identified **POSIX-shell parsing** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Graph theory
Automated review identified **Graph theory** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Deterministic indexing
Automated review identified **Deterministic indexing** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
