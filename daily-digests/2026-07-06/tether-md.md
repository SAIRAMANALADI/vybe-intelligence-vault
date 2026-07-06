---
title: "tether-md/tether-md"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "CLI", "MCP (Model Context Protocol)", "VS Code Extension", "HTML Comments", "JSONL", "ULID"]
quality_score: 9
rag_relevance: 8
tags: ["Markdown editing", "AI-assisted writing", "version control", "collaborative editing", "document annotation"]
source: "https://github.com/tether-md/tether-md"
discovered_at: "2026-07-06T19:50:33Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Tether MD enables anchored comments for Markdown files where AI agents propose edits based on user comments, but only humans can accept or reject changes. It ensures byte-identical clean exports and survives text edits through fuzzy re-anchoring or explicit orphaning.

## Key Features
- Anchored comments embedded directly in Markdown files without external databases or sidecars
- Fuzzy re-anchoring of comments through text edits with confidence-based outcomes (anchored, needs-review, orphaned)
- AI agents propose edits via CLI or MCP server, but only humans apply or reject changes
- Byte-identical clean export guarantee tested in CI, ensuring no unintended modifications
- VS Code extension and MCP server for seamless integration with AI agents like Claude Code

## Why It Matters for RAG Builders
It provides a standardized, file-based way for AI agents to propose edits to Markdown documents while preserving human oversight and ensuring clean, version-controlled outputs.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### VS Code Extension
Automated review identified **VS Code Extension** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTML Comments
Automated review identified **HTML Comments** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSONL
Automated review identified **JSONL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ULID
Automated review identified **ULID** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
