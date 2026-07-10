---
title: "Ink-dark/orcha"
category: "Agent Framework"
tech_stack: ["Rust", "TypeScript", "Node.js", "Feishu API", "SQLite", "Git", "LLM (OpenAI-compatible)", "IPC (Unix Socket/TCP)", "Cargo (Rust package manager)"]
quality_score: 9
rag_relevance: 9
tags: ["AI coding agent", "multi-agent system", "Feishu integration", "autonomous git operations", "human-in-the-loop approval"]
source: "https://github.com/Ink-dark/orcha"
discovered_at: "2026-07-10T02:26:06Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Orcha is an AI-driven coding agent integrated with Feishu IM that autonomously plans, codes, tests, reviews, and pushes changes to a new git branch upon receiving a user request via @-mention. It operates through a multi-agent system with human-in-the-loop approvals and AI-driven scheduling.

## Key Features
- AI-driven task scheduling with LLM-based decision making for dynamic agent selection
- Feishu IM integration for seamless user interaction via @-mention without public URLs
- Git worktree isolation for safe, non-destructive code modifications
- Human-in-the-loop approval system for critical operations (file writes, commands, deletions)
- Circuit breakers and retries to prevent infinite loops and ensure task completion

## Why It Matters for RAG Builders
Orcha provides a robust framework for autonomous AI-driven coding tasks with built-in safety, approvals, and multi-agent collaboration, making it essential for teams building advanced RAG or AI agent systems.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Feishu API
Automated review identified **Feishu API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM (OpenAI-compatible)
Automated review identified **LLM (OpenAI-compatible)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### IPC (Unix Socket/TCP)
Automated review identified **IPC (Unix Socket/TCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cargo (Rust package manager)
Automated review identified **Cargo (Rust package manager)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
