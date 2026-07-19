---
title: Goldentrii/AgentRecall-MCP
category: world/public/vault/daily-digests/2026-06-23
tech_stack:
- TypeScript
- MCP (Model Context Protocol)
- FSRS-lite (memory decay algorithm)
- BM25/RRF (retrieval methods)
- Node.js
- Markdown-based storage
- Optional OpenAI embeddings
quality_score: 9
rag_relevance: 9
tags:
- memory management
- agent learning
- correction tracking
- persistent context
- MCP integration
source: https://github.com/Goldentrii/AgentRecall-MCP
discovered_at: '2026-06-23T21:36:06Z'
evaluated_by: mistral-small-latest
---

## Summary
AgentRecall provides a persistent, compounding memory system for AI agents that captures corrections, tracks learning precision, and automates context retention across sessions. It includes an MCP server, SDK, and CLI for seamless integration with agent workflows.

## Key Features
- Correction-first memory system with precision KPIs to measure agent responsiveness to feedback
- Five-layer memory architecture (episodic, semantic, procedural, narrative, correction) mapped to cognitive psychology
- Local-first storage with optional cloud-based semantic search (OpenAI embeddings)
- Automated session loops (/arstatus, /arstart, /arsave) for seamless context retention and compounding
- Nightly consolidation (Dreaming) for cross-project insight promotion and decay management

## Why It Matters for RAG Builders
AgentRecall enables AI agents to learn from corrections and retain context across sessions, reducing repetitive errors and improving long-term performance without relying on external cloud services by default.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FSRS-lite (memory decay algorithm)
Automated review identified **FSRS-lite (memory decay algorithm)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25/RRF (retrieval methods)
Automated review identified **BM25/RRF (retrieval methods)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown-based storage
Automated review identified **Markdown-based storage** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Optional OpenAI embeddings
Automated review identified **Optional OpenAI embeddings** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
