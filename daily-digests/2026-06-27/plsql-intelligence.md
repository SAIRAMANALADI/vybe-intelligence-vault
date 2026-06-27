---
title: "MuhDur/plsql-intelligence"
category: "Tooling"
tech_stack: ["Rust", "ANTLR4", "ANTLR4Rust", "MCP (Model Context Protocol)", "Oracle Instant Client", "Docker", "CI/CD (GitHub Actions)", "Semantic IR", "Dependency Graph"]
quality_score: 9
rag_relevance: 8
tags: ["PL/SQL analysis", "Oracle database", "dependency reasoning", "offline intelligence", "self-healing coverage"]
source: "https://github.com/MuhDur/plsql-intelligence"
discovered_at: "2026-06-27T17:11:41Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Rust-based offline PL/SQL intelligence engine that provides package-aware Oracle PL/SQL code analysis, dependency reasoning, and recompile planning with honest uncertainty reporting. It includes self-healing coverage via the USR Loop and two MCP servers for live Oracle DB access and deep PL/SQL intelligence.

## Key Features
- Offline-first PL/SQL code intelligence with no live database required
- Honest uncertainty reporting via typed `UnknownReason` to avoid false-clean results
- Semantic IR with name resolution, dependency graph, and privilege modeling
- USR Loop: self-healing coverage flywheel that turns analysis gaps into proven repairs
- Two MCP servers: `oraclemcp` (live DB access) and `plsql-mcp` (full PL/SQL intelligence)

## Why It Matters for RAG Builders
It enables AI agents to safely and accurately analyze Oracle PL/SQL code dependencies and impacts without requiring live database access, reducing production failures during changes.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ANTLR4
Automated review identified **ANTLR4** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ANTLR4Rust
Automated review identified **ANTLR4Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Oracle Instant Client
Automated review identified **Oracle Instant Client** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CI/CD (GitHub Actions)
Automated review identified **CI/CD (GitHub Actions)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Semantic IR
Automated review identified **Semantic IR** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Dependency Graph
Automated review identified **Dependency Graph** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
