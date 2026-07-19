---
title: shaylaisotonic44/pcloud-mcp
category: daily-digests/2026-06-24
tech_stack:
- Go
- Model Context Protocol (MCP)
- OAuth
- Windows
quality_score: 7
rag_relevance: 6
tags:
- cloud integration
- file access control
- AI tooling
- secure storage
- MCP server
source: https://github.com/shaylaisotonic44/pcloud-mcp
discovered_at: '2026-06-24T22:15:10Z'
evaluated_by: mistral-small-latest
---

## Summary
pcloud-mcp is a Model Context Protocol (MCP) server written in Go that securely connects pCloud storage to AI tools like Claude. It enables AI models to read, navigate, and manage cloud files while enforcing strict access controls to prevent unauthorized access.

## Key Features
- Secure OAuth-based authentication for pCloud access without exposing passwords
- Path-traversal protection to restrict file access to pCloud drive only
- Standalone executable requiring no additional installations or dependencies
- Seamless integration with AI tools like Claude via MCP configuration
- Local execution ensuring data privacy with no external server involvement

## Why It Matters for RAG Builders
It enables secure, direct access to pCloud storage for AI agents, bridging the gap between cloud storage and AI-driven workflows while prioritizing data security and access control.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth
Automated review identified **OAuth** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Windows
Automated review identified **Windows** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
