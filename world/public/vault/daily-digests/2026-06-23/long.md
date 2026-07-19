---
title: mjason/long
category: world/public/vault/daily-digests/2026-06-23
tech_stack:
- Elixir
- Phoenix
- Ash
- OTP
- SQLite
- GraphQL
- ReqLLM
- Oban
- Deno
- Tailwind CSS
- LiveView
quality_score: 9
rag_relevance: 8
tags:
- LLM agent runtime
- multi-user
- GraphQL tools
- Elixir/OTP
- self-contained binary
source: https://github.com/mjason/long
discovered_at: '2026-06-23T02:49:32Z'
evaluated_by: mistral-small-latest
---

## Summary
Long is a single-process, multi-user LLM agent runtime built on Elixir/OTP, designed for household or small team use. It combines a Phoenix-based web UI with a GraphQL-driven capability layer, enabling agents to interact with data, tools, and memory through a unified interface.

## Key Features
- Single-process, fault-tolerant runtime with real concurrency via OTP
- GraphQL as the primary agent capability layer for introspectable tool access
- Four-tier memory system (working, global, session, and archive) with decay-based prioritization
- Sandboxed code execution via Deno for TypeScript/JavaScript and headless browsing with Obscura
- Multi-tenant support with groups, members, and per-member workspaces

## Why It Matters for RAG Builders
Long simplifies LLM agent deployment and operation by leveraging mature Elixir/OTP infrastructure and GraphQL for unified tool access, making it ideal for building scalable, self-contained agent systems.

## Tech Stack Deep Dive
### Elixir
Automated review identified **Elixir** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Phoenix
Automated review identified **Phoenix** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ash
Automated review identified **Ash** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OTP
Automated review identified **OTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GraphQL
Automated review identified **GraphQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ReqLLM
Automated review identified **ReqLLM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Oban
Automated review identified **Oban** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Deno
Automated review identified **Deno** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tailwind CSS
Automated review identified **Tailwind CSS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LiveView
Automated review identified **LiveView** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
