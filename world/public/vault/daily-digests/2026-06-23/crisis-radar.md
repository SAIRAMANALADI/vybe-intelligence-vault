---
title: NG-Bullseye/crisis-radar
category: world/public/vault/daily-digests/2026-06-23
tech_stack:
- Python
- LLM (Large Language Model)
- YAML
- JSON Schema
- MCP (Model Context Protocol)
- Mermaid (for diagrams)
- C4 Model (for architecture)
quality_score: 7
rag_relevance: 6
tags:
- macro risk analysis
- deterministic scoring
- LLM-assisted research
- financial signals
- risk dashboard
source: https://github.com/NG-Bullseye/crisis-radar
discovered_at: '2026-06-23T13:49:27Z'
evaluated_by: mistral-small-latest
---

## Summary
A design-phase repository for an LLM-assisted macro risk dashboard that tracks a specific investment thesis about a fertilizer/energy supply crisis in late 2026. It uses a deterministic, config-driven scoring engine to analyze web research and emit rotation signals based on sustained crisis pressure.

## Key Features
- LLM extracts structured, cited data from unstructured web sources without influencing final scores
- Deterministic scoring engine with configurable rules and thresholds in YAML
- Three indicator clusters (AI-fund health, fertilizer crisis, oil proxy) scored daily
- Rotation signal triggered only after sustained elevated scores (e.g., 3+ weeks)
- Comprehensive documentation including architecture, scoring specs, and data models

## Why It Matters for RAG Builders
It provides a transparent, testable framework for turning LLM-extracted data into actionable financial signals, ensuring reproducibility and trust in AI-driven risk assessment.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM (Large Language Model)
Automated review identified **LLM (Large Language Model)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON Schema
Automated review identified **JSON Schema** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Mermaid (for diagrams)
Automated review identified **Mermaid (for diagrams)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### C4 Model (for architecture)
Automated review identified **C4 Model (for architecture)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
