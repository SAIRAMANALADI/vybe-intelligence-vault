---
title: CherryHQ/stella
category: world/public/vault/daily-digests/2026-06-23
tech_stack:
- Go
- PostgreSQL
- Telegram API
- QQ API
- Feishu API
- WeChat API
- BM25
- River (job queue)
- pgxpool
- mise (dev tool)
quality_score: 8
rag_relevance: 7
tags:
- multi-agent
- sandboxed workspaces
- team collaboration
- scheduling
- memory scoping
source: https://github.com/CherryHQ/stella
discovered_at: '2026-06-23T10:33:27Z'
evaluated_by: mistral-small-latest
---

## Summary
Stella is a multi-tenant, multi-agent system designed to create shared AI coworkers for teams, enabling domain experts to define agents that others can reuse without learning underlying tools. It supports multiple chat interfaces and provides sandboxed workspaces, memory scoping per user, and scheduled tasks.

## Key Features
- Multi-tenant and multi-user support with per-user memory scoping
- Sandboxed workspaces with controlled tool access and safety boundaries
- Integration with multiple chat platforms (Telegram, QQ, Feishu, WeChat, Web UI, Terminal)
- Built-in skill management and reusable playbooks for task automation
- Scheduled tasks, reminders, and recurring jobs with persistent execution

## Why It Matters for RAG Builders
Stella enables teams to scale expertise by turning domain-specific knowledge into reusable AI agents, reducing dependency on specialists and streamlining workflows across chat interfaces.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Telegram API
Automated review identified **Telegram API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### QQ API
Automated review identified **QQ API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Feishu API
Automated review identified **Feishu API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WeChat API
Automated review identified **WeChat API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25
Automated review identified **BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### River (job queue)
Automated review identified **River (job queue)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pgxpool
Automated review identified **pgxpool** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### mise (dev tool)
Automated review identified **mise (dev tool)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
