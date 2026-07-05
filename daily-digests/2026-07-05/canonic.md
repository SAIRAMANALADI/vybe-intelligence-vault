---
title: "mischuh/canonic"
category: "Orchestrator"
tech_stack: ["Python", "SQL", "YAML", "Markdown", "Docker", "SQLite", "PostgreSQL", "DuckDB", "MCP (Model Context Protocol)", "LLM (Large Language Models)", "Git"]
quality_score: 9
rag_relevance: 10
tags: ["semantic layer", "data context", "AI agent guardrails", "schema-to-meaning", "data governance"]
source: "https://github.com/mischuh/canonic"
discovered_at: "2026-07-05T19:13:46Z"
evaluated_by: "mistral-small-latest"
---

## Summary
canonic is a context layer for AI agents that auto-generates, maintains, and version-controls the semantic and business meaning of data, ensuring agents query databases correctly without producing confidently wrong answers. It acts as a bridge between raw schemas and agent queries, enforcing guardrails and refusing to answer when uncertain.

## Key Features
- Auto-generates and maintains semantic context from live databases (SQLite, PostgreSQL, DuckDB) with version-controlled YAML files.
- Enforces business definitions, guardrails, and canonical metrics to prevent confidently wrong answers from AI agents.
- Supports auto-drafted knowledge pages (Markdown) for business context, with human review and approval.
- Integrates with AI agents via MCP (Model Context Protocol) for real-time query resolution and metadata-aware responses.
- Air-gapped capable, local-first deployment with optional LLM integration for drafting and reconciliation tasks.

## Why It Matters for RAG Builders
It eliminates the risk of AI agents generating incorrect or misleading answers by providing a trusted, version-controlled context layer that enforces business rules and definitions directly over raw data schemas.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQL
Automated review identified **SQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DuckDB
Automated review identified **DuckDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM (Large Language Models)
Automated review identified **LLM (Large Language Models)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
