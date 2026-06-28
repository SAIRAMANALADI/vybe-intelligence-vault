---
title: "crisnahine/chameleon"
category: "Tooling"
tech_stack: ["TypeScript", "Ruby", "Python", "Node.js", "Prism (Ruby parser)", "libcst (Python parser)", "TypeScript Compiler API", "Claude Code"]
quality_score: 9
rag_relevance: 8
tags: ["AI code generation", "convention enforcement", "repository profiling", "code consistency", "Claude Code plugin"]
source: "https://github.com/crisnahine/chameleon"
discovered_at: "2026-06-28T16:14:48Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Chameleon is a Claude Code plugin that automatically learns and enforces a repository's coding conventions by deriving real-world examples, idioms, and anti-patterns from the codebase. It injects this context into AI-generated edits to ensure consistency with existing patterns.

## Key Features
- Auto-derives repository-specific conventions from real ASTs and committed code
- Injects canonical witness files and anti-pattern examples into AI edits before generation
- Calibrated enforcement of rules with near-zero false positives, derived from the repo itself
- Provides cross-file contract checks, duplication detection, and blast radius analysis
- Supports TypeScript, Ruby, and Python with framework-agnostic parsing

## Why It Matters for RAG Builders
Chameleon ensures AI-generated code matches a team's existing patterns and conventions from the first edit, reducing review cycles and maintaining consistency without manual rule configuration.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ruby
Automated review identified **Ruby** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Prism (Ruby parser)
Automated review identified **Prism (Ruby parser)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### libcst (Python parser)
Automated review identified **libcst (Python parser)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript Compiler API
Automated review identified **TypeScript Compiler API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
