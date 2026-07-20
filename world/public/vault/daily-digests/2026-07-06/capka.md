---
title: LyoSU/capka
category: daily-digests/2026-07-06
tech_stack:
- TypeScript
- Next.js
- Docker
- PostgreSQL
- Python
- Node.js
- Ollama
- MCP (Model Context Protocol)
- Caddy
- gVisor
quality_score: 9
rag_relevance: 8
tags:
- self-hosted
- AI workspace
- sandboxing
- multi-user
- file management
source: https://github.com/LyoSU/capka
discovered_at: '2026-07-06T19:48:36Z'
evaluated_by: mistral-small-latest
---

## Summary
Capka is a self-hosted AI workspace that provides isolated Linux sandboxes and file storage for each chat session, enabling users to execute tasks like report generation, document conversion, and code changes while maintaining full control over their infrastructure and models.

## Key Features
- Per-chat isolated Linux sandboxes with dedicated file storage for secure and independent task execution
- Support for both cloud and local models via Ollama, with admin-controlled model providers
- Multi-user environment with role-based access, registration modes, and audit logging
- Built-in MCP tools and connectors for extended functionality like file operations and code execution
- Automated deployment with Docker, including optional gVisor for enhanced kernel-level isolation

## Why It Matters for RAG Builders
Capka enables RAG builders to deploy a secure, scalable, and self-hosted AI workspace that isolates tasks and files per chat, ensuring data privacy and operational flexibility for complex AI-driven workflows.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Next.js
Automated review identified **Next.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Caddy
Automated review identified **Caddy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### gVisor
Automated review identified **gVisor** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
