---
title: "maximilianbehr/OpenTorus"
category: "Agent Framework"
tech_stack: ["Python", "LLM (OpenAI, Anthropic, Ollama)", "Docker/Podman/Apptainer", "LaTeX", "Git", "JSON/YAML/Markdown", "arXiv/OpenAlex/Crossref APIs", "Lean 4/Coq/SMT (Z3/cvc5)", "pytest", "ruff", "mypy"]
quality_score: 9
rag_relevance: 8
tags: ["mathematical reasoning", "autonomous agent", "reproducibility", "evidence-proof separation", "literature survey"]
source: "https://github.com/maximilianbehr/OpenTorus"
discovered_at: "2026-07-04T06:45:18Z"
evaluated_by: "mistral-small-latest"
---

## Summary
OpenTorus is an AI agent framework designed to tackle open mathematical problems by autonomously surveying literature, running reproducible experiments, searching for counterexamples, and drafting proofs while maintaining strict evidence-proof separation. It enforces epistemic integrity through typed artifacts, honesty linters, and provenance tracking.

## Key Features
- Autonomous agent workflow for open mathematical problems with structured attack strategies (literature survey, counterexample search, symbolic simplification, numerical experiments)
- Enforced epistemic integrity: evidence is never conflated with proof; honesty linter flags overclaiming and missing verification artifacts
- Reproducible experiments with pinned dependencies, containerized execution, and artifact provenance tracking in `.opentorus/` dossier
- Typed claims and evidence system with explicit statuses (CONJECTURE, THEOREM, COUNTEREXAMPLE_VERIFIED, etc.) and gap markers
- Local-first privacy and safety with gated network access, DLP scanning, and destructive command blocking

## Why It Matters for RAG Builders
OpenTorus provides a trustworthy, inspectable, and reproducible framework for AI-driven mathematical research, ensuring rigorous evidence-proof separation and artifact provenance critical for RAG and AI stack builders.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM (OpenAI, Anthropic, Ollama)
Automated review identified **LLM (OpenAI, Anthropic, Ollama)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker/Podman/Apptainer
Automated review identified **Docker/Podman/Apptainer** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LaTeX
Automated review identified **LaTeX** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON/YAML/Markdown
Automated review identified **JSON/YAML/Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### arXiv/OpenAlex/Crossref APIs
Automated review identified **arXiv/OpenAlex/Crossref APIs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Lean 4/Coq/SMT (Z3/cvc5)
Automated review identified **Lean 4/Coq/SMT (Z3/cvc5)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pytest
Automated review identified **pytest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ruff
Automated review identified **ruff** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### mypy
Automated review identified **mypy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
