---
title: "SureshKhemka/constraints-registry"
category: "Orchestrator"
tech_stack: ["Python 3.11+", "MCP (Model Context Protocol)", "OPA (Open Policy Agent)", "Conftest", "Checkov", "Semgrep", "Rego", "SARIF", "uv (package manager)"]
quality_score: 9
rag_relevance: 8
tags: ["policy-as-code", "MCP server", "AI coding agents", "constraint validation", "enforcement engines"]
source: "https://github.com/SureshKhemka/constraints-registry"
discovered_at: "2026-06-27T15:18:18Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A policy-as-code MCP server that provides queryable engineering constraints (infrastructure, organizational, architectural) to AI coding agents like Claude Code, Cursor, and Codex during code generation. It delegates deterministic validation to enforcement engines such as OPA, Conftest, Checkov, and Semgrep without enforcing constraints itself.

## Key Features
- Queryable constraint registry with three categories: infrastructure, organizational, and architectural
- Multi-source aggregation with deterministic, versioned bundles and precedence rules
- Pluggable enforcement engine adapters (OPA, Conftest, Checkov, Semgrep) with SARIF normalization
- Hot reload capability for constraints without server restart
- Validation harness for end-to-end consistency checks and CI integration

## Why It Matters for RAG Builders
It provides a centralized, queryable source of engineering constraints that AI coding agents can consult during code generation, ensuring compliance with organizational and architectural policies while delegating enforcement to specialized tools.

## Tech Stack Deep Dive
### Python 3.11+
Automated review identified **Python 3.11+** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OPA (Open Policy Agent)
Automated review identified **OPA (Open Policy Agent)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Conftest
Automated review identified **Conftest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Checkov
Automated review identified **Checkov** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Semgrep
Automated review identified **Semgrep** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Rego
Automated review identified **Rego** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SARIF
Automated review identified **SARIF** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv (package manager)
Automated review identified **uv (package manager)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
