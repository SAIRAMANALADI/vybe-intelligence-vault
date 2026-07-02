---
title: "STiFLeR7/memex"
category: "Orchestrator"
tech_stack: ["Python", "Neo4j", "Graphiti", "Tree-sitter", "Gemini API", "MCP (Model Context Protocol)", "Leiden clustering", "SQLite", "FastAPI"]
quality_score: 9
rag_relevance: 9
tags: ["persistent memory", "bitemporal knowledge graph", "MCP server", "codebase context", "AI coding agents"]
source: "https://github.com/STiFLeR7/memex"
discovered_at: "2026-07-02T06:39:13Z"
evaluated_by: "mistral-small-latest"
---

## Summary
memex is a temporal knowledge graph memory system for AI coding agents, providing persistent, bitemporal codebase context via an MCP server. It transforms git commits and file changes into structured graph state (modules, symbols, decisions, problems) to prevent agents from rediscovering the same context repeatedly.

## Key Features
- Bitemporal knowledge graph storing modules, symbols, decisions, and problems with confidence scoring
- 14 MCP tools for read/write operations, including context retrieval, decision recording, and impact prediction
- Hierarchical Leiden clustering for scalable project context (50 to 5000+ modules)
- Two-regime confidence decay (validated facts decay slowly; unvalidated facts stale at 30 days)
- Telemetry and token savings metrics to measure agent efficiency improvements

## Why It Matters for RAG Builders
It eliminates redundant context rediscovery for AI coding agents by maintaining a persistent, bitemporal knowledge graph of codebase decisions and relationships, significantly improving agent efficiency and reducing token waste.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Neo4j
Automated review identified **Neo4j** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Graphiti
Automated review identified **Graphiti** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tree-sitter
Automated review identified **Tree-sitter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Gemini API
Automated review identified **Gemini API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Leiden clustering
Automated review identified **Leiden clustering** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
