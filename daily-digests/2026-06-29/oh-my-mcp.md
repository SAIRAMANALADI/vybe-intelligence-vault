---
title: "didrod205/oh-my-mcp"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "MCP (Model Context Protocol)", "JSON Schema", "CLI"]
quality_score: 9
rag_relevance: 8
tags: ["MCP", "linting", "AI tool validation", "function-calling", "context optimization"]
source: "https://github.com/didrod205/oh-my-mcp"
discovered_at: "2026-06-29T07:30:10Z"
evaluated_by: "mistral-small-latest"
---

## Summary
oh-my-mcp is a linter for Model Context Protocol (MCP) servers that validates tool definitions to prevent silent failures in AI model function-calling. It checks for issues like invalid tool names, missing descriptions, schema errors, and context window inefficiencies, providing a deterministic, local analysis without API keys.

## Key Features
- Validates MCP tool definitions for compatibility with AI model function-calling (e.g., tool names, descriptions, schemas).
- Detects silent failures like duplicate tool names, invalid input schemas, and missing required properties.
- Calculates context window cost of toolsets to optimize AI model performance.
- Supports live server analysis via MCP protocol or static JSON input for CI/CD integration.
- Provides actionable scores (0-100) and machine-readable reports for automation.

## Why It Matters for RAG Builders
It ensures MCP servers are AI-model-friendly by catching tool definition errors before they break function-calling or waste context tokens, critical for reliable RAG pipelines.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON Schema
Automated review identified **JSON Schema** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
