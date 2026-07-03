---
title: "KSym04/limpet"
category: "Agent Framework"
tech_stack: ["Rust", "SQLite", "Tree-sitter", "MCP (Model Context Protocol)", "CLI", "Visualization (Force-directed graph)"]
quality_score: 9
rag_relevance: 10
tags: ["memory-augmented agents", "code-anchored knowledge", "AST-based anchoring", "local-first", "token-efficient RAG"]
source: "https://github.com/KSym04/limpet"
discovered_at: "2026-07-03T04:02:09Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Limpet is a memory-first code intelligence MCP server for AI coding agents that anchors durable memories to AST-hashed code symbols, automatically invalidates them when code changes, and provides a visual knowledge graph for tracking project knowledge. It operates 100% locally with a single Rust binary and SQLite backend.

## Key Features
- AST-hashed symbol anchoring for memory persistence across refactors and renames
- Automatic memory staleness detection and flagging when code changes
- Honest metadata envelopes for every response (freshness, completeness, staleness)
- Visual knowledge graph UI for exploring project knowledge and contradictions
- Token-budgeted recall to minimize context window usage

## Why It Matters for RAG Builders
Limpet enables AI agents to retain and recall project-specific knowledge efficiently, reducing token waste and improving accuracy by anchoring memories to code rather than relying on transient context.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tree-sitter
Automated review identified **Tree-sitter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Visualization (Force-directed graph)
Automated review identified **Visualization (Force-directed graph)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
