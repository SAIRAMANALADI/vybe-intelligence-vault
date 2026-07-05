---
title: "IshaanLabs/SafeSQL-MCP"
category: "Tooling"
tech_stack: ["Python", "LangGraph", "LangChain", "FastMCP", "Ollama", "SQLite", "Streamlit", "SQLParse", "pyLoggerX"]
quality_score: 9
rag_relevance: 9
tags: ["SQL generation", "human-in-the-loop", "risk classification", "MCP server", "LangGraph"]
source: "https://github.com/IshaanLabs/SafeSQL-MCP"
discovered_at: "2026-07-05T19:14:29Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A LangGraph-powered MCP server enabling natural language SQL queries with human-in-the-loop approval for database write operations. It translates user questions into SQL, classifies risk levels, and enforces safety checks before execution, including blocking destructive commands like DROP or TRUNCATE.

## Key Features
- Natural language to SQL translation with context-aware follow-ups
- Automated risk classification (SAFE/LOW/MEDIUM/HIGH/BLOCKED) for all operations
- Human-in-the-loop approval workflow for write operations (UPDATE/DELETE/ALTER)
- Dry-run preview and audit trail for all database interactions
- Multi-client support via MCP (Streamlit UI, CLI, Cursor/Claude integration)

## Why It Matters for RAG Builders
It provides a critical safety layer for AI-driven database interactions, ensuring destructive operations are vetted by humans while enabling seamless natural language queries for RAG and AI stack builders.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LangGraph
Automated review identified **LangGraph** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LangChain
Automated review identified **LangChain** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP
Automated review identified **FastMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Streamlit
Automated review identified **Streamlit** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLParse
Automated review identified **SQLParse** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pyLoggerX
Automated review identified **pyLoggerX** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
