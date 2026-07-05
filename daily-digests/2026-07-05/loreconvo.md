---
title: "labyrinth-analytics/loreconvo"
category: "Tooling"
tech_stack: ["Python", "SQLite", "MCP (Model Context Protocol)", "FastAPI", "FTS5 (Full-Text Search)", "BGE-small-en-v1.5 (for Pro tier)", "Shell Scripting (install.sh, export-to-chat.sh)"]
quality_score: 9
rag_relevance: 8
tags: ["persistent memory", "cross-surface context", "local-first", "AI assistant integration", "structured session recall"]
source: "https://github.com/labyrinth-analytics/loreconvo"
discovered_at: "2026-07-05T02:54:44Z"
evaluated_by: "mistral-small-latest"
---

## Summary
LoreConvo is a cross-surface persistent memory system for AI coding assistants like Claude Code, Cursor, Codex, and Hermes Agent. It enables seamless context transfer between different AI tools by storing structured episodic and semantic memory locally in a SQLite database, ensuring users retain control over their data and session history.

## Key Features
- Cross-surface memory persistence across multiple AI coding tools (Claude Code, Cursor, Codex, Hermes Agent)
- Local SQLite database for storing episodic and semantic memory with full user control
- Structured session summaries (decisions, artifacts, open questions) instead of raw transcripts
- MEMORY.md auto-indexing for project-specific knowledge retrieval
- Hybrid retrieval search (Free: FTS5, Pro: vector + BM25 + recency reranking)

## Why It Matters for RAG Builders
LoreConvo eliminates context loss when switching between AI coding assistants by providing a unified, local-first memory layer that preserves project history and decisions across surfaces.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5 (Full-Text Search)
Automated review identified **FTS5 (Full-Text Search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BGE-small-en-v1.5 (for Pro tier)
Automated review identified **BGE-small-en-v1.5 (for Pro tier)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Shell Scripting (install.sh, export-to-chat.sh)
Automated review identified **Shell Scripting (install.sh, export-to-chat.sh)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
