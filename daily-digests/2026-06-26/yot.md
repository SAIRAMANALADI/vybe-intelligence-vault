---
title: "eitaar/yot"
category: "Tooling"
tech_stack: ["TypeScript", "Vue 3", "Vite", "Tailwind CSS v4", "DaisyUI", "Hono", "@hono/zod-openapi", "better-sqlite3", "Server-Sent Events (SSE)", "MCP (Model Context Protocol)", "Zod", "Schedule-X"]
quality_score: 8
rag_relevance: 6
tags: ["calendar", "real-time sync", "MCP server", "authentication", "single-user"]
source: "https://github.com/eitaar/yot"
discovered_at: "2026-06-26T18:31:49Z"
evaluated_by: "mistral-small-latest"
---

## Summary
yot is a single-user calendar backend offering a REST API, MCP server, and Vue 3 SPA with realtime sync via Server-Sent Events. It supports full CRUD operations, API-key authentication, and PIN-based browser pairing for seamless integration.

## Key Features
- Dual REST API and MCP server for CRUD operations over the same SQLite database
- Real-time synchronization via Server-Sent Events (SSE) for live updates
- API-key authentication with read/write scopes and PIN-based browser pairing
- Vue 3 SPA with multiple calendar views, themes, and PWA support
- Built-in relay for MCP-to-SSE event broadcasting and SQLite-based data storage

## Why It Matters for RAG Builders
It provides a robust, real-time calendar backend with dual API and MCP interfaces, making it essential for AI agents requiring structured time management and event synchronization.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vue 3
Automated review identified **Vue 3** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vite
Automated review identified **Vite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tailwind CSS v4
Automated review identified **Tailwind CSS v4** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DaisyUI
Automated review identified **DaisyUI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Hono
Automated review identified **Hono** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### @hono/zod-openapi
Automated review identified **@hono/zod-openapi** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### better-sqlite3
Automated review identified **better-sqlite3** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Server-Sent Events (SSE)
Automated review identified **Server-Sent Events (SSE)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zod
Automated review identified **Zod** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Schedule-X
Automated review identified **Schedule-X** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
