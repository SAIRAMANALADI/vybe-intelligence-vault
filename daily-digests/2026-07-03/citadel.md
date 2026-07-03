---
title: "yp3y5akh0v/citadel"
category: "Vector DB"
tech_stack: ["Rust", "SQL", "Vector Search", "AES-256-CTR", "HMAC-SHA256", "Argon2id", "MCP (Model Context Protocol)", "WASM", "Python", "C FFI", "Noise Protocol", "B+ Tree", "PRISM (ANN index)"]
quality_score: 10
rag_relevance: 10
tags: ["encrypted memory", "vector database", "AI agents", "cryptographic forgetting", "local-first"]
source: "https://github.com/yp3y5akh0v/citadel"
discovered_at: "2026-07-03T17:23:30Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Citadel is a local-first encrypted memory engine for AI agents, combining an embedded SQL/vector database with zero-LLM ingest, hybrid retrieval, and cryptographic forgetting. It enables secure, persistent memory storage and recall without sending data to external LLMs.

## Key Features
- Zero-LLM ingest: stores raw conversation content without LLM processing
- Hybrid retrieval: combines SQL, vector search, BM25, and cross-encoder reranking for accurate recall
- Cryptographic forgetting: erases data by destroying keys at per-atom, per-region, or whole-store granularity
- MCP integration: exposes encrypted memory regions to MCP clients like Claude Desktop via a dedicated server
- FIPS 140-3 compliance: supports PBKDF2-HMAC-SHA256 and AES-256-CTR for regulated environments

## Why It Matters for RAG Builders
Citadel provides a secure, local-first memory solution for AI agents that avoids LLM token costs while enabling persistent, encrypted recall and cryptographic data deletion.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQL
Automated review identified **SQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vector Search
Automated review identified **Vector Search** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AES-256-CTR
Automated review identified **AES-256-CTR** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HMAC-SHA256
Automated review identified **HMAC-SHA256** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Argon2id
Automated review identified **Argon2id** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WASM
Automated review identified **WASM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### C FFI
Automated review identified **C FFI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Noise Protocol
Automated review identified **Noise Protocol** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### B+ Tree
Automated review identified **B+ Tree** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PRISM (ANN index)
Automated review identified **PRISM (ANN index)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
