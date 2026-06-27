---
title: "Coding-Dev-Tools/api-contract-guardian"
category: "Tooling"
tech_stack: ["Python", "OpenAPI 3.x", "CLI", "Git", "CI/CD"]
quality_score: 9
rag_relevance: 7
tags: ["API contract", "OpenAPI", "CI/CD gating", "breaking change detection", "migration guide"]
source: "https://github.com/Coding-Dev-Tools/api-contract-guardian"
discovered_at: "2026-06-27T10:06:35Z"
evaluated_by: "mistral-small-latest"
---

## Summary
API Contract Guardian is a CLI tool that monitors OpenAPI schema diffs between git branches, detects breaking changes, generates migration guides, and blocks CI pipelines on contract violations to enforce API contract integrity.

## Key Features
- Detects breaking changes in OpenAPI schemas (removed endpoints, type changes, renamed fields, etc.)
- Generates human-readable migration guides for API consumers
- Integrates with CI/CD pipelines to block merges on contract violations
- Supports OpenAPI 3.0.x and 3.1.x specifications
- Provides multiple output formats (JSON, YAML, Markdown) for diff and migration reports

## Why It Matters for RAG Builders
It ensures API contract stability in CI/CD pipelines, preventing breaking changes from reaching production and reducing downtime for RAG/AI stack integrations.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAPI 3.x
Automated review identified **OpenAPI 3.x** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CI/CD
Automated review identified **CI/CD** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
