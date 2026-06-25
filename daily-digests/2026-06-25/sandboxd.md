---
title: "tastyeffectco/sandboxd"
category: "Orchestrator"
tech_stack: ["Go", "Docker", "Traefik", "SQLite", "OpenCode", "Claude Code", "Linux Containers", "Server-Sent Events (SSE)", "HTTP API"]
quality_score: 9
rag_relevance: 10
tags: ["AI app-builder", "multi-tenant isolation", "live preview URLs", "coding agents", "self-hosted"]
source: "https://github.com/tastyeffectco/sandboxd"
discovered_at: "2026-06-25T19:51:03Z"
evaluated_by: "mistral-small-latest"
---

## Summary
sandboxd is an open-source engine for building AI app-builder products, enabling users to spin up isolated cloud development environments with built-in coding agents and live preview URLs in a single command. It simplifies multi-tenant isolation, cost-efficient resource management, and agent orchestration for AI-driven development workflows.

## Key Features
- Creates isolated Linux containers with per-user filesystem and memory limits for secure multi-tenancy
- Integrates AI coding agents (OpenCode and Claude Code) to automate app development within sandboxes
- Provides live preview URLs for apps running in sandboxes, with automatic TLS and routing via Traefik
- Implements stop-on-idle and wake-on-demand to optimize resource usage and reduce costs
- Offers a simple HTTP API for managing sandboxes, tasks, and workspace files with persistent storage

## Why It Matters for RAG Builders
sandboxd provides the critical infrastructure layer for AI app-builders and agent platforms, enabling secure, scalable, and cost-efficient multi-tenant environments with live previews and agent orchestration in a single self-hosted command.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Traefik
Automated review identified **Traefik** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenCode
Automated review identified **OpenCode** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Linux Containers
Automated review identified **Linux Containers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Server-Sent Events (SSE)
Automated review identified **Server-Sent Events (SSE)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP API
Automated review identified **HTTP API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
