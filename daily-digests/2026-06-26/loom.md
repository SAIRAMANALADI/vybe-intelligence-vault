---
title: "reslava/loom"
category: "Orchestrator"
tech_stack: ["TypeScript", "Model Context Protocol (MCP)", "Markdown", "Node.js", "VS Code Extension API", "CLI (npm)", "Git"]
quality_score: 9
rag_relevance: 10
tags: ["AI workflow", "document graph", "context management", "MCP server", "persistent state"]
source: "https://github.com/reslava/loom"
discovered_at: "2026-06-26T22:12:38Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Loom provides a document-native workflow for AI-assisted development, enabling structured, scoped, and persistent context management through a document graph system. It replaces ephemeral chat sessions with auditable, version-controlled markdown documents that guide AI agents with precise, bounded context.

## Key Features
- Structured document graph for project context (ctx.md, refs/, weaves/, threads/)
- MCP-compatible server for integration with AI agents (Claude Code, Cursor, etc.)
- Scoped and fresh context per session, avoiding bloated chat history
- Requirements-driven development with locked scope (include/exclude/constrain)
- Staleness detection and human approval gates at every phase transition

## Why It Matters for RAG Builders
Loom fundamentally transforms AI-assisted development by replacing chaotic chat sessions with a structured, auditable document graph that ensures AI agents always operate with the precise, bounded context they need for reliable and traceable work.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### VS Code Extension API
Automated review identified **VS Code Extension API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI (npm)
Automated review identified **CLI (npm)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
