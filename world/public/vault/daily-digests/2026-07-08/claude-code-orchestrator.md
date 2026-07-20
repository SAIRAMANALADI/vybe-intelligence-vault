---
title: Toragonite/claude-code-orchestrator
category: daily-digests/2026-07-08
tech_stack:
- TypeScript
- VS Code Extension API
- Model Context Protocol (MCP)
- Node.js
- Claude Code CLI
quality_score: 9
rag_relevance: 8
tags:
- multi-agent orchestration
- parallel task dispatch
- Claude Code integration
- MCP server
- usage tracking
source: https://github.com/Toragonite/claude-code-orchestrator
discovered_at: '2026-07-08T05:46:01Z'
evaluated_by: mistral-small-latest
---

## Summary
A VS Code extension that transforms a single Claude Code session into a multi-account orchestrator, enabling parallel task execution across worker accounts via MCP dispatch tools. The main session handles design and verification while workers implement code in parallel, with quota-aware scheduling, failover, and a live dashboard.

## Key Features
- Parallel task dispatch across multiple worker accounts with quota-aware scheduling and failover
- MCP tools for batch and single-task dispatch, worker management, and orchestrator briefings
- Per-account usage tracking (tasks, tokens, cost) with configurable cooldowns and preferred worker prioritization
- Frontier billing guard for `claude-fable-5` to prevent unintended high-cost dispatches
- Live dashboard with real-time stats, charts, and settings for monitoring and control

## Why It Matters for RAG Builders
It enables scalable, parallel execution of AI-driven tasks across multiple accounts, significantly accelerating development workflows while maintaining cost and quota control for RAG and AI stack builders.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### VS Code Extension API
Automated review identified **VS Code Extension API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code CLI
Automated review identified **Claude Code CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
