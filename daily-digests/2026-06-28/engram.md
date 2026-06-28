---
title: "cognis-digital/engram"
category: "Tooling"
tech_stack: ["Python", "SQLite", "TF-IDF", "Cosine Similarity", "Model Context Protocol (MCP)", "CLI"]
quality_score: 9
rag_relevance: 9
tags: ["long-term memory", "model-agnostic", "SQLite", "TF-IDF", "MCP"]
source: "https://github.com/cognis-digital/engram"
discovered_at: "2026-06-28T12:17:20Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Engram provides a durable, model-agnostic long-term memory system for AI agents using a single SQLite file and a self-contained TF-IDF + cosine-similarity ranker. It enables agents to remember facts, observations, and decisions without external dependencies or network access.

## Key Features
- Durable memory storage in a single SQLite file with no external dependencies
- Model-agnostic recall using TF-IDF and cosine similarity ranking
- MCP-native server for seamless integration with MCP-aware clients
- Portable and inspectable memory with plain-text storage and auditable ranking
- CLI and Python API for easy integration and management

## Why It Matters for RAG Builders
Engram enables AI agents to maintain durable, portable, and auditable long-term memory without relying on external embedding services or vector databases, simplifying RAG implementations.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TF-IDF
Automated review identified **TF-IDF** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cosine Similarity
Automated review identified **Cosine Similarity** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
