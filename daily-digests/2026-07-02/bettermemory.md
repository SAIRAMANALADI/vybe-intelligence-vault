---
title: "0Mattias/bettermemory"
category: "Tooling"
tech_stack: ["Python", "MCP (Model Context Protocol)", "SQLite", "Markdown", "Git", "BM25", "Embeddings (optional)"]
quality_score: 9
rag_relevance: 8
tags: ["memory persistence", "staleness detection", "AI agent tools", "context management", "MCP integration"]
source: "https://github.com/0Mattias/bettermemory"
discovered_at: "2026-07-02T12:13:08Z"
evaluated_by: "mistral-small-latest"
---

## Summary
bettermemory provides persistent, verifiable memory for AI coding agents like Claude Code, enabling cross-session recall while actively detecting and mitigating memory staleness. It stores facts as human-readable markdown files with built-in verification, deduplication, and staleness checks to ensure reliability over time.

## Key Features
- Cross-session memory persistence with human-readable storage (markdown files)
- Automatic staleness detection using file paths, commits, and timestamps
- Write gates to prevent transient or sensitive data from being stored
- Built-in evaluation metrics to measure memory utility and retrieval accuracy
- Hybrid search (keyword + BM25) with optional semantic search via embeddings

## Why It Matters for RAG Builders
It solves the critical problem of AI agents forgetting or relying on outdated context by providing verifiable, persistent memory with staleness checks, ensuring reliable long-term recall for RAG and agentic workflows.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25
Automated review identified **BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Embeddings (optional)
Automated review identified **Embeddings (optional)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
