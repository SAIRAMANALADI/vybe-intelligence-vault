---
title: "sil3d/MATHIR"
category: "Vector DB"
tech_stack: ["Python", "PyTorch", "ONNX", "Sentence Transformers", "SQLite", "FastMCP", "Flask", "Waitress", "SQLAlchemy", "NumPy", "Scikit-learn", "Pydantic"]
quality_score: 9
rag_relevance: 10
tags: ["long-term memory", "cognitive architecture", "vector database", "memory-augmented AI", "prompt injection detection"]
source: "https://github.com/sil3d/MATHIR"
discovered_at: "2026-06-26T10:21:31Z"
evaluated_by: "mistral-small-latest"
---

## Summary
MATHIR is a memory-augmented layer for LLMs that implements a cognitive memory system with hierarchical retention tiers, forgetting curves, and semantic consolidation. It acts as a long-term memory backend for AI agents, enabling persistent context across sessions and adaptive knowledge management.

## Key Features
- 5-tier memory hierarchy (working, episodic, semantic, procedural, immunological) with Ebbinghaus forgetting curves
- Semantic consolidation and duplicate merging for knowledge graph optimization
- Auto-injection of memories into agent system prompts via MCP plugin
- Anomaly detection and prompt-injection prevention using immunological tier
- Unified server architecture with FastMCP 3.4.2 for 19 MCP tools

## Why It Matters for RAG Builders
MATHIR provides a biologically-inspired memory system that enables AI agents to retain, consolidate, and recall knowledge over time, addressing the core limitation of amnesic LLM interactions in RAG pipelines.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyTorch
Automated review identified **PyTorch** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ONNX
Automated review identified **ONNX** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Sentence Transformers
Automated review identified **Sentence Transformers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP
Automated review identified **FastMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Flask
Automated review identified **Flask** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Waitress
Automated review identified **Waitress** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLAlchemy
Automated review identified **SQLAlchemy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### NumPy
Automated review identified **NumPy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Scikit-learn
Automated review identified **Scikit-learn** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic
Automated review identified **Pydantic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
