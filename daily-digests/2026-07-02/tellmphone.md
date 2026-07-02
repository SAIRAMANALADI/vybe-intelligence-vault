---
title: "CaliforniaOpenSource/tellmphone"
category: "Orchestrator"
tech_stack: ["Python", "MCP (Model Context Protocol)", "CLI", "JSON", "TOML", "uv (package manager)"]
quality_score: 8
rag_relevance: 7
tags: ["multi-agent communication", "MCP server", "coding agents", "AI collaboration", "local orchestration"]
source: "https://github.com/CaliforniaOpenSource/tellmphone"
discovered_at: "2026-07-02T22:16:03Z"
evaluated_by: "mistral-small-latest"
---

## Summary
TeLLMphone is a local MCP server enabling coding agents like Claude Code and Codex to communicate via simulated phone calls, facilitating multi-turn conversations, voicemail, and personality-based interactions for collaborative AI workflows.

## Key Features
- Enables direct communication between coding agents (e.g., Claude Code and Codex) via simulated phone calls
- Supports multi-turn conversations with context persistence and voicemail for offline agents
- Allows personality customization for callees using predefined system prompts
- Tracks call transcripts and state under `~/.tellmphone/` for auditability and replay
- Implements security controls like hop limits, read-only modes, and project-specific permissions

## Why It Matters for RAG Builders
TeLLMphone streamlines multi-agent collaboration in RAG pipelines by enabling seamless, context-aware communication between AI agents without manual intervention.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TOML
Automated review identified **TOML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv (package manager)
Automated review identified **uv (package manager)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
