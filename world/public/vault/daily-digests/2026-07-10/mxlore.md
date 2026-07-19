---
title: MicrotronX/mxLore
category: world/public/vault/daily-digests/2026-07-10
tech_stack:
- Delphi (RAD Studio)
- MariaDB
- TMS Sparkle
- FireDAC
- Model Context Protocol (MCP)
- HTTP+SSE
- PBKDF2-HMAC-SHA256
quality_score: 9
rag_relevance: 8
tags:
- MCP server
- self-hosted
- AI memory
- institutional knowledge
- software development
source: https://github.com/MicrotronX/mxLore
discovered_at: '2026-07-10T06:32:06Z'
evaluated_by: mistral-small-latest
---

## Summary
mxLore is a self-hosted MCP server designed to provide AI-assisted software development with persistent memory and institutional knowledge. It enables AI coding assistants like Claude Code and Cursor to store, retrieve, and manage architectural decisions, specifications, and lessons learned locally without third-party dependencies.

## Key Features
- 45 MCP tools for knowledge management, search, and collaboration across projects
- Private-by-design architecture with local proxy for coding assistants (no third-party cloud in the path)
- Multi-project support with semantic search (vector + full-text) and hybrid MariaDB storage
- Admin UI and team collaboration features with API key management and invite-based onboarding
- Skill evolution tracking and auto-tuning for AI checker rules, institutional memory, and multi-agent message exchange

## Why It Matters for RAG Builders
It provides persistent, self-hosted memory and institutional knowledge for AI coding assistants, enabling seamless context retention and collaboration without relying on third-party services.

## Tech Stack Deep Dive
### Delphi (RAD Studio)
Automated review identified **Delphi (RAD Studio)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MariaDB
Automated review identified **MariaDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TMS Sparkle
Automated review identified **TMS Sparkle** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FireDAC
Automated review identified **FireDAC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP+SSE
Automated review identified **HTTP+SSE** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PBKDF2-HMAC-SHA256
Automated review identified **PBKDF2-HMAC-SHA256** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
