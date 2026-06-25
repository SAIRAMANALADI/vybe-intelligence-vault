---
title: "Groupthink-dev/aussiebb-blade-mcp"
category: "Agent Framework"
tech_stack: ["Python", "FastMCP 2.0", "pyaussiebb", "Model Context Protocol (MCP)", "Bash (for deployment)"]
quality_score: 9
rag_relevance: 8
tags: ["MCP server", "Aussie Broadband integration", "token-efficient output", "multi-account management", "diagnostic safety"]
source: "https://github.com/Groupthink-dev/aussiebb-blade-mcp"
discovered_at: "2026-06-25T08:33:20Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An MCP server providing AI agents with structured, token-efficient access to Aussie Broadband accounts via the Model Context Protocol. It wraps the undocumented MyAussie portal API with security guardrails, credential isolation, and diagnostic safety gates for automated use.

## Key Features
- 12 structured MCP tools for account management, usage monitoring, billing, and diagnostics
- Token-efficient pipe-delimited output (~50 tokens per service) with human-readable units
- Multi-account support with independent authentication and credential isolation
- Diagnostic safety gates (double-gated for line tests) and credential scrubbing from all outputs
- Bearer token auth for HTTP transport and rate limiting for API resilience

## Why It Matters for RAG Builders
It enables AI agents to securely and efficiently interact with Aussie Broadband accounts for real-time monitoring, diagnostics, and automation without exposing raw credentials or overwhelming token budgets.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP 2.0
Automated review identified **FastMCP 2.0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pyaussiebb
Automated review identified **pyaussiebb** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bash (for deployment)
Automated review identified **Bash (for deployment)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
