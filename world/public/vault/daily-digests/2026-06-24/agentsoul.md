---
title: NeoMei/agentsoul
category: daily-digests/2026-06-24
tech_stack:
- JavaScript
- Node.js
- SQLite
- CLI
- OpenCode Plugin System
quality_score: 8
rag_relevance: 7
tags:
- personality injection
- long-term memory
- OpenCode plugin
- AI agent enhancement
- context persistence
source: https://github.com/NeoMei/agentsoul
discovered_at: '2026-06-24T13:19:21Z'
evaluated_by: mistral-small-latest
---

## Summary
AgentSoul enhances AI agents by injecting personality and enabling long-term memory through configurable soul files and SQLite-based conversation history. It integrates with OpenCode to transform system prompts and persist context across sessions.

## Key Features
- Injects configurable personality (IDENTITY.md, SOUL.md, USER.md) into AI agent sessions
- Persists conversation history in SQLite (memory.db) for long-term context
- Seamless integration with OpenCode via plugin hooks for system prompt transformation
- Supports headless server mode and single-shot message processing
- Auto-registers plugin and survives context compaction in OpenCode

## Why It Matters for RAG Builders
AgentSoul enables AI agents to maintain consistent personality and context across sessions, critical for building engaging and coherent RAG applications.

## Tech Stack Deep Dive
### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenCode Plugin System
Automated review identified **OpenCode Plugin System** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
