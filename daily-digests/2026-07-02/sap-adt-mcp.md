---
title: "yzonur/sap-adt-mcp"
category: "Tooling"
tech_stack: ["Node.js", "TypeScript", "ADT (ABAP Development Tools) API", "HTTP/HTTPS", "MCP (Model Context Protocol)", "JSON", "XML parsing", "CSRF token handling"]
quality_score: 9
rag_relevance: 9
tags: ["SAP integration", "ABAP development", "AI tooling", "MCP server", "code analysis"]
source: "https://github.com/yzonur/sap-adt-mcp"
discovered_at: "2026-07-02T20:59:50Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server that enables AI assistants like Claude to interact with SAP systems via the ABAP Development Tools (ADT) HTTP API. It provides 27+ tools for reading, editing, testing, and diffing ABAP code, CDS views, and SAP objects across multiple landscapes without requiring add-ons on the SAP stack.

## Key Features
- 27+ high-level tools for SAP ADT operations (CRUD, quality checks, lifecycle management, discovery, CDS analysis, cross-system diffs, and transports)
- Multi-system support with read-only mode for safe operations across DEV/QAS/PRD landscapes
- Built-in audit logging for all write operations to track changes made by AI agents
- Automatic error reporting (redacted) to improve tool reliability without compromising security
- Local read-only control panel for manual exploration of SAP systems via a browser

## Why It Matters for RAG Builders
It bridges AI assistants to SAP systems, enabling autonomous agents to perform real ABAP development tasks like editing, testing, and diffing code across landscapes without requiring SAP add-ons or exposing credentials.

## Tech Stack Deep Dive
### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ADT (ABAP Development Tools) API
Automated review identified **ADT (ABAP Development Tools) API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/HTTPS
Automated review identified **HTTP/HTTPS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### XML parsing
Automated review identified **XML parsing** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CSRF token handling
Automated review identified **CSRF token handling** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
