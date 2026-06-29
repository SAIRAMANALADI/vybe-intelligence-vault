---
title: "Perseus-Computing-LLC/perseus"
category: "Orchestrator"
tech_stack: ["Python", "Model Context Protocol (MCP)", "SQLite", "FTS5 (Full-Text Search)", "Rust (Mimir backend)", "Docker", "GitLab API", "Google Cloud", "Stripe API"]
quality_score: 9
rag_relevance: 8
tags: ["Live context resolution", "MCP server", "Persistent memory", "AI assistant integration", "Zero-config RAG"]
source: "https://github.com/Perseus-Computing-LLC/perseus"
discovered_at: "2026-06-29T02:56:57Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Perseus is a live context engine and MCP server that resolves dynamic workspace state (e.g., services, tests, logs) into verified markdown context for AI assistants at render time, eliminating cold-start orientation. It integrates with persistent memory backends like Mimir for semantic recall and supports multiple assistants via MCP.

## Key Features
- Real-time context resolution via MCP tools (e.g., `@query`, `@services`, `@memory`) that fetch live workspace state at render time
- Integration with Mimir for persistent, offline-capable semantic memory with BM25 and hybrid embeddings
- Multi-assistant support (Claude, Cursor, Codex, Hermes, Rovo Dev) with auto-detection and tailored output
- Security-conscious design with opt-in shell execution and fail-safe MCP connectors
- Hackathon-proven components (e.g., PR Pilot, Blast Radius) demonstrating scalability and real-world applicability

## Why It Matters for RAG Builders
Perseus eliminates stale context drag in RAG pipelines by dynamically resolving live workspace state into verified markdown, ensuring AI assistants always operate on current, accurate data without manual updates or stale cache issues.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5 (Full-Text Search)
Automated review identified **FTS5 (Full-Text Search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Rust (Mimir backend)
Automated review identified **Rust (Mimir backend)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitLab API
Automated review identified **GitLab API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Google Cloud
Automated review identified **Google Cloud** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Stripe API
Automated review identified **Stripe API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
