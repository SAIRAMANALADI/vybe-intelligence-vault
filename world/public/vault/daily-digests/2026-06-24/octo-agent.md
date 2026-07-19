---
title: Leihb/octo-agent
category: world/public/vault/daily-digests/2026-06-24
tech_stack:
- Go
- Anthropic Messages API
- OpenAI Chat Completions API
- CLI/TUI
- Web Server
- IM Bridge
- MCP (Model Context Protocol)
- YAML
- Landlock (Linux)
- Seatbelt (macOS)
quality_score: 9
rag_relevance: 8
tags:
- AI agents
- multi-modal interfaces
- sandboxing
- MCP integration
- Go binary
source: https://github.com/Leihb/octo-agent
discovered_at: '2026-06-24T13:20:39Z'
evaluated_by: mistral-small-latest
---

## Summary
octo-agent is a functionality-first AI agent framework distributed as a single Go binary, supporting Anthropic and OpenAI-compatible APIs. It provides CLI, web, and IM interfaces for agentic workflows, including multi-step tool execution, sandboxing, and persistent memory.

## Key Features
- Supports Anthropic and OpenAI-compatible APIs with unified reasoning controls
- Provides CLI, web, and IM interfaces for agentic workflows
- Includes built-in tools (file operations, terminal, web fetch) and MCP client support
- Offers OS-level sandboxing (macOS/Linux) and persistent memory/session management
- Supports skills (reusable instruction sets) and sub-agents for autonomous multi-step goals

## Why It Matters for RAG Builders
octo-agent simplifies the deployment and management of AI agents with multi-interface support, sandboxing, and MCP integration, making it essential for building secure and scalable agentic systems.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Anthropic Messages API
Automated review identified **Anthropic Messages API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI Chat Completions API
Automated review identified **OpenAI Chat Completions API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI/TUI
Automated review identified **CLI/TUI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Web Server
Automated review identified **Web Server** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### IM Bridge
Automated review identified **IM Bridge** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Landlock (Linux)
Automated review identified **Landlock (Linux)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Seatbelt (macOS)
Automated review identified **Seatbelt (macOS)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
