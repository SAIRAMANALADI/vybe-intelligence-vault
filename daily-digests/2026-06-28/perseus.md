---
title: "Perseus-Computing-LLC/perseus"
category: "Orchestrator"
tech_stack: ["Python", "Model Context Protocol (MCP)", "SQLite", "Rust (Mimir backend)", "Docker", "FastAPI (implied by MCP server architecture)"]
quality_score: 9
rag_relevance: 8
tags: ["context resolution", "live state", "MCP server", "persistent memory", "AI agent tooling"]
source: "https://github.com/Perseus-Computing-LLC/perseus"
discovered_at: "2026-06-28T23:09:49Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Perseus is a live context engine that resolves AI assistant context in real-time using the Model Context Protocol (MCP). It pre-processes directives like `@query` or `@services` into verified, up-to-date markdown context, eliminating cold-start orientation and stale data drag for AI agents.

## Key Features
- Real-time context resolution via MCP tools (e.g., `@query`, `@services`, `@memory`) that fetch live workspace state at render time
- Integration with Mimir for persistent, offline-capable memory with BM25 and hybrid search (no external model dependencies)
- Security-conscious design with opt-in shell execution tools and environment variable controls
- Multi-assistant compatibility (Claude, Cursor, Codex, Hermes, Rovo Dev) with auto-detection and tailored output
- Hackathon-validated features including dependency impact analysis (Blast Radius), autonomous PR review (PR Pilot), and cross-session memory agents

## Why It Matters for RAG Builders
Perseus eliminates stale context drag in AI agent workflows by dynamically resolving and rendering verified workspace state, ensuring agents always operate on current, accurate information without manual orientation.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Rust (Mimir backend)
Automated review identified **Rust (Mimir backend)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI (implied by MCP server architecture)
Automated review identified **FastAPI (implied by MCP server architecture)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
