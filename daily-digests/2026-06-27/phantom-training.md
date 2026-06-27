---
title: "markl-a/phantom-training"
category: "Orchestrator"
tech_stack: ["Python", "LoRA", "Unsloth", "SQLite", "TOML", "CLI", "CI/CD"]
quality_score: 7
rag_relevance: 8
tags: ["post-training", "agentic workflow", "deterministic pipeline", "LoRA fine-tuning", "self-hosted"]
source: "https://github.com/markl-a/phantom-training"
discovered_at: "2026-06-27T07:23:50Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A headless, agentic post-training orchestrator for the phantom-mesh ecosystem that enables cross-device fine-tuning of small models using deterministic pipelines and agentic workflows. Tier 1 focuses on non-LLM agent, non-true training pipelines for skill refinement.

## Key Features
- Deterministic post-training pipeline (recipe-merge, dataset building, evaluation, and judging)
- Cross-device orchestration for agentic fine-tuning without full model downloads or GPU fine-tuning
- Tiered architecture (Tier 1: non-LLM agent, non-true training; Tiers 2/3: advanced training paths)
- Built-in evaluation and judging mechanisms for skill validation
- Modular CLI and artifact management for reproducible workflows

## Why It Matters for RAG Builders
It provides a structured, deterministic approach to post-training small models in agentic workflows, reducing complexity for RAG builders who need reliable skill refinement without full fine-tuning overhead.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LoRA
Automated review identified **LoRA** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Unsloth
Automated review identified **Unsloth** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TOML
Automated review identified **TOML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CI/CD
Automated review identified **CI/CD** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
