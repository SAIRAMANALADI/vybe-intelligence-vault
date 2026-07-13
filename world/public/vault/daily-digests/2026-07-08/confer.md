---
title: "rohansx/confer"
category: "Orchestrator"
tech_stack: ["TypeScript", "Node.js", "React", "Vite", "Hono", "SQLite", "Zod", "Model Context Protocol (MCP)", "Docker", "Caddy", "Litestream", "Slack Webhooks"]
quality_score: 9
rag_relevance: 8
tags: ["documentation review", "MCP integration", "provenance tracking", "collaborative AI", "self-hosted"]
source: "https://github.com/rohansx/confer"
discovered_at: "2026-07-08T17:25:05Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Confer is a self-hostable, MCP-native review platform for AI-generated documentation that enforces an approved-only invariant, ensuring agents read only human-approved content unless explicitly opting into unapproved material. It facilitates a collaborative loop where agents write docs, humans review and approve, and agents consume only the approved corpus with full provenance tracking.

## Key Features
- Approved-only invariant for MCP reads, ensuring only human-approved content is consumed by default
- Two-origin architecture (app and view) with CSP-locked sandbox for secure document viewing
- Provenance tracking for all documents, including git and review history
- CLI and MCP server for seamless integration with AI workflows
- Self-hostable with Docker, SQLite backups, and Slack notifications

## Why It Matters for RAG Builders
Confer ensures reliable, provenance-backed documentation for AI systems by enforcing human oversight and approval before content is consumed, critical for maintaining accuracy and trust in RAG pipelines.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React
Automated review identified **React** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vite
Automated review identified **Vite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Hono
Automated review identified **Hono** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zod
Automated review identified **Zod** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Caddy
Automated review identified **Caddy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Litestream
Automated review identified **Litestream** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Slack Webhooks
Automated review identified **Slack Webhooks** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
