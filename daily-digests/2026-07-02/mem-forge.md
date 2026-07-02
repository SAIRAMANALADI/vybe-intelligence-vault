---
title: "shno-labs/mem-forge"
category: "Orchestrator"
tech_stack: ["Python", "React", "TypeScript", "Docker", "SQLite", "Chroma (Vector DB)", "FastAPI", "MCP (Model Context Protocol)", "Ruff (Code Linting)", "WeasyPrint (PDF Processing)"]
quality_score: 9
rag_relevance: 10
tags: ["Agent Memory", "Provenance Tracking", "Self-Evolving", "Team Context", "MCP Integration"]
source: "https://github.com/shno-labs/mem-forge"
discovered_at: "2026-07-02T10:04:56Z"
evaluated_by: "mistral-small-latest"
---

## Summary
MemForge is a self-evolving, evidence-based memory layer designed to bridge the gap between scattered team context and AI coding agents. It ingests and structures institutional knowledge from tools like Confluence, Jira, GitHub Pages, and Teams, enabling agents to search, verify, and reuse durable facts, decisions, and procedures with full provenance tracking.

## Key Features
- Extracts and structures durable facts, decisions, and procedures from multiple sources (Confluence, Jira, GitHub Pages, Teams, local repositories) with full provenance tracking.
- Provides a React admin UI for memory management, review queues, and runtime settings, alongside a CLI for direct interaction.
- Supports MCP-enabled agent plugins for Codex and Claude Code, enabling seamless integration with AI coding assistants.
- Implements quality gates and reconciliation pipelines to ensure memory accuracy and consistency before persistence.
- Offers local and self-hosted deployment options with SQLite for storage and Chroma for vector search, ensuring scalability and flexibility.

## Why It Matters for RAG Builders
MemForge eliminates the need for AI agents to rediscover institutional context by providing a structured, evidence-backed memory layer that agents can query and reuse during real work.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React
Automated review identified **React** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Chroma (Vector DB)
Automated review identified **Chroma (Vector DB)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ruff (Code Linting)
Automated review identified **Ruff (Code Linting)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WeasyPrint (PDF Processing)
Automated review identified **WeasyPrint (PDF Processing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
