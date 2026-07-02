---
title: "drongzzz0/researchkb-agent-memory"
category: "Tooling"
tech_stack: ["Python", "SQLite", "CLI (Click/argparse)", "MCP (Model Context Protocol)", "FTS5 (Full-Text Search)", "JSON Schema", "pytest", "GitHub Actions"]
quality_score: 9
rag_relevance: 9
tags: ["agent memory", "research workflow", "MCP server", "experiment tracking", "failure memory"]
source: "https://github.com/drongzzz0/researchkb-agent-memory"
discovered_at: "2026-07-02T12:11:53Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A lightweight workflow template enabling research agents like Codex, Claude Code, and Cursor to access local literature evidence, experiment history, and failure memory through a portable SQLite-based ResearchKB system. It provides CLI tools, MCP server integration, and standardized contracts for auditable agent memory.

## Key Features
- Portable SQLite-based ResearchKB for local-first agent memory with literature, experiments, and failures
- Read-only MCP server for seamless integration with agents like Cursor and Claude Code
- Standardized experiment output contracts (metrics.json, results.json, etc.) for consistent data ingestion
- Quantified effectiveness metrics (retrieval quality, library health, citation grounding) for auditing
- CLI toolkit (rk-memory) for initialization, seeding, health checks, and evaluation

## Why It Matters for RAG Builders
It provides a lightweight, auditable, and portable system for research agents to query local evidence, experiments, and failures, bridging the gap between private data and agent workflows without requiring hosted services.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI (Click/argparse)
Automated review identified **CLI (Click/argparse)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5 (Full-Text Search)
Automated review identified **FTS5 (Full-Text Search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON Schema
Automated review identified **JSON Schema** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pytest
Automated review identified **pytest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
