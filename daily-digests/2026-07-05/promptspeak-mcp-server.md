---
title: "chrbailey/promptspeak-mcp-server"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "MCP (Model Context Protocol)", "npm", "Jest", "Regular Expressions"]
quality_score: 9
rag_relevance: 10
tags: ["governance", "safety", "MCP", "agent-validation", "pre-execution"]
source: "https://github.com/chrbailey/promptspeak-mcp-server"
discovered_at: "2026-07-05T21:00:59Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A governance layer for AI agents that intercepts and validates tool calls before execution, blocking risky operations or holding them for human approval. It uses a 9-stage validation pipeline including circuit breakers, drift detection, and security scanning to prevent irreversible actions.

## Key Features
- Pre-execution validation pipeline with 9 stages (circuit breaker, frame validation, drift prediction, security scanning, etc.)
- Human-in-the-loop approval for high-risk operations via hold queue management
- Security scanning for write actions (SQL injection, hardcoded secrets, insecure defaults)
- Drift detection to identify behavioral anomalies and halt agents
- Deterministic rule enforcement with configurable severity levels

## Why It Matters for RAG Builders
It provides a critical safety layer for AI agents by blocking or holding dangerous tool calls before execution, ensuring compliance and reducing risks in production environments.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### npm
Automated review identified **npm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Jest
Automated review identified **Jest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Regular Expressions
Automated review identified **Regular Expressions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
