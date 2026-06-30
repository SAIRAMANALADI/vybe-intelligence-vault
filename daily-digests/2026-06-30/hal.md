---
title: "BluegReeno/hal"
category: "Orchestrator"
tech_stack: ["TypeScript", "Deno", "Supabase", "MCP (Model Context Protocol)", "PostgreSQL", "Edge Functions", "Python (for scripts)", "React (for Edifice PWA/webapp)", "RLS (Row-Level Security)"]
quality_score: 8
rag_relevance: 9
tags: ["MCP server", "BYOC (Bring Your Own Client)", "CRM", "Document Vault", "Field Workflows"]
source: "https://github.com/BluegReeno/hal"
discovered_at: "2026-06-30T16:21:33Z"
evaluated_by: "mistral-small-latest"
---

## Summary
hal is an AI-native company toolkit for SMEs that provides a second brain for field-work SMEs (e.g., BET, architects, surveyors) via a BYOA (Bring Your Own AI) engine. It exposes an MCP server (`hal-mcp`) that integrates with Claude clients, offering CRM, pipeline management, tasks/sprints, document vault, and field workflows (e.g., Edifice vertical) powered by Supabase.

## Key Features
- BYOA (Bring Your Own AI) engine with MCP server integration for Claude clients and automation tools like Dust/n8n
- Comprehensive second-brain system for SMEs including CRM, pipeline, tasks/sprints, document vault, and field workflows
- Supabase-backed data model with RLS for workspace isolation and security
- Edifice vertical for building inspection workflows with field-to-deliverable automation
- 27 MCP tools for read/write operations across CRM, pipeline, tasks, document vault, and field workflows

## Why It Matters for RAG Builders
hal provides a modular, AI-native orchestration layer for SMEs that unifies CRM, tasks, documents, and field workflows via MCP, enabling seamless integration with existing AI clients like Claude without requiring custom glue code.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Deno
Automated review identified **Deno** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Supabase
Automated review identified **Supabase** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Edge Functions
Automated review identified **Edge Functions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python (for scripts)
Automated review identified **Python (for scripts)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React (for Edifice PWA/webapp)
Automated review identified **React (for Edifice PWA/webapp)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### RLS (Row-Level Security)
Automated review identified **RLS (Row-Level Security)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
