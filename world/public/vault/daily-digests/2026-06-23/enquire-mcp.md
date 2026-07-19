---
title: oomkapwn/enquire-mcp
category: world/public/vault/daily-digests/2026-06-23
tech_stack:
- TypeScript
- Node.js
- MCP (Model Context Protocol)
- BM25
- HNSW
- BGE reranker
- TF-IDF
- RRF (Reciprocal Rank Fusion)
- int8 quantization
- Tesseract.js (OCR)
- Louvain modularity (GraphRAG-light)
- SLSA L2 (build provenance)
quality_score: 10
rag_relevance: 10
tags:
- Obsidian integration
- long-term memory
- hybrid retrieval
- MCP server
- agentic RAG
source: https://github.com/oomkapwn/enquire-mcp
discovered_at: '2026-06-23T13:50:17Z'
evaluated_by: mistral-small-latest
---

## Summary
enquire-mcp is an MCP-native server that exposes a local Obsidian markdown vault as persistent, searchable memory for AI agents like Claude, Cursor, and ChatGPT. It provides hybrid retrieval with BM25, ML embeddings, BGE reranker, and HNSW indexing, enabling vendor-neutral long-term memory with zero cloud calls during operation.

## Key Features
- Hybrid retrieval combining BM25, ML embeddings, and BGE reranker with RRF fusion for high-precision search
- Persistent HNSW vector index with int8 quantization for sub-10ms top-K retrieval and 4x smaller embeddings
- Agentic RAG capabilities including HyDE and sub-question decomposition for improved query handling
- GraphRAG-light for wikilink community detection and retrieval signal boosting
- PDF support with OCR for scanned documents and hybrid search integration with page citations

## Why It Matters for RAG Builders
It provides vendor-neutral, persistent long-term memory for AI agents by leveraging existing Obsidian vaults with advanced retrieval, ensuring knowledge remains accessible and auditable across sessions and models.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25
Automated review identified **BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HNSW
Automated review identified **HNSW** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BGE reranker
Automated review identified **BGE reranker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TF-IDF
Automated review identified **TF-IDF** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### RRF (Reciprocal Rank Fusion)
Automated review identified **RRF (Reciprocal Rank Fusion)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### int8 quantization
Automated review identified **int8 quantization** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tesseract.js (OCR)
Automated review identified **Tesseract.js (OCR)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Louvain modularity (GraphRAG-light)
Automated review identified **Louvain modularity (GraphRAG-light)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SLSA L2 (build provenance)
Automated review identified **SLSA L2 (build provenance)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
