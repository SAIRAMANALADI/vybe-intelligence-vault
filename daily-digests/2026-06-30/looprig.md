---
title: "bzcsk2/looprig"
category: "Agent Framework"
tech_stack: ["TypeScript", "Bun", "Ink/React", "Node.js", "OpenAI-compatible API", "MCP (Model Context Protocol)", "AgentMemory"]
quality_score: 8
rag_relevance: 9
tags: ["agent runtime", "supervised execution", "low-cost models", "terminal UI", "workflow automation"]
source: "https://github.com/bzcsk2/looprig"
discovered_at: "2026-06-30T07:51:10Z"
evaluated_by: "mistral-small-latest"
---

## Summary
LoopRig is a terminal-native AI loop agent runtime that enables low-cost, local, or free models to perform real engineering tasks through a supervised execution loop. It separates planning (Supervisor) and execution (Worker) roles to optimize cost, reliability, and observability.

## Key Features
- Supervisor/Worker architecture for cost-efficient task execution
- Cache-aware agent loop with tool-call repair to reduce token waste
- Deny-first permission system for safe file and shell operations
- Terminal-native TUI built with Ink and React for observability
- 30+ built-in tools for file operations, editing, shell, web, MCP, and workflows

## Why It Matters for RAG Builders
LoopRig enables RAG and AI stack builders to leverage low-cost or local models for execution while using stronger models only for planning and supervision, reducing operational costs without sacrificing reliability.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun
Automated review identified **Bun** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ink/React
Automated review identified **Ink/React** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI-compatible API
Automated review identified **OpenAI-compatible API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AgentMemory
Automated review identified **AgentMemory** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
