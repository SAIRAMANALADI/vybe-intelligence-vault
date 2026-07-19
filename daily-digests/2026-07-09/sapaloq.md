---
title: jahrulnr/sapaloq
category: daily-digests/2026-07-09
tech_stack:
- Go
- Wails v2
- WebKitGTK
- systemd
- SQLite
- JSON
- IPC
- Linux desktop
quality_score: 9
rag_relevance: 7
tags:
- LLM orchestration
- desktop agent
- modular drivers
- IPC communication
- Linux HUD
source: https://github.com/jahrulnr/sapaloq
discovered_at: '2026-07-09T17:17:48Z'
evaluated_by: mistral-small-latest
---

## Summary
SapaLOQ is a portable desktop companion for Linux that combines modular platform drivers, LLM bridges, and sub-agent nodes into a unified runtime. It features a Wails-based UI widget, an IPC socket for communication, and a systemd-managed background service for persistent operation.

## Key Features
- Modular platform drivers and LLM bridges for extensibility
- Sub-agent nodes (local or remote) for distributed task handling
- Wails-based UI widget with FAB+popup interface
- Systemd-managed background service for persistent operation
- Vault for tracking undeclared tool calls and schema aliases

## Why It Matters for RAG Builders
SapaLOQ provides a modular, persistent orchestrator for LLM-driven agents with a Linux-first desktop UI, enabling seamless integration of custom drivers and tools for AI workflows.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Wails v2
Automated review identified **Wails v2** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebKitGTK
Automated review identified **WebKitGTK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### systemd
Automated review identified **systemd** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### IPC
Automated review identified **IPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Linux desktop
Automated review identified **Linux desktop** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
