---
title: blakestone-x/engram
category: daily-digests/2026-07-10
tech_stack:
- TypeScript
- Node.js
- Markdown
- YAML
- BM25F search
- Embeddings (optional)
- React
- Vite
- Model Context Protocol (MCP)
- Jest (testing)
quality_score: 9
rag_relevance: 10
tags:
- long-term memory
- agent memory
- forgetting curve
- local-first
- MCP server
source: https://github.com/blakestone-x/engram
discovered_at: '2026-07-10T06:32:10Z'
evaluated_by: mistral-small-latest
---

## Summary
Engram provides long-term, tiered memory management for AI agents using plain markdown files stored locally. It implements cognitive psychology-inspired memory tiers (working, episodic, semantic, procedural) with Ebbinghaus forgetting curves, reinforcement, and consolidation to ensure relevant knowledge persists while irrelevant data fades.

## Key Features
- Tiered memory system (working, episodic, semantic, procedural) with tier-specific decay rates
- Ebbinghaus forgetting curve-based retention and reinforcement for adaptive memory persistence
- Consolidation of episodic memories into semantic knowledge with provenance tracking
- Local-first markdown-native storage with optional hybrid search (lexical + embeddings)
- MCP server integration for seamless AI agent tooling and context management

## Why It Matters for RAG Builders
Engram solves the critical problem of AI agent memory persistence across sessions by implementing biologically inspired forgetting and reinforcement, ensuring long-term knowledge retention without overwhelming context bloat.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25F search
Automated review identified **BM25F search** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Embeddings (optional)
Automated review identified **Embeddings (optional)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React
Automated review identified **React** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vite
Automated review identified **Vite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Jest (testing)
Automated review identified **Jest (testing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
