---
title: "test1card/femis-skill"
category: "Agent Framework"
tech_stack: ["Python", "YAML", "JSON", "Markdown", "Claude Code", "OpenAI Codex", "Gemini CLI", "LLM Agents"]
quality_score: 9
rag_relevance: 10
tags: ["CAE governance", "finite-element analysis", "verification & validation", "mesh independence", "AI agent automation"]
source: "https://github.com/test1card/femis-skill"
discovered_at: "2026-06-28T21:59:17Z"
evaluated_by: "mistral-small-latest"
---

## Summary
FEMis is an agent-agnostic Agent Skill for finite-element analysis (FEA/CAE) governance, verification & validation (V&V), and mesh-independence (GCI). It acts as a decision layer for structural, thermal, CFD, EM, and multiphysics simulations across solvers like Ansys, Abaqus, and OpenFOAM, ensuring disciplined engineering claims and headless automation contracts.

## Key Features
- Agent-agnostic skill with plain-text instruction entrypoint (SKILL.md) for broad LLM agent compatibility
- Enforces execution-mode gates (SMOKE/DEBUG/ENGINEERING/SIGNOFF) and headless-vs-human automation contracts
- Provides solver-agnostic methodology for structural, thermal, CFD, EM, and multiphysics simulations
- Includes Grid Convergence Index (GCI) calculators, units checks, and failure-mode recipes with provenance tags
- Features adversarial evaluation sets and live A/B testing to validate agent behavior changes

## Why It Matters for RAG Builders
It provides a critical governance layer for AI agents performing FEA/CAE tasks, ensuring disciplined, verifiable, and human-validated engineering claims while automating routine checks and reducing solver-specific errors.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI Codex
Automated review identified **OpenAI Codex** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Gemini CLI
Automated review identified **Gemini CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM Agents
Automated review identified **LLM Agents** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
