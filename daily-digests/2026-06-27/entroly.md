---
title: "juyterman1000/entroly"
category: "Tooling"
tech_stack: ["Rust", "WASM", "Python", "BM25", "Knapsack Algorithm", "BM25", "Dependency Graph", "Apache 2.0"]
quality_score: 9
rag_relevance: 10
tags: ["context compression", "hallucination detection", "token optimization", "AI agent tooling", "local-first"]
source: "https://github.com/juyterman1000/entroly"
discovered_at: "2026-06-27T19:19:07Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Entroly is a local-first context control plane for AI agents that compresses input tokens by 70-95%, verifies LLM outputs for hallucinations at $0 cost, and keeps provider caches hot. It integrates seamlessly with 38+ agents and IDEs via wrappers, proxy, or library, providing auditable context receipts for multi-file tasks.

## Key Features
- Auditable context receipts with included/omitted evidence and residual risks
- $0 hallucination guard (WITNESS + STAVE) with 0.844 AUROC accuracy
- Cache alignment to maximize provider prefix cache hits
- Drop-in integration with 38+ agents and IDEs (no code changes required)
- Local-first, Apache 2.0 licensed, and supports 19 cost-saving mechanisms

## Why It Matters for RAG Builders
Entroly is essential for RAG/AI stack builders because it drastically reduces token usage while ensuring accuracy and reliability, making AI agents more cost-effective and trustworthy for large-scale deployments.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WASM
Automated review identified **WASM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25
Automated review identified **BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Knapsack Algorithm
Automated review identified **Knapsack Algorithm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25
Automated review identified **BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Dependency Graph
Automated review identified **Dependency Graph** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Apache 2.0
Automated review identified **Apache 2.0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
