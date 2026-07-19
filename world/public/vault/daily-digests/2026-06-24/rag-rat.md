---
title: cq27-dev/rag-rat
category: world/public/vault/daily-digests/2026-06-24
tech_stack:
- Rust
- SQLite
- tree-sitter
- SCIP (Sourcegraph Code Intelligence Protocol)
- MCP (Model Context Protocol)
- Git
- GitHub API
- FastEmbed
- gix (gitoxide)
quality_score: 9
rag_relevance: 10
tags:
- repository intelligence
- MCP server
- call graph
- git history
- repo memories
source: https://github.com/cq27-dev/rag-rat
discovered_at: '2026-06-24T16:20:54Z'
evaluated_by: mistral-small-latest
---

## Summary
rag-rat is a local repository intelligence index and MCP server designed for coding agents. It indexes source files, call graphs, git/GitHub history, and source-anchored repo memories into a local SQLite database, providing provenance-backed answers with confidence labels and coverage warnings.

## Key Features
- Provenance-backed search with confidence labels and coverage warnings for every result
- Source-anchored repo memories (Invariant, Decision, Risk, etc.) that persist across sessions and agents
- Compiler-grade code graph with optional SCIP oracle for high-confidence symbol resolution
- Hybrid semantic and vector search over source code with provenance validation
- Git/GitHub history integration, including lazy chunk blame and papertrail for rationale

## Why It Matters for RAG Builders
rag-rat provides essential provenance, context, and reasoning for RAG/AI stack builders by indexing and surfacing the rationale, decisions, and risks bound to code, enabling agents to make informed judgments instead of relying on guesses.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### tree-sitter
Automated review identified **tree-sitter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SCIP (Sourcegraph Code Intelligence Protocol)
Automated review identified **SCIP (Sourcegraph Code Intelligence Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub API
Automated review identified **GitHub API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastEmbed
Automated review identified **FastEmbed** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### gix (gitoxide)
Automated review identified **gix (gitoxide)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
