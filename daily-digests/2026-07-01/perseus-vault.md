---
title: "Perseus-Computing-LLC/perseus-vault"
category: "Tooling"
tech_stack: ["Rust", "SQLite", "FTS5 (Full-Text Search)", "MCP (Model Context Protocol)", "AES-256-GCM (Encryption)", "BM25 (Search Algorithm)", "Vector Embeddings"]
quality_score: 9
rag_relevance: 10
tags: ["persistent memory", "MCP server", "local-first", "RAG optimization", "agent memory"]
source: "https://github.com/Perseus-Computing-LLC/perseus-vault"
discovered_at: "2026-07-01T05:26:21Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Mneme is a local-first, zero-dependency persistent memory engine for AI agents, designed as a single Rust binary with MCP-native integration. It provides durable memory storage, hybrid search, and lifecycle management for agent workflows without requiring cloud services or external databases.

## Key Features
- Single Rust binary (~8MB) with zero external dependencies, deployable without Docker or cloud services
- 46 MCP-native tools for CRUD, search, graph operations, lifecycle management, and state handling
- Hybrid search (BM25 + dense + RRF) with FTS5 and vector embeddings for RAG workflows
- AES-256-GCM encryption, bi-temporal time-travel, and immutable journal audit trails
- Framework integrations for LangGraph, CrewAI, AutoGen, and any MCP-compatible system

## Why It Matters for RAG Builders
Mneme provides a lightweight, local-first alternative to cloud-dependent memory systems, enabling AI agents to maintain durable, encrypted, and searchable memory without external dependencies, critical for privacy-focused and offline-capable RAG applications.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5 (Full-Text Search)
Automated review identified **FTS5 (Full-Text Search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AES-256-GCM (Encryption)
Automated review identified **AES-256-GCM (Encryption)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25 (Search Algorithm)
Automated review identified **BM25 (Search Algorithm)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vector Embeddings
Automated review identified **Vector Embeddings** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
