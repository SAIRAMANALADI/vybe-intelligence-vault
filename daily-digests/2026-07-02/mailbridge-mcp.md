---
title: "AsaTyr2018/Mailbridge-MCP"
category: "Orchestrator"
tech_stack: ["Python", "IMAP/SMTP", "SQLite", "FastAPI", "Docker", "CardDAV", "CalDAV", "ActiveSync", "Bearer Token Authentication", "Full-Text Search (FTS)", "HTTPS"]
quality_score: 8
rag_relevance: 9
tags: ["email integration", "MCP server", "self-hosted", "security-focused", "automation"]
source: "https://github.com/AsaTyr2018/Mailbridge-MCP"
discovered_at: "2026-07-02T21:06:23Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Mailbridge MCP is a self-hosted mail bridge that securely integrates email accounts with MCP-capable AI clients and automation tools. It provides a focused web admin UI for account management while exposing scoped MCP tools for mail operations, ensuring credentials and sensitive data remain encrypted and user-scoped.

## Key Features
- Secure, encrypted IMAP/SMTP credential storage with user-scoped access
- MCP tools for mail sync, search, drafting, and guarded sending with policy enforcement
- Multiuser support with admin controls, audit logging, and token management
- CardDAV/CalDAV/ActiveSync sync for contacts and calendar events
- Draft approval workflows requiring explicit user confirmation for sensitive operations

## Why It Matters for RAG Builders
Mailbridge MCP securely bridges email systems with AI agents, enabling safe and controlled access to mail data while keeping credentials encrypted and user-scoped, critical for RAG pipelines requiring email integration.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### IMAP/SMTP
Automated review identified **IMAP/SMTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CardDAV
Automated review identified **CardDAV** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CalDAV
Automated review identified **CalDAV** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ActiveSync
Automated review identified **ActiveSync** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bearer Token Authentication
Automated review identified **Bearer Token Authentication** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Full-Text Search (FTS)
Automated review identified **Full-Text Search (FTS)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTPS
Automated review identified **HTTPS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
