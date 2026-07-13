---
title: "benseverndev-oss/goldenmatch"
category: "Tooling"
tech_stack: ["Python", "TypeScript", "Rust", "SQL", "PostgreSQL", "DuckDB", "WebAssembly", "LLM", "Fellegi-Sunter", "Ray", "FastAPI", "React", "MCP", "REST", "A2A"]
quality_score: 10
rag_relevance: 9
tags: ["entity resolution", "data deduplication", "probabilistic matching", "knowledge graph", "zero-config"]
source: "https://github.com/benseverndev-oss/goldenmatch"
discovered_at: "2026-07-06T19:49:43Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Golden Suite provides zero-config entity resolution and data-quality tools that scale from CSV files to 100M+ records. It includes fuzzy, exact, probabilistic (Fellegi-Sunter), and LLM-based matching, along with profiling, standardization, analysis, and orchestration modules, all available in Python, edge-safe TypeScript, and SQL.

## Key Features
- Zero-config entity resolution with Fellegi-Sunter probabilistic matching outperforming hand-tuned Splink (96.4% F1 on DBLP-ACM)
- Scalable from CSV to 100M+ records with verified performance (100M deduped in 9.2 min on Ray cluster)
- Polyglot parity across Python, TypeScript (edge-safe), and SQL (PostgreSQL/DuckDB) with identical outputs
- Comprehensive data-quality suite: profiling (GoldenCheck), standardization (GoldenFlow), analysis (GoldenAnalysis), and orchestration (GoldenPipe)
- Privacy-preserving record linkage (PPRL), identity graph, auto-configuration, and healing loop for continuous improvement

## Why It Matters for RAG Builders
Golden Suite provides a production-ready, zero-config entity resolution engine that integrates seamlessly into RAG pipelines, ensuring high-quality, deduplicated data for knowledge graphs and retrieval systems.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQL
Automated review identified **SQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DuckDB
Automated review identified **DuckDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebAssembly
Automated review identified **WebAssembly** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM
Automated review identified **LLM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Fellegi-Sunter
Automated review identified **Fellegi-Sunter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ray
Automated review identified **Ray** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React
Automated review identified **React** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP
Automated review identified **MCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST
Automated review identified **REST** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### A2A
Automated review identified **A2A** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
