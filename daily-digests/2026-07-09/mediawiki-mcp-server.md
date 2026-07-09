---
title: "ProfessionalWiki/MediaWiki-MCP-Server"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "Model Context Protocol (MCP)", "MediaWiki API", "OAuth 2.1", "Docker", "Prometheus (for metrics)"]
quality_score: 9
rag_relevance: 9
tags: ["MCP server", "MediaWiki integration", "LLM tooling", "knowledge graph", "structured data"]
source: "https://github.com/ProfessionalWiki/MediaWiki-MCP-Server"
discovered_at: "2026-07-09T14:45:17Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An MCP (Model Context Protocol) server that enables LLMs to interact with any MediaWiki wiki, providing read/write access, wiki management, OAuth authentication, and extension-specific tools for structured data and knowledge graphs.

## Key Features
- Comprehensive read/write access to MediaWiki wikis via MCP tools, including page operations, file handling, and category management
- Support for multiple authentication methods (OAuth, bearer tokens, hosted proxy) for secure interactions
- Extension packs for NeoWiki, Semantic MediaWiki, Cargo, and Bucket, enabling structured data queries and knowledge graph interactions
- Wiki management tools for dynamic addition/removal of wikis and resource discovery
- Configurable environment variables for security, performance, and deployment flexibility

## Why It Matters for RAG Builders
It bridges LLMs with MediaWiki wikis, enabling AI agents to fetch, analyze, and update structured knowledge programmatically, which is critical for RAG systems relying on wiki-based data sources.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MediaWiki API
Automated review identified **MediaWiki API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth 2.1
Automated review identified **OAuth 2.1** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Prometheus (for metrics)
Automated review identified **Prometheus (for metrics)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
