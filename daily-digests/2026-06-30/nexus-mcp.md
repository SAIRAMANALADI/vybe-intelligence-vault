---
title: "j7an/nexus-mcp"
category: "Tooling"
tech_stack: ["Python", "MCP (Model Context Protocol)", "asyncio", "Docker", "Ruff", "mypy", "pre-commit", "FastAPI", "Pydantic"]
quality_score: 9
rag_relevance: 8
tags: ["MCP server", "AI agent orchestration", "parallel execution", "CLI integration", "multi-model workflows"]
source: "https://github.com/j7an/nexus-mcp"
discovered_at: "2026-06-30T03:48:58Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Nexus MCP is an MCP server that enables AI models to invoke CLI-based AI agents (Codex, Claude Code, OpenCode) as tools, facilitating parallel execution, retries, and structured output parsing for tasks like research, code review, and multi-model comparisons.

## Key Features
- Parallel execution of AI agents with configurable concurrency limits
- Automatic retries with exponential backoff for transient errors
- JSON-first output parsing with fallback mechanisms for noisy stdout
- 10 pre-built prompt templates for common workflows (e.g., code review, research)
- Persistent preferences and model tier classification for optimized agent selection

## Why It Matters for RAG Builders
It enables RAG builders to offload complex tasks to specialized AI agents in parallel, reducing latency and improving output diversity while maintaining structured, reliable results.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### asyncio
Automated review identified **asyncio** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ruff
Automated review identified **Ruff** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### mypy
Automated review identified **mypy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pre-commit
Automated review identified **pre-commit** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic
Automated review identified **Pydantic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
