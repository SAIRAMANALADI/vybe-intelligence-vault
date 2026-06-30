---
title: "cyanheads/eur-lex-mcp-server"
category: "Tooling"
tech_stack: ["TypeScript", "Bun", "MCP SDK", "SPARQL", "REST API", "Docker", "Zod", "Node.js"]
quality_score: 9
rag_relevance: 8
tags: ["EU legislation", "CJEU case law", "EuroVoc thesaurus", "MCP server", "RAG integration"]
source: "https://github.com/cyanheads/eur-lex-mcp-server"
discovered_at: "2026-06-30T13:11:45Z"
evaluated_by: "mistral-small-latest"
---

## Summary
The eur-lex-mcp-server is an MCP (Model Context Protocol) server that enables AI agents to search, retrieve, and traverse EU legislation, CJEU case law, treaties, and EuroVoc concepts. It provides structured access to the CELLAR corpus via tools, resources, and prompts, supporting both STDIO and Streamable HTTP transports.

## Key Features
- Search and retrieve EU legal documents (legislation, treaties, case law) via 7 specialized tools
- Traverse the CELLAR relationship graph for amendments, consolidations, and citations
- Resolve EuroVoc concepts for semantic filtering of legal documents
- Supports STDIO and Streamable HTTP transports for MCP clients
- Built-in error handling, structured logging, and agent-friendly output with typed responses

## Why It Matters for RAG Builders
This server provides critical structured access to EU legal data, enabling RAG systems to retrieve accurate, up-to-date, and semantically rich legal documents for AI-powered legal research and compliance applications.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun
Automated review identified **Bun** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP SDK
Automated review identified **MCP SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SPARQL
Automated review identified **SPARQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zod
Automated review identified **Zod** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
