---
title: "ellmos-ai/usmc"
category: "Tooling"
tech_stack: ["Python", "SQLite", "CLI", "pytest"]
quality_score: 9
rag_relevance: 8
tags: ["memory layer", "SQLite", "multi-agent", "context sharing", "LLM agents"]
source: "https://github.com/ellmos-ai/usmc"
discovered_at: "2026-07-04T06:46:36Z"
evaluated_by: "mistral-small-latest"
---

## Summary
USMC is a zero-dependency Python library providing a shared SQLite-backed memory layer for LLM agents, enabling persistent storage of facts, lessons, working notes, and session context across multiple agents with conflict resolution via confidence scoring.

## Key Features
- Zero-dependency Python library with SQLite backend for persistent memory storage
- Supports facts, lessons, working notes, and sessions with confidence-based conflict resolution
- Multi-agent shared memory via a single SQLite database file
- CLI and high-level API for easy integration with LLM agents
- Compact prompt context generation for efficient LLM interactions

## Why It Matters for RAG Builders
USMC provides a lightweight, reusable memory layer essential for maintaining persistent context across multiple LLM agents without external dependencies.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pytest
Automated review identified **pytest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
