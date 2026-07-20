---
title: FASTPROD/ContextEngine
category: daily-digests/2026-06-23
tech_stack:
- TypeScript
- Node.js
- MCP (Model Context Protocol)
- PM2
- Docker
- Nginx
- Git
- Cron
- ONNX Runtime
- BM25 (for hybrid search)
- JSONL (for audit logs)
- VS Code Extension
quality_score: 9
rag_relevance: 8
tags:
- AI agent infrastructure
- operational visibility
- compliance auditing
- MCP server
- real-time monitoring
source: https://github.com/FASTPROD/ContextEngine
discovered_at: '2026-06-23T13:49:56Z'
evaluated_by: mistral-small-latest
---

## Summary
OpsContext is an MCP server that provides operational visibility and compliance layers for AI agents like Claude Code, enabling real-time access to live infrastructure state (PM2, nginx, Docker, git, cron) and tamper-evident audit logging. It bridges the gap between code context and operational context for AI-driven development workflows.

## Key Features
- Real-time snapshot of live infrastructure (PM2, nginx, Docker, git, cron) for AI agents
- Tamper-evident audit logging with hash-chained JSONL for compliance (SOC2, ISO 27001)
- Policy-as-code enforcement via declarative `.contextengine/policy.json` and pre-commit hooks
- Hybrid search (BM25 + optional semantic with local ONNX models) and auto-discovery of project docs
- Protocol Firewall for agent compliance, session persistence, and multi-project operational intelligence

## Why It Matters for RAG Builders
OpsContext provides critical operational context and compliance layers that AI agents like Claude Code lack natively, enabling secure, auditable, and infrastructure-aware agent workflows for regulated and large-scale environments.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PM2
Automated review identified **PM2** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Nginx
Automated review identified **Nginx** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cron
Automated review identified **Cron** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ONNX Runtime
Automated review identified **ONNX Runtime** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25 (for hybrid search)
Automated review identified **BM25 (for hybrid search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSONL (for audit logs)
Automated review identified **JSONL (for audit logs)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### VS Code Extension
Automated review identified **VS Code Extension** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
