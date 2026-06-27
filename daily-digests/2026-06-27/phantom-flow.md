---
title: "markl-a/phantom-flow"
category: "Orchestrator"
tech_stack: ["Python", "PyYAML", "YAML", "CLI", "Deterministic LLM Stub", "Local State Management"]
quality_score: 7
rag_relevance: 7
tags: ["workflow engine", "YAML executor", "local-first", "approval gating", "deterministic LLM"]
source: "https://github.com/markl-a/phantom-flow"
discovered_at: "2026-06-27T07:24:50Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Phantom-flow is a minimal, local-first YAML workflow executor designed for the phantom-mesh ecosystem. It enables deterministic execution of workflows with optional LLM integration, approval gating, and state management, primarily targeting offline or local automation scenarios.

## Key Features
- Minimalist YAML-based workflow execution with near-pure standard library dependencies
- Optional LLM integration via phantom-mesh routing with fallback to deterministic stubs
- Approval gating for side effects and state management with configurable `--state-dir`
- Offline-first execution with bundled sample fixtures and dry-run validation
- Artifact contracts for run outputs, state, and approval gates documented for reproducibility

## Why It Matters for RAG Builders
It provides a lightweight, local-first alternative for orchestrating AI-native workflows with approval gating and state management, critical for building reliable RAG pipelines.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyYAML
Automated review identified **PyYAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Deterministic LLM Stub
Automated review identified **Deterministic LLM Stub** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Local State Management
Automated review identified **Local State Management** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
