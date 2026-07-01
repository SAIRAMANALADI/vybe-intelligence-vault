---
title: "Wolfe-Jam/faf-mcp"
category: "Orchestrator"
tech_stack: ["TypeScript", "MCP (Model Context Protocol)", "Node.js", "Zig-WASM", "Cloudflare Workers", "Vercel", "GitHub Actions"]
quality_score: 10
rag_relevance: 9
tags: ["MCP server", "project context", "AI IDE integration", "context synchronization", "RAG optimization"]
source: "https://github.com/Wolfe-Jam/faf-mcp"
discovered_at: "2026-07-01T00:07:57Z"
evaluated_by: "mistral-small-latest"
---

## Summary
faf-mcp is an MCP server that provides persistent project context for AI-powered IDEs like Cursor, Windsurf, Cline, and VS Code. It synchronizes a single `.faf` file across multiple AI context formats, ensuring AI assistants have optimized and up-to-date project context without drift.

## Key Features
- Single `.faf` file as the source of truth for project context, synced across multiple AI tool formats (e.g., `.cursorrules`, `AGENTS.md`, `GEMINI.md`).
- 29+ MCP tools for context management, including interop tools for IDEs, cloud sync, and GitHub repo analysis.
- Bi-directional synchronization ensuring context never goes stale, with sub-millisecond updates.
- Hosted, self-deployable, and local deployment options for flexibility in different environments.
- Tiered context scoring system (0-100%) to measure AI-readiness and optimize prompts.

## Why It Matters for RAG Builders
It eliminates context drift for AI assistants by providing a single, synchronized source of project truth, drastically improving RAG accuracy and reducing manual context maintenance overhead.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zig-WASM
Automated review identified **Zig-WASM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloudflare Workers
Automated review identified **Cloudflare Workers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vercel
Automated review identified **Vercel** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
