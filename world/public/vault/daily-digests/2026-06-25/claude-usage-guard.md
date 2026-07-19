---
title: ecerutti/claude-usage-guard
category: world/public/vault/daily-digests/2026-06-25
tech_stack:
- JavaScript
- Node.js
- Model Context Protocol (MCP)
- Claude Code CLI
quality_score: 8
rag_relevance: 9
tags:
- rate limiting
- Claude Code
- MCP server
- orchestration
- workflow management
source: https://github.com/ecerutti/claude-usage-guard
discovered_at: '2026-06-25T07:31:10Z'
evaluated_by: mistral-small-latest
---

## Summary
A Model Context Protocol (MCP) server that monitors and exposes Claude Code's real-time rate limit usage, enabling orchestrators to proactively manage subtask execution and avoid mid-workflow failures due to quota exhaustion.

## Key Features
- Real-time rate limit monitoring for Claude Code's 5-hour and 7-day windows
- Proactive orchestrator integration to pause or gate subtask execution
- Structured JSON output with session/weekly usage percentages and reset timers
- Fail-open design with null fields for unavailable data to avoid blocking workflows
- Automated setup via `setup.sh` for seamless integration with Claude Code

## Why It Matters for RAG Builders
It prevents mid-workflow failures in multi-agent systems by enabling orchestrators to dynamically adjust task execution based on real-time rate limit data.

## Tech Stack Deep Dive
### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code CLI
Automated review identified **Claude Code CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
