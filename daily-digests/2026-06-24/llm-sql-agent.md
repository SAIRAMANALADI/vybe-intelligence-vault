---
title: "SAMithila/llm-sql-agent"
category: "Agent Framework"
tech_stack: ["LangGraph", "GPT-4o", "FastAPI", "Streamlit", "SQLite", "PostgreSQL", "Python 3.11", "AWS EC2", "Docker"]
quality_score: 9
rag_relevance: 9
tags: ["natural language to SQL", "agentic system", "deterministic AI", "database interaction", "guardrails"]
source: "https://github.com/SAMithila/llm-sql-agent"
discovered_at: "2026-06-24T02:42:37Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A deterministic agentic system enabling secure natural language database interaction with validation, guardrails, and observability layers. It converts plain English queries into accurate SQL, executes them safely, and returns plain English answers without requiring SQL knowledge.

## Key Features
- Converts plain English queries to SQL with 96% accuracy using GPT-4o at temperature=0
- Multi-layered guardrails including RBAC, rate limiting, and SQL injection detection
- Explicit validation and retry loops for error correction and deterministic behavior
- Observability with JSON trace logging for auditing and debugging
- Supports both SQLite (dev) and PostgreSQL (prod) with read-only, row-capped execution

## Why It Matters for RAG Builders
It provides a secure, auditable, and deterministic way to bridge natural language queries with databases, reducing bottlenecks in data access for non-technical users while maintaining enterprise-grade safety and reliability.

## Tech Stack Deep Dive
### LangGraph
Automated review identified **LangGraph** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GPT-4o
Automated review identified **GPT-4o** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Streamlit
Automated review identified **Streamlit** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python 3.11
Automated review identified **Python 3.11** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AWS EC2
Automated review identified **AWS EC2** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
