---
title: "MnemeHQ/mneme"
category: "Orchestrator"
tech_stack: ["Python", "JSON", "YAML", "GitHub Actions", "LLM API Integrations", "CLI Tools"]
quality_score: 9
rag_relevance: 8
tags: ["architectural governance", "AI drift prevention", "decision enforcement", "LLM safety", "prompt injection"]
source: "https://github.com/MnemeHQ/mneme"
discovered_at: "2026-06-30T18:58:51Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Mneme HQ is an architectural governance layer for AI-assisted development that enforces project-specific architectural decisions before LLM-generated code is produced. It encodes decisions as structured records, retrieves relevant constraints deterministically, and blocks violations during AI calls.

## Key Features
- Structured decision storage in `project_memory.json` for human-editable governance records
- Deterministic retrieval engine that selects relevant architectural decisions for any given task
- Pre-flight enforcer that blocks LLM outputs violating recorded constraints before generation
- Benchmark suite with regression testing to ensure retrieval and enforcement integrity
- Integration with IDEs, agent frameworks, and CI pipelines for governance enforcement

## Why It Matters for RAG Builders
Mneme HQ prevents architectural drift in AI-assisted development by enforcing project-specific decisions before code generation, ensuring consistency with prior engineering choices.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM API Integrations
Automated review identified **LLM API Integrations** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI Tools
Automated review identified **CLI Tools** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
