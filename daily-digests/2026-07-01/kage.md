---
title: "kage-core/Kage"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "Open Knowledge Format (OKF)", "Markdown", "Git", "MCP (Model Context Protocol)", "JSON"]
quality_score: 9
rag_relevance: 10
tags: ["agent memory", "code grounding", "verification", "git-native", "knowledge management"]
source: "https://github.com/kage-core/Kage"
discovered_at: "2026-07-01T17:54:53Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Kage is a memory layer for coding agents that captures, verifies, and maintains team knowledge as plain Markdown files in a git repository using the Open Knowledge Format (OKF). It ensures agent memory stays accurate, collaborative, and vendor-neutral by grounding concepts in real code and rejecting stale or hallucinated information.

## Key Features
- Captures agent decisions, bug fixes, and runbooks as OKF-compliant Markdown files in `.agent_memory/`
- Verifies memory citations against actual code at write and recall time, rejecting stale or hallucinated content
- Provides a local dashboard (`kage viewer`) for real-time monitoring of memory and code relationships
- Supports team skills via `.claude/skills/` for shared procedures and conventions
- Tracks agent savings (tokens and dollars) with traceable receipts for efficiency gains

## Why It Matters for RAG Builders
Kage ensures RAG and AI agents operate on verified, up-to-date knowledge grounded in real code, eliminating hallucinations and stale memory while keeping knowledge collaborative and vendor-neutral.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Open Knowledge Format (OKF)
Automated review identified **Open Knowledge Format (OKF)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
