---
title: "inth3shadows/runecho"
category: "Tooling"
tech_stack: ["Go", "SQLite", "MCP (Model Context Protocol)", "Git", "POSIX/Windows Shell"]
quality_score: 9
rag_relevance: 8
tags: ["deterministic", "code verification", "AI agent guardrails", "structural diff", "symbol resolution"]
source: "https://github.com/inth3shadows/runecho"
discovered_at: "2026-06-27T15:17:58Z"
evaluated_by: "mistral-small-latest"
---

## Summary
RunEcho is a deterministic code-truth oracle for AI coding agents, providing ground-truth verification of repository symbols and structural changes. It eliminates hallucinations by offering a model-free, vendor-neutral source of truth for code structure and diffs.

## Key Features
- Deterministic Intermediate Representation (IR) for code structure with reproducible hashes
- Read-only MCP server exposing tools for querying structure, diffs, and symbol locations
- Pre-commit and pre-edit guards to block hallucinated symbol references
- Support for Go, JavaScript, TypeScript, JSX, TSX, and Python
- Local SQLite-based snapshot history for drift detection and versioning

## Why It Matters for RAG Builders
RunEcho provides a critical guardrail for AI coding agents by ensuring they only reference valid symbols and accurately describe structural changes, reducing hallucinations and improving code reliability.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### POSIX/Windows Shell
Automated review identified **POSIX/Windows Shell** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
