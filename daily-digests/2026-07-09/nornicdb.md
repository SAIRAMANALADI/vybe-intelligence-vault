---
title: orneryd/NornicDB
category: daily-digests/2026-07-09
tech_stack:
- Go
- Neo4j (Bolt/Cypher compatibility)
- Qdrant (gRPC compatibility)
- HNSW (Hierarchical Navigable Small World) for vector search
- MVCC (Multi-Version Concurrency Control)
- CUDA
- Metal
- Vulkan
- llama.cpp (for embeddings)
- Docker
- GraphQL
- gRPC
- REST
quality_score: 9
rag_relevance: 10
tags:
- Graph Database
- Vector Search
- Temporal MVCC
- Hybrid Retrieval
- AI Memory
source: https://github.com/orneryd/NornicDB
discovered_at: '2026-07-09T17:18:53Z'
evaluated_by: mistral-small-latest
---

## Summary
NornicDB is a high-performance, Neo4j-compatible graph database that integrates vector search, temporal MVCC (Multi-Version Concurrency Control), and hybrid retrieval capabilities into a single system. It is designed for AI-native workloads like Graph-RAG, agent memory, and canonical knowledge systems, offering hardware acceleration (CUDA, Metal, Vulkan) and protocol flexibility (Bolt, Cypher, REST, GraphQL, gRPC).

## Key Features
- Neo4j-compatible via Bolt and Cypher for seamless integration with existing tools and drivers
- Hybrid retrieval combining vector search with graph traversal in a single engine for efficient Graph-RAG workflows
- Temporal MVCC support for historical reads, audit trails, and conflict-free concurrent transactions
- Hardware acceleration (CUDA, Metal, Vulkan) for high-throughput graph and semantic workloads
- Protocol flexibility with REST, GraphQL, Bolt/Cypher, and Qdrant-compatible gRPC for diverse client needs

## Why It Matters for RAG Builders
NornicDB consolidates graph, vector, and temporal data into a single system, eliminating the need for multiple databases in RAG pipelines and enabling efficient, hybrid retrieval for AI applications.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Neo4j (Bolt/Cypher compatibility)
Automated review identified **Neo4j (Bolt/Cypher compatibility)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Qdrant (gRPC compatibility)
Automated review identified **Qdrant (gRPC compatibility)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HNSW (Hierarchical Navigable Small World) for vector search
Automated review identified **HNSW (Hierarchical Navigable Small World) for vector search** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MVCC (Multi-Version Concurrency Control)
Automated review identified **MVCC (Multi-Version Concurrency Control)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CUDA
Automated review identified **CUDA** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Metal
Automated review identified **Metal** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vulkan
Automated review identified **Vulkan** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### llama.cpp (for embeddings)
Automated review identified **llama.cpp (for embeddings)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GraphQL
Automated review identified **GraphQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### gRPC
Automated review identified **gRPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST
Automated review identified **REST** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
