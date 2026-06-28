---
title: "punt-labs/quarry"
category: "Vector DB"
tech_stack: ["Python", "ONNX Runtime", "LanceDB", "Claude Code", "MCP (Model Context Protocol)", "CUDA (for GPU acceleration)", "WebSocket", "TLS", "Rust (LanceDB core)"]
quality_score: 9
rag_relevance: 10
tags: ["local semantic search", "document indexing", "offline RAG", "agent memory", "LanceDB integration"]
source: "https://github.com/punt-labs/quarry"
discovered_at: "2026-06-28T18:09:53Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Quarry is a local semantic search tool designed for AI agents and humans, enabling document indexing, embedding, and retrieval without cloud dependencies. It supports 20+ document formats, uses a local ONNX embedding model, and stores vectors in LanceDB for fast, offline semantic search.

## Key Features
- Supports 20+ document formats with OCR for scanned pages and AST-aware splitting for code
- Local ONNX embedding model (snowflake-arctic-embed-m-v1.5) with auto-detected CUDA acceleration
- Daemon architecture with shared embedding model for efficient multi-session use
- Passive knowledge capture via hooks for automatic indexing of web fetches, session transcripts, and project directories
- Named databases with isolated LanceDB directories for work/personal separation and agent-specific memory

## Why It Matters for RAG Builders
Quarry provides a fully local, zero-cloud-dependency alternative for RAG pipelines, enabling private, high-performance semantic search with agent memory integration.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ONNX Runtime
Automated review identified **ONNX Runtime** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LanceDB
Automated review identified **LanceDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CUDA (for GPU acceleration)
Automated review identified **CUDA (for GPU acceleration)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebSocket
Automated review identified **WebSocket** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TLS
Automated review identified **TLS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Rust (LanceDB core)
Automated review identified **Rust (LanceDB core)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
