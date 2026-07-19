---
title: phuetz/code-buddy
category: daily-digests/2026-07-06
tech_stack:
- TypeScript
- Node.js
- Electron
- Ollama
- LLM APIs (GPT, Grok, Claude, etc.)
- Rust (buddy-sense)
- Python (buddy-vision)
- WebSocket
- Jest
- Vitest
quality_score: 9
rag_relevance: 10
tags:
- AI coding agent
- multi-provider LLM
- local-first
- MCP integration
- autonomous fleet
source: https://github.com/phuetz/code-buddy
discovered_at: '2026-07-06T23:03:26Z'
evaluated_by: mistral-small-latest
---

## Summary
Code Buddy is an open-source, multi-provider AI coding agent that runs locally on Ollama for near-zero cost or integrates with 15 LLM providers (e.g., GPT, Grok, Claude) via automatic failover. It supports terminal, desktop, phone, and 24/7 service deployments with ~110 tools, MCP connectors, and optional voice/vision companion features.

## Key Features
- Runs locally on Ollama (~$0.0001 per task) or integrates with 15 LLM providers with automatic failover
- Supports terminal, desktop (Cowork), phone (Telegram), and 24/7 service deployments
- ~110 tools including file editing, shell commands, web search, browser automation, and MCP connectors
- Multi-AI Fleet feature allows peers to observe and delegate tasks across a network
- Optional voice and vision companion layer with local speech-to-text, text-to-speech, and camera perception

## Why It Matters for RAG Builders
Code Buddy provides a flexible, cost-effective, and locally deployable AI agent framework essential for building and experimenting with RAG systems that require multi-tool integration, multi-provider LLM support, and autonomous task execution.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Electron
Automated review identified **Electron** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM APIs (GPT, Grok, Claude, etc.)
Automated review identified **LLM APIs (GPT, Grok, Claude, etc.)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Rust (buddy-sense)
Automated review identified **Rust (buddy-sense)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python (buddy-vision)
Automated review identified **Python (buddy-vision)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebSocket
Automated review identified **WebSocket** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Jest
Automated review identified **Jest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vitest
Automated review identified **Vitest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
