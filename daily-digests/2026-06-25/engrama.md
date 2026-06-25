---
title: "scops/engrama"
category: "Vector DB"
tech_stack: ["Python", "SQLite", "Neo4j", "Graph Database", "Vector Search (sqlite-vec)", "Docker (optional)"]
quality_score: 9
rag_relevance: 8
tags: ["memory graph", "knowledge graph", "persistent memory", "multi-tenant", "agent framework"]
source: "https://github.com/scops/engrama"
discovered_at: "2026-06-25T19:56:48Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Engrama is a graph-based long-term memory framework for AI agents that provides persistent, structured memory using a knowledge graph. It supports both SQLite (zero external services) and Neo4j backends, enabling agents to traverse relationships for contextual reasoning.

## Key Features
- Structured memory with entities, observations, and relationships for contextual reasoning
- Dual backend support: SQLite (zero-dep) and Neo4j (scalable production)
- Multi-tenant identity scoping with fail-closed security (GDPR-compliant right-to-erasure)
- Native relationship queries and graph traversal for targeted context retrieval
- Optional vector search integration for semantic queries

## Why It Matters for RAG Builders
Engrama enables AI agents to maintain structured, persistent memory with native relationship queries, reducing reliance on flat vector databases and improving contextual reasoning for RAG systems.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Neo4j
Automated review identified **Neo4j** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Graph Database
Automated review identified **Graph Database** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vector Search (sqlite-vec)
Automated review identified **Vector Search (sqlite-vec)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker (optional)
Automated review identified **Docker (optional)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
