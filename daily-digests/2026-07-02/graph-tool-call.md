---
title: "SonAIengine/graph-tool-call"
category: "Tooling"
tech_stack: ["Python", "BM25", "Graph Traversal", "Embedding Models", "MCP (Model Context Protocol)", "OpenAPI", "LangChain", "Reciprocal Rank Fusion (RRF)"]
quality_score: 9
rag_relevance: 10
tags: ["tool retrieval", "workflow planning", "graph-based search", "MCP integration", "token optimization"]
source: "https://github.com/SonAIengine/graph-tool-call"
discovered_at: "2026-07-02T02:46:22Z"
evaluated_by: "mistral-small-latest"
---

## Summary
graph-tool-call is a tool retrieval system that models tool relationships as a graph to enable multi-step workflow retrieval for LLM agents. It addresses context overflow and workflow fragmentation by combining BM25, graph traversal, embeddings, and MCP annotations to retrieve precise tool chains while reducing token usage by up to 91%.

## Key Features
- Graph-based tool relationship modeling (PRECEDES, REQUIRES, COMPLEMENTARY)
- Hybrid retrieval combining BM25, graph traversal, embeddings, and MCP annotations
- Multi-step workflow planning and execution with `plan_workflow()`
- Zero-dependency core with modular extras for embeddings, OpenAPI, and MCP
- Integration with LangChain, MCP servers, and SDK middleware for seamless adoption

## Why It Matters for RAG Builders
It enables LLM agents to retrieve precise multi-step tool workflows instead of single tools, drastically reducing token usage and improving accuracy in large-scale tool environments.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25
Automated review identified **BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Graph Traversal
Automated review identified **Graph Traversal** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Embedding Models
Automated review identified **Embedding Models** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAPI
Automated review identified **OpenAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LangChain
Automated review identified **LangChain** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Reciprocal Rank Fusion (RRF)
Automated review identified **Reciprocal Rank Fusion (RRF)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
