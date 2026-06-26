---
title: "HBarefoot/engram"
category: "Agent Framework"
tech_stack: ["JavaScript", "TypeScript", "SQLite", "Node.js", "Model Context Protocol (MCP)", "@xenova/transformers", "Tauri (for desktop app)", "REST API"]
quality_score: 9
rag_relevance: 10
tags: ["persistent memory", "MCP-native", "local embeddings", "agent tooling", "offline-first"]
source: "https://github.com/HBarefoot/engram"
discovered_at: "2026-06-26T16:16:49Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Engram provides persistent, in-process memory for AI agents using local SQLite with bundled embeddings, eliminating the need for cloud infrastructure or API keys. It integrates natively with the Model Context Protocol (MCP) and offers features like automatic secret detection, feedback loops, and contradiction resolution.

## Key Features
- In-process memory storage with zero infrastructure requirements
- Native MCP integration for seamless agent integration (Claude, Cursor, etc.)
- Automatic secret detection and blocking on memory writes
- Feedback loop and contradiction resolution for memory improvement over time
- Built-in dashboard and CLI for easy management and integration

## Why It Matters for RAG Builders
Engram enables AI agents to maintain persistent, long-term memory without external dependencies, making it ideal for privacy-focused, offline-capable RAG systems that require seamless integration and minimal operational overhead.

## Tech Stack Deep Dive
### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### @xenova/transformers
Automated review identified **@xenova/transformers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tauri (for desktop app)
Automated review identified **Tauri (for desktop app)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
