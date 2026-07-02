---
title: "getmunin/munin"
category: "Orchestrator"
tech_stack: ["TypeScript", "Node.js", "NestJS", "Next.js", "PostgreSQL", "pgvector", "Drizzle ORM", "MCP (Model Context Protocol)", "BetterAuth", "OAuth 2.1", "Turborepo", "pnpm"]
quality_score: 9
rag_relevance: 10
tags: ["CRM", "MCP", "Agent Orchestration", "Headless CMS", "Postgres"]
source: "https://github.com/getmunin/munin"
discovered_at: "2026-07-02T22:14:53Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Munin is an open-source, headless CRM and operations platform designed for AI agents. It provides a unified Postgres-backed schema for CRM, conversations, outreach, CMS, knowledge base, and analytics, exposed entirely via MCP tools for agent-driven workflows.

## Key Features
- Unified Postgres schema for CRM, conversations, CMS, knowledge base, outreach, and analytics with shared permissions and audit logs
- MCP-first architecture exposing all functionality as tools for AI agents (Claude, Cursor, etc.) with optional human-in-the-loop review
- In-process agent runner for real-time conversation handling and background curation tasks (KB updates, CRM hygiene, etc.)
- Data portability via symmetric export/import tools and REST endpoints, enabling seamless migration between self-hosted and cloud
- Embeddable chat widget, webhooks, alerts, and feedback channels for operational integration and extensibility

## Why It Matters for RAG Builders
Munin provides a critical orchestration layer for RAG/AI stacks by unifying CRM, CMS, and analytics into a single agent-driven platform with MCP-native tooling, enabling seamless integration of AI agents into business workflows.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### NestJS
Automated review identified **NestJS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Next.js
Automated review identified **Next.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pgvector
Automated review identified **pgvector** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Drizzle ORM
Automated review identified **Drizzle ORM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BetterAuth
Automated review identified **BetterAuth** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth 2.1
Automated review identified **OAuth 2.1** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Turborepo
Automated review identified **Turborepo** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pnpm
Automated review identified **pnpm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
