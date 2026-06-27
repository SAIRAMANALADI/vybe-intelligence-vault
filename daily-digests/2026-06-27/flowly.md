---
title: "Nocetic/flowly"
category: "Agent Framework"
tech_stack: ["Python", "MCP (Model Context Protocol)", "LLM providers (OpenRouter, Anthropic, OpenAI, etc.)", "Terminal UI (TUI)", "WebSocket", "Sandboxing (macOS sandbox-exec, Linux bwrap)", "uv (Python package manager)", "FastAPI (implied by MCP and RPC architecture)"]
quality_score: 9
rag_relevance: 8
tags: ["AI agent", "self-hosted", "memory management", "multi-channel", "MCP integration"]
source: "https://github.com/Nocetic/flowly"
discovered_at: "2026-06-27T15:13:06Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Flowly is an open-source AI agent framework that runs locally on your machine, integrates with multiple communication channels (e.g., terminal, Telegram, Discord), and maintains a shared memory system across conversations. It supports self-improvement, task delegation, and MCP server integration while allowing users to bring their own LLM keys.

## Key Features
- Cross-session memory with governance and trust scoring for long-term context retention
- Multi-channel support (terminal, Telegram, Discord, Slack, WhatsApp, email, voice) with a unified gateway
- Self-improving skills and knowledge graph with user feedback loops and consolidation
- Built-in MCP server support (both client and server modes) for extensibility
- Sandboxed execution environment for security and isolation of tools and operations

## Why It Matters for RAG Builders
Flowly provides a robust, self-hosted framework for building and deploying AI agents with persistent memory, multi-channel integration, and self-improvement capabilities, making it essential for developers seeking full control over their AI stack.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM providers (OpenRouter, Anthropic, OpenAI, etc.)
Automated review identified **LLM providers (OpenRouter, Anthropic, OpenAI, etc.)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Terminal UI (TUI)
Automated review identified **Terminal UI (TUI)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebSocket
Automated review identified **WebSocket** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Sandboxing (macOS sandbox-exec, Linux bwrap)
Automated review identified **Sandboxing (macOS sandbox-exec, Linux bwrap)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv (Python package manager)
Automated review identified **uv (Python package manager)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI (implied by MCP and RPC architecture)
Automated review identified **FastAPI (implied by MCP and RPC architecture)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
