---
title: SinanTufekci/agent-intern
category: daily-digests/2026-06-25
tech_stack:
- Python
- Model Context Protocol (MCP)
- FastMCP
- Google Antigravity CLI
- OpenAI Codex
- uv (package manager)
- JSONL
- CLI tools
quality_score: 9
rag_relevance: 8
tags:
- MCP bridge
- multi-model orchestration
- Claude Code integration
- AI sub-agents
- Gemini 3.5 Flash
source: https://github.com/SinanTufekci/agent-intern
discovered_at: '2026-06-25T08:34:30Z'
evaluated_by: mistral-small-latest
---

## Summary
A Model Context Protocol (MCP) bridge that integrates Google's Antigravity CLI and OpenAI Codex as sub-agents within Claude Code, enabling text answers, image generation, and coding tasks while leveraging existing model quotas and logins.

## Key Features
- Bridges Google Antigravity CLI and OpenAI Codex as sub-agents inside Claude Code for unified AI workflows
- Enables image generation via Antigravity without additional API keys or tools
- Supports parallel task execution across multiple backends using `agent_swarm`
- Provides real-time diagnostics and status checks for both Antigravity and Codex
- Offers configurable sandboxing for Codex to control file and network access

## Why It Matters for RAG Builders
It enables AI engineers to seamlessly integrate and orchestrate multiple AI models (Gemini and Codex) within a single workflow, reducing context switching and leveraging existing model quotas for cost-efficient AI-driven tasks.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP
Automated review identified **FastMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Google Antigravity CLI
Automated review identified **Google Antigravity CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI Codex
Automated review identified **OpenAI Codex** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv (package manager)
Automated review identified **uv (package manager)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSONL
Automated review identified **JSONL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI tools
Automated review identified **CLI tools** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
