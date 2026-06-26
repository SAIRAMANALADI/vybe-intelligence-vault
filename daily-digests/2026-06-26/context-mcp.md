---
title: "dodopayments/context-mcp"
category: "Orchestrator"
tech_stack: ["TypeScript", "Node.js", "Pinecone (Vector DB)", "OpenAI/Gemini/Cohere/Voyage AI/Ollama (Embeddings)", "Cloudflare Workers", "MDX/Markdown/OpenAPI/HTML Parsers"]
quality_score: 9
rag_relevance: 10
tags: ["MCP", "documentation indexing", "vector database", "self-hosted", "AI assistant integration"]
source: "https://github.com/dodopayments/context-mcp"
discovered_at: "2026-06-26T18:32:19Z"
evaluated_by: "mistral-small-latest"
---

## Summary
ContextMCP is a self-hosted MCP server that indexes documentation from various sources and serves it via the Model Context Protocol (MCP) and REST API. It enables AI assistants to query a searchable knowledge base built from your documentation.

## Key Features
- Supports multiple documentation parsers (MDX, Markdown, OpenAPI, HTML, GitLab)
- Integrates with multiple embedding providers (OpenAI, Gemini, Cohere, Voyage AI, Ollama)
- Uses Pinecone for vector storage and retrieval
- Provides MCP and REST API endpoints for querying indexed content
- Offers CLI tooling for easy project scaffolding and deployment

## Why It Matters for RAG Builders
ContextMCP enables AI assistants to dynamically query and retrieve relevant documentation context via MCP, enhancing RAG systems with up-to-date, self-hosted knowledge bases.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pinecone (Vector DB)
Automated review identified **Pinecone (Vector DB)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI/Gemini/Cohere/Voyage AI/Ollama (Embeddings)
Automated review identified **OpenAI/Gemini/Cohere/Voyage AI/Ollama (Embeddings)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloudflare Workers
Automated review identified **Cloudflare Workers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MDX/Markdown/OpenAPI/HTML Parsers
Automated review identified **MDX/Markdown/OpenAPI/HTML Parsers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
