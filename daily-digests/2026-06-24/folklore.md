---
title: "usefolklore/folklore"
category: "Orchestrator"
tech_stack: ["TypeScript", "libp2p", "ONNX Runtime", "BM25", "Vector Embeddings", "Cross-Encoder Reranking", "Graph Databases", "PreToolUse/PostToolUse Hooks", "BEIR Benchmarking"]
quality_score: 9
rag_relevance: 10
tags: ["peer-to-peer", "memory caching", "RAG optimization", "local-first", "provenance tracking"]
source: "https://github.com/usefolklore/folklore"
discovered_at: "2026-06-24T10:26:13Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Folklore is a local-first, peer-to-peer memory and research layer for AI agents that caches and reuses past reasoning to avoid redundant web searches and LLM inference. It operates independently on day one and compounds knowledge across peers, significantly reducing costs and improving efficiency for RAG systems.

## Key Features
- Local-first caching of agent research to avoid redundant web searches and LLM inference calls.
- Peer-to-peer federation via libp2p, enabling shared knowledge across agents without central servers.
- Signed provenance for every record, ensuring traceable and auditable knowledge attribution.
- Hybrid retrieval stack with BM25, ONNX embeddings, and cross-encoder reranking for high-accuracy answers.
- Opt-in deny-on-confidence gate to block web calls when local memory holds a satisfactory answer.

## Why It Matters for RAG Builders
Folklore eliminates redundant LLM inference and web search costs by caching and federating agent knowledge, making RAG systems exponentially more efficient and cost-effective as the network grows.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### libp2p
Automated review identified **libp2p** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ONNX Runtime
Automated review identified **ONNX Runtime** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25
Automated review identified **BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vector Embeddings
Automated review identified **Vector Embeddings** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cross-Encoder Reranking
Automated review identified **Cross-Encoder Reranking** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Graph Databases
Automated review identified **Graph Databases** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PreToolUse/PostToolUse Hooks
Automated review identified **PreToolUse/PostToolUse Hooks** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BEIR Benchmarking
Automated review identified **BEIR Benchmarking** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
