---
title: "cognis-digital/embedaudit"
category: "Tooling"
tech_stack: ["Python", "CLI", "JSONL", "STIX", "MCP (Model Context Protocol)", "SARIF", "Docker"]
quality_score: 9
rag_relevance: 10
tags: ["vector-store audit", "embedding integrity", "poisoning detection", "drift analysis", "CI/CD integration"]
source: "https://github.com/cognis-digital/embedaudit"
discovered_at: "2026-06-30T03:51:38Z"
evaluated_by: "mistral-small-latest"
---

## Summary
EMBEDAUDIT is a CLI tool for auditing vector stores and embeddings to detect poisoning, drift, corruption, and integrity issues. It performs offline, deterministic checks on JSONL snapshots of vector data, supporting multiple output formats and CI integration.

## Key Features
- Audits vector store snapshots for critical issues like zero vectors, invalid values, and dimension mismatches
- Detects retrieval domination and duplicate vectors to prevent top-k hijacking
- Compares snapshots to identify drift or model swaps using centroid distance and per-dimension analysis
- Supports multiple output formats (table, JSON, SARIF, CSV) for integration with CI/CD pipelines
- Offers MCP server and offline threat-intel enrichment for air-gapped environments

## Why It Matters for RAG Builders
It ensures the integrity and reliability of vector stores used in RAG systems by detecting poisoning, drift, and corruption before they impact retrieval quality.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSONL
Automated review identified **JSONL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### STIX
Automated review identified **STIX** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SARIF
Automated review identified **SARIF** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
