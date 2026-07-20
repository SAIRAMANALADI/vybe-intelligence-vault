---
title: joshuaswarren/remnic
category: daily-digests/2026-06-23
tech_stack:
- TypeScript
- Node.js
- pnpm
- MCP (Model Context Protocol)
- OpenClaw
- Ollama
- LM Studio
- Markdown
- YAML
- Vector Search
- BM25
- Reranking
quality_score: 9
rag_relevance: 10
tags:
- memory management
- user-aware agents
- context retention
- local-first storage
- agentic workflows
source: https://github.com/joshuaswarren/remnic
discovered_at: '2026-06-23T16:28:37Z'
evaluated_by: mistral-small-latest
---

## Summary
Remnic is an open-source memory and context layer for user-aware AI agents, enabling them to remember user preferences, projects, constraints, and decisions across sessions. It provides scoped memory, provenance tracking, retrieval quality, and correction mechanisms while keeping data local and host-agnostic.

## Key Features
- Scoped memory with namespaces and lifecycle management
- Provenance tracking for memory sources and consolidation
- Hybrid search (BM25 + vector + reranking) with multi-tier retrieval
- Local-first storage using plain markdown files with YAML frontmatter
- Integration with OpenClaw, Claude Code, Codex CLI, and MCP clients

## Why It Matters for RAG Builders
Remnic provides the critical systems layer for RAG/AI stacks to enable persistent, scoped, and correctable memory that reduces context-switching and improves agent performance across sessions.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pnpm
Automated review identified **pnpm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenClaw
Automated review identified **OpenClaw** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LM Studio
Automated review identified **LM Studio** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vector Search
Automated review identified **Vector Search** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25
Automated review identified **BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Reranking
Automated review identified **Reranking** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
