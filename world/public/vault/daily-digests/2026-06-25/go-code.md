---
title: anatolykoptev/go-code
category: daily-digests/2026-06-25
tech_stack:
- Go
- tree-sitter
- Apache AGE
- PostgreSQL
- Redis
- LLM APIs
- GitHub API
- SearXNG
- Docker
- tree-sitter grammars
quality_score: 9
rag_relevance: 9
tags:
- code analysis
- AST parsing
- call graph
- semantic search
- MCP server
source: https://github.com/anatolykoptev/go-code
discovered_at: '2026-06-25T17:12:04Z'
evaluated_by: mistral-small-latest
---

## Summary
A Model Context Protocol (MCP) server that provides advanced code intelligence for AI agents by leveraging tree-sitter AST parsing, call chain tracing, semantic search, and knowledge graph queries across 16 programming languages. It enables deep repository analysis, structural comparisons, and runtime binary drift detection for debugging and code review.

## Key Features
- Multi-language support (16 languages) with tree-sitter AST parsing for deep code analysis
- 30+ MCP tools including call chain tracing, code comparison, dead code detection, and runtime binary drift analysis
- Hybrid semantic search combining BM25F, pgvector, and knowledge graph expansion for concept-based retrieval
- Knowledge graph integration with Apache AGE for natural language-to-Cypher query generation and persistent learnings
- Runtime version awareness with Docker/SSH probing to detect binary drift between source and deployed environments

## Why It Matters for RAG Builders
It provides essential tooling for AI agents to perform deep code analysis, semantic search, and runtime debugging, bridging the gap between source code and deployed systems for more accurate and context-aware AI-driven development workflows.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### tree-sitter
Automated review identified **tree-sitter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Apache AGE
Automated review identified **Apache AGE** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Redis
Automated review identified **Redis** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM APIs
Automated review identified **LLM APIs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub API
Automated review identified **GitHub API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SearXNG
Automated review identified **SearXNG** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### tree-sitter grammars
Automated review identified **tree-sitter grammars** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
