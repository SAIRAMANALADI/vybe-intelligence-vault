---
title: rwnalds/engram
category: daily-digests/2026-07-09
tech_stack:
- TypeScript
- Next.js 16
- React 19
- Tailwind CSS
- shadcn/ui
- bun
- MiniSearch
- d3-force
- MCP SDK
- Git
- Docker
quality_score: 9
rag_relevance: 9
tags:
- MCP server
- long-term memory
- markdown knowledge base
- AI agent orchestration
- git-backed storage
source: https://github.com/rwnalds/engram
discovered_at: '2026-07-09T21:19:05Z'
evaluated_by: mistral-small-latest
---

## Summary
Engram is a self-hosted MCP server and dashboard that provides long-term memory for AI agents like Claude Code and Cursor by leveraging a git-backed markdown vault. It enables shared, persistent knowledge storage without requiring a vector database, combining full-text search, wikilink knowledge graphs, and human-editable interfaces.

## Key Features
- MCP-compatible server with 13 tools for reading and writing markdown notes over HTTP
- Human dashboard with Obsidian-style editing, wikilinks, backlinks, and knowledge graph visualization
- Git-backed persistence with optional auto-commit and push for version control
- Multi-workspace support for connecting multiple markdown vaults
- Bearer-token authentication for agents and OAuth for human access

## Why It Matters for RAG Builders
Engram eliminates the need for AI agents to forget context between sessions by providing a persistent, git-backed memory layer that both humans and agents can read and write to, making it essential for building reliable, long-term AI workflows.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Next.js 16
Automated review identified **Next.js 16** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React 19
Automated review identified **React 19** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tailwind CSS
Automated review identified **Tailwind CSS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### shadcn/ui
Automated review identified **shadcn/ui** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### bun
Automated review identified **bun** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MiniSearch
Automated review identified **MiniSearch** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### d3-force
Automated review identified **d3-force** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP SDK
Automated review identified **MCP SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

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
