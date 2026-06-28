---
title: "strathon/strathon"
category: "Tooling"
tech_stack: ["Python", "Common Expression Language (CEL)", "PostgreSQL", "Next.js", "Docker", "LangGraph", "LangChain", "Pydantic AI", "MITMProxy", "FastAPI"]
quality_score: 9
rag_relevance: 8
tags: ["AI security", "agent firewall", "policy enforcement", "CEL rules", "real-time blocking"]
source: "https://github.com/strathon/strathon"
discovered_at: "2026-06-28T12:16:05Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Strathon is an open-source AI agent firewall that enforces security policies at the tool-call boundary using CEL (Common Expression Language). It blocks dangerous tool calls in real-time, integrates with multiple frameworks, and provides a dashboard for policy management and monitoring.

## Key Features
- In-process CEL policy enforcement at the tool-call boundary with sub-millisecond latency
- Multi-layer enforcement (SDK, MCP gateway, egress proxy) for comprehensive coverage
- Seven enforcement actions: block, steer, throttle, log, alert, require_approval, allow
- OWASP-mapped policy templates for quick setup and compliance
- Human approval workflows with multi-party (N-of-M) requirements and automatic expiry

## Why It Matters for RAG Builders
Strathon provides critical real-time security enforcement for AI agents, preventing dangerous tool calls before execution, which is essential for safe and compliant AI deployments.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Common Expression Language (CEL)
Automated review identified **Common Expression Language (CEL)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Next.js
Automated review identified **Next.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LangGraph
Automated review identified **LangGraph** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LangChain
Automated review identified **LangChain** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic AI
Automated review identified **Pydantic AI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MITMProxy
Automated review identified **MITMProxy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
