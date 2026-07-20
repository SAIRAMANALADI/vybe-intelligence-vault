---
title: johnjallday/ori-agent
category: daily-digests/2026-06-24
tech_stack:
- Go
- Modern Web Technologies (UI)
- MCP (Model Context Protocol)
- Local LLM Providers (Ollama, LM Studio, MLX)
- Cloud LLM Providers (OpenAI, Anthropic, Google)
- Cron-like Scheduling
- Encrypted Storage (OS Keychain)
- REST API
- Browser UI
quality_score: 9
rag_relevance: 8
tags:
- autonomous agents
- local-first
- multi-agent orchestration
- policy-based autonomy
- RAG workflows
source: https://github.com/johnjallday/ori-agent
discovered_at: '2026-06-24T20:47:57Z'
evaluated_by: mistral-small-latest
---

## Summary
Ori Agent is a local-first platform for autonomous AI agents that enables users to assign missions to workspaces, which execute on a schedule under configurable autonomy policies. Findings are surfaced in a centralized Action Center for triage, with all operations running locally unless cloud LLMs are explicitly used.

## Key Features
- Mission-driven agent workspaces with configurable autonomy policies (Watch/Propose)
- Centralized Action Center for triaging agent findings across workspaces
- Workspace memory system for durable knowledge retention and compounding learning
- Multi-agent orchestration with per-workspace tool access control
- Support for both local and cloud LLM providers with seamless switching

## Why It Matters for RAG Builders
Ori Agent provides a robust framework for deploying and managing autonomous AI agents with policy-based guardrails, making it essential for RAG builders who need structured, repeatable, and auditable agent workflows.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Modern Web Technologies (UI)
Automated review identified **Modern Web Technologies (UI)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Local LLM Providers (Ollama, LM Studio, MLX)
Automated review identified **Local LLM Providers (Ollama, LM Studio, MLX)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloud LLM Providers (OpenAI, Anthropic, Google)
Automated review identified **Cloud LLM Providers (OpenAI, Anthropic, Google)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cron-like Scheduling
Automated review identified **Cron-like Scheduling** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Encrypted Storage (OS Keychain)
Automated review identified **Encrypted Storage (OS Keychain)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Browser UI
Automated review identified **Browser UI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
