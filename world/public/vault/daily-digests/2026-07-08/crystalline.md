---
title: jordiboehme/crystalline
category: world/public/vault/daily-digests/2026-07-08
tech_stack:
- Rust
- Markdown
- YAML
- SQLite
- Embedding models
- MCP (Model Context Protocol)
- CI/CD (GitHub Actions)
quality_score: 9
rag_relevance: 9
tags:
- AI memory
- knowledge management
- RAG optimization
- agent persistence
- Markdown-based workflow
source: https://github.com/jordiboehme/crystalline
discovered_at: '2026-07-08T21:01:33Z'
evaluated_by: mistral-small-latest
---

## Summary
Crystalline provides durable memory for AI agents by organizing knowledge into Markdown-based Domains and Engrams, enabling persistent learning and efficient retrieval. It combines a CLI, MCP server, and local search index to maintain agent context across sessions.

## Key Features
- Durable agent memory via Engrams and Domains stored in plain Markdown files
- Hybrid search (full-text, semantic, temporal, and knowledge graph) for scalable retrieval
- MCP server integration for seamless agent onboarding and real-time knowledge capture
- Disposable search index rebuilt on-demand to ensure consistency with source files
- Supports both file-based and virtual domains for flexible deployment

## Why It Matters for RAG Builders
Crystalline eliminates the need for agents to relearn context in every session, enabling persistent, scalable knowledge retention critical for RAG systems handling large datasets.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Embedding models
Automated review identified **Embedding models** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CI/CD (GitHub Actions)
Automated review identified **CI/CD (GitHub Actions)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
