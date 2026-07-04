---
title: "mcp-tool-shop-org/tool-compass"
category: "Orchestrator"
tech_stack: ["Python", "HNSW (Hierarchical Navigable Small World)", "SQLite", "Ollama", "Gradio", "Docker", "npm", "PyPI", "FastAPI", "MCP SDK", "Hugging Face Transformers"]
quality_score: 9
rag_relevance: 10
tags: ["MCP", "semantic search", "tool orchestration", "token optimization", "RAG"]
source: "https://github.com/mcp-tool-shop-org/tool-compass"
discovered_at: "2026-07-04T22:58:41Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Tool Compass is a semantic navigator for MCP tools that enables AI agents to discover and execute tools by intent rather than memory, reducing token usage by up to 95% through hybrid semantic and lexical search. It acts as a gateway between AI models and MCP servers, optimizing tool selection and execution.

## Key Features
- Hybrid semantic + lexical search for tool discovery with exact-name boost
- Progressive disclosure pattern (compass → describe → execute) to minimize token usage
- Supports both stdio and HTTP backends with optional bearer-token authentication
- Per-tool timeouts, allow/deny lists, and analytics for usage tracking
- Cross-platform deployment via npm, PyPI, Docker, or local clone

## Why It Matters for RAG Builders
Tool Compass is essential for RAG builders as it drastically reduces token overhead by dynamically selecting only relevant tools, enabling efficient and scalable AI workflows without bloating context windows.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HNSW (Hierarchical Navigable Small World)
Automated review identified **HNSW (Hierarchical Navigable Small World)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Gradio
Automated review identified **Gradio** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### npm
Automated review identified **npm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyPI
Automated review identified **PyPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP SDK
Automated review identified **MCP SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Hugging Face Transformers
Automated review identified **Hugging Face Transformers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
