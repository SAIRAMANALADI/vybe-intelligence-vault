---
title: "Atharva9890/agentic-research-assistant"
category: "Agent Framework"
tech_stack: ["Python", "Ollama", "llama3.2", "FastAPI", "Uvicorn", "DuckDuckGo", "AST (Abstract Syntax Tree)"]
quality_score: 9
rag_relevance: 8
tags: ["ReAct agent", "local LLM", "tool integration", "sandboxed execution", "agent loop"]
source: "https://github.com/Atharva9890/agentic-research-assistant"
discovered_at: "2026-07-05T23:01:36Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A hand-built ReAct-style agent that autonomously decides when to use tools (sandboxed calculator or web search) to answer questions using a local Ollama model. It implements the full agent loop from scratch without relying on frameworks like LangGraph.

## Key Features
- Hand-built ReAct agent loop with no hidden framework state machine
- Sandboxed calculator tool using restricted Python AST for safe arithmetic evaluation
- Free web search tool via DuckDuckGo HTML scraping (no API key required)
- Quirk handling: automatic quote stripping in action inputs and repetition detection for deterministic tools
- Comprehensive evaluation and benchmarking with real-world metrics

## Why It Matters for RAG Builders
It demonstrates a minimal, framework-free approach to building ReAct agents with local LLMs, offering a blueprint for custom agent loops and tool integration without external dependencies.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### llama3.2
Automated review identified **llama3.2** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Uvicorn
Automated review identified **Uvicorn** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DuckDuckGo
Automated review identified **DuckDuckGo** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AST (Abstract Syntax Tree)
Automated review identified **AST (Abstract Syntax Tree)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
