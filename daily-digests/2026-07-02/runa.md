---
title: "tesserine/runa"
category: "Orchestrator"
tech_stack: ["Rust", "JSON Schema", "TOML", "MCP (Model Context Protocol)", "CLI", "Agent Adapters (Codex, Claude Code)"]
quality_score: 9
rag_relevance: 10
tags: ["agent orchestration", "workflow validation", "schema enforcement", "dependency graph", "methodology-driven"]
source: "https://github.com/tesserine/runa"
discovered_at: "2026-07-02T15:17:31Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Runa is a runtime layer that enforces verifiable contracts for multi-step AI agent workflows, ensuring reliability through schema validation, dependency graph execution, and strict input/output enforcement. It acts as the enforcement tier between orchestrators and agents, enabling composable and trustworthy agent pipelines.

## Key Features
- Validates artifacts against JSON Schema before acceptance, ensuring only compliant inputs/outputs are used
- Emergent execution order derived from dependency graphs of protocols and artifacts, not hardcoded scripts
- Supports scoped and unscoped workflows with canonical work-unit identity enforcement
- Integrates with MCP for session-driven agent interactions and lifecycle management
- Provides methodology plugins via TOML manifests, enabling reusable and composable workflows

## Why It Matters for RAG Builders
Runa provides the critical enforcement layer that ensures AI agent workflows are reliable, composable, and verifiable, eliminating guesswork in multi-step processes and enabling trustworthy RAG pipelines.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON Schema
Automated review identified **JSON Schema** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TOML
Automated review identified **TOML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Agent Adapters (Codex, Claude Code)
Automated review identified **Agent Adapters (Codex, Claude Code)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
