---
title: "Heliotrope-dev/math-agent"
category: "Agent Framework"
tech_stack: ["Python", "Ollama", "SymPy", "Gradio", "FastMCP", "nomic-embed-text", "OpenAI API", "Docker"]
quality_score: 9
rag_relevance: 9
tags: ["Math Solver", "ReAct Agent", "RAG", "Symbolic Computation", "MCP Integration"]
source: "https://github.com/Heliotrope-dev/math-agent"
discovered_at: "2026-06-28T16:09:32Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A fully offline AI math solver agent that implements a ReAct agentic loop with tool use, RAG-based formula retrieval, and symbolic computation via SymPy. Supports local LLM inference (Ollama) or cloud APIs (DeepSeek) and integrates with MCP-compatible clients like Claude Code.

## Key Features
- Hand-crafted ReAct agentic loop with tool use (planning, retrieval, calculation) for structured problem-solving
- RAG-powered formula lookup using nomic-embed-text for semantic retrieval of mathematical formulas
- Local LLM support via Ollama (qwen3.5:9b) for offline, zero-cost inference
- SymPy-based symbolic computation for precise results (derivatives, integrals, limits, equation solving)
- MCP server integration for seamless tool use in AI clients like Claude Code

## Why It Matters for RAG Builders
Provides a robust, offline-capable framework for building math-solving agents with RAG-enhanced tool use and symbolic computation, critical for AI stacks requiring precise mathematical reasoning.

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

### OpenAI API
Automated review identified **OpenAI API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
