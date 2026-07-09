---
title: "rwnalds/engram"
category: "Orchestrator"
tech_stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "shadcn/ui", "Bun", "MiniSearch", "D3.js", "Model Context Protocol (MCP)", "Git", "Docker"]
quality_score: 9
rag_relevance: 10
tags: ["MCP server", "long-term memory", "markdown RAG", "knowledge graph", "self-hosted"]
source: "https://github.com/rwnalds/engram"
discovered_at: "2026-07-09T17:18:55Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Engram is a self-hosted MCP server and dashboard that provides long-term memory for AI agents like Claude Code and Cursor by leveraging a git-backed markdown vault. It enables shared, persistent knowledge storage without requiring a vector database, combining full-text search, a wikilink knowledge graph, and human-editable interfaces.

## Key Features
- Git-backed markdown vault for persistent, versioned knowledge storage
- MCP-compatible endpoint for AI agents to read/write memory via 13 tools
- Human dashboard with Obsidian-style editing, wikilinks, and knowledge graph visualization
- No vector database required; uses full-text search and wikilink graph over plain markdown
- Multi-workspace support with team authentication and runtime configuration

## Why It Matters for RAG Builders
Engram eliminates the need for AI agents to re-explain context between sessions by providing a shared, persistent memory layer that integrates seamlessly with existing markdown workflows.

## Tech Stack Deep Dive
### Next.js 16
Automated review identified **Next.js 16** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React 19
Automated review identified **React 19** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tailwind CSS
Automated review identified **Tailwind CSS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### shadcn/ui
Automated review identified **shadcn/ui** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun
Automated review identified **Bun** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MiniSearch
Automated review identified **MiniSearch** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### D3.js
Automated review identified **D3.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
