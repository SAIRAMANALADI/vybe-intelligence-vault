---
title: "draca-glitch/Mnemos"
category: "Tooling"
tech_stack: ["Python", "SQLite", "FastEmbed", "Jina Reranker", "ONNX Runtime", "MCP (Model Context Protocol)", "BM25", "Cross-Encoder", "NLI (Natural Language Inference)", "CLI"]
quality_score: 9
rag_relevance: 10
tags: ["persistent memory", "MCP server", "CPU-only", "hybrid retrieval", "local AI"]
source: "https://github.com/draca-glitch/Mnemos"
discovered_at: "2026-07-03T12:18:24Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Mnemos is a persistent, CPU-only memory system for AI agents that provides local storage and retrieval capabilities via MCP tools. It enables agents to store, search, and manage memories without relying on cloud services or GPUs, using hybrid retrieval pipelines and optional NLI-based contradiction detection.

## Key Features
- CPU-only operation with ONNX models for embeddings and reranking, eliminating GPU or cloud dependencies
- Hybrid retrieval pipeline combining BM25, vector search, and cross-encoder reranking for high recall
- Six MCP tools (four hot-path, two maintenance) for CRUD operations and memory management
- Optional NLI-based contradiction detection and deduplication for improved memory coherence
- Scalable deployment profiles from Raspberry Pi to production servers with LLM integration

## Why It Matters for RAG Builders
Mnemos provides a critical local memory layer for RAG systems, enabling persistent, context-aware interactions without cloud costs or latency, while supporting advanced retrieval and deduplication techniques essential for long-term agent memory.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastEmbed
Automated review identified **FastEmbed** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Jina Reranker
Automated review identified **Jina Reranker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ONNX Runtime
Automated review identified **ONNX Runtime** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25
Automated review identified **BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cross-Encoder
Automated review identified **Cross-Encoder** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### NLI (Natural Language Inference)
Automated review identified **NLI (Natural Language Inference)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
