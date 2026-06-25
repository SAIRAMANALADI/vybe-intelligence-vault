---
title: "smaniches/alphafold-sovereign-mcp"
category: "Orchestrator"
tech_stack: ["Python", "Model Context Protocol (MCP)", "SQLite", "AlphaFold DB API", "Pydantic", "Gudhi (for TDA)", "FastAPI", "CI/CD (GitHub Actions)", "PyPI", "Zenodo"]
quality_score: 9
rag_relevance: 8
tags: ["biomedical", "structural biology", "variant analysis", "knowledge graph", "offline-first"]
source: "https://github.com/smaniches/alphafold-sovereign-mcp"
discovered_at: "2026-06-23T19:14:28Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server that wraps AlphaFold DB and 8 other biomedical data sources into a local-first knowledge graph, enabling offline structural biology and variant analysis without telemetry or external dependencies.

## Key Features
- Wraps 9 public biomedical databases (AlphaFold DB, MONDO, HPO, Open Targets, ClinVar, gnomAD, DisGeNET, ChEMBL, Ensembl) behind MCP tool calls
- Local SQLite knowledge graph for query, export, and traversal with optional persistence
- Topological Data Analysis (TDA) module for persistent-homology fingerprinting of protein structures
- Offline mode with strict air-gap enforcement to prevent outbound requests
- Supports ACMG/AMP variant classification, druggability assessment, and drug repurposing candidate ranking

## Why It Matters for RAG Builders
It enables local-first, privacy-preserving structural biology and variant analysis workflows, reducing dependency on external APIs and ensuring data sovereignty for AI-driven biomedical research.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AlphaFold DB API
Automated review identified **AlphaFold DB API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic
Automated review identified **Pydantic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Gudhi (for TDA)
Automated review identified **Gudhi (for TDA)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CI/CD (GitHub Actions)
Automated review identified **CI/CD (GitHub Actions)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyPI
Automated review identified **PyPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zenodo
Automated review identified **Zenodo** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
