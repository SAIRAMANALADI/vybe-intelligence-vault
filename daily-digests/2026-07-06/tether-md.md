---
title: "tether-md/tether-md"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "CLI", "MCP (Model Context Protocol)", "VS Code Extension", "JSON/JSONL", "ULID", "GitHub Actions"]
quality_score: 9
rag_relevance: 7
tags: ["Markdown", "AI collaboration", "comment-driven editing", "version control", "human-in-the-loop"]
source: "https://github.com/tether-md/tether-md"
discovered_at: "2026-07-06T21:27:14Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Tether MD enables anchored, in-file comments for Markdown that AI agents can act upon without applying changes directly. It provides a file format and tooling for human-AI collaboration where agents propose edits, and humans approve or reject them, ensuring byte-identical clean exports.

## Key Features
- Anchored comments embedded directly in Markdown files as invisible HTML markers and a JSONL store block at EOF
- Fuzzy re-anchoring of comments through edits with confidence scoring (anchored, needs-review, or orphaned)
- Agent-proposed edits via CLI or MCP server, with human approval required before application
- Byte-for-byte identical clean export via `tether export`, validated in CI
- VS Code extension for inline comment threads and diff previews with Accept/Reject buttons

## Why It Matters for RAG Builders
It enables seamless human-AI collaboration on Markdown documents with anchored comments and proposals, ensuring edits are reviewed and approved before application while maintaining document integrity.

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

### JSON/JSONL
Automated review identified **JSON/JSONL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ULID
Automated review identified **ULID** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
