---
title: robotlearning123/gpt2agent
category: world/public/vault/daily-digests/2026-07-10
tech_stack:
- Python
- MCP (Model Context Protocol)
- curl_cffi
- OpenAI ChatGPT backend API
- TOML
- pytest
quality_score: 9
rag_relevance: 8
tags:
- MCP server
- ChatGPT integration
- agent tools
- code execution
- deep research
source: https://github.com/robotlearning123/gpt2agent
discovered_at: '2026-07-10T06:30:01Z'
evaluated_by: mistral-small-latest
---

## Summary
gpt2agent is an MCP server that integrates ChatGPT Plus/Pro accounts directly into MCP clients like Claude Code, Codex, and Cursor, exposing 25 tools for chat, agent workflows, deep research, code execution, and account management without requiring separate API keys.

## Key Features
- 25 MCP tools for direct ChatGPT backend API access (no proxy or separate API key required)
- Zero-config setup for MCP clients like Claude Code and Codex via `codex login` token reuse
- Supports advanced features: agent mode, deep research, image generation, code interpreter, and memory management
- Automatic token refresh and redaction of sensitive data in outputs
- Configurable via TOML files and supports both stdio and HTTP transports (with security warnings)

## Why It Matters for RAG Builders
It enables seamless integration of ChatGPT's advanced capabilities into local MCP clients, empowering AI engineers to build agentic workflows without relying on external APIs or proxies.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### curl_cffi
Automated review identified **curl_cffi** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI ChatGPT backend API
Automated review identified **OpenAI ChatGPT backend API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TOML
Automated review identified **TOML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pytest
Automated review identified **pytest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
