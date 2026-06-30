---
title: "Marcelle-Labs/never-ask-twice"
category: "Agent Framework"
tech_stack: ["TypeScript", "Node.js", "PostgreSQL", "pgvector", "Qwen Cloud", "Hono", "Drizzle ORM", "MCP (Model Context Protocol)", "Docker", "Alibaba Function Compute"]
quality_score: 9
rag_relevance: 8
tags: ["memory management", "support agent", "enterprise AI", "context retention", "deterministic evaluation"]
source: "https://github.com/Marcelle-Labs/never-ask-twice"
discovered_at: "2026-06-30T22:14:00Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Never Ask Twice is an enterprise-grade support memory agent that remembers customer context across sessions using structured memory tiers (working, episodic, semantic) with forgetting policies and provenance tracking. It provides a deterministic evaluation harness to measure memory-on vs. memory-off performance.

## Key Features
- Structured memory tiers (working, episodic, semantic) with provenance tracking
- Deterministic evaluation harness for memory-on vs. memory-off performance comparison
- Forgetting policies (TTL, supersession, budgeted recall) for stale data management
- MCP stdio tools for agent interoperability (4 tools exposed)
- Local-safe mode and synthetic data for clean-room testing

## Why It Matters for RAG Builders
It enables RAG builders to implement robust, auditable memory systems that retain critical context across sessions while minimizing hallucinations and redundant queries.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pgvector
Automated review identified **pgvector** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Qwen Cloud
Automated review identified **Qwen Cloud** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Hono
Automated review identified **Hono** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Drizzle ORM
Automated review identified **Drizzle ORM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Alibaba Function Compute
Automated review identified **Alibaba Function Compute** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
