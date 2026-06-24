---
title: "proticom/gnosys"
category: "Orchestrator"
tech_stack: ["TypeScript", "SQLite", "Node.js", "MCP (Model Context Protocol)", "FTS5 (Full-Text Search)", "better-sqlite3", "@huggingface/transformers", "Obsidian"]
quality_score: 9
rag_relevance: 10
tags: ["persistent memory", "MCP server", "SQLite", "federated search", "AI agent tooling"]
source: "https://github.com/proticom/gnosys"
discovered_at: "2026-06-24T13:22:58Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Gnosys provides AI agents with persistent, federated memory storage using a single SQLite database for sub-10ms reads, eliminating the need for external vector databases or services. It integrates as a CLI and MCP server, enabling seamless memory management across sessions, projects, and machines.

## Key Features
- Central SQLite brain with sub-10ms reads for unified memory storage across projects and users
- Federated hybrid search (keyword + semantic) with tier-boosted ranking across scopes
- MCP server exposing 50+ memory tools for integration with IDEs and AI agents
- Multi-machine sync with conflict detection and Obsidian export for human-readable knowledge bases
- Dream Mode for idle-time consolidation, confidence decay, and relationship discovery

## Why It Matters for RAG Builders
Gnosys eliminates the complexity of managing separate vector databases for AI agents by providing a lightweight, persistent memory system that integrates directly into workflows and tools.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5 (Full-Text Search)
Automated review identified **FTS5 (Full-Text Search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### better-sqlite3
Automated review identified **better-sqlite3** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### @huggingface/transformers
Automated review identified **@huggingface/transformers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Obsidian
Automated review identified **Obsidian** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
