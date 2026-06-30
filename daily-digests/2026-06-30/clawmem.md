---
title: "yoloshii/ClawMem"
category: "Vector DB"
tech_stack: ["TypeScript", "Bun", "SQLite", "SQLite-vec", "BM25", "Vector Search", "Reciprocal Rank Fusion", "Query Expansion", "Cross-Encoder Reranking", "GGUF", "node-llama-cpp", "MCP (Model Context Protocol)", "React (for UI components in docs)", "systemd/launchd (for services)"]
quality_score: 9
rag_relevance: 10
tags: ["On-device memory", "Hybrid RAG", "Agent integration", "Local AI", "Multi-graph traversal"]
source: "https://github.com/yoloshii/ClawMem"
discovered_at: "2026-06-30T13:13:17Z"
evaluated_by: "mistral-small-latest"
---

## Summary
ClawMem is an on-device memory layer for AI agents like Claude Code, OpenClaw, and Hermes, providing persistent, retrieval-augmented memory with hybrid search, intent classification, and multi-graph traversal. It operates entirely locally with no cloud dependencies, integrating via hooks, MCP servers, or plugins.

## Key Features
- Hybrid retrieval architecture combining BM25, vector search, and cross-encoder reranking for high-precision memory surfacing
- Multi-graph traversal (semantic, temporal, causal) via adaptive beam search for contextual relevance
- Intent classification (WHY/WHEN/ENTITY/WHAT) to optimize search strategies and query decomposition
- Self-evolving memory notes with deduplication, durability scoring, and contradiction detection
- Cross-agent memory sharing via SQLite vault, enabling seamless handoffs between Claude Code, OpenClaw, and Hermes agents

## Why It Matters for RAG Builders
ClawMem provides a critical on-device memory layer for RAG/AI stacks, enabling persistent, context-aware memory that enhances agent performance without cloud dependencies.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun
Automated review identified **Bun** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite-vec
Automated review identified **SQLite-vec** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25
Automated review identified **BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vector Search
Automated review identified **Vector Search** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Reciprocal Rank Fusion
Automated review identified **Reciprocal Rank Fusion** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Query Expansion
Automated review identified **Query Expansion** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cross-Encoder Reranking
Automated review identified **Cross-Encoder Reranking** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GGUF
Automated review identified **GGUF** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### node-llama-cpp
Automated review identified **node-llama-cpp** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React (for UI components in docs)
Automated review identified **React (for UI components in docs)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### systemd/launchd (for services)
Automated review identified **systemd/launchd (for services)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
