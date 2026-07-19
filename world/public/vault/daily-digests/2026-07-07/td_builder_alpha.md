---
title: TrueFiasco/TD_Builder_alpha
category: world/public/vault/daily-digests/2026-07-07
tech_stack:
- Python
- MCP (Model Context Protocol)
- TouchDesigner
- Local Embedding Models (all-MiniLM-L6-v2)
- BM25
- Cross-Encoder Reranker
- Vector DB
- Pytest
- GitHub Actions
quality_score: 9
rag_relevance: 7
tags:
- TouchDesigner automation
- local LLM tools
- MCP servers
- offline RAG
- network generation
source: https://github.com/TrueFiasco/TD_Builder_alpha
discovered_at: '2026-07-07T13:17:30Z'
evaluated_by: mistral-small-latest
---

## Summary
TD Builder provides key-free, fully-local MCP servers that enable LLMs to generate, validate, and convert TouchDesigner networks without API keys or cloud dependencies. It includes offline `.toe`/.tox file generation and live TouchDesigner editing tools via two distinct MCP servers.

## Key Features
- Two MCP servers (offline and live) for TouchDesigner network interaction
- Hybrid retrieval (dense + BM25 + reranker) for high-accuracy operator search
- Ground-truth validation with 636/636 exact operator token matches
- Offline `.toe` and `.tox` file generation and conversion
- Live TouchDesigner editing and introspection via dedicated server

## Why It Matters for RAG Builders
TD Builder enables LLMs to autonomously generate and validate TouchDesigner networks locally, reducing dependency on proprietary APIs and cloud services while ensuring build correctness through rigorous evaluation.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TouchDesigner
Automated review identified **TouchDesigner** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Local Embedding Models (all-MiniLM-L6-v2)
Automated review identified **Local Embedding Models (all-MiniLM-L6-v2)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25
Automated review identified **BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cross-Encoder Reranker
Automated review identified **Cross-Encoder Reranker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vector DB
Automated review identified **Vector DB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pytest
Automated review identified **Pytest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
