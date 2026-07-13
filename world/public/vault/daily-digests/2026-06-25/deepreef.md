---
title: "bzcsk2/deepreef"
category: "Agent Framework"
tech_stack: ["TypeScript", "Bun", "Ink", "React", "Node.js", "OpenAI-compatible APIs", "MCP (Model Context Protocol)", "AsyncGenerator", "CLI/TUI", "Jest (testing)"]
quality_score: 9
rag_relevance: 9
tags: ["agent framework", "supervisor-worker", "low-cost models", "terminal UI", "local LLM"]
source: "https://github.com/bzcsk2/deepreef"
discovered_at: "2026-06-25T08:28:54Z"
evaluated_by: "mistral-small-latest"
---

## Summary
DeepReef is a terminal-native AI agent runtime designed to make low-cost, local, or free models effective for engineering tasks through a supervised execution loop. It uses a Supervisor/Worker architecture to optimize planning, review, and recovery while minimizing token waste with cache-aware context management.

## Key Features
- Supervisor/Worker workflow for long-running tasks with structured checkpoints
- Cache-aware agent loop to minimize token waste and optimize low-cost model usage
- Deny-first permission engine for safe file and shell operations
- Terminal-native TUI built with Ink/React for observability and session persistence
- 30+ built-in tools for file operations, editing, shell execution, MCP integration, and memory management

## Why It Matters for RAG Builders
DeepReef enables RAG builders to leverage low-cost or local models effectively for execution tasks while maintaining high reliability through supervised loops and safety mechanisms.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun
Automated review identified **Bun** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ink
Automated review identified **Ink** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React
Automated review identified **React** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI-compatible APIs
Automated review identified **OpenAI-compatible APIs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AsyncGenerator
Automated review identified **AsyncGenerator** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI/TUI
Automated review identified **CLI/TUI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Jest (testing)
Automated review identified **Jest (testing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
