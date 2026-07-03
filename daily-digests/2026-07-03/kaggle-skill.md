---
title: "shepsci/kaggle-skill"
category: "Tooling"
tech_stack: ["Python", "Kaggle API", "MCP (Model Context Protocol)", "CLI tools", "Agent frameworks (Claude Code, Codex, OpenClaw, etc.)", "Shell scripting", "Security testing (pytest)"]
quality_score: 9
rag_relevance: 8
tags: ["Kaggle integration", "AI agent plugin", "competition automation", "notebook execution", "badge collection"]
source: "https://github.com/shepsci/kaggle-skill"
discovered_at: "2026-07-03T19:15:29Z"
evaluated_by: "mistral-small-latest"
---

## Summary
kaggle-skill is an agent skill/plugin that enables AI coding agents to interact with Kaggle for tasks like credential setup, competition research, dataset/model downloads, notebook execution, submissions, forum analysis, and badge collection. It supports over 35 agents including Claude Code, Codex, and Antigravity CLI.

## Key Features
- End-to-end Kaggle workflow automation for AI agents, including credential setup, competition research, and submissions
- Supports 35+ AI coding agents via plugin or marketplace integration (skills.sh, ClawHub, Codex, Claude Code)
- Modular architecture with dedicated modules for registration, competition reports, Kaggle interaction (kllm), and badge collection
- Comprehensive security testing suite ensuring credential safety and untrusted content handling
- MCP server integration for secure, role-gated tool access to Kaggle's API endpoints

## Why It Matters for RAG Builders
It streamlines Kaggle workflows for AI agents, enabling seamless integration of competition research, dataset/model management, and notebook execution into automated pipelines.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Kaggle API
Automated review identified **Kaggle API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI tools
Automated review identified **CLI tools** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Agent frameworks (Claude Code, Codex, OpenClaw, etc.)
Automated review identified **Agent frameworks (Claude Code, Codex, OpenClaw, etc.)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Shell scripting
Automated review identified **Shell scripting** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Security testing (pytest)
Automated review identified **Security testing (pytest)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
