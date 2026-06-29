---
title: "orneryd/NornicDB"
category: "Vector DB"
tech_stack: ["Go", "Neo4j (Bolt/Cypher)", "Qdrant (gRPC)", "HNSW (vector indexing)", "CUDA/Metal/Vulkan (GPU acceleration)", "MVCC (temporal data)", "REST/GraphQL/gRPC APIs", "llama.cpp (embedding models)"]
quality_score: 9
rag_relevance: 10
tags: ["Graph-RAG", "Hybrid retrieval", "Temporal MVCC", "Hardware acceleration", "Neo4j-compatible"]
source: "https://github.com/orneryd/NornicDB"
discovered_at: "2026-06-29T19:04:01Z"
evaluated_by: "mistral-small-latest"
---

## Summary
NornicDB is a hybrid graph and vector database with temporal MVCC support, designed for AI-native workloads like Graph-RAG, agent memory, and canonical truth stores. It combines Neo4j-compatible Cypher/Bolt interfaces with vector search, hardware acceleration, and historical data retrieval in a single system.

## Key Features
- Neo4j-compatible Cypher/Bolt interfaces for seamless integration with existing tools
- Hybrid graph + vector retrieval with sub-millisecond HNSW search performance
- Temporal MVCC support for historical reads, audit trails, and conflict detection
- Multi-architecture GPU acceleration (CUDA, Metal, Vulkan) for high-throughput workloads
- Managed embeddings, policy-based memory decay, and canonical graph ledger modeling

## Why It Matters for RAG Builders
NornicDB unifies graph traversal, vector search, and temporal data in one system, eliminating the need for multiple databases in RAG pipelines and enabling faster, more auditable AI applications.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Neo4j (Bolt/Cypher)
Automated review identified **Neo4j (Bolt/Cypher)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Qdrant (gRPC)
Automated review identified **Qdrant (gRPC)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HNSW (vector indexing)
Automated review identified **HNSW (vector indexing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CUDA/Metal/Vulkan (GPU acceleration)
Automated review identified **CUDA/Metal/Vulkan (GPU acceleration)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MVCC (temporal data)
Automated review identified **MVCC (temporal data)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST/GraphQL/gRPC APIs
Automated review identified **REST/GraphQL/gRPC APIs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### llama.cpp (embedding models)
Automated review identified **llama.cpp (embedding models)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
