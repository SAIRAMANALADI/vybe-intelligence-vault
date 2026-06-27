---
title: "davidmosiah/mcp-scorecard"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "MCP (Model Context Protocol)", "npm", "GitHub Actions", "Hono"]
quality_score: 9
rag_relevance: 9
tags: ["MCP", "agent-readiness", "quality-assurance", "server-audit", "tooling"]
source: "https://github.com/davidmosiah/mcp-scorecard"
discovered_at: "2026-06-27T11:44:46Z"
evaluated_by: "mistral-small-latest"
---

## Summary
mcp-scorecard is a CLI and MCP server tool that evaluates the agent-readiness of any Model Context Protocol (MCP) server by running 10 quality checks, scoring them 0-100, and providing actionable feedback for improvements.

## Key Features
- Runs 10 automated checks covering schema validity, tool naming conventions, privacy modes, mutation gating, agent manifest presence, smoke tests, resource advertising, tool descriptions, annotations, and manifest discoverability.
- Provides structured JSON and markdown output for integration with CI/CD pipelines, registries, or comparative reviews.
- Supports auditing local builds, npm packages, GitHub repositories, and hosted/remote MCP servers.
- Includes a GitHub Action for automated scoring in workflows and a badge generator for READMEs.
- Designed for zero-credential probing with privacy-preserving redaction of sensitive data.

## Why It Matters for RAG Builders
It enables RAG/AI stack builders to objectively evaluate and improve MCP server agent-readiness, ensuring seamless integration and reliability in production environments.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### npm
Automated review identified **npm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Hono
Automated review identified **Hono** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
