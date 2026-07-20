---
title: jaronlu/llm-wiki-mcp
category: daily-digests/2026-07-10
tech_stack:
- Python
- MCP (Model Context Protocol)
- YAML
- JSON
- pytest
- ruff
quality_score: 9
rag_relevance: 8
tags:
- MCP server
- knowledge governance
- wiki management
- AI agent safety
- structured knowledge
source: https://github.com/jaronlu/llm-wiki-mcp
discovered_at: '2026-07-10T02:27:02Z'
evaluated_by: mistral-small-latest
---

## Summary
llm-wiki-mcp is an MCP server that provides AI agents with a governed wiki system, enabling controlled knowledge base updates through a candidate review process. It bridges the gap between unrestricted filesystem access and read-only limitations by requiring human approval for wiki modifications.

## Key Features
- Candidate-first write system requiring human approval before wiki updates
- Immutable raw source files to preserve original knowledge integrity
- Structured linting and validation for frontmatter and wiki health
- Scope-aware search with actionable next-step hints for agents
- Change logging with configurable retention and audit trails

## Why It Matters for RAG Builders
It ensures safe, auditable, and structured knowledge base updates for AI agents, preventing uncontrolled modifications and preserving data integrity.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pytest
Automated review identified **pytest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ruff
Automated review identified **ruff** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
