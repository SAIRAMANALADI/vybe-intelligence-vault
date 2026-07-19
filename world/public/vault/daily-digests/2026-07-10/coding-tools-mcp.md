---
title: xyTom/coding-tools-mcp
category: world/public/vault/daily-digests/2026-07-10
tech_stack:
- Python
- MCP (Model Context Protocol)
- FastAPI
- Landlock (Linux)
- Docker
- Cloudflare Tunnel
- Git
- Shell Execution
quality_score: 9
rag_relevance: 8
tags:
- MCP server
- coding agent
- local primitives
- file operations
- git integration
source: https://github.com/xyTom/coding-tools-mcp
discovered_at: '2026-07-10T06:53:10Z'
evaluated_by: mistral-small-latest
---

## Summary
Coding Tools MCP is a model-neutral runtime server that exposes local coding primitives via the MCP protocol, enabling AI agents to inspect repositories, read/write files, apply patches, execute commands, and interact with git operations without external dependencies or prompt wrappers.

## Key Features
- Exposes local coding primitives (file I/O, patches, git ops) via MCP for AI agents
- Supports multiple permission modes (safe, trusted, dangerous) for security control
- Provides tool profiles (full, read-only, compat-readonly-all) for client compatibility
- Includes sandboxing and confinement (Landlock, Docker) for safer execution
- Offers remote MCP support via tunnels (Cloudflare, ngrok, Dev Tunnel) with auth modes

## Why It Matters for RAG Builders
It enables AI agents to safely interact with local codebases and execute development tasks without external dependencies, making it essential for building robust coding assistants.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Landlock (Linux)
Automated review identified **Landlock (Linux)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloudflare Tunnel
Automated review identified **Cloudflare Tunnel** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Shell Execution
Automated review identified **Shell Execution** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
