---
title: aksika/abmind
category: daily-digests/2026-06-22
tech_stack:
- TypeScript
- SQLite
- FTS5 (Full-Text Search)
- Trigram Fuzzy Matching
- Embeddings (Ollama/OpenAI-compatible)
- Node.js 22+
- AES-256-GCM Encryption
- LLM Integration (for sleep maintenance)
- CLI Tools
- MCP Server
quality_score: 9
rag_relevance: 9
tags:
- persistent memory
- AI agents
- multilingual recall
- SQLite
- memory consolidation
source: https://github.com/aksika/abmind
discovered_at: '2026-06-22T23:15:47Z'
evaluated_by: mistral-small-latest
---

## Summary
abmind is a persistent memory system for AI agents that stores, recalls, consolidates, and manages memories using a SQLite-backed 4-layer recall system. It supports multilingual agents with advanced features like trigram fuzzy search, credential vault encryption, and nightly sleep maintenance for memory curation.

## Key Features
- 4-layer recall system (FTS5, trigram, embeddings, consolidated summaries) for high-precision memory retrieval
- Nightly sleep maintenance for memory curation, consolidation, and pruning (10-14 LLM calls per cycle)
- Credential vault with AES-256-GCM encryption for secure storage of secrets
- Multi-resolution context assembly (recent, session, long-term) for efficient token usage
- Injection detection with 14 categories to prevent malicious input

## Why It Matters for RAG Builders
abmind provides a robust, multilingual, and secure persistent memory system essential for building AI agents that require long-term context retention, efficient recall, and automated memory curation.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5 (Full-Text Search)
Automated review identified **FTS5 (Full-Text Search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Trigram Fuzzy Matching
Automated review identified **Trigram Fuzzy Matching** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Embeddings (Ollama/OpenAI-compatible)
Automated review identified **Embeddings (Ollama/OpenAI-compatible)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js 22+
Automated review identified **Node.js 22+** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AES-256-GCM Encryption
Automated review identified **AES-256-GCM Encryption** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM Integration (for sleep maintenance)
Automated review identified **LLM Integration (for sleep maintenance)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI Tools
Automated review identified **CLI Tools** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP Server
Automated review identified **MCP Server** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
