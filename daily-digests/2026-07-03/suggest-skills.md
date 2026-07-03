---
title: "sator-imaging/suggest-skills"
category: "Agent Framework"
tech_stack: ["TypeScript", "Bun", "@modelcontextprotocol/sdk", "Zod", "GitHub API"]
quality_score: 8
rag_relevance: 9
tags: ["MCP server", "AI agent skills", "skill discovery", "GitHub integration", "manifest generation"]
source: "https://github.com/sator-imaging/suggest-skills"
discovered_at: "2026-07-03T04:02:02Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server and CLI tool for discovering, recommending, and downloading AI agent skills from GitHub repositories. It generates structured skill manifests and supports both stdio and HTTP runtime modes for seamless integration with AI workflows.

## Key Features
- Generates skill manifests from GitHub repositories with SKILL.md and DESIGN.md discovery
- Supports both stdio and HTTP MCP runtime modes for flexibility
- Provides MCP tools for fetching manifests, downloading skills, and suggesting capabilities
- Includes security scanning via NVIDIA SkillSpector for risk assessment
- CLI for generating markdown inventories from GitHub skills directories

## Why It Matters for RAG Builders
This tool streamlines the discovery and integration of AI agent skills from GitHub, enabling RAG builders to dynamically extend agent capabilities with minimal overhead.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun
Automated review identified **Bun** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### @modelcontextprotocol/sdk
Automated review identified **@modelcontextprotocol/sdk** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zod
Automated review identified **Zod** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub API
Automated review identified **GitHub API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
