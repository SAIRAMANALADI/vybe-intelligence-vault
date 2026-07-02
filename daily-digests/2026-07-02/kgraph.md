---
title: "ajksunkang-aios/KGraph"
category: "Tooling"
tech_stack: ["Python", "SCIP (Sourcegraph Code Intelligence Protocol)", "SQLite", "clang/LLVM", "MCP (Model Context Protocol)", "Protobuf", "Docker"]
quality_score: 9
rag_relevance: 10
tags: ["kernel code analysis", "compiler-aware indexing", "function pointer resolution", "MCP tooling", "token-efficient RAG"]
source: "https://github.com/ajksunkang-aios/KGraph"
discovered_at: "2026-07-02T12:12:06Z"
evaluated_by: "mistral-small-latest"
---

## Summary
KGraph is a compiler-aware kernel code graph engine that indexes and queries Linux kernel code using semantic information from the compiler, enabling token-efficient structural retrieval for AI agents. It transforms raw kernel code into a SQLite-based knowledge graph, resolving macro expansions, function pointers, and config-aware branches for accurate code analysis.

## Key Features
- Compiler-aware indexing using `compile_commands.json` and `scip-clang` to capture macro-expanded, config-aware kernel code paths.
- Resolves function-pointer tables (e.g., `->read_iter`) to concrete implementations, enabling accurate call graph traversal.
- SQLite-native knowledge graph storage with 13 MCP tools for structural code queries (callers, callees, references, ops_bind, etc.).
- Auto-configuration for AI agents (Claude, Cursor, Codex, opencode, Hermes) via `kgraph install` for seamless integration.
- Subsystem-specific indexing and token budget control (depth/limit parameters) to optimize query efficiency and reduce token usage.

## Why It Matters for RAG Builders
KGraph enables AI agents to perform accurate, token-efficient structural queries on Linux kernel code by leveraging compiler-resolved semantics, eliminating the need for error-prone grep-based workflows.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SCIP (Sourcegraph Code Intelligence Protocol)
Automated review identified **SCIP (Sourcegraph Code Intelligence Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### clang/LLVM
Automated review identified **clang/LLVM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Protobuf
Automated review identified **Protobuf** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
