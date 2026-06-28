---
title: "roomi-fields/rtfm"
category: "Vector DB"
tech_stack: ["Python", "SQLite", "FastEmbed (ONNX)", "PyTorch (CPU-only)", "MCP (Model Context Protocol)", "Claude Code", "Markdown/LaTeX/PDF parsers", "AST-aware code indexing"]
quality_score: 9
rag_relevance: 10
tags: ["Retrieval Augmented Generation", "Local AI", "Context Indexing", "Semantic Search", "Agent Tooling"]
source: "https://github.com/roomi-fields/rtfm"
discovered_at: "2026-06-28T12:19:36Z"
evaluated_by: "mistral-small-latest"
---

## Summary
RTFM is an open-source retrieval layer designed to enhance AI agents by indexing and retrieving context from diverse project artifacts, including code, documentation, PDFs, legal texts, and research papers. It provides local, API-free, and cost-effective semantic and full-text search to prevent hallucinations and improve agent accuracy.

## Key Features
- Multi-format indexing (code, docs, PDFs, legal texts, research)
- Progressive disclosure of context (300 tokens metadata first, then expand)
- Knowledge graph linking files and code structures
- Unlimited version history for memory files
- MCP-native integration with Claude Code and other clients

## Why It Matters for RAG Builders
RTFM eliminates the retrieval bottleneck in RAG pipelines by providing a local, open-source, and multi-format indexing layer that ensures agents retrieve accurate and relevant context without hallucinations or API costs.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastEmbed (ONNX)
Automated review identified **FastEmbed (ONNX)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyTorch (CPU-only)
Automated review identified **PyTorch (CPU-only)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown/LaTeX/PDF parsers
Automated review identified **Markdown/LaTeX/PDF parsers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AST-aware code indexing
Automated review identified **AST-aware code indexing** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
