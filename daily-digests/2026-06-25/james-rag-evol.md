---
title: "Hashevolution/James-RAG-Evol"
category: "Orchestrator"
tech_stack: ["Python", "Ollama", "ChromaDB", "Graph-RAG", "BM25", "MiniLM-L-6-v2", "SQLite", "FastAPI", "Docker"]
quality_score: 9
rag_relevance: 10
tags: ["Replayable RAG", "Audit Log", "Time-Travel Queries", "Graph-Based Retrieval", "EU AI Act Compliance"]
source: "https://github.com/Hashevolution/James-RAG-Evol"
discovered_at: "2026-06-25T07:25:29Z"
evaluated_by: "mistral-small-latest"
---

## Summary
SEKOS (JAMES engine) is a local-first, auditable knowledge platform designed for Graph-RAG retrieval with replayable knowledge states. It enables time-travel queries, deterministic contradiction arbitration, and byte-identical reconstruction of system state from an append-only audit log.

## Key Features
- Replayable RAG with byte-identical state reconstruction from audit logs via `reconstruct_graph_at(t)`
- Deterministic contradiction arbitration and causality cascades for knowledge consistency
- Temporal validity windows and supersede chains for time-aware retrieval
- Pre-registered deterministic benchmarks (RAB v0.1.1, LRB v0.2.3) aligned with EU AI Act Articles 10/12/19
- Local-first execution with optional cloud LLM backends (Ollama default)

## Why It Matters for RAG Builders
SEKOS provides the critical infrastructure for building auditable, time-travel-capable RAG systems that meet regulatory compliance and operational transparency requirements.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ChromaDB
Automated review identified **ChromaDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Graph-RAG
Automated review identified **Graph-RAG** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25
Automated review identified **BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MiniLM-L-6-v2
Automated review identified **MiniLM-L-6-v2** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
