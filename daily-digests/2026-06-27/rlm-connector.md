---
title: "cgaeking/rlm-connector"
category: "Tooling"
tech_stack: ["Python 3.12", "FastAPI", "SQLite + FTS5", "Claude (Anthropic API)", "Gradio", "PyMuPDF", "python-docx", "openpyxl", "MCP (Model Context Protocol)"]
quality_score: 8
rag_relevance: 9
tags: ["document indexing", "full-text search", "LLM tool use", "MCP server", "local RAG alternative"]
source: "https://github.com/cgaeking/rlm-connector"
discovered_at: "2026-06-27T11:44:34Z"
evaluated_by: "mistral-small-latest"
---

## Summary
RLM Knowledge Base is a local system that indexes documents (PDF, DOCX, XLSX, TXT, MD) into a SQLite database with FTS5 full-text search, enabling LLM agents to autonomously query and navigate documents without embedding costs. It supports tool-based interaction via FastAPI, Gradio UI, and MCP server for Claude Desktop integration.

## Key Features
- Indexes documents without embedding costs using SQLite FTS5 for full-text search
- LLM agents autonomously query and navigate documents using tools like search, read, and statistics
- Supports MCP server integration for direct use in Claude Desktop and other MCP clients
- Provides REST API, Gradio UI, and CLI for flexible interaction
- Includes incremental indexing with change detection and performance optimizations

## Why It Matters for RAG Builders
It provides a cost-effective, agentic alternative to traditional RAG by enabling LLMs to directly query and navigate full documents without embedding overhead, while supporting seamless integration with tools like Claude Desktop.

## Tech Stack Deep Dive
### Python 3.12
Automated review identified **Python 3.12** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite + FTS5
Automated review identified **SQLite + FTS5** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude (Anthropic API)
Automated review identified **Claude (Anthropic API)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Gradio
Automated review identified **Gradio** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyMuPDF
Automated review identified **PyMuPDF** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### python-docx
Automated review identified **python-docx** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### openpyxl
Automated review identified **openpyxl** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
