---
title: "wtokarzewski/janus-agent"
category: "Agent Framework"
tech_stack: ["TypeScript", "Node.js", "SQLite", "FTS5 (Full-Text Search)", "ONNX Runtime", "@xenova/transformers", "Telegram Bot API", "Docker", "Vitest (Testing)"]
quality_score: 9
rag_relevance: 8
tags: ["autonomous agents", "local AI", "multi-tool integration", "hybrid memory search", "subagents"]
source: "https://github.com/wtokarzewski/janus-agent"
discovered_at: "2026-07-02T21:00:52Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Janus is a universal AI agent that operates locally, enabling autonomous task execution via CLI or Telegram. It integrates memory, tools, and subagents with hybrid search (FTS5 + vector) and supports multi-provider LLM failover.

## Key Features
- Supports 8 LLM providers with multi-provider failover and streaming responses
- Hybrid memory system combining FTS5 full-text search and local vector embeddings (all-MiniLM-L6-v2)
- 14 built-in tools for file operations, web interactions, cron scheduling, and subagent spawning
- Persistent cron scheduler with SQLite-backed task management and heartbeat monitoring
- MCP server integration for editor tool exposure via JSON-RPC over stdio

## Why It Matters for RAG Builders
Janus provides a robust, locally deployable agent framework with hybrid memory and tool integration, critical for building autonomous AI systems that require persistent context and multi-provider LLM resilience.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5 (Full-Text Search)
Automated review identified **FTS5 (Full-Text Search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ONNX Runtime
Automated review identified **ONNX Runtime** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### @xenova/transformers
Automated review identified **@xenova/transformers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Telegram Bot API
Automated review identified **Telegram Bot API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vitest (Testing)
Automated review identified **Vitest (Testing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
