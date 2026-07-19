---
title: BluegReeno/hal
category: world/public/vault/daily-digests/2026-07-07
tech_stack:
- TypeScript
- Deno
- Supabase
- PostgreSQL
- MCP (Model Context Protocol)
- Edge Functions
- Python (for scripts)
- React (for Edifice PWA/Webapp)
- RLS (Row-Level Security)
quality_score: 9
rag_relevance: 9
tags:
- MCP server
- BYOA (Bring Your Own AI)
- CRM integration
- Document vault
- Field workflow automation
source: https://github.com/BluegReeno/hal
discovered_at: '2026-07-07T13:15:20Z'
evaluated_by: mistral-small-latest
---

## Summary
`hal` is an AI-native second-brain engine for SMEs, exposing an MCP server (`hal-mcp`) that integrates with Claude clients to manage CRM, tasks, document vaults, and field workflows. It operates client-side under a BYOA model, enabling natural language interactions with a firm's data without requiring custom glue code.

## Key Features
- Client-side AI agent integration via MCP, enabling natural language interactions with firm data
- Comprehensive data model for CRM, tasks, sprints, document vault, and field workflows (Edifice vertical)
- Supabase-backed RLS for multi-tenant workspace isolation and security
- Field-to-deliverable workflow for BET/architectural firms with mobile PWA capture and report generation
- Modular architecture supporting vertical-specific commercial brands (e.g., Edifice) while sharing a core engine

## Why It Matters for RAG Builders
`hal` enables SMEs to leverage AI agents for core business operations without custom development, reducing integration overhead and accelerating adoption of AI-native workflows.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Deno
Automated review identified **Deno** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Supabase
Automated review identified **Supabase** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Edge Functions
Automated review identified **Edge Functions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python (for scripts)
Automated review identified **Python (for scripts)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React (for Edifice PWA/Webapp)
Automated review identified **React (for Edifice PWA/Webapp)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### RLS (Row-Level Security)
Automated review identified **RLS (Row-Level Security)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
