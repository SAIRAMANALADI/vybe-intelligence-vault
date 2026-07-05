---
title: "conorbronsdon/substack-mcp"
category: "Tooling"
tech_stack: ["TypeScript", "Model Context Protocol (MCP)", "Node.js", "Substack API (unofficial)"]
quality_score: 9
rag_relevance: 8
tags: ["MCP server", "Substack integration", "AI agent tooling", "Draft management", "Content publishing"]
source: "https://github.com/conorbronsdon/substack-mcp"
discovered_at: "2026-07-05T06:41:54Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An MCP server for Substack that enables AI agents to read publication data, manage drafts, and publish short-form Notes. Long-form posts are draft-only by design to prevent accidental publishing, while Notes publish immediately.

## Key Features
- Read publication data (subscriber count, posts, drafts, comments)
- Create and update drafts from markdown with safe-by-design boundaries
- Publish short-form Notes immediately (no draft state)
- Upload images to Substack's CDN
- Strict authentication with session token validation

## Why It Matters for RAG Builders
It enables AI agents to safely interact with Substack workflows, reducing manual effort in content creation and review while maintaining strict control over publishing actions.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Substack API (unofficial)
Automated review identified **Substack API (unofficial)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
