---
title: HarperZ9/index
category: world/public/vault/daily-digests/2026-07-07
tech_stack:
- Python
- Standard Library (3.11+)
- HTML/CSS
- JSON
- TOML
- Git
- LSP (Language Server Protocol)
quality_score: 9
rag_relevance: 8
tags:
- workspace mapping
- dependency graph
- offline documentation
- architecture verification
- multi-repo analysis
source: https://github.com/HarperZ9/index
discovered_at: '2026-07-07T16:25:49Z'
evaluated_by: mistral-small-latest
---

## Summary
Index is a tool that maps multi-repo workspaces into self-contained, offline HTML artifacts like wikis, atlases, and dependency graphs. It extracts dependency and symbol graphs from nine ecosystems with zero runtime dependencies, enabling architecture verification, context lensing, and IDE navigation.

## Key Features
- Derives dependency and symbol graphs from nine ecosystems (Python, JavaScript, Rust, Go, Java, C#, Ruby, PHP, C/C++) with file-line precision
- Generates self-contained HTML artifacts (wikis, atlases, workbenches) for offline use with no server or network required
- Supports architecture verification via `.index.toml` configuration and drift detection across time
- Provides IDE navigation (LSP server) and context lensing for agent workflows with budgeted context assembly
- Offers MCP server integration for agent tooling and machine-readable operator surfaces

## Why It Matters for RAG Builders
It provides a deterministic, offline-first way to extract and verify dependency and symbol graphs from multi-repo workspaces, essential for RAG builders who need accurate, evidence-backed context for agent workflows.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Standard Library (3.11+)
Automated review identified **Standard Library (3.11+)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTML/CSS
Automated review identified **HTML/CSS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TOML
Automated review identified **TOML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LSP (Language Server Protocol)
Automated review identified **LSP (Language Server Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
