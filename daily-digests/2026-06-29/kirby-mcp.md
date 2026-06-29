---
title: "bnomei/kirby-mcp"
category: "Tooling"
tech_stack: ["PHP", "Kirby CMS", "MCP (Model Context Protocol)", "Composer", "CLI", "HTTP Transport"]
quality_score: 9
rag_relevance: 8
tags: ["MCP server", "Kirby CMS", "IDE integration", "runtime inspection", "knowledge base"]
source: "https://github.com/bnomei/kirby-mcp"
discovered_at: "2026-06-29T12:31:18Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A CLI-first MCP server for Kirby CMS that enables IDEs or agents to inspect Kirby projects (blueprints, templates, plugins) and interact with a live Kirby runtime. It includes a local knowledge base of Kirby concepts, tasks, and searchable documentation for efficient AI-assisted development.

## Key Features
- Project inspection: blueprints, templates, plugins, and runtime data via MCP tools
- Local Kirby knowledge base with glossary, tasks, and update guides for fast AI context
- Two modes: project-local (full runtime interaction) and global reference (always-on Kirby docs/KB)
- Security-conscious design with prompt injection warnings and CLI command allowlisting
- Integration with agents (Claude Code, Codex CLI) and IDEs via MCP client setup

## Why It Matters for RAG Builders
It bridges Kirby CMS projects with AI agents, enabling real-time project inspection, content manipulation, and contextual knowledge access for RAG pipelines.

## Tech Stack Deep Dive
### PHP
Automated review identified **PHP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Kirby CMS
Automated review identified **Kirby CMS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Composer
Automated review identified **Composer** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP Transport
Automated review identified **HTTP Transport** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
