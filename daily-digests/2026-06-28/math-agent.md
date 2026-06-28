---
title: "Heliotrope-dev/math-agent"
category: "Agent Framework"
tech_stack: ["Python", "Ollama", "SymPy", "Gradio", "FastMCP", "nomic-embed-text", "ReAct Agentic Loop", "MCP Protocol"]
quality_score: 9
rag_relevance: 8
tags: ["math-solving", "ReAct agent", "offline LLM", "MCP integration", "RAG retrieval"]
source: "https://github.com/Heliotrope-dev/math-agent"
discovered_at: "2026-06-28T14:45:57Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A fully offline AI math problem-solving system that implements a ReAct agentic loop without external API dependencies. It supports local LLM inference via Ollama, structured tool use (planning, retrieval, calculation), and integrates with MCP-compatible clients like Claude Code.

## Key Features
- Hand-crafted ReAct agentic loop with tool-use (planning, retrieval, calculation) for step-by-step math problem solving
- Supports local LLM inference via Ollama (qwen3.5:9b) with zero API costs and offline operation
- RAG-based formula retrieval using nomic-embed-text for semantic matching of math topics
- SymPy-powered symbolic computation for precise results (derivatives, integrals, limits, equation solving)
- MCP server integration for seamless tool access in AI clients like Claude Code

## Why It Matters for RAG Builders
It provides a self-contained, offline-capable framework for building math-solving agents with structured tool use and RAG-enhanced retrieval, reducing dependency on external APIs while ensuring precision in symbolic computation.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SymPy
Automated review identified **SymPy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Gradio
Automated review identified **Gradio** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP
Automated review identified **FastMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### nomic-embed-text
Automated review identified **nomic-embed-text** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ReAct Agentic Loop
Automated review identified **ReAct Agentic Loop** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP Protocol
Automated review identified **MCP Protocol** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
