---
title: "cbcoutinho/nextcloud-mcp-server"
category: "Orchestrator"
tech_stack: ["Python", "Model Context Protocol (MCP)", "Nextcloud API", "Docker", "Kubernetes", "Qdrant (for semantic search)", "Ollama (for embeddings)", "FastAPI (for HTTP transport)", "Basic Auth", "OAuth (Login Flow v2)"]
quality_score: 9
rag_relevance: 8
tags: ["MCP Server", "Nextcloud Integration", "Semantic Search", "AI Orchestration", "Document Processing"]
source: "https://github.com/cbcoutinho/nextcloud-mcp-server"
discovered_at: "2026-07-10T06:16:14Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A production-ready MCP server that bridges AI assistants with Nextcloud instances, enabling LLMs to interact with Nextcloud data (files, notes, calendars, contacts, etc.) via a secure API. Supports semantic search, document processing, and multi-user authentication.

## Key Features
- 110+ MCP tools for comprehensive Nextcloud app coverage (Notes, Calendar, Contacts, Files, Deck, etc.)
- Semantic search integration with Qdrant and Ollama for RAG pipelines
- Multi-user authentication via Login Flow v2 or Basic Auth pass-through
- Document processing with OCR and text extraction for PDFs, DOCX, and images
- Flexible deployment options (Docker, Kubernetes, local, VM) with multiple transport modes (stdio, HTTP)

## Why It Matters for RAG Builders
It enables AI assistants to securely and efficiently interact with Nextcloud data, unlocking advanced RAG capabilities for personal and enterprise knowledge management.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Nextcloud API
Automated review identified **Nextcloud API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Kubernetes
Automated review identified **Kubernetes** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Qdrant (for semantic search)
Automated review identified **Qdrant (for semantic search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama (for embeddings)
Automated review identified **Ollama (for embeddings)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI (for HTTP transport)
Automated review identified **FastAPI (for HTTP transport)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Basic Auth
Automated review identified **Basic Auth** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth (Login Flow v2)
Automated review identified **OAuth (Login Flow v2)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
