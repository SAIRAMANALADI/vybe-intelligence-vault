---
title: "EtanHey/brainlayer"
category: "Agent Framework"
tech_stack: ["Python", "SQLite", "sqlite-vec", "Swift", "MCP (Model Context Protocol)", "LLM Embeddings (bge-large-en-v1.5)", "FTS5 (Full-Text Search)", "JSONL", "Groq", "Gemini", "MLX", "Ollama"]
quality_score: 9
rag_relevance: 10
tags: ["persistent memory", "MCP tools", "local-first", "knowledge graph", "real-time indexing"]
source: "https://github.com/EtanHey/brainlayer"
discovered_at: "2026-06-28T12:17:51Z"
evaluated_by: "mistral-small-latest"
---

## Summary
BrainLayer provides persistent memory for MCP-compatible AI agents using a local SQLite database, enabling context retention across sessions without cloud dependencies. It offers 13 MCP tools for semantic search, knowledge graph management, and real-time indexing with zero infrastructure requirements.

## Key Features
- 13 MCP-compatible tools for memory operations (search, store, recall, digest, etc.)
- Hybrid search combining vector similarity and FTS5 with Reciprocal Rank Fusion
- Knowledge graph for entity and relation extraction with person lookup
- Real-time JSONL indexing with ~1s latency and 4-layer content filters
- Local SQLite storage with optional cloud-based enrichment (Gemini/Groq)

## Why It Matters for RAG Builders
BrainLayer eliminates AI agent amnesia by providing persistent, local-first memory with MCP integration, making it essential for building reliable RAG systems that retain context across sessions.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### sqlite-vec
Automated review identified **sqlite-vec** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Swift
Automated review identified **Swift** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM Embeddings (bge-large-en-v1.5)
Automated review identified **LLM Embeddings (bge-large-en-v1.5)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5 (Full-Text Search)
Automated review identified **FTS5 (Full-Text Search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSONL
Automated review identified **JSONL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Groq
Automated review identified **Groq** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Gemini
Automated review identified **Gemini** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MLX
Automated review identified **MLX** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
