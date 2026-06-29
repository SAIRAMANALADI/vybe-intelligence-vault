---
title: "jahrulnr/sapaloq"
category: "Orchestrator"
tech_stack: ["Go", "Wails v2", "systemd", "IPC (Unix sockets)", "SQLite", "JSON Schema", "Linux desktop (GNOME/XDG)"]
quality_score: 8
rag_relevance: 6
tags: ["modular agents", "LLM bridge", "desktop companion", "IPC orchestrator", "Linux tooling"]
source: "https://github.com/jahrulnr/sapaloq"
discovered_at: "2026-06-29T02:52:50Z"
evaluated_by: "mistral-small-latest"
---

## Summary
SapaLOQ is a modular desktop companion for Linux that combines platform drivers, an LLM bridge, and sub-agent nodes into a portable system. It features a Wails-based UI widget, an IPC socket for communication, and a systemd-managed background service for persistent operation.

## Key Features
- Modular architecture with platform drivers and LLM bridges for extensibility
- Wails-based UI widget with XDG autostart integration for seamless desktop experience
- IPC socket-based communication between core service and UI
- Vault system for tracking undeclared tool calls and improving LLM tool surface
- Systemd-managed background service for persistent, headless operation

## Why It Matters for RAG Builders
SapaLOQ provides a structured framework for integrating modular agents and LLM bridges in a desktop environment, simplifying the deployment and management of AI-driven tools for RAG systems.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Wails v2
Automated review identified **Wails v2** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### systemd
Automated review identified **systemd** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### IPC (Unix sockets)
Automated review identified **IPC (Unix sockets)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON Schema
Automated review identified **JSON Schema** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Linux desktop (GNOME/XDG)
Automated review identified **Linux desktop (GNOME/XDG)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
