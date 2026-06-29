---
title: "vk0dev/agent-cost-mcp"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "Model Context Protocol (MCP)", "JSONL parsing", "npm packaging"]
quality_score: 9
rag_relevance: 8
tags: ["cost monitoring", "guardrails", "Claude Code", "local-first", "MCP server"]
source: "https://github.com/vk0dev/agent-cost-mcp"
discovered_at: "2026-06-29T02:52:26Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A local-first Model Context Protocol (MCP) server for cost monitoring and guardrails in AI agents running within Claude Code. It parses JSONL session logs to attribute token usage and costs by provider/model/tool, detect anomalies, forecast spend, and enforce budget caps without requiring a hosted control plane.

## Key Features
- Parses local Claude Code JSONL session logs to attribute token usage and costs by provider/model/tool
- Detects cost anomalies and trends using local baselines tied to assistant-row timestamps
- Forecasts future spend and estimates run costs with machine-readable outputs
- Enforces budget caps and provides optimization suggestions via MCP tools
- Supports parent-subagent cost attribution with subtree analysis

## Why It Matters for RAG Builders
It provides essential local cost forensics and guardrails for AI agents, enabling operators to identify spend drivers and enforce budget limits without relying on external hosted services.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSONL parsing
Automated review identified **JSONL parsing** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### npm packaging
Automated review identified **npm packaging** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
