---
title: jackchuka/slackcli
category: daily-digests/2026-07-07
tech_stack:
- Go
- MCP (Model Context Protocol)
- Slack API
- JSON
- CLI
quality_score: 9
rag_relevance: 8
tags:
- Slack integration
- MCP server
- LLM agent tooling
- CLI automation
- read-only mode
source: https://github.com/jackchuka/slackcli
discovered_at: '2026-07-07T02:34:20Z'
evaluated_by: mistral-small-latest
---

## Summary
A CLI and MCP server for Slack designed specifically for LLM-powered agents, offering programmatic access with JSON-first output, structured error handling, and read-only mode for safe AI interactions.

## Key Features
- MCP server for seamless AI agent integration with Slack
- JSON-first output optimized for LLM consumption with TTY-aware table fallback
- Structured error codes and automatic rate limit retries for reliable agent interactions
- Read-only mode to prevent accidental write operations by AI agents
- Comprehensive Slack operations including channels, messages, users, files, and reactions

## Why It Matters for RAG Builders
It provides a secure, agent-optimized interface to Slack, enabling RAG systems to interact with Slack data programmatically without manual intervention.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Slack API
Automated review identified **Slack API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
