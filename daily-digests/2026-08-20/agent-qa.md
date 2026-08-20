---
title: vostride/agent-qa
content_type: repo
engine: v2
category: daily-digests/2026-08-20
tech_stack:
- Python
- MCP
- Playwright
- Appium
- FastAPI
- SQLite
quality_score: 9
rag_relevance: 8
deployment_complexity: Low
tags:
- qa-agent
- web-testing
- mobile-testing
- test-memory
- cli
- mcp
- ai-agents
- testing-qa
source: https://github.com/vostride/agent-qa
stars: 831
language: Python
last_updated: '2026-08-20T00:00:00Z'
discovered_at: '2026-08-20T23:59:00Z'
evaluated_by: human-curated
---

## Summary
Agent QA is an autonomous application QA agent for natural-language web and mobile testing. It persists test knowledge across runs, executes deterministic validation workflows, and exposes both a command-line interface (CLI) and a Model Context Protocol (MCP) server for deep AI engineer and agent tool integration.

## Key Features
- Natural-language test definition for browser and mobile application flows
- Persistent test knowledge and memory graph across execution runs
- Model Context Protocol (MCP) server support for multi-agent tool calling
- Command-line interface (CLI) for automated CI/CD pipeline integration
- Source-available core architecture with local execution support

## Why It Matters for RAG & Agent Builders
Agent QA provides autonomous, memory-augmented verification for complex web and mobile apps. Exposing an MCP server allows agent swarms and developer assistants to dynamically validate UI states and API outputs.

## Tech Stack Deep Dive
### MCP (Model Context Protocol)
Exposes QA capabilities as standardized tools that can be consumed directly by Claude, Cursor, and agent frameworks.

### Python & Playwright
Drives browser automation and mobile testing with high reliability.

### Persistent Memory
Caches application navigation maps and DOM structures to speed up repeated test execution.

## Installation
```bash
# Clone the repository
git clone https://github.com/vostride/agent-qa.git
cd agent-qa

# Install dependencies
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
