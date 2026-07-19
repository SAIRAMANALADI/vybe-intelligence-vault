---
title: Archerkattri/mathlas
category: world/public/vault/daily-digests/2026-07-07
tech_stack:
- Python
- MCP (Model Context Protocol)
- Lean 4
- PSLQ (Integer Relation Detection)
- Qwen3-Embedding
- PyArrow
- NumPy
- FastMCP
- Hugging Face Datasets
- Dolma Dataset
quality_score: 9
rag_relevance: 10
tags:
- mathematical verification
- MCP tools
- deterministic computation
- Lean 4 integration
- numeric constant identification
source: https://github.com/Archerkattri/mathlas
discovered_at: '2026-07-07T16:27:34Z'
evaluated_by: mistral-small-latest
---

## Summary
mathlas provides airtight mathematical verification and retrieval tools for AI agents via the MCP protocol, enabling zero-hallucination math operations such as theorem search, numeric constant identification, formal verification with Lean 4, and applicability checklists. It operates without LLMs or API keys, returning deterministic, independently verifiable results.

## Key Features
- Zero-hallucination math verification using real Lean 4.31.0 kernel and PSLQ for numeric constants
- 12 MCP-compatible tools for theorem search, formal verification, and applicability checklists
- 3.68M-document dense index for theorem retrieval with high recall (R@1 0.614, R@10 0.832)
- Quantized and lightweight 0.6B encoder tiers for laptop deployment with minimal recall loss
- Open corpus published on Hugging Face with permissive licenses (CC-BY/CC0)

## Why It Matters for RAG Builders
It provides essential, airtight mathematical verification and retrieval capabilities for RAG/AI agents, eliminating hallucinations in math-heavy tasks and enabling reliable agent-in-the-loop reasoning.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Lean 4
Automated review identified **Lean 4** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PSLQ (Integer Relation Detection)
Automated review identified **PSLQ (Integer Relation Detection)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Qwen3-Embedding
Automated review identified **Qwen3-Embedding** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyArrow
Automated review identified **PyArrow** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### NumPy
Automated review identified **NumPy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP
Automated review identified **FastMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Hugging Face Datasets
Automated review identified **Hugging Face Datasets** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Dolma Dataset
Automated review identified **Dolma Dataset** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
