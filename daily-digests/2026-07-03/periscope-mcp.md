---
title: "segentic-lab/periscope-mcp"
category: "Tooling"
tech_stack: ["Python", "Playwright", "MCP (Model Context Protocol)", "Chromium", "Docker", "Pillow (for screenshot diffing)", "FastAPI (implicit in MCP server setup)"]
quality_score: 9
rag_relevance: 9
tags: ["MCP server", "website testing", "AI agent tools", "Playwright automation", "persistent sessions"]
source: "https://github.com/segentic-lab/periscope-mcp"
discovered_at: "2026-07-03T00:02:40Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A specialized MCP server for AI agents that provides 63 Playwright-powered tools for website testing, auditing, and interaction. Unlike raw browser control tools, it focuses on structured testing outcomes, persistent sessions, and agent-friendly error reporting for tasks like form filling, accessibility checks, and site-wide audits.

## Key Features
- 63 agent-optimized tools for structured website testing (e.g., `assert_condition`, `auto_fill_form`, `test_project`)
- Persistent authenticated sessions with form/basic/cookie auth support
- Built-in debugging with captured API responses, console logs, and network mocking
- Agent-focused error reporting with actionable next steps (e.g., expired sessions vs. browser crashes)
- Comprehensive audits including accessibility, SEO, GEO/agentic-search readiness, and Lighthouse performance metrics

## Why It Matters for RAG Builders
It provides AI agents with high-level, structured tools for website testing and auditing, reducing the need for manual browser control and enabling reliable, reproducible QA workflows.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Playwright
Automated review identified **Playwright** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Chromium
Automated review identified **Chromium** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pillow (for screenshot diffing)
Automated review identified **Pillow (for screenshot diffing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI (implicit in MCP server setup)
Automated review identified **FastAPI (implicit in MCP server setup)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
