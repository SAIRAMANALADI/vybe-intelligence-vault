---
title: revfleet/hscli
category: daily-digests/2026-06-25
tech_stack:
- TypeScript
- Node.js
- MCP (Model Context Protocol)
- HubSpot API
- CLI
- JSONL tracing
- Private App Tokens
quality_score: 9
rag_relevance: 8
tags:
- HubSpot
- CLI
- MCP server
- agentic workflows
- enterprise safety
source: https://github.com/revfleet/hscli
discovered_at: '2026-06-25T11:40:05Z'
evaluated_by: mistral-small-latest
---

## Summary
hscli is an agentic CLI and MCP server for HubSpot that provides a unified TypeScript binary to interact with 1,180 HubSpot endpoints. It enables secure, auditable, and policy-enforced operations for CRM, marketing, sales, and service workflows with explicit write guardrails and local token management.

## Key Features
- 1,180 HubSpot endpoint coverage with public API-first design
- Explicit write guardrails with `--force` and policy enforcement for safe operations
- MCP server compatibility for integration with AI agents (Claude, Cursor, etc.)
- Built-in auditing, tracing, and observability for reproducibility and compliance
- Multi-portal management with local profile isolation and plan-based runbooks

## Why It Matters for RAG Builders
It provides a secure, auditable, and agent-ready interface to HubSpot's vast API surface, enabling RAG builders to integrate HubSpot data and operations into AI workflows with enterprise-grade safety and compliance.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HubSpot API
Automated review identified **HubSpot API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSONL tracing
Automated review identified **JSONL tracing** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Private App Tokens
Automated review identified **Private App Tokens** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
