---
title: "8-Sync-Dev/su-code"
category: "Orchestrator"
tech_stack: ["Rust", "omp (oh-my-pi)", "Kitty Terminal", "Helix Editor", "codegraph", "GitHub CLI", "abduco", "SQLite", "MCP (Model Context Protocol)", "Axum (for dashboard)", "Vite (for dashboard frontend)", "Systemd (for timers)", "Git", "Python (for some skills)", "GGUF (for local model serving)"]
quality_score: 9
rag_relevance: 8
tags: ["AI coding assistant", "terminal-first", "agent orchestration", "project memory", "CLI harness"]
source: "https://github.com/8-Sync-Dev/su-code"
discovered_at: "2026-07-08T12:25:28Z"
evaluated_by: "mistral-small-latest"
---

## Summary
su-code is a terminal-first AI coding harness designed to integrate AI agents into CLI workflows for Linux, macOS, and Windows. It provides a project-based environment where agents observe context, manage memory, and execute tasks via a unified interface built around omp (oh-my-pi) and tools like Kitty, Helix, and codegraph.

## Key Features
- Project-based AI agent environment with persistent memory in `su-code/` directory
- Integrated dashboard for real-time monitoring and CRUD operations on agent teams
- Prebuilt binary installation with no dependencies (Rust, Git, etc.) required
- Skill system with 37 bundled skills (always-on and on-demand) and extensible via GitHub repos
- Automated project setup, health checks, and lifecycle management (e.g., `8sync setup`, `8sync doctor`, `8sync up`)

## Why It Matters for RAG Builders
It provides a unified, terminal-first environment for AI agents to observe project context, manage memory, and execute tasks, streamlining RAG workflows with persistent state and real-time monitoring.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### omp (oh-my-pi)
Automated review identified **omp (oh-my-pi)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Kitty Terminal
Automated review identified **Kitty Terminal** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Helix Editor
Automated review identified **Helix Editor** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### codegraph
Automated review identified **codegraph** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub CLI
Automated review identified **GitHub CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### abduco
Automated review identified **abduco** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Axum (for dashboard)
Automated review identified **Axum (for dashboard)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vite (for dashboard frontend)
Automated review identified **Vite (for dashboard frontend)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Systemd (for timers)
Automated review identified **Systemd (for timers)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python (for some skills)
Automated review identified **Python (for some skills)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GGUF (for local model serving)
Automated review identified **GGUF (for local model serving)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
