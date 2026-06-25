---
title: "rikhinkavuru/calma"
category: "Tooling"
tech_stack: ["Python", "FastAPI", "Next.js", "Docker", "Bubblewrap", "MCP (Model Context Protocol)", "GitHub Actions", "Vercel", "SQLite", "NumPy", "Pandas"]
quality_score: 9
rag_relevance: 10
tags: ["guardrails", "verification", "deterministic", "AI reliability", "reproducibility"]
source: "https://github.com/rikhinkavuru/calma"
discovered_at: "2026-06-25T21:31:58Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Calma is an open-source guardrail system that automatically re-runs AI-generated computations, recomputes metrics from raw output files, and verifies claims against deterministic benchmarks to prevent inaccuracies or fraudulent results in AI-driven workflows.

## Key Features
- Re-executes AI-generated computations in a network-off sandbox to recompute metrics from raw output files, ensuring no reliance on reported numbers.
- Deterministic verdict engine that produces signed, replayable proofs for verified results, preventing tampering or manipulation.
- Integrated validity layer with 13 families of checks to detect leakage, overfitting, contamination, and other statistical flaws.
- Supports multiple surfaces including CLI, MCP tool, Claude Code hook, PR review bot, and hosted dashboard/API.
- Calibrated tolerance for numeric noise and cross-stack differences, with conservative defaults to avoid false positives.

## Why It Matters for RAG Builders
Calma ensures AI-generated results are verifiably accurate and free from manipulation, providing a critical guardrail for RAG and AI stack builders who need to trust the outputs of automated workflows.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Next.js
Automated review identified **Next.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bubblewrap
Automated review identified **Bubblewrap** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vercel
Automated review identified **Vercel** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### NumPy
Automated review identified **NumPy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pandas
Automated review identified **Pandas** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
