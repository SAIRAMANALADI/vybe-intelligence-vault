---
title: "tathagat22/plumb-mcp"
category: "Orchestrator"
tech_stack: ["TypeScript", "Node.js", "Model Context Protocol (MCP)", "Figma Plugin API", "REST API (secondary path)", "Docker", "npm"]
quality_score: 9
rag_relevance: 8
tags: ["Figma integration", "AI design generation", "MCP server", "design-to-code", "prompt-to-design"]
source: "https://github.com/tathagat22/plumb-mcp"
discovered_at: "2026-07-03T22:10:34Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Plumb is a bidirectional Figma MCP server that enables two-way workflows: extracting compact design specs from Figma files for AI coding agents and generating on-brand Figma designs from text prompts. It bridges design and code with verification loops to ensure pixel-perfect accuracy.

## Key Features
- Bidirectional Figma ↔ code workflow with verification loops (`plumb_verify`, `plumb_fit`) for pixel-perfect accuracy
- AI design director mode (`plumb_studio`) that generates full Figma designs from text prompts with research, branding, and critique
- Zero REST rate limits and no metered tool-call quotas (works on Figma Free plan)
- Compact Plumb Design Spec (PDS) output reduces token usage by ~99% compared to raw Figma API JSON
- Multi-agent support for concurrent connections to a single Figma file

## Why It Matters for RAG Builders
Plumb eliminates the gap between design and code for AI agents by providing verified design specs and enabling AI-driven design generation directly in Figma, streamlining RAG pipeline workflows.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Figma Plugin API
Automated review identified **Figma Plugin API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API (secondary path)
Automated review identified **REST API (secondary path)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### npm
Automated review identified **npm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
