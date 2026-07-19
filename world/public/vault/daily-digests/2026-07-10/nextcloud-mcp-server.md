---
title: cbcoutinho/nextcloud-mcp-server
category: world/public/vault/daily-digests/2026-07-10
tech_stack:
- Python
- Model Context Protocol (MCP)
- Nextcloud
- Docker
- Kubernetes
- Qdrant (for semantic search)
- Ollama (for embeddings)
- FastAPI
- OCR (Tesseract, Poppler)
- WebDAV
- CardDAV
- CalDAV
quality_score: 9
rag_relevance: 8
tags:
- Nextcloud integration
- MCP server
- AI assistant bridge
- Semantic search
- Document processing
source: https://github.com/cbcoutinho/nextcloud-mcp-server
discovered_at: '2026-07-10T06:32:23Z'
evaluated_by: mistral-small-latest
---

## Summary
A production-ready MCP server that bridges AI assistants (e.g., Claude, GPT) with Nextcloud instances, enabling natural language interactions for managing notes, calendars, contacts, files, and more through a secure API. It operates as a standalone server with deep CRUD operations across Nextcloud apps.

## Key Features
- 110+ MCP tools for comprehensive Nextcloud app interactions (Notes, Calendar, Contacts, Files, Deck, etc.)
- Semantic search integration with Qdrant and Ollama for vector-powered RAG
- Flexible deployment options (Docker, Kubernetes, local, VM) with multiple transport protocols (stdio, streamable-http)
- Production-ready authentication (Basic Auth, Login Flow v2, OAuth pass-through) and tag-based file exclusion for sensitive data
- OCR and document processing for PDFs, DOCX, and images with progress notifications

## Why It Matters for RAG Builders
It enables AI assistants to securely interact with Nextcloud data, unlocking natural language workflows for personal and enterprise users while supporting advanced RAG capabilities through semantic search.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Nextcloud
Automated review identified **Nextcloud** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Kubernetes
Automated review identified **Kubernetes** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Qdrant (for semantic search)
Automated review identified **Qdrant (for semantic search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama (for embeddings)
Automated review identified **Ollama (for embeddings)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OCR (Tesseract, Poppler)
Automated review identified **OCR (Tesseract, Poppler)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebDAV
Automated review identified **WebDAV** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CardDAV
Automated review identified **CardDAV** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CalDAV
Automated review identified **CalDAV** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
