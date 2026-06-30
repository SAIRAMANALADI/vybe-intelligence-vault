---
title: "michalekz/claude-bridge"
category: "Orchestrator"
tech_stack: ["TypeScript", "VS Code Extension API", "MCP (Model Context Protocol)", "Node.js", "JSONL (JSON Lines) for session storage", "Chokidar (file watcher)", "Claude Code CLI"]
quality_score: 9
rag_relevance: 8
tags: ["multi-agent orchestration", "context sharing", "local filesystem", "VS Code integration", "Claude Code plugin"]
source: "https://github.com/michalekz/claude-bridge"
discovered_at: "2026-06-30T13:12:49Z"
evaluated_by: "mistral-small-latest"
---

## Summary
claude-bridge is a VS Code plugin and CLI tool that enables multi-chat orchestration for Claude Code, allowing persistent chats to communicate, share context, and search across sessions via local filesystem-based inboxes. It transforms isolated chats into a queryable library for both humans and agents.

## Key Features
- Peer-to-peer messaging and inbox system for reliable cross-chat communication without API keys or servers
- Cross-session search and read capabilities to query transcripts across all projects or specific chats
- Context window monitoring and guardrails to prevent autocompaction risks and manage token usage
- Role-specific playbooks (manager, memory-keeper) for structured agent coordination workflows
- Dynamic terminal tab titles and real-time push channels for enhanced user experience

## Why It Matters for RAG Builders
claude-bridge enables persistent, queryable agent chats that can collaborate seamlessly, reducing duplication of effort and improving context retention for RAG and AI workflows.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### VS Code Extension API
Automated review identified **VS Code Extension API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSONL (JSON Lines) for session storage
Automated review identified **JSONL (JSON Lines) for session storage** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Chokidar (file watcher)
Automated review identified **Chokidar (file watcher)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code CLI
Automated review identified **Claude Code CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
