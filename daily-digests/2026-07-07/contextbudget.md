---
title: natiixnt/ContextBudget
category: daily-digests/2026-07-07
tech_stack:
- Python
- TypeScript
- JavaScript
- Go
- Rust
- CLI
- VS Code Extension
- MCP (Model Context Protocol)
- SQLite
- Redis
- Git
quality_score: 9
rag_relevance: 10
tags:
- context budgeting
- token optimization
- AI coding agents
- deterministic compression
- MCP integration
source: https://github.com/natiixnt/ContextBudget
discovered_at: '2026-07-07T18:58:43Z'
evaluated_by: mistral-small-latest
---

## Summary
Redcon is a deterministic context budgeting tool for AI coding agents that ranks, compresses, and packs repository context to minimize token waste. It integrates with VS Code and MCP-compatible agents to provide on-demand, budget-aware context retrieval and command output compression.

## Key Features
- Deterministic file ranking by task relevance using keyword matching, import graphs, file roles, and git history
- Language-aware compression strategies (full, snippet, symbol extraction, summary) with 16 built-in compressors for command outputs
- Cross-call session compression layers (path aliases, content references, symbol aliases, snapshot deltas) for up to 15% additional token savings
- VS Code extension and MCP server integration for seamless agent workflows
- Multi-repo workspace support with CI-ready budget policies and quality harness for must-preserve fact validation

## Why It Matters for RAG Builders
Redcon directly addresses the critical challenge of token waste in RAG pipelines by ensuring agents receive only the most relevant and compressed context, drastically reducing input costs while maintaining accuracy.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### VS Code Extension
Automated review identified **VS Code Extension** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Redis
Automated review identified **Redis** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
