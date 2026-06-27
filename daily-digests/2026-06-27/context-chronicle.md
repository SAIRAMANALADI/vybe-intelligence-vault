---
title: "github-yjc/context-chronicle"
category: "Tooling"
tech_stack: ["TypeScript", "SQLite", "FTS5 (Full-Text Search)", "Bun Runtime", "Node.js", "pnpm", "MCP (Model Context Protocol)", "Vector Embeddings", "TextRank", "Ebbinghaus Decay Model"]
quality_score: 9
rag_relevance: 9
tags: ["context management", "memory system", "RAG enhancement", "agent tooling", "knowledge graph"]
source: "https://github.com/github-yjc/context-chronicle"
discovered_at: "2026-06-27T15:16:48Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Context Chronicle is an offline memory system for OpenCode's TUI mode that silently records, protects, and retrieves AI agent context. It provides verifiable memory, tool firewall, smart compaction, and hybrid search capabilities to enhance RAG workflows.

## Key Features
- Verifiable memory with SQLite + FTS5 full-text search for prompts, tool calls, and decisions
- Tool Firewall with 15 built-in dangerous patterns and constraint-driven blocking
- Smart compaction using TextRank summarization and adaptive decay to retain critical context
- Hybrid search combining keyword, semantic, and knowledge graph retrieval
- Stop Gate for blocking fake completions via 7-dimension checks

## Why It Matters for RAG Builders
It ensures AI agents maintain accurate, verifiable, and compact context throughout RAG workflows, reducing hallucinations and improving decision-making.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5 (Full-Text Search)
Automated review identified **FTS5 (Full-Text Search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun Runtime
Automated review identified **Bun Runtime** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pnpm
Automated review identified **pnpm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vector Embeddings
Automated review identified **Vector Embeddings** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TextRank
Automated review identified **TextRank** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ebbinghaus Decay Model
Automated review identified **Ebbinghaus Decay Model** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
