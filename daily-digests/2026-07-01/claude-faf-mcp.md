---
title: "Wolfe-Jam/claude-faf-mcp"
category: "Orchestrator"
tech_stack: ["TypeScript", "Model Context Protocol (MCP)", "Node.js", "YAML", "GitHub Actions", "NPM"]
quality_score: 10
rag_relevance: 9
tags: ["project context", "MCP server", "AI orchestration", "persistent memory", "Claude integration"]
source: "https://github.com/Wolfe-Jam/claude-faf-mcp"
discovered_at: "2026-07-01T00:07:23Z"
evaluated_by: "mistral-small-latest"
---

## Summary
claude-faf-mcp is an MCP server that provides persistent project context and memory for Claude AI, enabling AI-driven development workflows with zero-config setup. It synchronizes project metadata across multiple instruction files and tools, ensuring AI agents start each session with grounded context.

## Key Features
- Persistent project context via `.faf` YAML files for AI grounding
- Automated synchronization of project metadata across multiple instruction files (CLAUDE.md, MEMORY.md, Copilot instructions)
- 13 core MCP tools (35 total) for project analysis, scoring, and enhancement
- GitHub Registry integration with idempotent server-card emission
- Deterministic scoring system (0-100%) for AI context optimization

## Why It Matters for RAG Builders
It enables AI agents to maintain persistent, grounded project context across sessions, reducing hallucinations and improving development efficiency in RAG and AI-driven workflows.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### NPM
Automated review identified **NPM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
