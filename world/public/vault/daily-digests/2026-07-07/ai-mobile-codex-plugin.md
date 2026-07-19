---
title: comprono/Ai-Mobile-Codex-plugin
category: world/public/vault/daily-digests/2026-07-07
tech_stack:
- TypeScript
- Node.js
- MCP (Model Context Protocol)
- Chromium DevTools Protocol
- PowerShell
- Antigravity
- Claude Code CLI
- gRPC-web
quality_score: 8
rag_relevance: 9
tags:
- Codex plugin
- Antigravity bridge
- Claude Code integration
- MCP server
- Windows desktop AI
source: https://github.com/comprono/Ai-Mobile-Codex-plugin
discovered_at: '2026-07-07T19:00:38Z'
evaluated_by: mistral-small-latest
---

## Summary
The AI Mobile Codex Plugin bridges OpenAI Codex on mobile devices to local Windows desktop AI workers, enabling seamless handoff to Antigravity (CLI/desktop) and Claude Code for coding, review, and project workflows. It reduces token usage by creating durable job artifacts for Codex to read results later.

## Key Features
- Bridges mobile Codex to local Antigravity (CLI/desktop) and Claude Code for headless coding/review tasks
- Creates durable job artifacts (.antigravity-bridge/jobs/) to minimize token usage by allowing Codex to read results later
- Supports both visible Antigravity UI workflows and low-RAM CLI-based Antigravity jobs
- Provides MCP tools for status checks, model switching, job submission, and DevTools inspection
- Includes privacy scanning for sensitive data before publishing changes

## Why It Matters for RAG Builders
This plugin enables mobile Codex users to offload resource-intensive or UI-dependent tasks to local Windows desktop AI workers, reducing latency and token costs while maintaining workflow continuity.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Chromium DevTools Protocol
Automated review identified **Chromium DevTools Protocol** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PowerShell
Automated review identified **PowerShell** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Antigravity
Automated review identified **Antigravity** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code CLI
Automated review identified **Claude Code CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### gRPC-web
Automated review identified **gRPC-web** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
