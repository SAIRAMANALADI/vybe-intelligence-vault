---
title: acoyfellow/my-ax
category: daily-digests/2026-06-24
tech_stack:
- TypeScript
- Cloudflare Workers
- Cloudflare D1
- Cloudflare R2
- Cloudflare KV
- Cloudflare Workers AI
- Durable Objects
- MCP (Model Context Protocol)
- Node.js
- Docker
- Python
- Bash
quality_score: 8
rag_relevance: 7
tags:
- personal agent
- Cloudflare Workers
- durable state
- agent delegation
- self-hosted
source: https://github.com/acoyfellow/my-ax
discovered_at: '2026-06-24T10:22:38Z'
evaluated_by: mistral-small-latest
---

## Summary
My AX is a self-hosted, single-operator personal agent runtime deployed on Cloudflare, enabling durable conversations, connected capabilities, recurring jobs, and bounded delegation. It operates within the operator's Cloudflare account, providing secure, isolated agent execution with retained state and outputs.

## Key Features
- Durable conversations with retained message state via Cloudflare D1
- Connected capabilities through trusted server-side adapters (MCP, Machine, Cloudbox, Browser)
- Recurring job scheduling with native Cloudflare Workers support
- Bounded delegation for concurrent child agents (max 2) with synthesized results
- Workspace snapshots and object storage via Cloudflare R2

## Why It Matters for RAG Builders
My AX provides a secure, self-hosted framework for building personal AI agents with durable state, connected tools, and bounded delegation, critical for privacy-focused RAG applications.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloudflare Workers
Automated review identified **Cloudflare Workers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloudflare D1
Automated review identified **Cloudflare D1** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloudflare R2
Automated review identified **Cloudflare R2** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloudflare KV
Automated review identified **Cloudflare KV** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloudflare Workers AI
Automated review identified **Cloudflare Workers AI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Durable Objects
Automated review identified **Durable Objects** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bash
Automated review identified **Bash** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
