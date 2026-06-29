---
title: "jackcongmac/claude-codex-bridge"
category: "Orchestrator"
tech_stack: ["Python", "Model Context Protocol (MCP)", "Claude Code CLI", "Codex CLI", "JSON", "Shell Scripting"]
quality_score: 9
rag_relevance: 8
tags: ["MCP bridge", "agent collaboration", "persistent sessions", "asymmetric agents", "project-aware"]
source: "https://github.com/jackcongmac/claude-codex-bridge"
discovered_at: "2026-06-29T22:54:50Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A bidirectional MCP bridge enabling Claude Code and Codex to call each other as tools, with the Claude side acting as a persistent, project-aware colleague. It facilitates asymmetric agent collaboration through shared memory files and coordination layers.

## Key Features
- Bidirectional tool calling between Claude Code and Codex via MCP
- Persistent project-aware Claude colleague with per-directory session memory
- Shared coordination layer using collaboration.md and signal files
- Resource-aware routing with safety checks and quota management
- Read-only and read-write modes for security flexibility

## Why It Matters for RAG Builders
It enables seamless collaboration between asymmetric AI agents, reducing manual intervention and improving workflow automation for RAG builders.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code CLI
Automated review identified **Claude Code CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Codex CLI
Automated review identified **Codex CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Shell Scripting
Automated review identified **Shell Scripting** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
