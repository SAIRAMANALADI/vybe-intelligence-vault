---
title: Nocetic/flowly
category: daily-digests/2026-07-09
tech_stack:
- Python
- LLM Providers (OpenRouter, Anthropic, OpenAI, Google Gemini, Groq, xAI, Zhipu)
- MCP (Model Context Protocol)
- Terminal UI (TUI)
- Sandboxing (macOS sandbox-exec, Linux bwrap)
- WebSockets
- Git
- uv (Python package manager)
- Apache 2.0 License
quality_score: 9
rag_relevance: 8
tags:
- personal AI agent
- self-hosted
- memory management
- MCP integration
- multi-channel
source: https://github.com/Nocetic/flowly
discovered_at: '2026-07-09T00:05:52Z'
evaluated_by: mistral-small-latest
---

## Summary
Flowly is an open-source personal AI agent that runs locally on your machine with your own LLM keys, providing a unified memory system and skills library across multiple communication channels. It enables self-hosted, sandboxed AI workflows with built-in governance, scheduling, and extensibility via plugins and MCP integration.

## Key Features
- Unified memory system with governance and trust scoring for long-term knowledge retention
- Cross-channel support (Terminal, Telegram, Discord, Slack, WhatsApp, Email, voice) with shared conversation memory
- 40+ built-in tools and 135+ skills, including file I/O, web search, computer use, and integrations with Linear, Trello, Home Assistant, and Google Workspace
- Sandboxed execution environment with plugin architecture for extensibility and custom tools
- MCP server support for bidirectional integration with external tools and AI clients like Claude Desktop

## Why It Matters for RAG Builders
Flowly provides a self-hosted, governed memory system and multi-channel agent framework that enables RAG builders to integrate persistent, cross-session knowledge with sandboxed, extensible AI workflows.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM Providers (OpenRouter, Anthropic, OpenAI, Google Gemini, Groq, xAI, Zhipu)
Automated review identified **LLM Providers (OpenRouter, Anthropic, OpenAI, Google Gemini, Groq, xAI, Zhipu)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Terminal UI (TUI)
Automated review identified **Terminal UI (TUI)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Sandboxing (macOS sandbox-exec, Linux bwrap)
Automated review identified **Sandboxing (macOS sandbox-exec, Linux bwrap)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebSockets
Automated review identified **WebSockets** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv (Python package manager)
Automated review identified **uv (Python package manager)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Apache 2.0 License
Automated review identified **Apache 2.0 License** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
