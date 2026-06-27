---
title: "SimoneB79/memory-engine-mcp"
category: "Tooling"
tech_stack: ["Python", "SQLite", "FastMCP", "watchdog", "FTS5", "JSON1"]
quality_score: 9
rag_relevance: 9
tags: ["memory system", "MCP", "SQLite", "knowledge graph", "session continuity"]
source: "https://github.com/SimoneB79/memory-engine-mcp"
discovered_at: "2026-06-27T13:21:10Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A living memory system for AI assistants that combines SQLite with the Model Context Protocol (MCP) to provide dynamic, decaying, and evolving memory storage. It integrates session watching, learning engines, and knowledge graph traversal for continuous context retention.

## Key Features
- Atomic memory model with multi-factor ranking (FTS × confidence × recency × weight)
- Organic decay and learning engine for dynamic memory evolution
- Session watcher for real-time OpenClaw session ingestion with TTL support
- Knowledge graph traversal with depth control and relation filtering
- Markdown import and intelligent merge/deduplication of atoms

## Why It Matters for RAG Builders
It provides a dynamic, self-evolving memory system for AI assistants that ensures context retention and continuity across sessions, critical for building advanced RAG applications.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP
Automated review identified **FastMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### watchdog
Automated review identified **watchdog** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5
Automated review identified **FTS5** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON1
Automated review identified **JSON1** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
