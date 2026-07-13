---
title: "Kevin-Liu-01/Agent-Machines"
category: "Orchestrator"
tech_stack: ["TypeScript", "Next.js", "React", "tmux", "Docker", "E2B", "Sprites.dev", "Vercel Sandbox", "Dedalus Machines", "OpenRouter", "Claude Code", "Codex CLI", "Hermes Agent", "OpenClaw", "Clerk", "SSE (Server-Sent Events)", "WebSockets (indirectly via tmux)", "MCP (Model Context Protocol)"]
quality_score: 9
rag_relevance: 8
tags: ["agent orchestration", "persistent workers", "multi-substrate routing", "browser terminal", "MCP integration"]
source: "https://github.com/Kevin-Liu-01/Agent-Machines"
discovered_at: "2026-06-23T10:33:53Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Agent Machines provides a control plane for deploying persistent agent workers across multiple substrates (e.g., E2B, Sprites.dev, Vercel Sandbox) with dual routing for agent runtimes and infrastructure. It abstracts provisioning, bootstrapping, and management of agent environments, enabling users to operate terminal-based agent CLIs directly from a browser console.

## Key Features
- Dual routing for agent runtimes and substrates, enabling flexible deployments across providers like E2B, Sprites.dev, and Vercel Sandbox.
- Browser-based live terminal console for terminal-based agent CLIs (e.g., Codex, Claude Code, Hermes) with no local setup required.
- Stateless control plane leveraging tmux-over-exec and SSE for real-time interaction, avoiding WebSocket dependencies in serverless environments.
- Registry-driven harness system for managing skills, MCP servers, and service routes, with 1,400+ installable items.
- One-click deployment flow (Deploy → Bootstrap → Attach → Talk) with credential gating to prevent silent provisioning failures.

## Why It Matters for RAG Builders
Agent Machines simplifies the deployment and management of persistent agent workers across diverse substrates, enabling AI engineers to focus on agent capabilities rather than infrastructure complexity.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Next.js
Automated review identified **Next.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React
Automated review identified **React** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### tmux
Automated review identified **tmux** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### E2B
Automated review identified **E2B** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Sprites.dev
Automated review identified **Sprites.dev** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vercel Sandbox
Automated review identified **Vercel Sandbox** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Dedalus Machines
Automated review identified **Dedalus Machines** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenRouter
Automated review identified **OpenRouter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Codex CLI
Automated review identified **Codex CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Hermes Agent
Automated review identified **Hermes Agent** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenClaw
Automated review identified **OpenClaw** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Clerk
Automated review identified **Clerk** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SSE (Server-Sent Events)
Automated review identified **SSE (Server-Sent Events)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebSockets (indirectly via tmux)
Automated review identified **WebSockets (indirectly via tmux)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
