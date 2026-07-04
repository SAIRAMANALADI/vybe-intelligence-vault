---
title: "bzdOS/hubd"
category: "Orchestrator"
tech_stack: ["JavaScript", "MCP (Model Context Protocol)", "JSON-RPC 2.0", "Markdown", "JSONL", "Node.js", "CLI", "HTTP", "Git"]
quality_score: 9
rag_relevance: 8
tags: ["project tracking", "AI agent coordination", "MCP server", "plain files", "multi-agent workflows"]
source: "https://github.com/bzdOS/hubd"
discovered_at: "2026-07-04T15:06:03Z"
evaluated_by: "mistral-small-latest"
---

## Summary
hubd is a project tracker designed for teams of humans and AI agents, using plain files (markdown and JSONL) as a shared workspace. It acts as a coordination layer for agent workflows, replacing manual context-sharing with structured journals, task queues, and kanban boards, while ensuring compatibility with any agent or tool via MCP or direct file access.

## Key Features
- Shared workspace using plain markdown/JSONL files for human and AI agent collaboration
- Task queues with blocking/waiting mechanisms for agents, eliminating polling
- Structured journaling with tagged reports (DECIDE, FACT, COMM, NEXT, DONE) for traceability
- Multi-tenant HTTP server for remote access with token-based authentication
- Typed relationship graph via wikilinks for infrastructure and project dependencies

## Why It Matters for RAG Builders
It provides a lightweight, file-based coordination layer that unifies human and AI agent workflows, ensuring consistency and traceability without vendor lock-in.

## Tech Stack Deep Dive
### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-RPC 2.0
Automated review identified **JSON-RPC 2.0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSONL
Automated review identified **JSONL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP
Automated review identified **HTTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
