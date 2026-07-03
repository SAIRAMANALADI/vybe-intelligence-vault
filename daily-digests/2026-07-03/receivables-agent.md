---
title: "JorgeEd13/receivables-agent"
category: "Agent Framework"
tech_stack: ["LangGraph", "Python", "FastAPI", "React", "DuckDB", "ChromaDB", "LangChain", "Ollama", "Gemini API", "Docker", "pytest", "MiniLM", "Faker"]
quality_score: 9
rag_relevance: 10
tags: ["ReAct Agent", "Guarded SQL", "RAG", "Accounts Receivable", "Policy Retrieval"]
source: "https://github.com/JorgeEd13/receivables-agent"
discovered_at: "2026-07-03T17:20:56Z"
evaluated_by: "mistral-small-latest"
---

## Summary
receivables-agent is a conversational AI agent that answers plain-language questions about accounts receivable data by combining guarded text-to-SQL queries with RAG-based policy retrieval. It prioritizes overdue accounts and cites governing policies, transforming manual SQL and PDF hunting into a single query.

## Key Features
- ReAct agent architecture combining guarded text-to-SQL and RAG-based policy retrieval
- Hardware-aware model selection for local deployment (Ollama)
- Semantic plan-cache for fast, non-stale responses
- Full-stack implementation (FastAPI backend + React UI)
- Synthetic data generation for clean-room testing and reproducibility

## Why It Matters for RAG Builders
It provides a production-ready framework for building domain-specific agents that integrate structured data queries with policy retrieval, demonstrating how to safely combine SQL and RAG in a single workflow.

## Tech Stack Deep Dive
### LangGraph
Automated review identified **LangGraph** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React
Automated review identified **React** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DuckDB
Automated review identified **DuckDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ChromaDB
Automated review identified **ChromaDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LangChain
Automated review identified **LangChain** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Gemini API
Automated review identified **Gemini API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pytest
Automated review identified **pytest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MiniLM
Automated review identified **MiniLM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Faker
Automated review identified **Faker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
