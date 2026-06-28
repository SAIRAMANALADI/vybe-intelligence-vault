---
title: "TsukumoHQ/WRAI.TH"
category: "Orchestrator"
tech_stack: ["Go", "SQLite (FTS5)", "MCP (Model Context Protocol)", "CGO", "HTTP API", "Claude Code Integration"]
quality_score: 9
rag_relevance: 8
tags: ["multi-agent orchestration", "persistent memory", "MCP protocol", "agent communication", "task hierarchy"]
source: "https://github.com/TsukumoHQ/WRAI.TH"
discovered_at: "2026-06-28T22:05:53Z"
evaluated_by: "mistral-small-latest"
---

## Summary
WRAI.TH is a mission-control platform for managing AI agent fleets, enabling persistent memory, inter-agent communication, and task execution across sessions. It provides a dashboard for real-time oversight of agent activity, memory, and task hierarchies.

## Key Features
- Persistent agent memory across sessions and context resets
- Inter-agent messaging with priority routing (P0-P3) and TTL expiry
- Nested task execution with roll-up progress tracking
- Token-aware context budget pruning for efficient memory management
- Real-time mission-control dashboard for fleet monitoring

## Why It Matters for RAG Builders
WRAI.TH provides the critical infrastructure for scaling AI agent fleets by enabling persistent memory, structured communication, and hierarchical task execution, essential for building robust RAG systems.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite (FTS5)
Automated review identified **SQLite (FTS5)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CGO
Automated review identified **CGO** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP API
Automated review identified **HTTP API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code Integration
Automated review identified **Claude Code Integration** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
