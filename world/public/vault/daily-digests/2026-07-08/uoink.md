---
title: "ryanbiddy/uoink"
category: "Tooling"
tech_stack: ["Python", "Rust", "JavaScript", "TypeScript", "Chrome Extension", "Model Context Protocol (MCP)", "OpenAPI", "Whisper (for transcription)", "SQLite (for metadata storage)"]
quality_score: 9
rag_relevance: 10
tags: ["content capture", "local-first", "MCP server", "AI corpus", "transcript extraction"]
source: "https://github.com/ryanbiddy/uoink"
discovered_at: "2026-07-08T17:27:33Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Uoink is a free, open-source, local-first tool that captures videos, podcasts, articles, and social media content into a structured Markdown corpus on the user's disk, making it accessible to AI models like Claude or ChatGPT via clipboard, MCP server, or OpenAPI bridge.

## Key Features
- One-click capture of YouTube videos, X/Twitter posts, podcasts, web pages, and Reddit threads with full metadata, transcripts, and screenshots
- Local MCP server exposing 14+ tools for AI agents (Claude, Cursor, Cline) to interact with captured corpora programmatically
- OpenAPI bridge for non-MCP clients (Gemini, Grok, Perplexity) to access the same tools via HTTP/JSON-RPC
- Structured Markdown corpus format with timestamped citations, embedded screenshots, and auto-sorted library organization
- Privacy-focused design with optional Anthropic API integration for advanced features (comment analysis, hook classification)

## Why It Matters for RAG Builders
Uoink eliminates hallucinations in AI responses by providing a local, cited corpus of media content, enabling accurate and context-aware RAG pipelines without relying on cloud-based transcription or external APIs.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Chrome Extension
Automated review identified **Chrome Extension** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAPI
Automated review identified **OpenAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Whisper (for transcription)
Automated review identified **Whisper (for transcription)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite (for metadata storage)
Automated review identified **SQLite (for metadata storage)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
