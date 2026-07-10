---
title: "VitruvianSoftware/mcp-slack"
category: "Tooling"
tech_stack: ["JavaScript", "Node.js", "Slack API", "MCP (Model Context Protocol)", "TypeScript (inferred from build setup)"]
quality_score: 9
rag_relevance: 8
tags: ["Slack integration", "MCP server", "dual-token architecture", "workspace orchestration", "AI agent tools"]
source: "https://github.com/VitruvianSoftware/mcp-slack"
discovered_at: "2026-07-10T06:15:23Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A custom Slack MCP server that implements a dual-token architecture for advanced AI agent interactions, enabling messages to appear as the authenticated user rather than a bot. It extends Slack's native capabilities with 22 tools for workspace orchestration, canvas management, and advanced search.

## Key Features
- Dual-token support (Bot + User tokens) for authentic user impersonation in messages
- 22 specialized tools for Slack operations (vs. 9 in the official server)
- Full CRUD operations for Slack Canvases and advanced search capabilities
- Workspace management tools for pins, bookmarks, topics, and threads
- Auto-configuration support for AI agents like Antigravity, Claude Code, and Gemini CLI

## Why It Matters for RAG Builders
This repository enables AI agents to interact with Slack in a more human-like way, preserving user identity and expanding operational capabilities beyond basic read/reply functions, making it essential for advanced RAG and agent workflows.

## Tech Stack Deep Dive
### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Slack API
Automated review identified **Slack API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript (inferred from build setup)
Automated review identified **TypeScript (inferred from build setup)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
