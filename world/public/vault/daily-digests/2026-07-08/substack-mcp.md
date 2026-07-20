---
title: conorbronsdon/substack-mcp
category: daily-digests/2026-07-08
tech_stack:
- TypeScript
- Node.js
- Model Context Protocol (MCP)
- Substack API (unofficial)
- npm
quality_score: 9
rag_relevance: 8
tags:
- MCP server
- Substack integration
- AI agent tools
- newsletter automation
- content management
source: https://github.com/conorbronsdon/substack-mcp
discovered_at: '2026-07-08T08:17:33Z'
evaluated_by: mistral-small-latest
---

## Summary
An MCP server for Substack that enables AI agents to read publication data, manage drafts, and publish short-form Notes. Long-form posts are restricted to draft-only operations for safety, while Notes publish immediately due to Substack's lack of draft state for them.

## Key Features
- Read Substack publication data (subscriber count, posts, drafts, comments)
- Create and update drafts from markdown with full formatting support
- Publish Substack Notes immediately (no draft state)
- Upload images to Substack's CDN with public URLs
- Typed error hierarchy for robust API failure handling

## Why It Matters for RAG Builders
It enables AI agents to safely interact with Substack workflows, automating draft creation and publishing while enforcing human review for long-form content.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Substack API (unofficial)
Automated review identified **Substack API (unofficial)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### npm
Automated review identified **npm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
