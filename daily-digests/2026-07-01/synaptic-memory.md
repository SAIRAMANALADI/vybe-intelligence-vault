---
title: "PlateerLab/synaptic-memory"
category: "Orchestrator"
tech_stack: ["Python", "SQLite", "PostgreSQL", "MySQL", "MCP (Model Context Protocol)", "Kiwi (Korean NLP)", "Usearch (HNSW indexing)", "LangChain", "CDC (Change Data Capture)", "BM25", "PPR (Personalized PageRank)"]
quality_score: 9
rag_relevance: 10
tags: ["knowledge graph", "MCP server", "CDC synchronization", "hybrid retrieval", "Korean NLP"]
source: "https://github.com/PlateerLab/synaptic-memory"
discovered_at: "2026-07-01T15:38:11Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Synaptic Memory is a knowledge graph and MCP tool server designed for LLM agents, enabling hybrid retrieval, live database synchronization via CDC, and Korean full-text search without requiring API calls at indexing time. It supports structured and unstructured data ingestion from various sources.

## Key Features
- Zero LLM calls at indexing time, reducing costs and latency
- Live database synchronization via CDC for incremental updates
- Hybrid retrieval combining BM25, vector search, and PPR for improved accuracy
- 42 MCP tools for LLM agents to explore and interact with the graph dynamically
- Support for structured (SQL databases) and unstructured (PDF, DOCX, etc.) data ingestion

## Why It Matters for RAG Builders
Synaptic Memory enables cost-effective, real-time knowledge graph construction and retrieval for RAG systems without LLM overhead at indexing, making it essential for scalable and dynamic AI applications.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MySQL
Automated review identified **MySQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Kiwi (Korean NLP)
Automated review identified **Kiwi (Korean NLP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Usearch (HNSW indexing)
Automated review identified **Usearch (HNSW indexing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LangChain
Automated review identified **LangChain** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CDC (Change Data Capture)
Automated review identified **CDC (Change Data Capture)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25
Automated review identified **BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PPR (Personalized PageRank)
Automated review identified **PPR (Personalized PageRank)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
