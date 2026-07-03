---
title: "ellmos-ai/gardener"
category: "Orchestrator"
tech_stack: ["Python", "SQLite", "FTS5 (Full-Text Search)", "CLI", "File System Integration"]
quality_score: 8
rag_relevance: 9
tags: ["LLM memory substrate", "SQLite-based OS", "searchable knowledge base", "minimalist agent framework", "local-first architecture"]
source: "https://github.com/ellmos-ai/gardener"
discovered_at: "2026-07-03T22:06:58Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Gardener is a lightweight, database-centric operating system designed for LLMs, where all data (knowledge, tools, tasks, and memory) resides in a searchable SQLite database. It provides four core functions—find, get, put, and run—to interact with the system, eliminating the need for separate memory or task management systems.

## Key Features
- Single-table SQLite database design with FTS5 search for associative memory and retrieval
- Four core primitives (find, get, put, run) for all interactions with the system
- Built-in memory management with decay-based forgetting and recall boosting
- File absorption and materialization for seamless integration with external data
- Task and knowledge management without separate systems, using type-based entries

## Why It Matters for RAG Builders
Gardener provides a radical minimalist approach to LLM memory and tool orchestration, centralizing all data in a searchable SQLite database, which is essential for building efficient and scalable RAG systems.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5 (Full-Text Search)
Automated review identified **FTS5 (Full-Text Search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### File System Integration
Automated review identified **File System Integration** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
