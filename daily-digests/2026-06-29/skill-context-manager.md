---
title: "Mavis2103/skill-context-manager"
category: "Orchestrator"
tech_stack: ["Python 3.11+", "SQLite FTS5", "BM25", "Sentence Transformers", "MCP (Model Context Protocol)", "SQLite", "PyYAML", "uv (package manager)"]
quality_score: 9
rag_relevance: 10
tags: ["skill selection", "context optimization", "MCP server", "token reduction", "self-learning"]
source: "https://github.com/Mavis2103/skill-context-manager"
discovered_at: "2026-06-29T02:58:40Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Skill Context Manager (SCM) is a proxy layer for AI agents that solves the 'too many skills' problem by reducing skill context tokens by 85-98% through context-aware skill selection, session memory, and feedback-driven learning. It integrates with MCP-compatible agents and optimizes skill retrieval using hybrid search and Bayesian feedback loops.

## Key Features
- Two-stage retrieval (BM25 + embedding + reranking) for precise skill matching
- Session memory to remember and boost recently used skills
- Feedback loop with Bayesian weight updates for continuous improvement
- Hybrid search combining keyword and semantic methods
- MCP server integration for seamless agent compatibility

## Why It Matters for RAG Builders
SCM drastically reduces token waste and improves skill selection accuracy for RAG systems by dynamically managing skill context, making it essential for scalable AI agent deployments.

## Tech Stack Deep Dive
### Python 3.11+
Automated review identified **Python 3.11+** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite FTS5
Automated review identified **SQLite FTS5** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25
Automated review identified **BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Sentence Transformers
Automated review identified **Sentence Transformers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyYAML
Automated review identified **PyYAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv (package manager)
Automated review identified **uv (package manager)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
