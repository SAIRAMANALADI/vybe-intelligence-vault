---
title: "robotrocketscience/aelfrice"
category: "Tooling"
tech_stack: ["Python", "SQLite", "BM25", "Beta-Bernoulli posterior", "MCP (Model Context Protocol)", "Git", "Full-text search (FTS5)", "Graph traversal (BFS)"]
quality_score: 9
rag_relevance: 8
tags: ["memory system", "local-first", "agent context", "rule injection", "offline RAG"]
source: "https://github.com/robotrocketscience/aelfrice"
discovered_at: "2026-06-29T22:53:19Z"
evaluated_by: "mistral-small-latest"
---

## Summary
aelfrice is a local-first memory system for AI agents that prevents forgetting by embedding user-defined rules and contextual beliefs directly into prompts before the model processes them. It operates entirely offline with a SQLite backend, ensuring no cloud dependency or telemetry.

## Key Features
- Locks user-defined rules permanently into prompts to prevent AI forgetting
- Passive background capture of prompts, responses, and git commits for automatic memory growth
- Four-tier retrieval system (L0-L3) with BM25, entity indexing, and optional graph traversal
- Beta-Bernoulli posterior scoring for belief confidence and feedback-driven adjustments
- MCP-compatible slash commands (/aelf:wonder, /aelf:reason) for dynamic memory expansion and structured reasoning

## Why It Matters for RAG Builders
It ensures AI agents retain critical user-defined rules and context without relying on external vector stores or cloud services, making it essential for reliable local RAG deployments.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25
Automated review identified **BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Beta-Bernoulli posterior
Automated review identified **Beta-Bernoulli posterior** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Full-text search (FTS5)
Automated review identified **Full-text search (FTS5)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Graph traversal (BFS)
Automated review identified **Graph traversal (BFS)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
