---
title: "Yuggohel2/hercules-mcp"
category: "Agent Framework"
tech_stack: ["Python", "Model Context Protocol (MCP)", "Docker", "OpenHands", "code-review-graph", "FastMCP", "LLM Proxy", "uv (Python package manager)"]
quality_score: 8
rag_relevance: 7
tags: ["MCP", "agentic-coding", "sandbox-execution", "code-indexing", "LLM-proxy"]
source: "https://github.com/Yuggohel2/hercules-mcp"
discovered_at: "2026-07-05T09:39:42Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Hercules-MCP is an agentic coding framework leveraging the Model Context Protocol (MCP) to divide labor between planning (The Brain), code analysis (The Graph), and execution (The Hands). It enables secure, API-key-free LLM-driven development with isolated Docker sandbox execution and token-efficient code indexing.

## Key Features
- Divides agentic workflow into Brain (planning), Graph (code analysis), and Hands (execution) for optimized performance and cost reduction.
- API-key-free LLM execution via local proxy routing, eliminating dependency on external API calls.
- Isolated Docker sandbox for secure code execution and automated testing, preventing host system contamination.
- Token-efficient code indexing through code-review-graph, reducing context window usage by 90%.
- Cross-platform and IDE-agnostic, supporting Cursor, VS Code, Antigravity IDE, and Claude Code via MCP compliance.

## Why It Matters for RAG Builders
Hercules-MCP streamlines agentic coding workflows by enforcing secure, modular, and cost-efficient execution, making it essential for AI engineers building reliable RAG or agent systems.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenHands
Automated review identified **OpenHands** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### code-review-graph
Automated review identified **code-review-graph** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP
Automated review identified **FastMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM Proxy
Automated review identified **LLM Proxy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv (Python package manager)
Automated review identified **uv (Python package manager)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
