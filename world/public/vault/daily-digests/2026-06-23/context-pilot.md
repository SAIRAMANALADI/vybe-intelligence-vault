---
title: "bigmoostache/context-pilot"
category: "Orchestrator"
tech_stack: ["Rust", "React", "TypeScript", "Vite", "Tauri", "TUI (Ratatui, Crossterm)", "Meilisearch", "SQLite", "Unix sockets", "HTTP/REST", "Server-Sent Events (SSE)"]
quality_score: 9
rag_relevance: 8
tags: ["AI coding agent", "multi-agent orchestration", "self-hosted", "terminal IDE", "fleet management"]
source: "https://github.com/bigmoostache/context-pilot"
discovered_at: "2026-06-23T21:30:17Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Context Pilot is a self-hosted AI coding agent with a terminal-based TUI and a fleet orchestration system, enabling multiple agents to collaborate, be supervised, and managed via a web cockpit. It combines Rust-based agents, a React frontend, and a backend orchestrator for scalable AI-driven development workflows.

## Key Features
- Multi-agent fleet orchestration with real-time supervision via web cockpit
- Elm/Redux-style event loop for agent TUI with adaptive cadence (2ms to 50ms)
- Three-tier durability model (oplog, state cache, stream plane) for resilience
- Modular plugin system with 21+ crates for extensible functionality
- Unix socket-based communication between agents, orchestrator, and services

## Why It Matters for RAG Builders
It provides a scalable, self-hosted platform for managing multiple AI coding agents with real-time collaboration, supervision, and persistent state, critical for enterprise-grade AI development workflows.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React
Automated review identified **React** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vite
Automated review identified **Vite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tauri
Automated review identified **Tauri** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TUI (Ratatui, Crossterm)
Automated review identified **TUI (Ratatui, Crossterm)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Meilisearch
Automated review identified **Meilisearch** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Unix sockets
Automated review identified **Unix sockets** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/REST
Automated review identified **HTTP/REST** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Server-Sent Events (SSE)
Automated review identified **Server-Sent Events (SSE)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
