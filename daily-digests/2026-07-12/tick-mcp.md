---
title: "Cocabadger/tick-mcp"
category: "Tooling"
tech_stack: ["Python", "MCP (Model Context Protocol)", "Docker", "Railway/Render/Fly.io (for remote deployment)", "Claude Desktop", "Claude Code", "claude.ai"]
quality_score: 9
rag_relevance: 8
tags: ["time synchronization", "MCP server", "AI assistant accuracy", "timestamp enforcement", "Claude integration"]
source: "https://github.com/Cocabadger/tick-mcp"
discovered_at: "2026-07-12T13:36:11Z"
evaluated_by: "mistral-small-latest"
---

## Summary
tick is an MCP time server designed to provide accurate, real-time clock functionality for AI assistants, addressing issues like stale timestamps and hallucinated time references in long-running sessions. It offers local, remote, and hook-based implementations to integrate with various MCP clients.

## Key Features
- Provides real-time `now` and recency-checking `since` tools to prevent AI hallucinations about time
- Offers local (stdio), remote (HTTP), and hook-based implementations for flexibility
- Enforces time-checking via tool descriptions and user memory rules to ensure compliance
- Zero-dependency design with single-file implementations for easy setup
- Supports IANA timezones and integrates with Claude Desktop, Code, and claude.ai

## Why It Matters for RAG Builders
tick ensures AI assistants maintain accurate time awareness, reducing hallucinations and improving reliability in long-running or multi-day interactions.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Railway/Render/Fly.io (for remote deployment)
Automated review identified **Railway/Render/Fly.io (for remote deployment)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Desktop
Automated review identified **Claude Desktop** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### claude.ai
Automated review identified **claude.ai** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
