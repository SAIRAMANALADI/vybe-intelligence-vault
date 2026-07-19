---
title: runapi-ai/imagen-4-mcp
category: world/public/vault/daily-digests/2026-07-08
tech_stack:
- TypeScript
- Node.js
- MCP (Model Context Protocol)
- RunAPI API
- NPM
quality_score: 8
rag_relevance: 7
tags:
- MCP Server
- Image Generation
- RunAPI
- Imagen 4
- AI Agents
source: https://github.com/runapi-ai/imagen-4-mcp
discovered_at: '2026-07-08T17:27:33Z'
evaluated_by: mistral-small-latest
---

## Summary
A Model Context Protocol (MCP) server providing focused access to RunAPI's Imagen 4 image generation models, enabling AI agents to create tasks, poll results, and check pricing without loading the full RunAPI catalog.

## Key Features
- Provides MCP-compatible access to Imagen 4 models (4 variants across 2 endpoints)
- Supports task creation (text-to-image, remix-image) and status polling
- Includes pricing lookup without authentication for headless/CI environments
- Integrates with popular AI agent hosts (Claude Code, Codex, Cursor, VS Code, etc.)
- Offers authentication via environment variables or config file for secure API key management

## Why It Matters for RAG Builders
It simplifies integrating Imagen 4 image generation capabilities into AI agents by providing a lightweight, MCP-compatible interface that abstracts RunAPI's complexity.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### RunAPI API
Automated review identified **RunAPI API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### NPM
Automated review identified **NPM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
