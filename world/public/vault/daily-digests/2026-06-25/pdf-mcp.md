---
title: jztan/pdf-mcp
category: world/public/vault/daily-digests/2026-06-25
tech_stack:
- Python
- PyMuPDF (fitz)
- FastEmbed
- SQLite
- Tesseract OCR
- Pydantic
- MCP (Model Context Protocol)
- FastAPI
- NumPy
- Pillow (PIL)
quality_score: 9
rag_relevance: 10
tags:
- PDF processing
- MCP server
- AI agent tools
- OCR
- Hybrid search
source: https://github.com/jztan/pdf-mcp
discovered_at: '2026-06-25T14:18:01Z'
evaluated_by: mistral-small-latest
---

## Summary
pdf-mcp is an MCP (Model Context Protocol) server designed to enable AI agents to efficiently search, read, and extract content from PDFs without overwhelming context windows. It supports hybrid search, OCR for scanned documents, structured extraction of tables and images, and specialized handling for multi-column and vertical-script (e.g., Japanese) layouts.

## Key Features
- Hybrid search combining BM25 keyword and semantic search for precise PDF navigation
- Structured extraction of tables, images, and text with column-aware reading order for multi-column layouts
- OCR support for scanned PDFs with parallelized processing for faster extraction
- Vertical-script (e.g., Japanese tategaki) reconstruction for correct reading order
- SQLite-backed persistent caching to avoid re-parsing documents and optimize performance

## Why It Matters for RAG Builders
pdf-mcp enables AI agents to efficiently process large PDFs by minimizing context window usage and providing structured, searchable, and extractable content, making it essential for RAG pipelines handling document-heavy workflows.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyMuPDF (fitz)
Automated review identified **PyMuPDF (fitz)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastEmbed
Automated review identified **FastEmbed** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tesseract OCR
Automated review identified **Tesseract OCR** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic
Automated review identified **Pydantic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### NumPy
Automated review identified **NumPy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pillow (PIL)
Automated review identified **Pillow (PIL)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
