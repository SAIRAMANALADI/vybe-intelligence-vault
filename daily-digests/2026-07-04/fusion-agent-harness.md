---
title: "SmartAI/fusion-agent-harness"
category: "Tooling"
tech_stack: ["Python", "Autodesk Fusion (MCP Server)", "LLM (Claude, OpenRouter, Anthropic)", "YAML", "JSONL", "Pytest"]
quality_score: 9
rag_relevance: 7
tags: ["CAD automation", "LLM-driven design", "self-correcting agent", "kernel verification", "Autodesk Fusion"]
source: "https://github.com/SmartAI/fusion-agent-harness"
discovered_at: "2026-07-04T16:59:59Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Python-based agent harness that converts plain-language product descriptions into real, editable CAD designs in Autodesk Fusion using an LLM-driven loop. It autonomously plans, builds, measures, and self-corrects designs until kernel-verified measurements meet all acceptance criteria.

## Key Features
- Converts natural language product descriptions into measurable CAD designs with zero CAD expertise required
- Autonomous self-correction loop: measures real geometry, detects errors (e.g., interpenetration, floating parts), and rebuilds components iteratively
- Kernel-level verification: independent measurement of all parts against acceptance criteria (e.g., volumes, dimensions, interference) with no LLM self-reporting bias
- Risk-gated execution: human approval required for live CAD document modifications unless running in sandbox mode
- Full transparency: session logs, trace JSONL, and deterministic verification enable auditability and reproducibility

## Why It Matters for RAG Builders
It bridges the gap between natural language product descriptions and executable CAD designs, enabling AI agents to autonomously generate and verify real, manufacturable 3D models with measurable accuracy.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Autodesk Fusion (MCP Server)
Automated review identified **Autodesk Fusion (MCP Server)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM (Claude, OpenRouter, Anthropic)
Automated review identified **LLM (Claude, OpenRouter, Anthropic)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSONL
Automated review identified **JSONL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pytest
Automated review identified **Pytest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
