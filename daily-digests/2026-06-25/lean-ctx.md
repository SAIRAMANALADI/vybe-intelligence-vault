---
title: yvgude/lean-ctx
category: daily-digests/2026-06-25
tech_stack:
- Rust
- MCP (Model Context Protocol)
- Tree-sitter
- SQLite
- HTTP Proxy
- Shell Hooks
- Knowledge Graph
- FTS5 (Full-Text Search)
quality_score: 9
rag_relevance: 10
tags:
- Context Engineering
- Token Optimization
- Agent Orchestration
- Local-First
- Verification
source: https://github.com/yvgude/lean-ctx
discovered_at: '2026-06-25T11:42:07Z'
evaluated_by: mistral-small-latest
---

## Summary
LeanCTX is a local-first context engineering layer for AI agents that manages, compresses, and verifies the context they consume. It acts as a proxy between agents and their inputs (code, shell, data) to reduce token usage by 60-90%, persist session memory, and enforce access controls with verifiable proof.

## Key Features
- Compresses file reads and shell outputs by 60-90% using adaptive read modes (e.g., map, signatures, density-based filtering) and AST-aware compression
- Persists session memory and knowledge across agent interactions with a structured context graph and verifiable ledger
- Enforces access controls and budgets via a real-time dashboard, budgets, and SLOs for multi-agent governance
- Provides a proxy layer to compress every request (system prompt, history, tool results) prompt-cache-safe, reducing API costs
- Offers 77+ MCP tools for file operations, LSP refactoring, multi-agent handoffs, and verifiable savings tracking

## Why It Matters for RAG Builders
LeanCTX is essential for RAG/AI stack builders because it directly addresses the core challenge of context window efficiency, cost reduction, and governance, enabling longer, more accurate, and auditable agent sessions with minimal configuration overhead.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tree-sitter
Automated review identified **Tree-sitter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP Proxy
Automated review identified **HTTP Proxy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Shell Hooks
Automated review identified **Shell Hooks** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Knowledge Graph
Automated review identified **Knowledge Graph** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5 (Full-Text Search)
Automated review identified **FTS5 (Full-Text Search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
