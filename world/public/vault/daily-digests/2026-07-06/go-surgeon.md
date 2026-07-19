---
title: JLugagne/go-surgeon
category: world/public/vault/daily-digests/2026-07-06
tech_stack:
- Go
- Model Context Protocol (MCP)
- AST (Abstract Syntax Tree)
- goimports
- go/packages
quality_score: 9
rag_relevance: 8
tags:
- Go code editing
- AST-based tools
- MCP server
- deterministic edits
- LLM agent integration
source: https://github.com/JLugagne/go-surgeon
discovered_at: '2026-07-06T21:25:19Z'
evaluated_by: mistral-small-latest
---

## Summary
go-surgeon provides a deterministic, AST-based toolkit for editing Go code, replacing generic file tools like Edit, Read, and Grep with structured operations. It exposes these tools via an MCP server, ensuring valid Go code after every edit with automatic import management and type-aware symbol resolution.

## Key Features
- Structured Go code editing via AST, eliminating text-patching errors like indentation and import mismatches
- MCP server integration for seamless LLM agent workflows, replacing generic file tools
- Type-aware symbol resolution and renaming across packages and dependencies
- Atomic multi-step refactors via `execute_plan` to prevent compounding errors
- Automatic `goimports` integration for import management and formatting

## Why It Matters for RAG Builders
It eliminates the fragility of text-based Go code editing for LLM agents by providing AST-aware tools that ensure valid, maintainable code after every operation.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AST (Abstract Syntax Tree)
Automated review identified **AST (Abstract Syntax Tree)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### goimports
Automated review identified **goimports** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### go/packages
Automated review identified **go/packages** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
