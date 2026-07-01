---
title: "LyoSU/capka"
category: "Agent Framework"
tech_stack: ["TypeScript", "Next.js", "Docker", "PostgreSQL", "Python", "Node.js", "gVisor", "OCR", "FFmpeg", "LibreOffice", "LaTeX", "Playwright", "MCP", "Caddy"]
quality_score: 9
rag_relevance: 8
tags: ["AI agents", "sandboxing", "self-hosted", "code execution", "document processing"]
source: "https://github.com/LyoSU/capka"
discovered_at: "2026-07-01T09:36:33Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Capka is an open-source, self-hosted AI agent platform that provides isolated Linux sandboxes for each user and chat session, enabling secure code execution, file processing, and tool integration. It mimics Claude's Cowork by treating AI as a real agent with its own computer, not just a chatbot.

## Key Features
- Per-session isolated Linux sandboxes with Docker containers for secure code execution and file processing
- PostgreSQL-backed task queue ensuring durable, restart-resistant agent workflows
- Extensible with MCP connectors, Anthropic-compatible skills, and a marketplace for capabilities
- Built-in security with optional gVisor runtime for stronger container isolation
- Telegram integration for multi-channel agent interaction

## Why It Matters for RAG Builders
Capka provides a robust, self-hosted framework for building secure, isolated AI agents capable of complex tasks beyond simple chat interactions, making it essential for developers building production-grade RAG systems.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Next.js
Automated review identified **Next.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### gVisor
Automated review identified **gVisor** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OCR
Automated review identified **OCR** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FFmpeg
Automated review identified **FFmpeg** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LibreOffice
Automated review identified **LibreOffice** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LaTeX
Automated review identified **LaTeX** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Playwright
Automated review identified **Playwright** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP
Automated review identified **MCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Caddy
Automated review identified **Caddy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
