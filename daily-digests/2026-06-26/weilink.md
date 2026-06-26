---
title: "Oaklight/weilink"
category: "Tooling"
tech_stack: ["Python", "AES-128 encryption", "SQLite", "ctypes", "OpenSSL", "FastAPI (for MCP/Web UI)", "CLI", "Docker"]
quality_score: 9
rag_relevance: 7
tags: ["WeChat Bot", "iLink Protocol", "MCP Server", "Zero-Dependency", "Message Queue"]
source: "https://github.com/Oaklight/weilink"
discovered_at: "2026-06-26T22:09:47Z"
evaluated_by: "mistral-small-latest"
---

## Summary
WeiLink is a lightweight Python SDK for the WeChat iLink Bot protocol, enabling text, image, video, and voice messaging with zero runtime dependencies. It provides a message queue interface for WeChat bot interactions and optional MCP server integration.

## Key Features
- Zero runtime dependencies with AES encryption via OpenSSL (ctypes fallback)
- Message queue semantics with `login()`, `send()`, and `recv()` interfaces
- Automatic state management (context_token, sync cursor) and persistent token storage
- Optional MCP server integration for AI context protocol support
- Built-in Web UI for session management, QR login, and message history

## Why It Matters for RAG Builders
WeiLink enables seamless integration of WeChat bots into AI workflows, particularly for MCP-based systems, while handling protocol complexities like encryption and state management automatically.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AES-128 encryption
Automated review identified **AES-128 encryption** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ctypes
Automated review identified **ctypes** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenSSL
Automated review identified **OpenSSL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI (for MCP/Web UI)
Automated review identified **FastAPI (for MCP/Web UI)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
