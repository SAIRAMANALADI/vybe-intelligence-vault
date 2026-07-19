---
title: smart-mcp-proxy/mcpproxy-go
category: daily-digests/2026-06-24
tech_stack:
- Go
- MCP (Model Context Protocol)
- HTTPS/TLS
- Docker
- Prometheus
- OpenTelemetry
- SARIF
- Systemd
- Homebrew
- AUR
quality_score: 9
rag_relevance: 9
tags:
- MCP gateway
- AI agent orchestration
- security proxy
- tool federation
- multi-server management
source: https://github.com/smart-mcp-proxy/mcpproxy-go
discovered_at: '2026-06-24T06:50:05Z'
evaluated_by: mistral-small-latest
---

## Summary
MCPProxy is a secure gateway and proxy for managing multiple Model Context Protocol (MCP) servers, enabling AI agents to federate hundreds of servers while enforcing security, performance, and scalability optimizations. It provides a unified endpoint, embedded web UI, and optional system tray app for macOS.

## Key Features
- Federates hundreds of MCP servers into a single endpoint, bypassing client-side tool limits (e.g., Cursor's 40-tool cap)
- Embedded web UI and optional macOS menu-bar app for easy management and monitoring
- Advanced security features including automatic quarantine, tool poisoning attack prevention, and pluggable security scanners (Snyk, Semgrep, Trivy)
- Cross-platform support with single binary for macOS, Windows, and Linux (including ARM64)
- Performance optimizations like token reduction (~99%) and accuracy improvements (~43%) via unified tool discovery

## Why It Matters for RAG Builders
MCPProxy is essential for RAG/AI stack builders who need to scale beyond client-side tool limits while enforcing security and performance optimizations across multiple MCP servers.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTPS/TLS
Automated review identified **HTTPS/TLS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Prometheus
Automated review identified **Prometheus** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenTelemetry
Automated review identified **OpenTelemetry** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SARIF
Automated review identified **SARIF** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Systemd
Automated review identified **Systemd** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Homebrew
Automated review identified **Homebrew** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AUR
Automated review identified **AUR** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
