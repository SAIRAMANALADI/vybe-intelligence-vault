---
title: "star-ga/mind-mem"
category: "Vector DB"
tech_stack: ["Python", "MIND Substrate", "MCP (Model Context Protocol)", "PostgreSQL", "Markdown", "Q16.16 Fixed-Point Arithmetic", "BM25F", "Vector Search", "RRF Fusion", "CI/CD (GitHub Actions)"]
quality_score: 9
rag_relevance: 10
tags: ["deterministic memory", "byte-identical replay", "governed-write", "hybrid search", "MCP-compatible"]
source: "https://github.com/star-ga/mind-mem"
discovered_at: "2026-07-04T09:26:37Z"
evaluated_by: "mistral-small-latest"
---

## Summary
MIND-Mem provides deterministic, byte-identical replayable memory for AI agents, ensuring consistent recall across runs, machines, and substrates. It leverages a governed-write pipeline, Q16.16 fixed-point audit chains, and hybrid BM25F + vector search with RRF fusion for high-precision retrieval.

## Key Features
- Byte-identical deterministic recall with Q16.16 audit chains across heterogeneous environments
- Governed-write pipeline (propose → review → approve_apply) preventing silent mutations
- Hybrid BM25F + vector search with RRF fusion for high-precision retrieval
- Cross-model consensus audit with SAST and external audits for security and integrity
- Local-first architecture with zero core dependencies (Python 3.10+ stdlib only)

## Why It Matters for RAG Builders
MIND-Mem ensures AI agents maintain consistent, auditable memory without drift, making it essential for reliable RAG systems and multi-agent collaboration.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MIND Substrate
Automated review identified **MIND Substrate** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Q16.16 Fixed-Point Arithmetic
Automated review identified **Q16.16 Fixed-Point Arithmetic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25F
Automated review identified **BM25F** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vector Search
Automated review identified **Vector Search** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### RRF Fusion
Automated review identified **RRF Fusion** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CI/CD (GitHub Actions)
Automated review identified **CI/CD (GitHub Actions)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
