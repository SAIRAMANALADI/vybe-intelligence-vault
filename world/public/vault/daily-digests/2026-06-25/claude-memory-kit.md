---
title: LH8PPL/claude-memory-kit
category: daily-digests/2026-06-25
tech_stack:
- JavaScript
- Node.js
- TypeScript
- Markdown
- Semantic Search
- MCP (Model Context Protocol)
- CLI Tools
quality_score: 9
rag_relevance: 8
tags:
- persistent memory
- AI agent context
- local semantic search
- Claude Code integration
- project memory
source: https://github.com/LH8PPL/claude-memory-kit
discovered_at: '2026-06-25T07:30:45Z'
evaluated_by: mistral-small-latest
---

## Summary
claude-memory-kit provides persistent, per-project memory for Claude Code and other AI agents by capturing decisions, preferences, and project context in plain markdown files committed to the repository. It enables automatic recall of relevant context across sessions using local semantic search without API calls.

## Key Features
- Automatically captures and stores project decisions, conventions, and context in plain markdown files committed to the repository.
- Enables recall of relevant context across sessions using local semantic search with high accuracy (R@5 0.941).
- Supports multiple AI agents (Claude Code, Kiro) with agent-specific wiring while sharing the same memory core.
- Includes safety features like blocking destructive commands targeting memory paths and screening secrets before writes.
- Provides a three-tier memory model (project, local, user) for flexible and portable context management.

## Why It Matters for RAG Builders
It enables AI agents to retain project-specific context across sessions without external dependencies, improving continuity and reducing repetitive explanations for RAG and agentic workflows.

## Tech Stack Deep Dive
### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Semantic Search
Automated review identified **Semantic Search** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI Tools
Automated review identified **CLI Tools** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
