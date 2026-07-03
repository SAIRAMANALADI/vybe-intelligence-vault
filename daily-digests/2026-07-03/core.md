---
title: "sovseal/core"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "LanceDB", "Transformers.js", "ONNX Runtime", "MCP (Model Context Protocol)", "Deno", "Supabase", "AES-256-GCM", "SHA-256", "Browser Extensions"]
quality_score: 9
rag_relevance: 10
tags: ["local-first", "zero-knowledge", "privacy-preserving", "MCP-compatible", "on-device AI memory"]
source: "https://github.com/sovseal/core"
discovered_at: "2026-07-03T15:10:41Z"
evaluated_by: "mistral-small-latest"
---

## Summary
sovseal provides zero-knowledge, local-first AI memory that enables persistent, portable context for AI assistants and autonomous agents while ensuring plaintext never leaves the user's machine. It supports cross-platform capture and recall via MCP and a browser extension, with optional zero-knowledge sync using AES-256-GCM encryption.

## Key Features
- On-device semantic memory with sub-25ms p99 recall latency using LanceDB and Transformers.js
- Cross-platform capture and recall via MCP server and browser extension across major AI platforms
- Zero-knowledge sync with AES-256-GCM encryption, ensuring ciphertext-only storage on servers
- Write-behind replication for non-blocking local commits with asynchronous ciphertext sync
- Developer-friendly integration with agent frameworks like CrewAI, LangGraph, and ElizaOS

## Why It Matters for RAG Builders
sovseal enables RAG and AI stack builders to implement privacy-preserving, high-performance memory layers that keep sensitive data on-device while supporting cross-platform recall and optional secure sync.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LanceDB
Automated review identified **LanceDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Transformers.js
Automated review identified **Transformers.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ONNX Runtime
Automated review identified **ONNX Runtime** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Deno
Automated review identified **Deno** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Supabase
Automated review identified **Supabase** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AES-256-GCM
Automated review identified **AES-256-GCM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SHA-256
Automated review identified **SHA-256** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Browser Extensions
Automated review identified **Browser Extensions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
