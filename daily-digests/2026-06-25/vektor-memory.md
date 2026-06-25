---
title: "Vektor-Memory/Vektor-memory"
category: "Vector DB"
tech_stack: ["TypeScript", "SQLite", "ONNX Runtime", "BM25", "RRF (Reciprocal Rank Fusion)", "MCP (Model Context Protocol)", "Playwright", "Node.js", "Claude Desktop Extension (DXT)"]
quality_score: 9
rag_relevance: 10
tags: ["persistent memory", "agentic AI", "vector database", "MCP tools", "local-first"]
source: "https://github.com/Vektor-Memory/Vektor-memory"
discovered_at: "2026-06-25T05:08:12Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Vektor Memory is a local-first, persistent vector memory system designed for agentic AI to solve session amnesia and stateless architecture issues. It provides a multi-layered associative memory graph with sub-8ms recall latency and integrates seamlessly with MCP tools for autonomous agent workflows.

## Key Features
- Sub-8ms recall latency with fully local ONNX embeddings (no API costs)
- Multi-layered associative memory graph (MAGMA) with autonomous REM cycle for state persistence
- 50+ MCP tools including memory, cloak (stealth browser/SSH), identity, CAPTCHA solving, and multimodal capabilities
- BM25 + vector RRF hybrid search for high-accuracy recall with minimal token overhead (250-4,000 tokens regardless of DB size)
- Zero-config setup via DXT extension for Claude Desktop and drag-and-drop installation

## Why It Matters for RAG Builders
Vektor Memory fundamentally solves the session amnesia problem in agentic AI by providing persistent, low-latency recall with minimal token overhead, enabling truly autonomous and efficient agent workflows.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ONNX Runtime
Automated review identified **ONNX Runtime** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25
Automated review identified **BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### RRF (Reciprocal Rank Fusion)
Automated review identified **RRF (Reciprocal Rank Fusion)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Playwright
Automated review identified **Playwright** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Desktop Extension (DXT)
Automated review identified **Claude Desktop Extension (DXT)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
