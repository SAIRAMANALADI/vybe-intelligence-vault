---
title: ericvoltolin/xc-mcp
category: daily-digests/2026-06-24
tech_stack:
- TypeScript
- Node.js
- Xcode CLI
- Model Context Protocol (MCP)
- CLI Tools
quality_score: 8
rag_relevance: 9
tags:
- Xcode
- CLI wrapper
- token optimization
- MCP server
- summarization
source: https://github.com/ericvoltolin/xc-mcp
discovered_at: '2026-06-24T02:49:16Z'
evaluated_by: mistral-small-latest
---

## Summary
XC-MCP is a lightweight CLI wrapper for Xcode tools designed to reduce LLM token usage by summarizing verbose outputs from Xcode CLI commands like build, test, and archive. It integrates with the Model Context Protocol (MCP) to provide structured, compact context blocks for AI-driven workflows.

## Key Features
- Wraps Xcode CLI commands (build, test, archive) to produce concise summaries
- Integrates with Model Context Protocol (MCP) for structured AI prompts
- Preserves critical signals (errors, warnings, durations) in compact outputs
- Supports local-first processing with optional sharing for collaboration
- Extensible architecture with plugin/adapter layer for custom workflows

## Why It Matters for RAG Builders
XC-MCP directly reduces token usage and improves AI prompt efficiency for Xcode-centric development workflows.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Xcode CLI
Automated review identified **Xcode CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI Tools
Automated review identified **CLI Tools** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
