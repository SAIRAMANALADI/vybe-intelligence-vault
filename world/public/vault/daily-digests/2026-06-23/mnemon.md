---
title: mnemon-dev/mnemon
category: world/public/vault/daily-digests/2026-06-23
tech_stack:
- Go
- Graph Database
- Vector Embeddings
- CLI
- Markdown-based Harness
- Ollama (optional for embeddings)
quality_score: 9
rag_relevance: 10
tags:
- persistent memory
- LLM-supervised
- knowledge graph
- cross-session recall
- agent integration
source: https://github.com/mnemon-dev/mnemon
discovered_at: '2026-06-23T16:28:12Z'
evaluated_by: mistral-small-latest
---

## Summary
Mnemon provides LLM-supervised persistent memory for AI agents, enabling cross-session knowledge retention through a four-graph knowledge store with intent-aware recall, importance decay, and automatic deduplication. It operates as a single binary with zero API keys, integrating seamlessly with popular agent frameworks via lifecycle hooks.

## Key Features
- LLM-supervised memory management with no embedded LLM or API keys required
- Four-graph architecture (temporal, entity, causal, semantic) for intent-aware recall
- Automatic deduplication and retention lifecycle with importance decay
- Multi-framework support via lifecycle hooks (Claude Code, Codex, Cursor, TRAE, etc.)
- Intent-native protocol with structured JSON output and privacy-safe receipts

## Why It Matters for RAG Builders
Mnemon enables AI agents to retain and recall critical knowledge across sessions without additional inference costs, making it essential for building long-term memory in RAG systems.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Graph Database
Automated review identified **Graph Database** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vector Embeddings
Automated review identified **Vector Embeddings** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown-based Harness
Automated review identified **Markdown-based Harness** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama (optional for embeddings)
Automated review identified **Ollama (optional for embeddings)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
