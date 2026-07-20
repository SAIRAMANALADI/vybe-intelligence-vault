---
title: CardSorting/LUMI
category: daily-digests/2026-06-25
tech_stack:
- TypeScript
- VS Code Extension API
- Node.js
- MCP (Model Context Protocol)
- BroccoliDB (@noorm/broccolidb)
- Mermaid.js (for diagrams)
- Git (for checkpoints)
- OpenRouter
- ChatGPT Subscription
- NousResearch
- Cloudflare Workers AI
quality_score: 9
rag_relevance: 8
tags:
- VS Code extension
- human-in-the-loop
- agentic coding
- governed execution
- MCP integration
source: https://github.com/CardSorting/LUMI
discovered_at: '2026-06-25T00:04:25Z'
evaluated_by: mistral-small-latest
---

## Summary
LUMI is a VS Code extension that acts as a human-in-the-loop agentic pair programming companion, enabling AI-driven code modifications with explicit user approval at every step. It supports governed subagent execution, plan/act modes, and integrates with MCP servers for enhanced tooling.

## Key Features
- Approval-gated tool execution with diff previews before writes
- Plan and Act modes for exploration and implementation
- Governed subagent execution with durable receipts and merge gates
- 63 typed tools for safe, structured interactions (vs. ad-hoc shell access)
- Local-first memory and reasoning via BroccoliDB for cognitive context

## Why It Matters for RAG Builders
LUMI provides a robust, human-controlled framework for AI-driven code modifications in VS Code, ensuring safety and transparency through governed execution and approval gates, making it ideal for RAG builders seeking reliable agentic workflows.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### VS Code Extension API
Automated review identified **VS Code Extension API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BroccoliDB (@noorm/broccolidb)
Automated review identified **BroccoliDB (@noorm/broccolidb)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Mermaid.js (for diagrams)
Automated review identified **Mermaid.js (for diagrams)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git (for checkpoints)
Automated review identified **Git (for checkpoints)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenRouter
Automated review identified **OpenRouter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ChatGPT Subscription
Automated review identified **ChatGPT Subscription** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### NousResearch
Automated review identified **NousResearch** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloudflare Workers AI
Automated review identified **Cloudflare Workers AI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
