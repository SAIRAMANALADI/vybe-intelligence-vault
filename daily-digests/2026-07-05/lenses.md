---
title: "Storybloq/lenses"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "MCP (Model Context Protocol)", "Zod", "Claude Code"]
quality_score: 8
rag_relevance: 7
tags: ["code review", "MCP server", "AI-driven analysis", "multi-agent", "structured verdicts"]
source: "https://github.com/Storybloq/lenses"
discovered_at: "2026-07-05T20:57:17Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A multi-lens code review MCP server that runs 8 specialized reviewers in parallel, deduplicates findings, filters by confidence, and merges results into a single verdict for AI-driven code analysis workflows.

## Key Features
- Parallel multi-lens review with 8 specialized reviewers
- Deduplication and confidence-based filtering of findings
- Incremental and cooperative retry protocol for partial results
- Stable library API with frozen registry projections for immutability
- Integration with Claude Code via MCP for seamless AI workflows

## Why It Matters for RAG Builders
Enables AI-driven code review workflows by providing structured, parallelized, and deduplicated feedback for RAG and autonomous agent systems.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zod
Automated review identified **Zod** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
