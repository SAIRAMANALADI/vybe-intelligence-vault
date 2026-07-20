---
title: LvcidPsyche/auto-browser
category: daily-digests/2026-07-09
tech_stack:
- Python
- FastAPI
- Playwright
- Docker
- MCP (Model Context Protocol)
- noVNC
- Xvfb
- Redis
- LangChain
- LangGraph
- CrewAI
- PyPI
- CI/CD (GitHub Actions)
quality_score: 9
rag_relevance: 9
tags:
- MCP server
- browser automation
- human-in-the-loop
- auth profiles
- audit trails
source: https://github.com/LvcidPsyche/auto-browser
discovered_at: '2026-07-09T17:17:42Z'
evaluated_by: mistral-small-latest
---

## Summary
Auto Browser is an MCP-native browser control plane that provides AI agents and operators with a shared Playwright-based browser, enabling human-in-the-loop workflows, reusable auth profiles, audit trails, and local-first deployment for secure and governed browser automation.

## Key Features
- MCP-native browser control plane with HTTP and stdio transport for seamless AI agent integration
- Human takeover via noVNC for manual intervention during brittle workflows
- Reusable named auth profiles to avoid repeated logins and enable session persistence
- Built-in safety rails including approvals, operator identity checks, PII scrubbing, and Witness receipts for auditability
- Local-first deployment with Docker Compose, Codespaces support, and optional per-session isolation for security

## Why It Matters for RAG Builders
Auto Browser enables AI agents to interact with real browsers securely and reliably, bridging the gap between automated workflows and human oversight while ensuring compliance and auditability for RAG and agentic systems.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Playwright
Automated review identified **Playwright** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### noVNC
Automated review identified **noVNC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Xvfb
Automated review identified **Xvfb** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Redis
Automated review identified **Redis** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LangChain
Automated review identified **LangChain** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LangGraph
Automated review identified **LangGraph** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CrewAI
Automated review identified **CrewAI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyPI
Automated review identified **PyPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CI/CD (GitHub Actions)
Automated review identified **CI/CD (GitHub Actions)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
