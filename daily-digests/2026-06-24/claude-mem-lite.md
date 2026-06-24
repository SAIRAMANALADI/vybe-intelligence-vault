---
title: "sdsrss/claude-mem-lite"
category: "Tooling"
tech_stack: ["JavaScript", "Node.js", "SQLite", "MCP (Model Context Protocol)", "TF-IDF", "FTS5 (Full-Text Search)", "LLM (Haiku/Sonnet via Anthropic API)"]
quality_score: 9
rag_relevance: 8
tags: ["persistent memory", "Claude Code", "MCP server", "SQLite", "hybrid search"]
source: "https://github.com/sdsrss/claude-mem-lite"
discovered_at: "2026-06-24T20:50:10Z"
evaluated_by: "mistral-small-latest"
---

## Summary
claude-mem-lite is a lightweight, persistent memory system for Anthropic's Claude Code CLI agent, designed to capture coding decisions, bug fixes, and context across sessions. It operates as an MCP server with hooks, using a single SQLite database and hybrid FTS5 + TF-IDF search for efficient recall without external services.

## Key Features
- Automatic capture of coding observations, decisions, and bug fixes via MCP hooks without manual input
- Hybrid search combining FTS5 BM25 and TF-IDF with Reciprocal Rank Fusion for high-precision recall
- Episode batching to reduce LLM calls by 7-10x compared to original claude-mem, lowering costs by ~600x
- Single SQLite database with zero external services, ensuring minimal overhead and local data control
- Advanced features like synonym expansion, CJK support, secret scrubbing, and adaptive time windows for context-aware retrieval

## Why It Matters for RAG Builders
It provides a cost-efficient, code-aware memory system purpose-built for Claude Code, enabling AI agents to retain and retrieve long-term context without external dependencies, significantly reducing operational costs while maintaining high recall precision.

## Tech Stack Deep Dive
### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TF-IDF
Automated review identified **TF-IDF** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5 (Full-Text Search)
Automated review identified **FTS5 (Full-Text Search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM (Haiku/Sonnet via Anthropic API)
Automated review identified **LLM (Haiku/Sonnet via Anthropic API)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
