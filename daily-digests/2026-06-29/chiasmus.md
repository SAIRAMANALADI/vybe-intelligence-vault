---
title: "yogthos/chiasmus"
category: "Tooling"
tech_stack: ["TypeScript", "Z3 SMT Solver", "SWI-Prolog", "tree-sitter", "Node.js", "MCP (Model Context Protocol)"]
quality_score: 9
rag_relevance: 10
tags: ["formal verification", "static analysis", "call graph analysis", "SMT solver", "code review automation"]
source: "https://github.com/yogthos/chiasmus"
discovered_at: "2026-06-29T12:33:03Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Chiasmus is an MCP server that integrates formal verification tools (Z3 SMT solver and SWI-Prolog) with source code analysis via tree-sitter. It enables LLMs to verify mathematical correctness, analyze call graphs, and perform static code reviews with mathematical certainty.

## Key Features
- Integrates Z3 SMT solver for mathematical verification of constraints and invariants
- Uses SWI-Prolog for logic programming, taint analysis, and reachability checks
- Performs tree-sitter-based source code analysis for call graphs, dead code detection, and impact analysis
- Provides MCP server interface for seamless integration with LLMs and AI agents
- Supports persistent caching, PR diff analysis, and automated code review recipes

## Why It Matters for RAG Builders
Chiasmus empowers RAG and AI stack builders to verify code correctness, detect security flaws, and automate formal reviews with mathematical precision, reducing reliance on manual inspection.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Z3 SMT Solver
Automated review identified **Z3 SMT Solver** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SWI-Prolog
Automated review identified **SWI-Prolog** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### tree-sitter
Automated review identified **tree-sitter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
