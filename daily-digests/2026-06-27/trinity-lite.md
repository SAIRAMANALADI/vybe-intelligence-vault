---
title: "Yomiracle/trinity-lite"
category: "Orchestrator"
tech_stack: ["Python", "SQLite", "CLI", "MCP (Model Context Protocol)", "YAML (optional)", "JSON"]
quality_score: 9
rag_relevance: 8
tags: ["multi-agent orchestration", "CLI AI agents", "task routing", "SQLite persistence", "MCP server"]
source: "https://github.com/Yomiracle/trinity-lite"
discovered_at: "2026-06-27T11:41:40Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Trinity Lite is a local-first multi-agent orchestration framework designed to connect and manage CLI AI agents (e.g., Claude Code, Codex) through routing, task queues, and SQLite-based persistence. It enables collaboration, review, and audit trails without requiring complex infrastructure or new agent abstractions.

## Key Features
- Capability-based task routing to agents without hardcoded names
- Shared SQLite database for durable task state, results, and audit trails
- Built-in review, verification, and acceptance workflows with evidence tracking
- Model selection based on task complexity and agent capabilities
- MCP server integration for task dispatch, querying, and orchestration

## Why It Matters for RAG Builders
Trinity Lite simplifies the integration of multiple CLI AI agents into cohesive workflows with built-in safety, persistence, and auditability, making it essential for local-first RAG and AI stack builders.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML (optional)
Automated review identified **YAML (optional)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
