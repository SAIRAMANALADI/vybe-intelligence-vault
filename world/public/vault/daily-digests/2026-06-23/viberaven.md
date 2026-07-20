---
title: ohad6k/VibeRaven
category: daily-digests/2026-06-23
tech_stack:
- TypeScript
- Node.js
- npm
- CLI
- MCP (Model Context Protocol)
- JSON
- GitHub Actions
quality_score: 9
rag_relevance: 8
tags:
- production gate
- AI app validation
- launch readiness
- local-first
- agent tooling
source: https://github.com/ohad6k/VibeRaven
discovered_at: '2026-06-23T21:33:56Z'
evaluated_by: mistral-small-latest
---

## Summary
VibeRaven provides a local-first workspace and production gate for AI-built applications, enabling developers and agents to verify launch readiness before deployment. It offers a localhost UI/CLI for inspecting production evidence, attaching provider context, and ensuring deploy-safe conditions.

## Key Features
- Local production mission control console for AI-built apps
- Agent-mode artifacts generation (e.g., `.viberaven/prp.json`, `.viberaven/gate-result.json`)
- Provider context attachment (database, auth, hosting, monitoring, etc.)
- Automated checks for common production gaps (RLS, webhooks, auth, monitoring)
- MCP tooling for agent integration and CI/CD pipelines

## Why It Matters for RAG Builders
It ensures AI-built applications meet production-ready standards before deployment, reducing post-launch failures and improving reliability for RAG and agent-based systems.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### npm
Automated review identified **npm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
