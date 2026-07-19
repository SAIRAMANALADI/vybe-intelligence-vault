---
title: dj-pearson/MCPFold
category: world/public/vault/daily-digests/2026-07-08
tech_stack:
- TypeScript
- Node.js
- React
- Deno
- Supabase
- Zod
- Vitest
- ESLint
- pnpm
- JSON Schema
quality_score: 9
rag_relevance: 8
tags:
- MCP
- context-window optimization
- tool curation
- secret management
- multi-client config
source: https://github.com/dj-pearson/MCPFold
discovered_at: '2026-07-08T17:26:37Z'
evaluated_by: mistral-small-latest
---

## Summary
`mcpfold` is a local-first MCP (Model Context Protocol) proxy and configuration manager that optimizes tool schema loading for AI agents by curating toolsets per client and resolving secret references dynamically, reducing context-window overhead by up to 80%.

## Key Features
- Reduces tool-schema tokens by ~80% via per-client toolset curation without additional configuration
- Unified canonical config (`mcp.config.jsonc`) with secret reference resolution for multi-client compatibility
- Pure core engine (`@mcpfold/core`) with strict I/O injection for cross-platform reliability
- Local-first CLI with cloud sync layer (self-hostable) and visual editor (React/TS)
- Autonomous build loop driven by `prd.json` for iterative development and progress tracking

## Why It Matters for RAG Builders
It eliminates the context-window tax for MCP servers by dynamically curating toolsets per client, making AI agent interactions more efficient and scalable.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React
Automated review identified **React** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Deno
Automated review identified **Deno** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Supabase
Automated review identified **Supabase** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zod
Automated review identified **Zod** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vitest
Automated review identified **Vitest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ESLint
Automated review identified **ESLint** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pnpm
Automated review identified **pnpm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON Schema
Automated review identified **JSON Schema** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
