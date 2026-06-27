---
title: "Veloce-AI/sqlmind"
category: "Tooling"
tech_stack: ["Python", "Property Graph", "SQL", "LLM Integration", "MCP (Model Context Protocol)", "YAML", "SQLAlchemy", "FastAPI", "Docker"]
quality_score: 9
rag_relevance: 9
tags: ["SQL generation", "LLM agents", "property graph", "multi-dialect", "MCP server"]
source: "https://github.com/Veloce-AI/sqlmind"
discovered_at: "2026-06-27T11:47:28Z"
evaluated_by: "mistral-small-latest"
---

## Summary
SQLMind is an SQL intelligence layer for LLM agents that provides a property graph schema, a 7-phase generation protocol, and a 5-layer validation gate across 10 SQL engines. It enables phase-locked reasoning, join path discovery, and multi-dialect SQL generation without requiring API keys for core operations.

## Key Features
- Phase-locked SQL generation with 7-stage protocol (FROM→WHERE→GROUP BY→HAVING→SELECT→ORDER BY→LIMIT)
- Property graph schema for tables, columns, and foreign key relationships with BFS join path discovery
- 5-layer validation gate (Phase, JOIN, Schema, Dialect, Syntax) for pre-execution checks
- Multi-dialect support for 10 SQL engines with editable YAML configuration
- MCP server with 8 tools for editor integration (Claude Code, Cursor, Windsurf) and HTTP mode

## Why It Matters for RAG Builders
SQLMind streamlines SQL generation for RAG pipelines by enforcing structured reasoning, reducing hallucinations, and ensuring dialect compatibility, making it essential for AI agents interacting with databases.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Property Graph
Automated review identified **Property Graph** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQL
Automated review identified **SQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM Integration
Automated review identified **LLM Integration** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLAlchemy
Automated review identified **SQLAlchemy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
