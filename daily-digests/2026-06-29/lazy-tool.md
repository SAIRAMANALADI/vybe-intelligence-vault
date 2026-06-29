---
title: "unabused-wichita77/lazy-tool"
category: "Tooling"
tech_stack: ["Go", "SQLite", "MCP", "CLI", "TUI", "Web UI"]
quality_score: 6
rag_relevance: 8
tags: ["MCP", "tool discovery", "local indexing", "prompt optimization", "agent routing"]
source: "https://github.com/unabused-wichita77/lazy-tool"
discovered_at: "2026-06-29T16:48:26Z"
evaluated_by: "mistral-small-latest"
---

## Summary
lazy-tool is a Windows-native utility designed to index, search, and route local MCP (Model Context Protocol) tools before an agent invokes them. It reduces prompt bloat by trimming tool lists and enabling efficient tool discovery via SQLite and vector search.

## Key Features
- Local-first tool indexing and storage using SQLite
- Vector search for efficient tool matching and retrieval
- CLI, TUI, and Web UI interfaces for accessibility
- Prompt trimming to reduce agent input size and noise
- Tool routing for seamless agent integration

## Why It Matters for RAG Builders
It streamlines local tool discovery for RAG pipelines, reducing prompt bloat and improving agent efficiency by ensuring only relevant tools are invoked.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP
Automated review identified **MCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TUI
Automated review identified **TUI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Web UI
Automated review identified **Web UI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
