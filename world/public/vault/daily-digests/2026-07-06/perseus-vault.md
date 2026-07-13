---
title: "Perseus-Computing-LLC/perseus-vault"
category: "Tooling"
tech_stack: ["Rust", "SQLite", "FTS5 (Full-Text Search)", "AES-256-GCM (Encryption)", "MCP (Model Context Protocol)", "BM25 (Search)", "Vector Embeddings", "Bi-temporal Data Model"]
quality_score: 9
rag_relevance: 10
tags: ["persistent memory", "MCP server", "local-first", "agent framework", "RAG optimization"]
source: "https://github.com/Perseus-Computing-LLC/perseus-vault"
discovered_at: "2026-07-06T23:04:28Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Perseus Vault is a local-first, MCP-native persistent memory engine for AI agents, providing durable memory across sessions with a single Rust binary and zero external dependencies. It supports encrypted storage, hybrid search, bi-temporal queries, and 55 MCP tools for agent frameworks like LangGraph, CrewAI, and AutoGen.

## Key Features
- Single Rust binary with zero dependencies for easy deployment
- 55 MCP tools covering entity CRUD, search, graph operations, journaling, state management, and lifecycle decay
- Hybrid search (BM25 + dense + RRF) and bi-temporal queries for historical data accuracy
- AES-256-GCM encryption and local-first architecture ensuring data privacy and offline functionality
- Framework integrations for LangGraph, CrewAI, and AutoGen with pre-built adapters

## Why It Matters for RAG Builders
Perseus Vault provides a critical local-first, MCP-native memory layer that enables AI agents to retain persistent, encrypted, and searchable context across sessions without external dependencies, making it essential for building robust RAG systems.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5 (Full-Text Search)
Automated review identified **FTS5 (Full-Text Search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AES-256-GCM (Encryption)
Automated review identified **AES-256-GCM (Encryption)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25 (Search)
Automated review identified **BM25 (Search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vector Embeddings
Automated review identified **Vector Embeddings** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bi-temporal Data Model
Automated review identified **Bi-temporal Data Model** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
